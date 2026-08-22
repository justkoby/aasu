import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, RotateCcw, ChevronRight, ChevronLeft, Calendar, FileText, Share2 } from 'lucide-react';
import { newsEventsData } from '../data/newsEventsData';
import { usePublishedPressReleases } from '../hooks/useContent';
import SEO from '../components/SEO';

const PressReleaseArchivePage = () => {
  const { data: dbReleases, loading, error } = usePublishedPressReleases();

  const pressReleases = useMemo(() => {
    if (error || dbReleases === null) {
      if (error) {
        console.warn("[AASU Web PressReleaseArchivePage] Using static fallback data due to Supabase error:", error.message);
      }
      return newsEventsData
        .filter(item => item.type === 'Press Release' || item.type === 'readout')
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return dbReleases;
  }, [dbReleases, error]);

  const [filteredData, setFilteredData] = useState([]);
  const [activeYear, setActiveYear] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilteredData(pressReleases);
    setCurrentPage(1);
  }, [pressReleases]);

  const years = ['All', '2026', '2025', '2024'];
  const categories = ['All', 'Statements', 'Communiqués', 'Press Releases', 'Congratulations', 'Condolences', 'Advocacy'];

  const handleApply = () => {
    let result = pressReleases;
    
    // Filter by Year
    if (activeYear !== 'All') {
      result = result.filter(item => {
        const itemYear = new Date(item.published_at || item.raw_date || item.date).getFullYear().toString();
        return itemYear === activeYear;
      });
    }
    
    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(item => {
        const prCat = item.pressReleaseCategory || item.category || "";
        return prCat.toLowerCase() === activeCategory.toLowerCase();
      });
    }
    
    setFilteredData(result);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setActiveYear('All');
    setActiveCategory('All');
    setFilteredData(pressReleases);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleShare = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    const fullUrl = `${window.location.origin}/news/${item.slug || item.id}`;
    if (navigator.share) {
      navigator.share({
        title: item.title,
        url: fullUrl
      }).catch(err => console.log(err));
    } else {
      navigator.clipboard.writeText(fullUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="press-archive-page">
      <SEO 
        title="Press Release Archive | AASU" 
        description="Access all official press statements, communiqués, condolences, and congratulations from the All-Africa Students Union (AASU)." 
      />
      <div className="archive-header-spacer">
        <div className="container">
          <header className="page-header">
            <h1 className="archive-main-title">Press Release Archive</h1>
            <div className="title-bar"></div>
          </header>
        </div>
      </div>

      <div className="container">
        {/* Filters Section */}
        <section className="archive-filters-wrapper">
          <div className="filter-group">
            <label>Filter by Year</label>
            <select value={activeYear} onChange={(e) => setActiveYear(e.target.value)}>
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div className="filter-group">
            <label>Filter by Category</label>
            <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="filter-actions">
            <button className="btn-apply" onClick={handleApply}>
              <Filter size={16} /> APPLY FILTERS
            </button>
            <button className="btn-reset" onClick={handleReset}>
              <RotateCcw size={16} /> RESET
            </button>
          </div>
        </section>

        {loading ? (
          <div className="archive-results-grid">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="archive-item-card skeleton-card">
                <div className="card-media" style={{ background: '#e2e8f0' }} />
                <div className="card-info">
                  <div style={{ height: '16px', width: '40%', background: '#e2e8f0' }} />
                  <div style={{ height: '24px', width: '90%', background: '#e2e8f0' }} />
                  <div style={{ height: '16px', width: '100%', background: '#e2e8f0' }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="archive-results-grid">
            <AnimatePresence mode='popLayout'>
              {currentItems.map((item, idx) => (
                <Link 
                  key={item.id || item.slug}
                  to={item.redirectUrl || `/news/${item.slug || item.id}`}
                  className="archive-card-link"
                >
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: (idx % itemsPerPage) * 0.05 }}
                    className="archive-item-card"
                  >
                    <div className="card-media">
                      <img src={item.img || item.featured_image_url || '/placeholder.jpg'} alt={item.featured_image_alt || item.title} />
                      <span className="type-badge">
                        {item.pressReleaseCategory || item.category || 'Statement'}
                      </span>
                    </div>
                    <div className="card-info">
                      <div className="card-meta-row">
                        <div className="card-meta">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        {item.refNumber && (
                          <div className="card-ref-badge">
                            {item.refNumber}
                          </div>
                        )}
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-excerpt">{item.excerpt}</p>
                      <div className="card-footer-actions">
                        <div className="read-more">
                          READ STATEMENT <ChevronRight size={16} />
                        </div>
                        <button className="btn-share-icon" onClick={(e) => handleShare(e, item)} title="Share Statement">
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination UI */}
        {!loading && totalPages > 1 && (
          <div className="pagination">
            <button 
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
              className="page-btn prev-next"
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`page-btn ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            ))}

            <button 
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="page-btn prev-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {!loading && filteredData.length === 0 && (
          <div className="no-results">
            <p>No press releases found matching your selected filters.</p>
            <button onClick={handleReset} className="btn-reset">Clear Filters</button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .press-archive-page {
          background: #fdfdfd;
          min-height: 100vh;
          color: #333;
          padding-bottom: 100px;
        }

        .archive-header-spacer {
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

        .archive-main-title {
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

        .archive-filters-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr) auto;
          gap: 1.5rem;
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          margin-top: -50px;
          margin-bottom: 4rem;
          align-items: flex-end;
          position: relative;
          z-index: 20;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .filter-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .filter-group select {
          padding: 0.85rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 0.95rem;
          color: #333;
          background: #f8fafc;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .filter-group select:focus {
          border-color: var(--primary-red);
        }

        .filter-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-apply, .btn-reset {
          padding: 0.85rem 1.75rem;
          border-radius: 4px;
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-apply {
          background: #1a4d2e;
          color: white;
          border: none;
        }

        .btn-apply:hover {
          background: #143a22;
          transform: translateY(-2px);
        }

        .btn-reset {
          background: #2d2d2d;
          color: white;
          border: none;
        }

        .btn-reset:hover {
          background: #111;
          transform: translateY(-2px);
        }

        .archive-card-link {
          text-decoration: none;
          color: inherit;
        }

        .archive-results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .archive-item-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .archive-item-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .card-media {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #eee;
        }

        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .archive-item-card:hover .card-media img {
          transform: scale(1.05);
        }

        .type-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: #8B0000;
          color: white;
          padding: 0.4rem 1.2rem;
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .card-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
        }

        .card-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #888;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .card-ref-badge {
          font-family: monospace;
          background: #f1f5f9;
          color: #475569;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #111;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 3.5rem;
        }

        .card-excerpt {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .card-footer-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #eee;
        }

        .read-more {
          background: transparent;
          border: none;
          color: var(--primary-red);
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
          padding: 0;
        }

        .read-more:hover {
          gap: 0.5rem;
        }

        .btn-share-icon {
          background: #f1f5f9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-share-icon:hover {
          background: var(--primary-red);
          color: white;
        }

        .no-results {
          text-align: center;
          padding: 4rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        @media (max-width: 1200px) {
          .archive-filters-wrapper { grid-template-columns: repeat(2, 1fr); }
          .filter-actions { grid-column: span 2; justify-content: center; }
        }

        @media (max-width: 900px) {
          .archive-results-grid { grid-template-columns: repeat(2, 1fr); }
          .archive-main-title { font-size: 2.5rem; }
        }

        @media (max-width: 600px) {
          .archive-results-grid { grid-template-columns: 1fr; }
          .archive-filters-wrapper { grid-template-columns: 1fr; }
          .filter-actions { grid-column: span 1; flex-direction: column; }
        }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 5rem;
        }

        .page-btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          background: white;
          color: #333;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .page-btn:hover:not(:disabled) {
          border-color: var(--primary-red);
          color: var(--primary-red);
          transform: translateY(-2px);
        }

        .page-btn.active {
          background: var(--primary-red);
          color: white;
          border-color: var(--primary-red);
        }

        .page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .page-btn.prev-next {
          background: #f8fafc;
        }
      `}} />
    </div>
  );
};

export default PressReleaseArchivePage;
