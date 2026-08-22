import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { newsEventsData } from "../data/newsEventsData";
import { usePublishedPosts } from "../hooks/useContent";
import { ChevronRight, ChevronLeft } from "lucide-react";

const NewsSection = () => {
  const { data: dbPosts, loading, error } = usePublishedPosts({ limit: 9 });

  let allItems = [];
  if (error || dbPosts === null) {
    if (error) {
      console.warn("[AASU Web NewsSection] Using static fallback data due to Supabase error:", error.message);
    }
    allItems = [...newsEventsData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 9);
  } else {
    allItems = dbPosts;
  }

  const totalPages = Math.max(1, Math.ceil(allItems.length / 3));
  const [page, setPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPage = useCallback((nextPage) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPage(nextPage);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const nextPage = useCallback(() => {
    goToPage((page + 1) % totalPages);
  }, [page, totalPages, goToPage]);

  const prevPage = () => {
    goToPage((page - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (allItems.length <= 3) return;
    const timer = setInterval(nextPage, 5000);
    return () => clearInterval(timer);
  }, [nextPage, allItems.length]);

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header-flex">
          <h2 className="section-title">Latest <span className="highlight-red">News</span></h2>
          {totalPages > 1 && (
            <div className="carousel-controls">
              <button onClick={prevPage} className="control-btn" aria-label="Previous"><ChevronLeft size={20} /></button>
              <button onClick={nextPage} className="control-btn" aria-label="Next"><ChevronRight size={20} /></button>
            </div>
          )}
        </div>
        <div className="title-underline"></div>

        {loading ? (
          <div className="news-carousel-page skeleton-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="news-card skeleton-card">
                <div className="skeleton-img"></div>
                <div className="skeleton-text">
                  <div className="skeleton-line short"></div>
                  <div className="skeleton-line title"></div>
                  <div className="skeleton-line"></div>
                </div>
              </div>
            ))}
          </div>
        ) : allItems.length === 0 ? (
          <div className="empty-news-state">
            <p>No published news articles available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="news-carousel-viewport">
              <div
                className="news-carousel-track"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {Array.from({ length: totalPages }).map((_, pageIdx) => (
                  <div className="news-carousel-page" key={pageIdx}>
                    {allItems.slice(pageIdx * 3, pageIdx * 3 + 3).map((item) => (
                      <Link
                        key={item.id || item.slug}
                        to={item.redirectUrl || `/news/${item.slug || item.id}`}
                        className="news-card-link"
                      >
                        <div className="news-card">
                          <div className="news-img-wrapper">
                            <img src={item.img} alt={item.featured_image_alt || item.title} className="news-img" loading="lazy" />
                            <span className={`news-badge ${(item.type || "news").toLowerCase().replace(" ", "-")}`}>
                              {item.type || "NEWS"}
                            </span>
                          </div>
                          <div className="news-content">
                            <span className="news-date">
                              {item.date}
                            </span>
                            <h4 className="news-title">{item.title}</h4>
                            <p className="news-excerpt">{item.excerpt}</p>
                            <div className="news-read-more-link">
                              Read More <ChevronRight size={14} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {totalPages > 1 && (
              <div className="carousel-dots">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${page === i ? "active" : ""}`}
                    onClick={() => goToPage(i)}
                  />
                ))}
              </div>
            )}
          </>
        )}

        <div className="text-center mt-4">
          <Link to="/news" className="btn-see-all">Explore All News</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .news-section {
          padding: 80px 0;
          background: #fff;
        }

        .text-center { text-align: center; }
        .mt-4 { margin-top: 2rem; }

        .news-section .section-title {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 0;
        }

        .section-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1rem;
        }

        .carousel-controls {
          display: flex;
          gap: 1rem;
        }

        .control-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #ddd;
          background: white;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .control-btn:hover {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }

        .title-underline {
          width: 60px;
          height: 3px;
          background: var(--primary-red);
          margin-bottom: 3rem;
        }

        .news-carousel-viewport {
          overflow: hidden;
          width: 100%;
          margin-bottom: 2.5rem;
        }

        .news-carousel-track {
          display: flex;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .news-carousel-page {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          min-width: 100%;
          width: 100%;
          flex-shrink: 0;
          box-sizing: border-box;
          align-items: start;
        }

        .empty-news-state {
          text-align: center;
          padding: 3rem;
          background: #f8fafc;
          border-radius: 12px;
          color: #64748b;
          font-weight: 600;
        }

        .skeleton-card {
          height: 380px;
          background: #f1f5f9;
          animation: pulse 1.5s infinite ease-in-out;
        }

        .skeleton-img {
          height: 210px;
          background: #cbd5e1;
        }

        .skeleton-text {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .skeleton-line {
          height: 14px;
          background: #cbd5e1;
          border-radius: 4px;
        }

        .skeleton-line.short { width: 40%; }
        .skeleton-line.title { width: 85%; height: 20px; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .news-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          min-width: 0;
        }

        .news-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .news-card-link:hover .news-card {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .news-img-wrapper {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #e2e8f0;
          flex-shrink: 0;
        }

        .news-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .news-badge {
          position: absolute;
          bottom: 0;
          left: 1.5rem;
          background: var(--primary-red);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.35rem 0.9rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .news-badge.press-release { background: #8B0000; }
        .news-badge.readout { background: #4B0082; }
        .news-badge.news { background: #cb3631; }
        .news-badge.event { background: #228B22; }

        .news-content {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .news-date {
          font-size: 0.78rem;
          color: #aaa;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .news-title {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 700;
          color: #222;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .news-excerpt {
          font-size: 0.9rem;
          color: #777;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        .news-read-more-link {
          color: var(--primary-red);
          font-weight: 800;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: gap 0.2s ease;
        }

        .news-card-link:hover .news-read-more-link {
          gap: 0.7rem;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .carousel-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s;
        }

        .carousel-dots .dot.active {
          background: var(--primary-red);
          transform: scale(1.4);
        }

        .btn-see-all {
          padding: 0.8rem 2rem;
          background: transparent;
          color: var(--primary-red);
          border: 2px solid var(--primary-red);
          font-weight: 700;
          border-radius: 30px;
          text-transform: uppercase;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-see-all:hover {
          background: var(--primary-red);
          color: white;
        }

        @media (max-width: 900px) {
          .news-carousel-page {
            grid-template-columns: 1fr;
          }
          .news-carousel-page .news-card-link:not(:first-child) {
            display: none;
          }
        }
      `}} />
    </section>
  );
};

export default NewsSection;

