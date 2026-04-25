import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X, SlidersHorizontal } from 'lucide-react';
import searchData from '../data/searchData';

const CATEGORY_COLORS = {
  'Who We Are': '#2563EB',
  'What We Do': '#16A34A',
  'Student Voices': '#D97706',
  'Membership': '#7C3AED',
  'Contact': '#cb3631',
  'Resources': '#0891B2',
  'News & Events': '#E11D48',
};

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState('All');

  const query = searchParams.get('q') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
    setInputValue(query);
  }, [query]);

  const categories = useMemo(() => {
    return ['All', ...new Set(searchData.map(item => item.category))];
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase().trim();
    return searchData.filter(item => {
      const inTitle = item.title.toLowerCase().includes(lower);
      const inDesc = item.description.toLowerCase().includes(lower);
      const inKeywords = item.keywords.some(k => k.includes(lower));
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return (inTitle || inDesc || inKeywords) && matchesCategory;
    });
  }, [query, activeCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim() });
      setActiveCategory('All');
    }
  };

  const handleClear = () => {
    setInputValue('');
    setSearchParams({});
  };

  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i} className="search-highlight">{part}</mark> : part
    );
  };

  return (
    <div className="search-page">
      {/* Hero Search Bar */}
      <section className="search-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="search-hero-title">
              {query ? `Results for "${query}"` : 'Search AASU'}
            </h1>
            <p className="search-hero-subtitle">
              Search across all pages, topics, and resources on the AASU website.
            </p>

            <form onSubmit={handleSubmit} className="search-form">
              <div className="search-input-wrapper">
                <Search size={22} className="search-form-icon" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Search for pages, topics, people..."
                  className="search-form-input"
                  autoFocus
                />
                {inputValue && (
                  <button type="button" onClick={handleClear} className="search-clear-btn">
                    <X size={18} />
                  </button>
                )}
              </div>
              <button type="submit" className="search-submit-btn">
                Search
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Results Area */}
      <section className="search-results-section">
        <div className="container search-layout">

          {/* Sidebar Filters */}
          {query && (
            <motion.aside
              className="search-sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="filter-header">
                <SlidersHorizontal size={16} />
                <span>Filter by Category</span>
              </div>
              <ul className="category-filter-list">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`category-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    >
                      <span className="category-dot" style={{ background: CATEGORY_COLORS[cat] || '#cb3631' }}></span>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.aside>
          )}

          {/* Results List */}
          <div className="search-results-main">
            {!query && (
              <motion.div
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="empty-icon">
                  <Search size={60} strokeWidth={1} />
                </div>
                <h2>What are you looking for?</h2>
                <p>Type a keyword above to search across all pages and content on the AASU website.</p>
                <div className="suggestion-chips">
                  {['Executive Committee', 'Education', 'Membership', 'Women Leadership', 'History', 'Contact'].map(s => (
                    <button key={s} className="suggestion-chip" onClick={() => {
                      setInputValue(s);
                      setSearchParams({ q: s });
                    }}>{s}</button>
                  ))}
                </div>
              </motion.div>
            )}

            {query && results.length === 0 && (
              <motion.div
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="empty-icon text-muted">
                  <Search size={60} strokeWidth={1} />
                </div>
                <h2>No results found</h2>
                <p>We couldn't find anything matching <strong>"{query}"</strong>. Try a different keyword or browse a category below.</p>
                <div className="suggestion-chips">
                  {['Education', 'Membership', 'Contact', 'History'].map(s => (
                    <button key={s} className="suggestion-chip" onClick={() => {
                      setInputValue(s);
                      setSearchParams({ q: s });
                    }}>{s}</button>
                  ))}
                </div>
              </motion.div>
            )}

            {query && results.length > 0 && (
              <>
                <p className="results-count">
                  Showing <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''} for <strong>"{query}"</strong>
                  {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}
                </p>

                <AnimatePresence>
                  <div className="results-list">
                    {results.map((result, idx) => (
                      <motion.div
                        key={result.id}
                        className="result-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <div className="result-category-badge" style={{ background: CATEGORY_COLORS[result.category] || '#cb3631' }}>
                          {result.category}
                        </div>
                        <h3 className="result-title">
                          {highlightText(result.title, query)}
                        </h3>
                        <p className="result-description">
                          {highlightText(result.description, query)}
                        </p>
                        <Link to={result.path} className="result-link">
                          Visit Page <ArrowRight size={16} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .search-page {
          background-color: #f7f9fa;
          min-height: 100vh;
        }

        /* Hero */
        .search-hero {
          background: linear-gradient(135deg, #111 0%, #1e1e1e 100%);
          min-height: 600px;
          display: flex;
          align-items: center;
          padding: 180px 0 80px;
          border-bottom: 3px solid var(--primary-red);
        }

        .search-hero-title {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.5rem;
        }

        .search-hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 2rem;
        }

        /* Search Form */
        .search-form {
          display: flex;
          gap: 1rem;
          max-width: 780px;
        }

        .search-input-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border-radius: 12px;
          padding: 0 1.25rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          gap: 1rem;
          transition: box-shadow 0.3s ease;
        }

        .search-input-wrapper:focus-within {
          box-shadow: 0 8px 40px rgba(203, 54, 49, 0.3);
        }

        .search-form-icon {
          color: #aaa;
          flex-shrink: 0;
        }

        .search-form-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1.1rem;
          color: #111;
          padding: 1.1rem 0;
          background: transparent;
          font-family: var(--font-body);
        }

        .search-clear-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #aaa;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }

        .search-clear-btn:hover {
          color: var(--primary-red);
        }

        .search-submit-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 0 2.5rem;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: background 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }

        .search-submit-btn:hover {
          background: #a82b26;
          transform: translateY(-1px);
        }

        /* Results Layout */
        .search-results-section {
          padding: 60px 0 100px;
        }

        .search-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 3rem;
          align-items: flex-start;
        }

        /* Sidebar */
        .search-sidebar {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          position: sticky;
          top: 120px;
        }

        .filter-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #333;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eee;
        }

        .category-filter-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .category-filter-btn {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 0.6rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.95rem;
          color: #555;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.2s ease;
          font-family: var(--font-body);
        }

        .category-filter-btn:hover {
          background: #f4f4f4;
          color: #111;
        }

        .category-filter-btn.active {
          background: #f4f4f4;
          color: #111;
          font-weight: 700;
        }

        .category-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Results */
        .search-results-main {
          min-height: 400px;
        }

        .results-count {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eaeaea;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .result-card {
          background: white;
          border-radius: 12px;
          padding: 1.75rem 2rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.1);
        }

        .result-category-badge {
          display: inline-block;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          width: fit-content;
        }

        .result-title {
          font-family: var(--font-headings);
          font-size: 1.4rem;
          font-weight: 800;
          color: #111;
          margin: 0;
        }

        .result-description {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        .result-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--primary-red);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 0.5rem;
          transition: gap 0.2s ease;
        }

        .result-link:hover {
          gap: 0.7rem;
        }

        .search-highlight {
          background-color: rgba(203, 54, 49, 0.12);
          color: #cb3631;
          font-weight: 700;
          border-radius: 2px;
          padding: 0 2px;
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          grid-column: 1 / -1;
        }

        .empty-icon {
          color: #ccc;
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .empty-state h2 {
          font-family: var(--font-headings);
          font-size: 2rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.75rem;
        }

        .empty-state p {
          font-size: 1.05rem;
          color: #666;
          max-width: 500px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .suggestion-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .suggestion-chip {
          background: white;
          border: 2px solid #e5e5e5;
          color: #333;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          font-family: var(--font-body);
          transition: all 0.2s ease;
        }

        .suggestion-chip:hover {
          border-color: var(--primary-red);
          color: var(--primary-red);
          background: rgba(203, 54, 49, 0.04);
        }

        /* Responsive  */
        @media (max-width: 900px) {
          .search-layout {
            grid-template-columns: 1fr;
          }

          .search-sidebar {
            position: static;
          }

          .search-form {
            flex-direction: column;
          }

          .search-submit-btn {
            padding: 1rem;
            width: 100%;
          }

          .search-hero-title {
            font-size: 2rem;
          }
        }
      `}} />
    </div>
  );
};

export default SearchPage;
