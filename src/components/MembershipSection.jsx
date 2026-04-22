import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MembershipSection = () => {
  const [hoveredDot, setHoveredDot] = useState(null);

  const memberData = [
    { id: 'ghana', x: '30%', y: '43%', country: 'Ghana', unions: [
      { name: 'National Union Of Ghana Students (NUGS)', type: 'Full Member' },
      { name: 'Graduate Students Association Of Ghana (GRASAG)', type: 'Associate Member' }
    ]},
    { id: 'nigeria', x: '35%', y: '45%', country: 'Nigeria', unions: [
      { name: 'National Association of Nigerian Students (NANS)', type: 'Full Member' }
    ]},
    { id: 'kenya', x: '73%', y: '55%', country: 'Kenya', unions: [
      { name: 'Kenya University Students\' Organization (KUSO)', type: 'Full Member' }
    ]},
    { id: 'south-africa', x: '58%', y: '88%', country: 'South Africa', unions: [
      { name: 'South African Union of Students (SAUS)', type: 'Full Member' }
    ]},
    { id: 'egypt', x: '68%', y: '20%', country: 'Egypt', unions: [
      { name: 'Egyptian Students Union', type: 'Full Member' }
    ]},
    { id: 'senegal', x: '10%', y: '35%', country: 'Senegal', unions: [
      { name: 'Senegal National Students Union', type: 'Full Member' }
    ]},
    { id: 'ethiopia', x: '78%', y: '45%', country: 'Ethiopia', unions: [
      { name: 'Ethiopian Students Union', type: 'Full Member' }
    ]},
    { id: 'tanzania', x: '70%', y: '62%', country: 'Tanzania', unions: [
        { name: 'Tanzania Higher Learning Institutions Students\' Organization (TAHLISO)', type: 'Full Member' }
    ]},
    { id: 'zimbabwe', x: '62%', y: '76%', country: 'Zimbabwe', unions: [
        { name: 'Zimbabwe National Students Union (ZINASU)', type: 'Full Member' }
    ]}
  ];

  const priorities = [
    { title: 'EDUCATION & STUDENTS\' RIGHTS', img: '/education-768x180.webp' },
    { title: 'GENDER EQUITY & SOCIAL INCLUSION', img: '/gender-768x180.webp' },
    { title: 'DEMOCRACY, GOOD GOVERNANCE, PEACE & SECURITY', img: '/Democracy-768x180.webp' },
    { title: 'CAPACITY BUILDING, SKILLS DEVELOPMENT & EMPLOYABILITY', img: '/capacity building-768x180.webp' },
    { title: 'MIGRATION, MOBILITY & EXCHANGES', img: '/migration-768x180.webp' },
    { title: 'CLIMATE ACTION AND ENVIRONMENTAL SUSTAINABILITY', img: '/environment -768x180.webp' },
    { title: 'PAN-AFRICANISM & AFRICAN CULTURE', img: '/pan-africanism-768x180.webp' },
  ];

  return (
    <section className="red-section">
      <div className="container red-grid">
        {/* Left Column: Membership */}
        <div className="membership-col">
          <h2 className="section-title">Membership</h2>
          <p className="section-desc">
            Membership of the All-Africa Students Union (AASU) comprises all national student unions 
            across the 54 African Countries. The organization is also open to youth groups and all 
            student groups (from primary to tertiary level) on the continent. (Senior High Schools, 
            Universities, Polytechnics, Nursing Training Institutions, etc).
          </p>
          
          <ul className="region-list">
            <li><span>•</span> West Africa</li>
            <li><span>•</span> Southern Africa</li>
            <li><span>•</span> East Africa</li>
            <li><span>•</span> Central Africa</li>
            <li><span>•</span> North Africa</li>
          </ul>

          <div className="map-container">
            {/* Africa Map Base */}
            <img src="/africa.svg" className="africa-map" alt="Africa Map" />

            {/* Pulsing Dots Overlay */}
            <div className="dots-overlay">
              {memberData.map((dot) => (
                <div 
                  key={dot.id}
                  className="dot-wrapper"
                  style={{ left: dot.x, top: dot.y }}
                  onMouseEnter={() => setHoveredDot(dot)}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  <div className="dot" />
                  <div className="dot-pulse" />
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredDot?.id === dot.id && (
                      <motion.div 
                        className="map-tooltip"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      >
                         <h4 className="country-name">{dot.country}</h4>
                         {dot.unions.map((u, i) => (
                           <div key={i} className="union-info">
                             <p className="union-name">{u.name}</p>
                             <p className="union-type">{u.type}</p>
                           </div>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <a href="#" className="list-link">For full membership list, see here..</a>
        </div>

        {/* Right Column: Strategic Priorities */}
        <div className="priorities-col">
          <h2 className="section-title">Strategic Priorities</h2>
          <div className="priorities-list">
            {priorities.map((p, i) => (
              <motion.div 
                key={i} 
                className="priority-item"
                whileHover={{ x: 10, scale: 1.02 }}
                style={{ backgroundImage: `url('${p.img}')` }}
              >
                <div className="priority-overlay" />
                <span className="priority-text">{p.title}</span>
                <div className="priority-dot" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .red-section {
          background: var(--primary-red);
          color: white;
          padding: 100px 0;
          position: relative;
          min-height: 900px;
          z-index: 10;
        }

        .red-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
        }

        .section-title {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .section-desc {
          line-height: 1.7;
          font-size: 1rem;
          opacity: 0.95;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .region-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 2rem;
          list-style: none;
          margin-bottom: 4rem;
        }

        .region-list li {
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .map-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .africa-map {
          width: 100%;
          height: auto;
          opacity: 0.8;
        }

        .dots-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .dot-wrapper {
          position: absolute;
          width: 12px;
          height: 12px;
          transform: translate(-50%, -50%);
          pointer-events: auto;
          cursor: pointer;
          z-index: 5;
        }

        .dot {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .dot-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 50%;
          animation: mapPulse 2s infinite;
          z-index: 1;
        }

        @keyframes mapPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }

        .map-tooltip {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          color: #333;
          padding: 1.25rem;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          width: 320px;
          z-index: 100;
          pointer-events: none;
        }

        .map-tooltip h4 {
          font-weight: 800;
          color: var(--primary-red);
          margin-bottom: 0.75rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.5rem;
          font-size: 1rem;
        }

        .union-info {
          margin-bottom: 0.75rem;
        }

        .union-info:last-child {
          margin-bottom: 0;
        }

        .union-name {
          font-weight: 700;
          font-size: 0.85rem;
          line-height: 1.4;
          margin-bottom: 0.15rem;
        }

        .union-type {
          font-size: 0.75rem;
          color: #666;
        }

        .list-link {
          color: white;
          text-decoration: underline;
          font-size: 0.9rem;
          margin-top: 2rem;
          display: inline-block;
        }

        /* Priorities Column */
        .priorities-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .priority-item {
          height: 55px;
          background-size: cover;
          background-position: center;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .priority-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          transition: background 0.3s;
        }

        .priority-item:hover .priority-overlay {
          background: rgba(0, 0, 0, 0.2);
        }

        .priority-text {
          position: relative;
          z-index: 2;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }

        .priority-dot {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .red-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .section-title {
            font-size: 2.2rem;
          }
        }
      `}} />
    </section>
  );
};

export default MembershipSection;
