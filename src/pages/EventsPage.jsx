import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ExternalLink, ChevronRight, MapPin } from 'lucide-react';
import { newsEventsData, CONTENT_TYPES, isEventEnded } from '../data/newsEventsData';
import { usePublishedEvents } from '../hooks/useContent';
import SEO from '../components/SEO';

const EventsPage = () => {
  const navigate = useNavigate();
  const { data: dbEvents, loading, error } = usePublishedEvents();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sourceEvents = useMemo(() => {
    if (error || dbEvents === null) {
      if (error) {
        console.warn("[AASU Web EventsPage] Using static fallback data due to Supabase error:", error.message);
      }
      return newsEventsData.filter(item => item.type === CONTENT_TYPES.EVENT);
    }
    return dbEvents;
  }, [dbEvents, error]);

  const upcomingEvents = useMemo(() => {
    return sourceEvents
      .filter(ev => !isEventEnded(ev.eventDate || ev.date))
      .sort((a, b) => new Date(a.eventDate || a.date) - new Date(b.eventDate || b.date));
  }, [sourceEvents]);

  const pastEvents = useMemo(() => {
    return sourceEvents
      .filter(ev => isEventEnded(ev.eventDate || ev.date))
      .sort((a, b) => new Date(b.eventDate || b.date) - new Date(a.eventDate || a.date));
  }, [sourceEvents]);

  const EventCard = ({ event }) => {
    const ended = isEventEnded(event.eventDate || event.date);

    return (
      <motion.div 
        className={`event-page-card ${ended ? 'ended' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => navigate(event.redirectUrl || `/news/${event.slug || event.id}`)}
        style={{ cursor: 'pointer' }}
      >
        <div className="event-img-box">
          <img src={event.img || event.featured_image_url || '/placeholder.jpg'} alt={event.featured_image_alt || event.title} />
          {ended && (
            <div className="ended-overlay">
              <span className="ended-label">EVENT HAS ENDED</span>
            </div>
          )}
        </div>
        <div className="event-info-box">
          <div className="event-top-meta">
            <span className="event-cat">{event.category || 'EVENT'}</span>
            <div className={`status-pill ${ended ? 'status-ended' : 'status-upcoming'}`}>
              {ended ? 'Ended' : 'Upcoming'}
            </div>
          </div>
          <h3 className="event-title">{event.title}</h3>
          
          <div className="event-details-list">
            <div className="detail-item">
              <Calendar size={18} />
              <span>{event.eventDate || event.date}</span>
            </div>
            {(event.eventTime || event.time) && (
              <div className="detail-item">
                <Clock size={18} />
                <span>{event.eventTime || event.time}</span>
              </div>
            )}
            {(event.eventLocation || event.platform) && (
              <div className="detail-item">
                <MapPin size={18} />
                <span>{event.eventLocation || event.platform}</span>
              </div>
            )}
          </div>

          <p className="event-excerpt">{event.excerpt}</p>

          <div className="event-footer">
            {!ended && (event.registrationUrl || event.link) && (
              <a 
                href={event.registrationUrl || event.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-register"
                onClick={(e) => e.stopPropagation()}
              >
                Register Here <ExternalLink size={16} />
              </a>
            )}
            {(ended || (!event.registrationUrl && !event.link)) && (
              <button 
                className="btn-register secondary"
                onClick={(e) => { e.stopPropagation(); navigate(event.redirectUrl || `/news/${event.slug || event.id}`); }}
              >
                View Details <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="events-page">
      <SEO 
        title="Upcoming & Past Events" 
        description="Discover upcoming workshops, conferences, webinars, and youth dialogues organized by the All-Africa Students Union (AASU)." 
      />
      <div className="events-header-spacer">
        <div className="container">
          <header className="page-header">
            <h1 className="events-main-title">Events</h1>
            <div className="title-bar"></div>
          </header>
        </div>
      </div>

      <div className="container events-body">
        {loading ? (
          <div className="events-vertical-list">
            {[1, 2].map(n => (
              <div key={n} className="event-page-card skeleton-card">
                <div className="event-img-box" style={{ background: '#e2e8f0' }} />
                <div className="event-info-box">
                  <div style={{ height: '20px', width: '100px', background: '#e2e8f0' }} />
                  <div style={{ height: '36px', width: '80%', background: '#e2e8f0' }} />
                  <div style={{ height: '20px', width: '60%', background: '#e2e8f0' }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Upcoming Section */}
            <section className="events-section-block">
              <h2 className="section-type-title">Upcoming <span className="text-red">Events</span></h2>
              {upcomingEvents.length > 0 ? (
                <div className="events-vertical-list">
                  {upcomingEvents.map(ev => <EventCard key={ev.id || ev.slug} event={ev} />)}
                </div>
              ) : (
                <div className="empty-events">
                  <p>No upcoming events currently scheduled. Check back soon!</p>
                </div>
              )}
            </section>

            {/* Past Section */}
            <section className="events-section-block mt-100">
              <h2 className="section-type-title">Past <span className="text-red">Events</span></h2>
              {pastEvents.length > 0 ? (
                <div className="events-vertical-list">
                  {pastEvents.map(ev => <EventCard key={ev.id || ev.slug} event={ev} />)}
                </div>
              ) : (
                <div className="empty-events">
                  <p>No past events recorded.</p>
                </div>
              )}
            </section>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .events-page {
          background: #fdfdfd;
          min-height: 100vh;
          color: #333;
        }

        .events-header-spacer {
          height: 420px;
          background: #111;
          display: flex;
          align-items: flex-end;
          padding-bottom: 4rem;
        }

        .page-header {
          position: relative;
          z-index: 10;
        }

        .events-main-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
        }

        .title-bar {
          width: 80px;
          height: 5px;
          background: var(--primary-red);
        }

        .events-body {
          padding-top: 5rem;
          padding-bottom: 120px;
        }

        .section-type-title {
          font-size: 2.25rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 3rem;
          border-left: 6px solid var(--primary-red);
          padding-left: 1.5rem;
        }

        .text-red { color: var(--primary-red); }
        .mt-100 { margin-top: 100px; }

        .events-vertical-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .event-page-card {
          background: white;
          display: grid;
          grid-template-columns: 380px 1fr;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid #f0f0f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .event-page-card:hover {
          transform: translateX(10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .event-page-card.ended {
          filter: grayscale(0.6);
        }

        .event-img-box {
          position: relative;
          min-height: 280px;
        }

        .event-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ended-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ended-label {
          color: white;
          font-weight: 900;
          font-size: 1rem;
          border: 2px solid white;
          padding: 0.5rem 1rem;
          letter-spacing: 2px;
        }

        .event-info-box {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .event-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .event-cat {
          color: var(--primary-red);
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
        }

        .status-pill {
          padding: 0.25rem 1rem;
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: 50px;
          text-transform: uppercase;
        }

        .status-upcoming { background: rgba(34, 139, 34, 0.1); color: #228B22; }
        .status-ended { background: rgba(0, 0, 0, 0.05); color: #666; }

        .event-title {
          font-size: 1.8rem;
          font-weight: 900;
          color: #111;
          line-height: 1.25;
        }

        .event-details-list {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 1.25rem 0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #555;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .detail-item svg { color: var(--primary-red); }

        .event-excerpt {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #666;
        }

        .event-footer {
          margin-top: auto;
        }

        .btn-register {
          background: var(--primary-red);
          color: white;
          text-decoration: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
          width: fit-content;
          border: none;
          cursor: pointer;
        }

        .btn-register:hover {
          background: #a0201c;
          transform: scale(1.05);
        }

        .btn-register.secondary {
          background: #f0f0f0;
          color: #333;
          border: 1px solid #ddd;
        }

        .btn-register.secondary:hover {
          background: #e0e0e0;
          color: #111;
        }

        .empty-events {
          padding: 4rem;
          background: white;
          border-radius: 12px;
          text-align: center;
          color: #888;
          font-weight: 600;
          border: 2px dashed #eee;
        }

        @media (max-width: 991px) {
          .event-page-card { grid-template-columns: 1fr; }
          .event-img-box { min-height: 280px; }
          .event-info-box { padding: 2rem; }
        }

        @media (max-width: 768px) {
          .events-main-title { font-size: 2.5rem; }
          .event-title { font-size: 1.5rem; }
          .event-details-list { flex-direction: column; gap: 0.75rem; }
        }
      `}} />
    </div>
  );
};

export default EventsPage;
