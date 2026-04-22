import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { newsEventsData, CONTENT_TYPES, isEventEnded } from '../data/newsEventsData';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const EventsSection = () => {
  const navigate = useNavigate();

  const allEvents = newsEventsData
    .filter(item => item.type === CONTENT_TYPES.EVENT)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 9); // max 9 = 3 pages of 3

  const totalPages = Math.ceil(allEvents.length / 3);
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
    const timer = setInterval(nextPage, 6000);
    return () => clearInterval(timer);
  }, [nextPage]);

  return (
    <section className="events-section">
      <div className="container">
        <div className="section-header-flex">
          <h2 className="section-title">Events &amp; <span className="text-red">Activities</span></h2>
          <div className="carousel-controls">
            <button onClick={prevPage} className="control-btn" aria-label="Previous"><ChevronLeft size={20} /></button>
            <button onClick={nextPage} className="control-btn" aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="title-underline"></div>

        {/* Carousel viewport */}
        <div className="ev-carousel-viewport">
          {/* Sliding track */}
          <div
            className="ev-carousel-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <div className="ev-carousel-page" key={pageIdx}>
                {allEvents.slice(pageIdx * 3, pageIdx * 3 + 3).map((ev) => {
                  const ended = isEventEnded(ev.date);
                  return (
                    <div
                      key={ev.id}
                      className={`event-card ${ended ? 'ended' : ''}`}
                      onClick={() => navigate(`/events/${ev.id}`)}
                      role="link"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && navigate(`/events/${ev.id}`)}
                    >
                      <div
                        className="event-bg"
                        style={{ backgroundImage: `url('${ev.img}')` }}
                      />
                      <div className="event-overlay" />
                      <div className="event-content">
                        <span className="event-badge">
                          {new Date(ev.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <h3 className="event-title-card">{ev.title}</h3>
                        {ended && <span className="event-ended-tag">EVENT ENDED</span>}
                        <div className="event-view-link">
                          Read More <ChevronRight size={14} />
                        </div>
                      </div>
                    </div>
                  );
                })}
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

        <div className="text-center mt-5">
          <Link to="/events" className="btn-see-all">Explore All Events</Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .events-section {
          padding: 20px 0 100px;
          background: #fff;
        }

        .events-section .section-title {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 0;
        }

        .text-red { color: var(--primary-red); }

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
        .ev-carousel-viewport {
          overflow: hidden;
          width: 100%;
          margin-bottom: 2.5rem;
        }

        .ev-carousel-track {
          display: flex;
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .ev-carousel-page {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          min-width: 100%;
          width: 100%;
          flex-shrink: 0;
          box-sizing: border-box;
          align-items: start;
        }

        /* ── EVENT CARD ──────────────────────── */
        .event-card {
          position: relative;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .event-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: transform 0.5s ease;
        }

        .event-card:hover .event-bg {
          transform: scale(1.05);
        }

        .event-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%);
        }

        .event-content {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          z-index: 2;
        }

        .event-badge {
          background: var(--primary-red);
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 2px;
        }

        .event-title-card {
          color: white;
          font-family: var(--font-headings);
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1.3;
        }

        .event-ended-tag {
          background: rgba(0,0,0,0.7);
          color: white;
          font-size: 0.68rem;
          font-weight: 900;
          padding: 0.2rem 0.6rem;
          border: 1px solid rgba(255,255,255,0.3);
          letter-spacing: 1px;
        }

        .event-view-link {
          color: white;
          font-weight: 800;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.75rem;
          opacity: 0.85;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }

        .event-card:hover .event-view-link {
          opacity: 1;
          gap: 0.7rem;
        }

        .event-card.ended {
          filter: grayscale(0.8);
          opacity: 0.75;
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

        .mt-5 { margin-top: 2.5rem; }

        .btn-see-all {
          padding: 0.8rem 2.5rem;
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
          .ev-carousel-page {
            grid-template-columns: 1fr;
          }
          .ev-carousel-page .event-card:not(:first-child) {
            display: none;
          }
          .event-card { height: 300px; }
        }
      `}} />
    </section>
  );
};

export default EventsSection;
