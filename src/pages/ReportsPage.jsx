import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, FileText, Download, Calendar, Tag, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { reportsData, DOCUMENT_TYPES, PRIORITY_AREAS, getYears } from '../data/reportsData';

const ITEMS_PER_PAGE = 6;

const ReportsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedArea, setSelectedArea] = useState('All Priority Areas');
  const [selectedType, setSelectedType] = useState('All Document Types');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter reports based on search and dropdowns
  const filteredReports = useMemo(() => {
    return reportsData.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           report.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === 'All Years' || report.year === selectedYear;
      const matchesArea = selectedArea === 'All Priority Areas' || report.priorityArea === selectedArea;
      const matchesType = selectedType === 'All Document Types' || report.type === selectedType;

      return matchesSearch && matchesYear && matchesArea && matchesType;
    });
  }, [searchQuery, selectedYear, selectedArea, selectedType]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear, selectedArea, selectedType]);

  // Pagination logic
  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const years = getYears();
  const documentTypes = Object.values(DOCUMENT_TYPES);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="reports-page">
      {/* Hero Section */}
      <section className="reports-hero">
        <div className="container">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="page-title"
            >
              Reports & <span className="text-red">Resources</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="page-subtitle"
            >
              Access our official reports, policy briefs, and strategic documents tracking the progress of student advocacy across Africa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-card">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search for reports, topics, or keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="filters-grid">
              <div className="filter-group">
                <label><Calendar size={14} /> Year</label>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                  <option>All Years</option>
                  {years.map(y => <option key={y}>{y}</option>)}
                </select>
              </div>

              <div className="filter-group">
                <label><Tag size={14} /> Priority Area</label>
                <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                  <option>All Priority Areas</option>
                  {PRIORITY_AREAS.map(area => <option key={area}>{area}</option>)}
                </select>
              </div>

              <div className="filter-group">
                <label><FileText size={14} /> Document Type</label>
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                  <option>All Document Types</option>
                  {documentTypes.map(type => <option key={type}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="results-section">
        <div className="container">
          <AnimatePresence mode="wait">
            {paginatedReports.length > 0 ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="results-count">
                  Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredReports.length)} of {filteredReports.length} results
                </div>

                <div className="reports-grid">
                  {paginatedReports.map((report, idx) => (
                    <motion.div 
                      key={report.id}
                      className="report-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="report-icon">
                        <FileText size={40} />
                      </div>
                      <div className="report-info">
                        <span className="report-tag">{report.type}</span>
                        <h3 className="report-title">{report.title}</h3>
                        <p className="report-desc">{report.description}</p>
                        <div className="report-meta">
                          <span><Calendar size={12} /> {report.year}</span>
                          <span><Tag size={12} /> {report.priorityArea}</span>
                        </div>
                        <a 
                          href={report.fileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`download-btn ${report.fileUrl === '#' ? 'disabled' : ''}`}
                          onClick={(e) => { if(report.fileUrl === '#') e.preventDefault(); }}
                        >
                          <Download size={16} /> {report.fileUrl === '#' ? 'Coming Soon' : 'Download PDF'}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button 
                      className="pagination-btn"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button 
                      className="pagination-btn"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="empty-state"
              >
                <div className="empty-icon">
                  <Info size={48} />
                </div>
                <h2>No reports to show yet</h2>
                <p>
                  We are currently organizing our digital archive. 
                  Please check back soon for our latest reports, policy briefs, and publications.
                </p>
                { (searchQuery || selectedYear !== 'All Years' || selectedArea !== 'All Priority Areas' || selectedType !== 'All Document Types') && (
                  <button 
                    className="reset-btn"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedYear('All Years');
                      setSelectedArea('All Priority Areas');
                      setSelectedType('All Document Types');
                    }}
                  >
                    Clear all filters
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .reports-page {
          background-color: #f8fafc;
          min-height: 100vh;
          padding-bottom: 100px;
        }

        /* Hero Section */
        .reports-hero {
          background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/header-2.jpg') center/cover no-repeat;
          padding: 280px 0 120px;
          color: white;
          text-align: center;
        }

        .page-title {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .text-red { color: var(--primary-red); }

        /* Filter Section */
        .filter-section {
          margin-top: -50px;
          position: relative;
          z-index: 10;
        }

        .filter-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .search-box {
          position: relative;
          margin-bottom: 2rem;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-box input {
          width: 100%;
          padding: 1.25rem 1.25rem 1.25rem 3.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          background: #fdfdfd;
        }

        .search-box input:focus {
          border-color: var(--primary-red);
          box-shadow: 0 0 0 4px rgba(203, 54, 49, 0.1);
        }

        .filters-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-group select {
          padding: 0.85rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          color: #1e293b;
          outline: none;
          cursor: pointer;
          background-color: #fff;
          transition: all 0.2s ease;
        }

        .filter-group select:hover {
          border-color: #cbd5e1;
        }

        /* Results Grid */
        .results-section {
          padding: 80px 0;
        }

        .results-count {
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .report-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .report-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
          border-color: var(--primary-red);
        }

        .report-icon {
          color: var(--primary-red);
          background: rgba(203, 54, 49, 0.05);
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .report-info {
          flex: 1;
        }

        .report-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary-red);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          display: block;
        }

        .report-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: #0f172a;
          line-height: 1.3;
        }

        .report-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .report-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .report-meta span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #0f172a;
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .download-btn:hover {
          background: var(--primary-red);
        }

        .download-btn.disabled {
          background: #e2e8f0;
          color: #94a3b8;
          cursor: not-allowed;
        }

        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 4rem;
        }

        .pagination-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pagination-btn:hover:not(:disabled) {
          border-color: var(--primary-red);
          color: var(--primary-red);
          background: rgba(203, 54, 49, 0.05);
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-number {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pagination-number:hover {
          border-color: var(--primary-red);
          color: var(--primary-red);
        }

        .pagination-number.active {
          background: var(--primary-red);
          border-color: var(--primary-red);
          color: white;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          max-width: 500px;
          margin: 100px auto;
          padding: 3rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .empty-icon {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .empty-state h2 {
          font-family: var(--font-headings);
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .empty-state p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .reset-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .reset-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .page-title { font-size: 2.2rem; }
          .page-subtitle { font-size: 1rem; }
          .reports-hero { padding: 200px 0 100px; }
          .filters-grid { grid-template-columns: 1fr; }
          .filter-card { 
            padding: 1.5rem; 
            margin: 0 1rem;
            width: auto;
            overflow: hidden;
          }
          .filter-group select {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          .search-box input {
            box-sizing: border-box;
          }
          .reports-grid { grid-template-columns: 1fr; }
          .report-card { 
            flex-direction: column; 
            padding: 1.5rem;
            gap: 1rem;
          }
          .report-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}} />
    </div>
  );
};

export default ReportsPage;
