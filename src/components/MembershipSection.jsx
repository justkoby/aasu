import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MembershipSection = () => {
  const [hoveredDot, setHoveredDot] = useState(null);

  const memberData = [
    { id: 'ghana', x: '22.71%', y: '41.74%', country: 'Ghana', unions: [
      { name: 'National Union Of Ghana Students (NUGS)', type: 'Full Member' },
      { name: 'Graduate Students Association Of Ghana (GRASAG)', type: 'Associate Member' }
    ]},
    { id: 'nigeria', x: '35.94%', y: '40.27%', country: 'Nigeria', unions: [
      { name: 'National Association of Nigerian Students (NANS)', type: 'Full Member' }
    ]},
    { id: 'kenya', x: '75.84%', y: '51.51%', country: 'Kenya', unions: [
      { name: 'Kenya University Students\' Organization (KUSO)', type: 'Full Member' }
    ]},
    { id: 'south-africa', x: '57.79%', y: '90.60%', country: 'South Africa', unions: [
      { name: 'South African Union of Students (SAUS)', type: 'Full Member' }
    ]},
    { id: 'egypt', x: '66.15%', y: '16.00%', country: 'Egypt', unions: [
      { name: 'Egyptian Students Union', type: 'Full Member' }
    ]},
    { id: 'senegal', x: '4.38%', y: '33.15%', country: 'Senegal', unions: [
      { name: 'Senegal National Students Union', type: 'Full Member' }
    ]},
    { id: 'ethiopia', x: '79.40%', y: '40.14%', country: 'Ethiopia', unions: [
      { name: 'Ethiopian Students Union', type: 'Full Member' }
    ]},
    { id: 'tanzania', x: '71.76%', y: '60.28%', country: 'Tanzania', unions: [
        { name: 'Tanzania Higher Learning Institutions Students\' Organization (TAHLISO)', type: 'Full Member' }
    ]},
    { id: 'zimbabwe', x: '63.87%', y: '77.05%', country: 'Zimbabwe', unions: [
        { name: 'Zimbabwe National Students Union (ZINASU)', type: 'Full Member' }
    ]},
    // North Africa
    { id: 'morocco', x: '14.40%', y: '8.67%', country: 'Morocco', unions: [{ name: 'Moroccan National Students Union', type: 'Full Member' }] },
    { id: 'algeria', x: '26.37%', y: '13.81%', country: 'Algeria', unions: [{ name: 'Algerian Students Union', type: 'Full Member' }] },
    { id: 'libya', x: '47.64%', y: '16.56%', country: 'Libya', unions: [{ name: 'Libyan National Students Union', type: 'Full Member' }] },
    { id: 'tunisia', x: '37.11%', y: '5.63%', country: 'Tunisia', unions: [{ name: 'Tunisian Students Union', type: 'Full Member' }] },
    
    // West Africa
    { id: 'mali', x: '18.64%', y: '28.85%', country: 'Mali', unions: [{ name: 'Malian National Students Union', type: 'Full Member' }] },
    { id: 'niger', x: '35.13%', y: '28.88%', country: 'Niger', unions: [{ name: 'Nigerien National Students Union', type: 'Full Member' }] },
    { id: 'burkina', x: '21.98%', y: '36.12%', country: 'Burkina Faso', unions: [{ name: 'Burkinabe National Students Union', type: 'Full Member' }] },
    { id: 'cote-ivoire', x: '16.54%', y: '42.29%', country: 'Ivory Coast', unions: [{ name: 'Ivorian National Students Union', type: 'Full Member' }] },
    { id: 'liberia', x: '11.22%', y: '43.72%', country: 'Liberia', unions: [{ name: 'Liberian National Students Union', type: 'Full Member' }] },
    { id: 'sierra-leone', x: '8.03%', y: '41.11%', country: 'Sierra Leone', unions: [{ name: 'Sierra Leonean National Students Union', type: 'Full Member' }] },
    { id: 'guinea', x: '8.60%', y: '39.16%', country: 'Guinea', unions: [{ name: 'Guinean National Students Union', type: 'Full Member' }] },
    { id: 'gambia', x: '3.20%', y: '34.58%', country: 'Gambia', unions: [{ name: 'Gambian National Students Union', type: 'Full Member' }] },
    { id: 'mauritania', x: '9.18%', y: '24.17%', country: 'Mauritania', unions: [{ name: 'Mauritanian National Students Union', type: 'Full Member' }] },
    { id: 'togo', x: '25.27%', y: '40.91%', country: 'Togo', unions: [{ name: 'Togolese National Students Union', type: 'Full Member' }] },
    { id: 'benin', x: '27.26%', y: '40.00%', country: 'Benin', unions: [{ name: 'Beninese National Students Union', type: 'Full Member' }] },
    { id: 'guinea-bissau', x: '3.38%', y: '36.72%', country: 'Guinea-Bissau', unions: [{ name: 'Guinea-Bissau National Students Union', type: 'Full Member' }] },

    // Central Africa
    { id: 'chad', x: '49.67%', y: '31.68%', country: 'Chad', unions: [{ name: 'Chadian National Students Union', type: 'Full Member' }] },
    { id: 'cameroon', x: '40.99%', y: '42.46%', country: 'Cameroon', unions: [{ name: 'Cameroonian National Students Union', type: 'Full Member' }] },
    { id: 'car', x: '52.68%', y: '43.46%', country: 'Central African Republic', unions: [{ name: 'Central African National Students Union', type: 'Full Member' }] },
    { id: 'gabon', x: '39.95%', y: '53.08%', country: 'Gabon', unions: [{ name: 'Gabonese National Students Union', type: 'Full Member' }] },
    { id: 'congo', x: '44.43%', y: '52.89%', country: 'Congo (Brazzaville)', unions: [{ name: 'Congolese National Students Union', type: 'Full Member' }] },
    { id: 'drc', x: '53.80%', y: '57.35%', country: 'DRC', unions: [{ name: 'National Union of Congolese Students', type: 'Full Member' }] },
    { id: 'equatorial-guinea', x: '37.61%', y: '49.00%', country: 'Equatorial Guinea', unions: [{ name: 'Equatorial Guinean Students Union', type: 'Full Member' }] },
    { id: 'sao-tome', x: '33.62%', y: '50.92%', country: 'Sao Tome and Principe', unions: [{ name: 'Sao Tomean Students Union', type: 'Full Member' }] },

    // East Africa
    { id: 'sudan', x: '65.37%', y: '31.77%', country: 'Sudan', unions: [{ name: 'Sudanese National Students Union', type: 'Full Member' }] },
    { id: 'south-sudan', x: '64.67%', y: '41.87%', country: 'South Sudan', unions: [{ name: 'South Sudanese National Students Union', type: 'Full Member' }] },
    { id: 'uganda', x: '68.18%', y: '50.26%', country: 'Uganda', unions: [{ name: 'Ugandan National Students Union', type: 'Full Member' }] },
    { id: 'rwanda', x: '64.89%', y: '54.53%', country: 'Rwanda', unions: [{ name: 'Rwandan National Students Union', type: 'Full Member' }] },
    { id: 'burundi', x: '64.96%', y: '56.40%', country: 'Burundi', unions: [{ name: 'Burundian National Students Union', type: 'Full Member' }] },
    { id: 'somalia', x: '87.16%', y: '45.36%', country: 'Somalia', unions: [{ name: 'Somali National Students Union', type: 'Full Member' }] },
    { id: 'eritrea', x: '78.42%', y: '32.22%', country: 'Eritrea', unions: [{ name: 'Eritrean National Students Union', type: 'Full Member' }] },
    { id: 'djibouti', x: '82.26%', y: '36.70%', country: 'Djibouti', unions: [{ name: 'Djiboutian National Students Union', type: 'Full Member' }] },
    { id: 'seychelles', x: '99.84%', y: '58.06%', country: 'Seychelles', unions: [{ name: 'Seychellois Students Union', type: 'Full Member' }] },

    // Southern Africa
    { id: 'angola', x: '48.54%', y: '66.69%', country: 'Angola', unions: [{ name: 'Angolan National Students Union', type: 'Full Member' }] },
    { id: 'namibia', x: '49.36%', y: '82.62%', country: 'Namibia', unions: [{ name: 'Namibian National Students Union', type: 'Full Member' }] },
    { id: 'botswana', x: '57.80%', y: '81.65%', country: 'Botswana', unions: [{ name: 'Botswanan National Students Union', type: 'Full Member' }] },
    { id: 'zambia', x: '62.10%', y: '69.14%', country: 'Zambia', unions: [{ name: 'Zambian National Students Union', type: 'Full Member' }] },
    { id: 'malawi', x: '70.92%', y: '69.31%', country: 'Malawi', unions: [{ name: 'Malawian National Students Union', type: 'Full Member' }] },
    { id: 'mozambique', x: '72.64%', y: '76.78%', country: 'Mozambique', unions: [{ name: 'Mozambican National Students Union', type: 'Full Member' }] },
    { id: 'madagascar', x: '88.10%', y: '76.92%', country: 'Madagascar', unions: [{ name: 'Madagascan National Students Union', type: 'Full Member' }] },
    { id: 'lesotho', x: '62.65%', y: '92.02%', country: 'Lesotho', unions: [{ name: 'Lesotho National Students Union', type: 'Full Member' }] },
    { id: 'eswatini', x: '67.06%', y: '87.50%', country: 'Eswatini', unions: [{ name: 'Eswatini National Students Union', type: 'Full Member' }] },
    { id: 'comoros', x: '84.02%', y: '67.43%', country: 'Comoros', unions: [{ name: 'Comorian Students Union', type: 'Full Member' }] },
    { id: 'mauritius', x: '98.50%', y: '85.00%', country: 'Mauritius', unions: [{ name: 'Mauritian Students Union', type: 'Full Member' }] }
  ];

  const priorities = [
    { title: "EDUCATION & STUDENTS' RIGHTS", icon: '/EDUCATION AND STUDENT RIGHTS.png', link: '/priority/education' },
    { title: 'GENDER EQUITY & SOCIAL INCLUSION', icon: '/GENDER ADVOCACY.png', link: '/priority/gender' },
    { title: 'DEMOCRACY, GOOD GOVERNANCE, PEACE & SECURITY', icon: '/DEMOCRACY AND GOOD GOVERNANCE.png', link: '/priority/democracy' },
    { title: 'CAPACITY BUILDING, SKILLS DEVELOPMENT & EMPLOYABILITY', icon: '/CAPACITY BUILDING.png', link: '/priority/capacity' },
    { title: 'MIGRATION, MOBILITY & EXCHANGES', icon: '/MIGRATION & MOBILITY.png', link: '/priority/migration' },
    { title: 'CLIMATE ACTION AND ENVIRONMENTAL SUSTAINABILITY', icon: '/ENVIRONMENT.png', link: '/priority/climate' },
    { title: 'PAN-AFRICANISM & AFRICAN CULTURE', icon: '/PAN-AFRICANISM AND AFRICAN CULTURE.png', link: '/priority/culture' },
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

          <Link to="/membership" className="list-link">For full membership list, see here..</Link>
        </div>

        {/* Right Column: Strategic Priorities */}
        <div className="priorities-col">
          <h2 className="section-title">Strategic Priorities</h2>
          <div className="priorities-list">
            {priorities.map((p, i) => (
              <motion.div 
                key={i} 
                className="priority-item-wrapper"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Link to={p.link} className="priority-item">
                  <div className="priority-content">
                    <img src={p.icon} alt={p.title} className="priority-icon" />
                    <span className="priority-text">{p.title}</span>
                  </div>
                  <div className="priority-dot" />
                </Link>
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
          color: white;
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
          gap: 1rem;
        }

        .priority-item-wrapper { width: 100%; }
        .priority-item {
          text-decoration: none;
          min-height: 65px;
          background: white;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }

        .priority-item:hover {
          background: #f8f8f8;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .priority-content {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          z-index: 2;
        }

        .priority-icon {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }

        .priority-text {
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.2px;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .priority-dot {
          width: 10px;
          height: 10px;
          background: var(--primary-red);
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
