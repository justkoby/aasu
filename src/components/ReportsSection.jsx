import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsEventsData } from '../data/newsEventsData';
import { reportsData } from '../data/reportsData';
import { usePublishedPressReleases } from '../hooks/useContent';

const ReportsSection = () => {
  const { data: dbStatements, loading, error } = usePublishedPressReleases({ limit: 4 });

  const latestStatements = useMemo(() => {
    if (error || dbStatements === null) {
      if (error) {
        console.warn("[AASU Web ReportsSection] Using static fallback data due to Supabase error:", error.message);
      }
      return newsEventsData
        .filter(item => item.type === 'Press Release' || item.id.includes('statement') || item.id.includes('nels-spring'))
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 2);
    }
    return dbStatements.slice(0, 2);
  }, [dbStatements, error]);

  // Get latest 3 reports from static reportsData
  const latestReports = useMemo(() => {
    return [...reportsData]
      .sort((a, b) => parseInt(b.year) - parseInt(a.year))
      .slice(0, 3);
  }, []);

  // Combine them: statements first, then reports
  const combinedItems = [
    ...latestStatements.map(s => ({
      id: s.id || s.slug,
      type: 'statement',
      tags: ['Statement', s.category || s.pressReleaseCategory || 'Official'],
      title: s.title,
      date: `Updated on ${s.date}`,
      img: s.img || s.featured_image_url || '/placeholder.jpg',
      link: s.redirectUrl || `/news/${s.slug || s.id}`
    })),
    ...latestReports.map(r => ({
      id: r.id,
      type: 'report',
      tags: ['Report', r.priorityArea],
      title: r.title,
      date: `Released in ${r.year}`,
      img: r.thumbnail || '/report-thumb-placeholder.jpg',
      link: '/reports'
    }))
  ];

  return (
    <section className="reports-section">
      <div className="container">
        <div className="reports-header">
          <h2 className="reports-main-title">Reports &amp; Statements</h2>
          <Link to="/reports" className="reports-view-all">
            View Statements <ArrowRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="reports-grid">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="report-card" style={{ opacity: 0.6 }}>
                <div className="report-media" style={{ background: '#222' }} />
                <div className="report-content">
                  <div style={{ height: '14px', width: '60px', background: '#333' }} />
                  <div style={{ height: '22px', width: '100%', background: '#333' }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="reports-grid">
            {combinedItems.map((report, i) => (
              <Link 
                to={report.link} 
                key={report.id || i} 
                className="report-card"
              >
                <div className="report-media">
                  {report.img && report.img !== 'placeholder' ? (
                    <div 
                      className="report-image" 
                      style={{ backgroundImage: `url('${report.img}')` }}
                    ></div>
                  ) : (
                    <div className="report-placeholder">
                      <span>{report.type.toUpperCase()}</span>
                    </div>
                  )}
                </div>
                
                <div className="report-content">
                  <div className="report-tags">
                    {report.tags.map((tag, idx) => (
                      <span key={idx} className="report-tag">{tag}</span>
                    ))}
                  </div>
                  <h4 className="report-title">{report.title}</h4>
                  <span className="report-date">{report.date}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .reports-section {
          background-color: #111111;
          padding: 100px 0;
          color: white;
        }

        .reports-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
        }

        .reports-main-title {
          font-family: var(--font-headings);
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin: 0;
        }

        .reports-view-all {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #aaa;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.3s;
        }

        .reports-view-all:hover {
          color: var(--primary-red);
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
          gap: 1.5rem;
        }

        @media (min-width: 1200px) {
          .reports-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1.5rem;
          }
        }

        .report-card {
          text-decoration: none;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          cursor: pointer;
        }

        .report-media {
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 1 / 1.1;
          position: relative;
        }

        .report-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2a0808 0%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.5s ease;
        }

        .report-placeholder span {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 900;
          letter-spacing: 1px;
          color: white;
          opacity: 0.9;
        }

        .report-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .report-card:hover .report-placeholder,
        .report-card:hover .report-image {
          transform: scale(1.05);
        }

        .report-content {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .report-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .report-tag {
          background: #222;
          color: #ccc;
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .report-title {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s;
        }

        .report-card:hover .report-title {
          color: var(--primary-red);
        }

        .report-date {
          font-size: 0.8rem;
          color: #777;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .reports-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .report-media {
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-width: 600px) {
          .reports-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 1.5rem;
            padding: 0 1rem 1rem;
            margin: 0 -1rem;
            scrollbar-width: none;
          }
          .reports-grid::-webkit-scrollbar {
            display: none;
          }
          .report-card {
            min-width: 280px;
            scroll-snap-align: start;
          }
          .reports-header {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}} />
    </section>
  );
};

export default ReportsSection;
