import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, RotateCcw, ChevronRight, Calendar } from 'lucide-react';
import { newsEventsData, CONTENT_TYPES } from '../data/newsEventsData';

const NewsPage = () => {
  const [filteredData, setFilteredData] = useState(newsEventsData);
  const [activeTheme, setActiveTheme] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const themes = ['All', 'Education & Students Rights', 'Environment & Climate Action', 'Gender Advocacy', 'Capacity Building', 'Policy & Advocacy'];
  const types = ['All', ...Object.values(CONTENT_TYPES)];
  const regions = ['All', 'North Africa', 'East Africa', 'West Africa', 'Central Africa', 'Southern Africa', 'International'];

  const handleApply = () => {
    let result = newsEventsData;
    if (activeTheme !== 'All') result = result.filter(item => item.category === activeTheme);
    if (activeType !== 'All') result = result.filter(item => item.type === activeType);
    // Note: Regions not fully mapped in data yet, using as visual filter
    if (activeRegion !== 'All' && activeRegion !== 'International') {
        // Placeholder filter logic for region
    }
    setFilteredData(result);
  };

  const handleReset = () => {
    setActiveTheme('All');
    setActiveType('All');
    setActiveRegion('All');
    setFilteredData(newsEventsData);
  };

  return (
    <div className="news-page">
      <div className="news-header-spacer">
        <div className="container">
          <header className="page-header">
            <h1 className="news-main-title">News & Events</h1>
            <div className="title-bar"></div>
          </header>
        </div>
      </div>

      <div className="container">
        {/* Filters Section - AU Style */}
        <section className="filters-wrapper">
          <div className="filter-group">
            <label>Select a theme</label>
            <select value={activeTheme} onChange={(e) => setActiveTheme(e.target.value)}>
              {themes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="filter-group">
            <label>Filter by Category</label>
            <select value={activeType} onChange={(e) => setActiveType(e.target.value)}>
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="filter-group">
            <label>Filter by Region</label>
            <select value={activeRegion} onChange={(e) => setActiveRegion(e.target.value)}>
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="filter-actions">
            <button className="btn-apply" onClick={handleApply}>
              <Filter size={16} /> APPLY
            </button>
            <button className="btn-reset" onClick={handleReset}>
              <RotateCcw size={16} /> RESET
            </button>
          </div>
        </section>

        {/* Content Grid */}
        <div className="news-results-grid">
          <AnimatePresence mode='popLayout'>
            {filteredData.map((item, idx) => (
              <Link 
                key={item.id}
                to={item.redirectUrl || `/news/${item.id}`}
                className="news-card-link"
              >
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="news-item-card"
                >
                  <div className="card-media">
                    <img src={item.img} alt={item.title} />
                    <span className={`type-badge ${item.type.toLowerCase().replace(' ', '-')}`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-meta">
                      <Calendar size={14} />
                      <span>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <p className="card-excerpt">{item.excerpt}</p>
                    <div className="read-more">
                      READ MORE <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <div className="no-results">
            <p>No content matches your selected filters.</p>
            <button onClick={handleReset} className="btn-reset">Clear Filters</button>
          </div>
        )}
      </div>


      <style dangerouslySetInnerHTML={{ __html: `
        .news-page {
          background: #fdfdfd;
          min-height: 100vh;
          color: #333;
          padding-bottom: 100px;
        }

        .news-header-spacer {
          height: 380px;
          background: #111;
          display: flex;
          align-items: flex-end;
          padding-bottom: 4rem;
        }

        .page-header {
          position: relative;
          z-index: 10;
        }

        .news-main-title {
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

        /* ── FILTERS ────────────────────────── */
        .filters-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr) auto;
          gap: 1.5rem;
          background: white;
          padding: 2.5rem;
          border-radius: 8px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          margin-bottom: 4rem;
          align-items: flex-end;
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
          background: #1a4d2e; /* From AU reference */
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

        /* ── GRID ────────────────────────────── */
        .news-card-link {
          text-decoration: none;
          color: inherit;
        }

        .news-results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .news-item-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .news-item-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .card-media {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .news-item-card:hover .card-media img {
          transform: scale(1.05);
        }

        .type-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: #cb3631;
          color: white;
          padding: 0.4rem 1.2rem;
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .type-badge.press-release { background: #8B0000; }
        .type-badge.readout { background: #4B0082; }
        .type-badge.news { background: #cb3631; }
        .type-badge.event { background: #228B22; }

        .card-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
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
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #888;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .card-excerpt {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          margin-top: auto;
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
          width: fit-content;
        }

        .read-more:hover {
          gap: 0.5rem;
        }

        .no-results {
          text-align: center;
          padding: 4rem;
          background: white;
          border-radius: 8px;
        }

        @media (max-width: 1200px) {
          .filters-wrapper { grid-template-columns: repeat(2, 1fr); }
          .filter-actions { grid-column: span 2; justify-content: center; }
        }

        @media (max-width: 900px) {
          .news-results-grid { grid-template-columns: repeat(2, 1fr); }
          .news-main-title { font-size: 2.5rem; }
        }

        @media (max-width: 600px) {
          .news-results-grid { grid-template-columns: 1fr; }
          .filters-wrapper { grid-template-columns: 1fr; }
          .filter-actions { grid-column: span 1; flex-direction: column; }
        }
      `}} />
    </div>
  );
};

export default NewsPage;
