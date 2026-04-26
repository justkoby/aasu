import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronLeft, Clock, MapPin, ExternalLink, Share2 } from 'lucide-react';
import { newsEventsData, isEventEnded } from '../data/newsEventsData';

import SEO from '../components/SEO';

const ContentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const content = newsEventsData.find(item => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!content) {
      // Small delay then redirect if not found
      const timer = setTimeout(() => navigate('/news'), 3000);
      return () => clearTimeout(timer);
    }

    // Redirect if a link override is specified (e.g., for special landing pages)
    if (content.linkOverride) {
      navigate(content.linkOverride, { replace: true });
    }
  }, [id, content, navigate]);

  if (!content) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Content not found</h2>
        <p>Redirecting you to the news hub...</p>
      </div>
    );
  }

  const ended = content.date ? isEventEnded(content.date) : false;

  return (
    <div className="content-detail-page">
      <SEO 
        title={content.title} 
        description={content.excerpt || content.description?.substring(0, 160)} 
      />
      <div className="detail-header-spacer">
        <div className="container">
          <p className="detail-section-label">{content.type === 'Event' ? 'Events' : 'News & Events'}</p>
        </div>
      </div>

      <div className="container detail-container">
        <motion.button 
          className="back-btn"
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ChevronLeft size={20} /> Back
        </motion.button>

        <article className="detail-article">
          <motion.div 
            className="article-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="article-meta">
              <span className={`detail-badge ${content.type?.toLowerCase().replace(' ', '-')}`}>
                {content.type}
              </span>
              <span className="detail-date">
                <Calendar size={16} /> 
                {new Date(content.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              {content.category && (
                <span className="detail-cat">
                  <Tag size={16} /> {content.category}
                </span>
              )}
            </div>
            <h1 className="article-title">{content.title}</h1>
          </motion.div>

          <motion.div 
            className="article-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={content.img} alt={content.title} className="detail-main-img" />
            {content.type === 'Event' && ended && (
              <div className="status-overlay">EVENT HAS ENDED</div>
            )}
          </motion.div>

          {/* Additional Images Gallery */}
          {content.images && content.images.length > 0 && (
            <div className="additional-images-grid">
              {content.images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  className="gallery-img-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <img src={img} alt={`${content.title} gallery ${idx + 1}`} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="article-body">
              <div className="article-main-text">
                {content.description?.split('\n').map((para, i) => (
                  para.trim() ? <p key={i}>{para}</p> : <br key={i} />
                ))}

                {/* Share Box for News (Non-Event) */}
                {content.type !== 'Event' && (
                  <div className="share-box news-share">
                    <button onClick={() => navigator.share?.({ title: content.title, url: window.location.href })}>
                      <Share2 size={18} /> Share Article
                    </button>
                  </div>
                )}
              </div>

             {/* Sidebar Info for Events */}
             {content.type === 'Event' && (
               <div className="article-sidebar">
                  <div className="sidebar-card">
                    <h3>Event Details</h3>
                    <div className="sidebar-detail">
                      <Calendar size={20} />
                      <div>
                        <strong>Date</strong>
                        <p>{new Date(content.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      </div>
                    </div>
                    {content.time && (
                      <div className="sidebar-detail">
                        <Clock size={20} />
                        <div>
                          <strong>Time</strong>
                          <p>{content.time}</p>
                        </div>
                      </div>
                    )}
                    {content.platform && (
                      <div className="sidebar-detail">
                        <MapPin size={20} />
                        <div>
                          <strong>Location</strong>
                          <p>{content.platform}</p>
                        </div>
                      </div>
                    )}
                    {!ended && content.link && (
                      <a href={content.link} target="_blank" rel="noopener noreferrer" className="sidebar-btn">
                        Register Now <ExternalLink size={18} />
                      </a>
                    )}
                    {ended && (
                      <div className="ended-notice-detail">Registration Closed</div>
                    )}
                  </div>

                  <div className="share-box">
                    <button onClick={() => navigator.share?.({ title: content.title, url: window.location.href })}>
                      <Share2 size={18} /> Share Article
                    </button>
                  </div>
               </div>
             )}
          </div>
        </article>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .content-detail-page {
          background: #fdfdfd;
          min-height: 100vh;
          color: #333;
          padding-bottom: 120px;
        }

        .detail-header-spacer {
          height: 420px;
          background: #111;
          display: flex;
          align-items: flex-end;
          padding-bottom: 3rem;
        }

        .detail-section-label {
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .detail-container {
          max-width: 1000px;
        }

        .back-btn {
          background: none;
          border: none;
          color: #666;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          cursor: pointer;
          margin: 2rem 0;
          padding: 0;
          transition: color 0.2s;
        }

        .back-btn:hover {
          color: var(--primary-red);
        }

        .article-header {
          margin-bottom: 2.5rem;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .detail-badge {
          background: var(--primary-red);
          color: white;
          padding: 0.35rem 1rem;
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .detail-badge.press-release { background: #8B0000; }
        .detail-badge.readout { background: #4B0082; }
        .detail-badge.event { background: #228B22; }

        .detail-date, .detail-cat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #888;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .article-title {
          font-size: 3rem;
          font-weight: 900;
          color: #111;
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .article-image-container {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 3rem;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        .detail-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: 4px;
        }

        .article-body {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 4rem;
          align-items: start;
        }

        /* If not an event, take full width */
        .detail-article:not(:has(.article-sidebar)) .article-body {
          grid-template-columns: 1fr;
          max-width: 800px;
        }

        .article-main-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #444;
        }

        .article-main-text p {
          margin-bottom: 1.5rem;
        }

        /* ── GALLERY ────────────────────────── */
        .additional-images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .gallery-img-wrapper {
          height: 250px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .gallery-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-img-wrapper:hover img {
          transform: scale(1.05);
        }

        /* ── SIDEBAR ─────────────────────────── */
        .sidebar-card {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: sticky;
          top: 100px;
          border: 1px solid #f0f0f0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sidebar-card h3 {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .sidebar-detail {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .sidebar-detail svg { color: var(--primary-red); margin-top: 4px; }

        .sidebar-detail strong { display: block; font-size: 0.8rem; color: #999; text-transform: uppercase; }
        .sidebar-detail p { font-weight: 700; color: #333; margin: 0; line-height: 1.4; }

        .sidebar-btn {
          background: var(--primary-red);
          color: white;
          text-decoration: none;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-weight: 800;
          margin-top: 1rem;
          transition: all 0.2s;
        }

        .sidebar-btn:hover { background: #a0201c; transform: scale(1.02); }

        .ended-notice-detail {
          text-align: center;
          color: #888;
          font-weight: 800;
          padding: 1rem;
          border: 1px dashed #ccc;
          border-radius: 8px;
        }

        .share-box {
          margin-top: 2rem;
        }

        .share-box button {
          background: #f0f0f0;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          font-weight: 700;
          color: #555;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .share-box button:hover {
          background: #e0e0e0;
          color: var(--primary-red);
        }

        .share-box.news-share {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        @media (max-width: 900px) {
          .article-body { grid-template-columns: 1fr; }
          .article-title { font-size: 2.2rem; }
          .article-image-container { height: 300px; }
          .article-sidebar { order: -1; margin-bottom: 2rem; }
          .sidebar-card { position: static; }
        }
      `}} />
    </div>
  );
};

export default ContentDetailPage;
