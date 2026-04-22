import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
      <div className="container top-bar-content">
        <div className="updates-section">
          <div className="updates-label-container">
            <span className="updates-label">
              <span className="icon">📰</span> Updates
            </span>
          </div>
          <div className="marquee-outer">
            <div className="marquee-inner">
              <p>AASU ANNOUNCES RESULTS OF THE SECOND AND FINAL PHASE OF ELECTIONS FOR THE 14TH ELECTIVE CONGRESS</p>
              <p> | </p>
              <p>ALL-AFRICA STUDENTS UNION (AASU) CONDEMNS THE ATTACK ON STUDENTS IN KHARTOUM</p>
              <p> | </p>
              <p>AASU ANNOUNCES RESULTS OF THE SECOND AND FINAL PHASE OF ELECTIONS FOR THE 14TH ELECTIVE CONGRESS</p>
            </div>
          </div>
          <div className="marquee-nav">
            <ChevronLeft size={16} className="cursor-pointer hover:text-red-500 transition-colors" />
            <ChevronRight size={16} className="cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .top-bar {
          background: #111;
          height: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .top-bar.hidden {
          transform: translateY(-100%);
        }

        .top-bar-content {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .updates-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          width: 100%;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0 1rem;
        }

        .updates-label-container {
          padding-right: 1rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .updates-label {
          font-weight: 700;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-white);
          white-space: nowrap;
        }

        .marquee-outer {
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        .marquee-inner {
          display: flex;
          gap: 2rem;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }

        .marquee-inner p {
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-nav {
          display: flex;
          gap: 0.5rem;
          color: var(--text-white);
          opacity: 0.6;
          padding-left: 1rem;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}} />
    </div>
  );
};

export default TopBar;
