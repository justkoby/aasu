import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Tag, ChevronLeft, ChevronRight, Clock, MapPin, ExternalLink, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, FileText, Download } from "lucide-react";
import { newsEventsData, isEventEnded } from "../data/newsEventsData";
import { usePublishedPost } from "../hooks/useContent";
import SEO from "../components/SEO";

const ContentDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: dbPost, loading, error } = usePublishedPost(id);

  let content = dbPost;
  if (!loading && (!content || error)) {
    const staticItem = newsEventsData.find(item => item.id === id);
    if (staticItem) {
      if (error) {
        console.warn("[AASU Web ContentDetailPage] Using static fallback data due to Supabase error:", error.message);
      }
      content = staticItem;
    }
  }

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const allImages = content 
    ? Array.from(new Set([content.img, ...(content.images || [])])).filter(Boolean)
    : [];

  const renderTextWithLinks = (text) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split("\n").map((para, i) => {
      if (!para.trim()) return <br key={i} />;
      const parts = para.split(urlRegex);
      return (
        <p key={i}>
          {parts.map((part, j) => {
            if (part.match(urlRegex)) {
              return (
                <a 
                  key={j} 
                  href={part} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="article-body-link"
                >
                  {part}
                </a>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      else if (e.key === "ArrowRight") {
        setActiveImgIndex(prev => (prev + 1) % allImages.length);
      } else if (e.key === "ArrowLeft") {
        setActiveImgIndex(prev => (prev - 1 + allImages.length) % allImages.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, allImages.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!loading && !content) {
      const timer = setTimeout(() => navigate("/news"), 3000);
      return () => clearTimeout(timer);
    }

    if (content && content.linkOverride) {
      navigate(content.linkOverride, { replace: true });
    }
  }, [id, content, loading, navigate]);

  if (loading) {
    return (
      <div className="container" style={{ padding: "200px 0", textAlign: "center" }}>
        <h2>Loading content...</h2>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="container" style={{ padding: "200px 0", textAlign: "center" }}>
        <h2>Content not found</h2>
        <p>Redirecting you to the news hub...</p>
      </div>
    );
  }

  const ended = content.eventDate ? isEventEnded(content.eventDate) : (content.date ? isEventEnded(content.date) : false);

  const currentIndex = newsEventsData.findIndex(item => item.id === content.id);
  const nextArticle = currentIndex > 0 ? newsEventsData[currentIndex - 1] : null;
  const prevArticle = currentIndex < newsEventsData.length - 1 ? newsEventsData[currentIndex + 1] : null;

  const relatedReleases = newsEventsData
    .filter(item => (item.type || "").toLowerCase().includes("press") && item.id !== content.id)
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
        title={content.seoTitle || content.title} 
        description={content.seoDescription || content.excerpt || (content.content ? content.content.substring(0, 160) : "")} 
        image={content.img}
        url={`https://aasuonline.org/news/${content.slug || content.id}`}
      />
      <div className="detail-header-spacer">
        <div className="container">
          <p className="detail-section-label">
            {(content.type || "").toLowerCase().includes("event") ? "Events" : (content.type || "").toLowerCase().includes("press") ? "Press Release" : "News"}
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
              <span className={`detail-badge ${(content.type || "news").toLowerCase().replace(" ", "-")}`}>
                {content.type || "NEWS"}
              </span>
              <span className="detail-date">
                <Calendar size={16} /> 
                {content.date}
              </span>
              {(content.category || (content.categories && content.categories[0])) && (
                <span className="detail-cat">
                  <Tag size={16} /> {content.category || content.categories[0]}
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
            <img 
              src={content.img} 
              alt={content.featured_image_alt || content.title} 
              className="detail-main-img clickable-img" 
              onClick={() => {
                const idx = allImages.indexOf(content.img);
                if (idx !== -1) {
                  setActiveImgIndex(idx);
                  setLightboxOpen(true);
                }
              }}
            />
            {(content.type || "").toLowerCase().includes("event") && ended && (
              <div className="status-overlay">EVENT HAS ENDED</div>
            )}
          </motion.div>

          {content.images && content.images.length > 0 && (
            <div className="additional-images-grid">
              {content.images.map((img, idx) => {
                const imgIndex = allImages.indexOf(img);
                return (
                  <motion.div 
                    key={idx}
                    className="gallery-img-wrapper clickable-img"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      if (imgIndex !== -1) {
                        setActiveImgIndex(imgIndex);
                        setLightboxOpen(true);
                      }
                    }}
                  >
                    <img src={img} alt={`${content.title} gallery ${idx + 1}`} />
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className={`article-body ${(content.type || "").toLowerCase().includes("event") ? "" : "full-width-body"}`}>
              <div className="article-main-text">
                {renderTextWithLinks(content.content || content.description)}

                {content.documents && content.documents.length > 0 && (
                  <div className="article-documents-section">
                    <h3 className="documents-section-title">Key Project Documents & Deliverables</h3>
                    <div className="documents-grid">
                      {content.documents.map((doc, idx) => (
                        <div key={idx} className="doc-card">
                          <div className="doc-thumbnail-wrapper">
                            <img src={doc.thumbnail || "/placeholder-doc.jpg"} alt={doc.title} className="doc-thumbnail" />
                          </div>
                          <div className="doc-content">
                            <h4 className="doc-title">{doc.title}</h4>
                            <div className="doc-actions">
                              <a 
                                href={doc.fileUrl || doc.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="doc-btn primary"
                                download
                              >
                                <Download size={16} /> Download Report (PDF)
                              </a>
                              {doc.externalUrl && (
                                <a 
                                  href={doc.externalUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="doc-btn secondary"
                                >
                                  <ExternalLink size={16} /> View Portal
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!(content.type || "").toLowerCase().includes("event") && renderShareButtons()}
              </div>

             {(content.type || "").toLowerCase().includes("event") && (
               <div className="article-sidebar">
                  <div className="sidebar-card">
                    <h3>Event Details</h3>
                    <div className="sidebar-detail">
                      <Calendar size={20} />
                      <div>
                        <strong>Date</strong>
                        <p>{content.eventDate || content.date}</p>
                      </div>
                    </div>
                    {(content.eventTime || content.time) && (
                      <div className="sidebar-detail">
                        <Clock size={20} />
                        <div>
                          <strong>Time</strong>
                          <p>{content.eventTime || content.time}</p>
                        </div>
                      </div>
                    )}
                    {(content.eventLocation || content.platform) && (
                      <div className="sidebar-detail">
                        <MapPin size={20} />
                        <div>
                          <strong>Location</strong>
                          <p>{content.eventLocation || content.platform}</p>
                        </div>
                      </div>
                    )}
                    {!ended && (content.registrationUrl || content.link) && (
                      <a href={content.registrationUrl || content.link} target="_blank" rel="noopener noreferrer" className="sidebar-btn">
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

        <div className="article-navigation">
          {prevArticle ? (
            <Link to={`/news/${prevArticle.id}`} className="article-nav-link prev">
              <span className="article-nav-label">← PREVIOUS ARTICLE</span>
              <span className="article-nav-title">{prevArticle.title}</span>
            </Link>
          ) : <div className="article-nav-placeholder" />}
          
          {nextArticle ? (
            <Link to={`/news/${nextArticle.id}`} className="article-nav-link next">
              <span className="article-nav-label">NEXT ARTICLE →</span>
              <span className="article-nav-title">{nextArticle.title}</span>
            </Link>
          ) : <div className="article-nav-placeholder" />}
        </div>

        {(content.type || "").toLowerCase().includes("press") && relatedReleases.length > 0 && (
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
                        <span className="related-date">{new Date(rel.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
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

        .article-body.full-width-body {
          grid-template-columns: 1fr;
          max-width: 800px;
        }

        .article-body-link {
          color: var(--primary-red);
          text-decoration: underline;
          font-weight: 600;
          word-break: break-all;
          transition: color 0.2s;
        }

        .article-body-link:hover {
          color: var(--primary-red-hover, #992d29);
        }

        .article-main-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #444;
        }

        .article-main-text p {
          margin-bottom: 1.5rem;
        }

        .article-documents-section {
          margin: 3rem 0;
          padding: 2rem;
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        .documents-section-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--primary-red, #bd3731);
        }

        .documents-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .doc-card {
          display: flex;
          gap: 1.5rem;
          background: #ffffff;
          padding: 1.25rem;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .doc-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .doc-thumbnail-wrapper {
          width: 140px;
          height: 180px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          background: #f1f5f9;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .doc-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .doc-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }

        .doc-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .doc-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: auto;
        }

        .doc-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .doc-btn.primary {
          background: var(--primary-red, #bd3731);
          color: #ffffff;
        }

        .doc-btn.primary:hover {
          background: var(--primary-red-hover, #992d29);
          color: #ffffff;
        }

        .doc-btn.secondary {
          background: #f1f5f9;
          color: #334155;
          border: 1px solid #cbd5e1;
        }

        .doc-btn.secondary:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        @media (max-width: 640px) {
          .doc-card {
            flex-direction: column;
          }
          .doc-thumbnail-wrapper {
            width: 100%;
            height: 220px;
          }
        }

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
      `}} />
    </div>
  );
};

export default ContentDetailPage;

