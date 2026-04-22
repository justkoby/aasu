import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ReportsSection = () => {
  const reports = [
    {
      type: 'placeholder',
      tags: ['Statements'],
      title: 'Statement on the Situation in Sudan',
      date: 'Updated on Jan 5, 2026'
    },
    {
      type: 'placeholder',
      tags: ['Statements'],
      title: 'Civil Society Collective Statement on Public Education',
      date: 'Updated on Nov 6, 2025'
    },
    {
      type: 'placeholder',
      tags: ['Statements'],
      title: 'Students urge governments to place education at the heart of social progress',
      date: 'Updated on Nov 3, 2025'
    },
    {
      type: 'image',
      img: '/education-768x180.webp',
      tags: ['Statements', 'Press release'],
      title: 'Crackdown on Protests in Member States',
      date: 'Updated on Sep 9, 2025'
    }
  ];

  return (
    <section className="reports-section">
      <div className="container">
        <div className="reports-header">
          <h2 className="reports-main-title">Reports & Statements</h2>
          <a href="#" className="reports-view-all">
            View Statements <ArrowRight size={16} />
          </a>
        </div>

        <div className="reports-grid">
          {reports.map((report, i) => (
            <motion.a 
              href="#" 
              key={i} 
              className="report-card"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="report-media">
                {report.type === 'placeholder' ? (
                  <div className="report-placeholder">
                    <span>STATEMENT</span>
                  </div>
                ) : (
                  <div 
                    className="report-image" 
                    style={{ backgroundImage: `url('${report.img}')` }}
                  ></div>
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
            </motion.a>
          ))}
        </div>
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
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
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
            grid-template-columns: 1fr;
          }
          .reports-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}} />
    </section>
  );
};

export default ReportsSection;
