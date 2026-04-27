
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, ExternalLink, Image as ImageIcon, 
  ChevronRight, Calendar, ArrowUpRight, Grid, List
} from 'lucide-react';
import { galleryAlbums, galleryCategories } from '../data/galleryData';
import SEO from '../components/SEO';

const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAlbums = useMemo(() => {
    return galleryAlbums.filter(album => {
      const matchesSearch = album.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || album.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const stats = useMemo(() => {
    return {
      total: galleryAlbums.length,
      categories: galleryCategories.length - 1 // Exclude 'all'
    };
  }, []);

  return (
    <div className="gallery-page">
      <SEO 
        title="Event Gallery | AASU" 
        description="Explore the visual history of AASU's impact through our event photo albums and digital archives."
      />

      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">Visual Archives</span>
            <h1 className="hero-title">Impact in <span className="text-red">Focus</span></h1>
            <p className="hero-desc">
              Explore the moments that define our journey across the continent. 
              Our galleries are hosted on Google Drive for easy access and high-quality viewing.
            </p>
            
            <div className="stats-strip">
              <div className="stat-item">
                <span className="stat-num">{stats.total}</span>
                <span className="stat-label">Photo Albums</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">{stats.categories}</span>
                <span className="stat-label">Priority Areas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="gallery-controls sticky-top">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search albums..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filters-row">
              <div className="categories-scroll">
                {galleryCategories.map(cat => (
                  <button
                    key={cat.id}
                    className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{ 
                      '--active-color': cat.color,
                      borderColor: activeCategory === cat.id ? cat.color : '#eee'
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
              
              <div className="view-toggles">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-main">
        <div className="container">
          <AnimatePresence mode="wait">
            {filteredAlbums.length > 0 ? (
              <motion.div 
                key={viewMode + activeCategory + searchTerm}
                className={`albums-${viewMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {filteredAlbums.map((album, idx) => (
                  <motion.div 
                    key={album.title}
                    className={`album-card mode-${viewMode}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="album-card-inner">
                      <div className="album-visual" style={{ background: `linear-gradient(135deg, ${galleryCategories.find(c => c.id === album.category)?.color}dd, #111)` }}>
                        <div className="visual-icon">
                          <ImageIcon size={40} color="white" />
                        </div>
                        <div className="category-tag">
                          {galleryCategories.find(c => c.id === album.category)?.name}
                        </div>
                      </div>
                      
                      <div className="album-info">
                        <div className="album-meta">
                          <div className="album-date">
                            <Calendar size={14} />
                            <span>{album.date}</span>
                          </div>
                        </div>
                        <h3 className="album-title">{album.title}</h3>
                        
                        <a 
                          href={album.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="view-album-btn"
                        >
                          View Photos <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="empty-icon">
                  <Search size={60} />
                </div>
                <h3>No albums found</h3>
                <p>Try adjusting your search or filter to find what you're looking for.</p>
                <button 
                  className="reset-btn"
                  onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-page {
          background: #fcfcfc;
          min-height: 100vh;
        }

        /* Hero */
        .gallery-hero {
          height: 500px;
          background: #111 url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80') center/cover;
          position: relative;
          display: flex;
          align-items: center;
          color: white;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.4));
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
        }

        .hero-tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: var(--primary-red);
          color: white;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-desc {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .text-red { color: var(--primary-red); }

        .stats-strip {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.2);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* Controls */
        .gallery-controls {
          background: white;
          padding: 1.5rem 0;
          border-bottom: 1px solid #eee;
          z-index: 100;
        }

        .controls-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .search-box {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .search-box input {
          width: 100%;
          padding: 1.2rem 1.5rem 1.2rem 4rem;
          border-radius: 12px;
          border: 2px solid #f0f0f0;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s;
          background: #fdfdfd;
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--primary-red);
          background: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .filters-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .categories-scroll {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          flex-grow: 1;
          scrollbar-width: none;
        }

        .categories-scroll::-webkit-scrollbar { display: none; }

        .filter-chip {
          padding: 0.7rem 1.5rem;
          border-radius: 50px;
          border: 1px solid #eee;
          background: white;
          font-size: 0.9rem;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s;
          color: #666;
        }

        .filter-chip:hover {
          background: #f9f9f9;
          transform: translateY(-2px);
        }

        .filter-chip.active {
          background: var(--active-color);
          color: white;
          border-color: var(--active-color);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .view-toggles {
          display: flex;
          background: #f5f5f5;
          padding: 0.4rem;
          border-radius: 10px;
          gap: 0.25rem;
        }

        .view-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          transition: all 0.3s;
        }

        .view-btn.active {
          background: white;
          color: #111;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        /* Gallery Grid */
        .gallery-main {
          padding: 5rem 0 120px;
        }

        .albums-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .album-card.mode-grid {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          border: 1px solid #eee;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .album-card.mode-grid:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }

        .album-visual {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .visual-icon {
          opacity: 0.2;
          transform: scale(1.5);
          transition: all 0.5s;
        }

        .album-card:hover .visual-icon {
          opacity: 0.5;
          transform: scale(1);
        }

        .category-tag {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .album-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .album-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .album-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #999;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .album-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #111;
          line-height: 1.4;
          min-height: 3.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .view-album-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-red);
          text-decoration: none;
          font-weight: 800;
          font-size: 0.95rem;
          padding-top: 1rem;
          border-top: 1px solid #f5f5f5;
          transition: gap 0.3s;
        }

        .view-album-btn:hover {
          gap: 1rem;
        }

        /* List View */
        .albums-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .album-card.mode-list .album-card-inner {
          display: flex;
          background: white;
          border-radius: 12px;
          border: 1px solid #eee;
          overflow: hidden;
          align-items: center;
        }

        .album-card.mode-list .album-visual {
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }

        .album-card.mode-list .visual-icon {
          transform: scale(0.8);
        }

        .album-card.mode-list .category-tag {
          display: none;
        }

        .album-card.mode-list .album-info {
          flex-grow: 1;
          padding: 1.5rem 2.5rem;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .album-card.mode-list .album-title {
          min-height: auto;
          margin: 0;
          font-size: 1.1rem;
          width: 50%;
        }

        .album-card.mode-list .view-album-btn {
          border: none;
          padding: 0;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 8rem 0;
        }

        .empty-icon {
          color: #eee;
          margin-bottom: 2rem;
        }

        .empty-state h3 {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .empty-state p {
          color: #888;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .reset-btn {
          padding: 1rem 2.5rem;
          background: #111;
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s;
        }

        .reset-btn:hover {
          background: var(--primary-red);
          transform: translateY(-3px);
        }

        @media (max-width: 991px) {
          .hero-title { font-size: 3rem; }
          .controls-wrapper { gap: 1rem; }
          .filters-row { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .view-toggles { display: none; }
          .album-card.mode-list .album-info { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .album-card.mode-list .album-title { width: 100%; }
        }

        @media (max-width: 768px) {
          .gallery-hero { height: 400px; }
          .hero-title { font-size: 2.5rem; }
          .stats-strip { gap: 1.5rem; }
          .stat-num { font-size: 1.5rem; }
        }
      `}} />
    </div>
  );
};

export default GalleryPage;
