import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { newsEventsData } from '../data/newsEventsData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const NewsSection = () => {
  // Show all items (news + events) sorted by date
  const allItems = newsEventsData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 9); // max 9 items = 3 pages of 3

  const totalPages = Math.ceil(allItems.length / 3);
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
    const timer = setInterval(nextPage, 5000);
    return () => clearInterval(timer);
  }, [nextPage]);

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header-flex">
          <h2 className="section-title">Latest <span className="highlight-red">News</span></h2>
          <div className="carousel-controls">
            <button onClick={prevPage} className="control-btn" aria-label="Previous"><ChevronLeft size={20} /></button>
            <button onClick={nextPage} className="control-btn" aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="title-underline"></div>

        {/* Carousel viewport — clips overflow */}
        <div className="news-carousel-viewport">
          {/* Track — slides left/right via transform */}
          <div
            className="news-carousel-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {/* Render pages as groups of 3 */}
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div className="news-carousel-page" key={pageIdx}>
                {allItems.slice(pageIdx * 3, pageIdx * 3 + 3).map((item) => (
                  <Link
                    key={item.id}
                    to={item.redirectUrl || `/news/${item.id}`}
                    className="news-card-link"
                  >
                    <div className="news-card">
                      <div className="news-img-wrapper">
                        <img src={item.img} alt={item.title} className="news-img" loading="lazy" />
                        <span className={`news-badge ${item.type?.toLowerCase().replace(' ', '-')}`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="news-content">
                        <span className="news-date">
                          {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
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

        {/* Dots */}
        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${page === i ? 'active' : ''}`}
              onClick={() => goToPage(i)}
            />
          ))}
        </div>

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

        /* ── CAROUSEL CORE ──────────────────── */
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

        /* ── CARD ────────────────────────────── */
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

        /* ── DOTS ────────────────────────────── */
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
