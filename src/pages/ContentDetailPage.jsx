import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronLeft, Clock, MapPin, ExternalLink, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, FileText } from 'lucide-react';
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

  const currentIndex = newsEventsData.findIndex(item => item.id === content.id);
  const nextArticle = currentIndex > 0 ? newsEventsData[currentIndex - 1] : null;
  const prevArticle = currentIndex < newsEventsData.length - 1 ? newsEventsData[currentIndex + 1] : null;

  // Query related press releases if this is a press release
  const relatedReleases = newsEventsData
    .filter(item => item.type === 'Press Release' && item.id !== content.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(content.title);

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: content.title,
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const renderShareButtons = () => (
    <div className="share-box-premium">
      <span className="share-label">SHARE THIS ARTICLE</span>
      <div className="share-buttons">
        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="share-btn twitter" title="Share on X">
          <Twitter size={16} />
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-btn facebook" title="Share on Facebook">
          <Facebook size={16} />
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="share-btn linkedin" title="Share on LinkedIn">
          <Linkedin size={16} />
        </a>
        <button onClick={handleShareClick} className="share-btn copy-link" title="Copy Link / More">
          <LinkIcon size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="content-detail-page">
      <SEO 
        title={content.title} 
        description={content.excerpt || content.description?.substring(0, 160)} 
      />
      <div className="detail-header-spacer">
        <div className="container">
          <p className="detail-section-label">
            {content.type === 'Event' ? 'Events' : content.type === 'Press Release' ? 'Press Release' : 'News'}
          </p>
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
              {content.refNumber && (
                <span className="detail-ref">
                  <FileText size={16} /> {content.refNumber}
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
                {content.type !== 'Event' && renderShareButtons()}
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

                  {renderShareButtons()}
               </div>
             )}
          </div>
        </article>

        {/* Navigation Section */}
        <div className="article-navigation">
          {prevArticle ? (
            <Link to={`/news/${prevArticle.id}`} className="nav-link prev">
              <span className="nav-label">← PREVIOUS ARTICLE</span>
              <span className="nav-title">{prevArticle.title}</span>
            </Link>
          ) : <div className="nav-placeholder" />}
          
          {nextArticle ? (
            <Link to={`/news/${nextArticle.id}`} className="nav-link next">
              <span className="nav-label">NEXT ARTICLE →</span>
              <span className="nav-title">{nextArticle.title}</span>
            </Link>
          ) : <div className="nav-placeholder" />}
        </div>

        {/* Related Press Releases Section */}
        {content.type === 'Press Release' && relatedReleases.length > 0 && (
          <section className="related-releases-section">
            <h2 className="related-title">Related <span className="highlight-red">Press Releases</span></h2>
            <div className="title-underline"></div>
            <div className="related-grid">
              {relatedReleases.map(rel => (
                <Link key={rel.id} to={`/news/${rel.id}`} className="related-card-link">
                  <div className="related-card">
                    <div className="related-media">
                      <img src={rel.img} alt={rel.title} />
                      <span className="related-badge">PRESS RELEASE</span>
                    </div>
                    <div className="related-info">
                      <div className="related-meta">
                        <span className="related-date">{new Date(rel.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        {rel.refNumber && <span className="related-ref">{rel.refNumber}</span>}
                      </div>
                      <h3 className="related-card-title">{rel.title}</h3>
                      <p className="related-excerpt">{rel.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
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

        .detail-date, .detail-cat, .detail-ref {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #888;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .detail-ref {
          color: #cb3631;
          background: rgba(203, 54, 49, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.85rem;
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

        /* ── PREMIUM SHARE BOX ────────────────── */
        .share-box-premium {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .share-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: #888;
          letter-spacing: 1px;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
        }

        .share-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .share-btn.twitter { background: #2d2d2d; }
        .share-btn.twitter:hover { background: #cb3631; transform: translateY(-3px); }
        .share-btn.facebook { background: #2d2d2d; }
        .share-btn.facebook:hover { background: #cb3631; transform: translateY(-3px); }
        .share-btn.linkedin { background: #2d2d2d; }
        .share-btn.linkedin:hover { background: #cb3631; transform: translateY(-3px); }
        .share-btn.copy-link { background: #2d2d2d; }
        .share-btn.copy-link:hover { background: #cb3631; transform: translateY(-3px); }

        /* ── RELATED RELEASES ─────────────────── */
        .related-releases-section {
          margin-top: 6rem;
          border-top: 1px solid #eee;
          padding-top: 4rem;
        }

        .related-title {
          font-size: 2rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 2.5rem;
        }

        .related-card-link {
          text-decoration: none;
          color: inherit;
        }

        .related-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .related-card-link:hover .related-card {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .related-media {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .related-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .related-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #8B0000;
          color: white;
          padding: 0.3rem 0.8rem;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 3px;
        }

        .related-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .related-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #999;
          font-weight: 600;
        }

        .related-card-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #222;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .related-excerpt {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        /* ── NAVIGATION ──────────────────────── */
        .article-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
          gap: 2rem;
        }

        .nav-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          max-width: 48%;
          transition: transform 0.2s;
        }

        .nav-link:hover {
          transform: translateY(-2px);
        }

        .nav-link.next {
          align-items: flex-end;
          text-align: right;
        }

        .nav-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: #888;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .nav-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111;
          line-height: 1.4;
        }

        .nav-title:hover {
          color: var(--primary-red);
        }

        .nav-placeholder {
          flex: 1;
        }

        @media (max-width: 900px) {
          .article-body { grid-template-columns: 1fr; }
          .article-title { font-size: 2.2rem; }
          .article-image-container { height: 300px; }
          .article-sidebar { order: -1; margin-bottom: 2rem; }
          .sidebar-card { position: static; }
          .related-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default ContentDetailPage;
