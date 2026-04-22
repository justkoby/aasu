import React from 'react';
import { Target, Award, Briefcase, Laptop, HandHeart, Headphones, Search, AlertCircle, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OpportunitiesSection = () => {
  const workWithUs = [
    { icon: <Target size={28} />, title: "Become a Member", link: "/become-a-member" },
    { icon: <Briefcase size={28} />, title: "Careers in AASU", link: "mailto:info@aasuonline.org" },
    { icon: <Laptop size={28} />, title: "Internship Opportunities", link: "/internship" },
    { icon: <HandHeart size={28} />, title: "Volunteer with Us", link: "/volunteer" }
  ];

  const opportunity = [
    { icon: <Headphones size={28} />, title: "Help Desk" },
    { icon: <Search size={28} />, title: "Opportunity Portal", sub: "Apply for Fellowships & Conferences" }
  ];

  const reachOut = [
    { icon: <AlertCircle size={28} />, title: "Report a Case" },
    { icon: <GraduationCap size={28} />, title: "Scholarships" }
  ];

  return (
    <section className="opportunities-section">
      <div className="container opp-grid">
        {/* Left Column */}
        <div className="opp-col">
          <h2 className="opp-title">Work With Us</h2>
          <div className="opp-list">
            {workWithUs.map((item, i) => {
              const isExternal = item.link?.startsWith('mailto:');
              const Component = isExternal ? 'a' : Link;
              const props = isExternal ? { href: item.link } : { to: item.link };

              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Component 
                    {...props}
                    className="opp-item" 
                  >
                    <div className="opp-icon">{item.icon}</div>
                    <div className="opp-text-wrapper">
                      <h4 className="opp-item-title">{item.title}</h4>
                    </div>
                  </Component>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="opp-col">
          <div className="opp-sub-col">
            <h2 className="opp-title">Opportunity</h2>
            <div className="opp-list">
              {opportunity.map((item, i) => (
                <motion.a 
                  href="#"
                  className="opp-item" 
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="opp-icon">{item.icon}</div>
                  <div className="opp-text-wrapper">
                    <h4 className="opp-item-title">{item.title}</h4>
                    {item.sub && <span className="opp-item-sub">{item.sub}</span>}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="opp-sub-col">
            <h2 className="opp-title">Reach Out</h2>
            <div className="opp-list">
              {reachOut.map((item, i) => (
                <motion.a 
                  href="#"
                  className="opp-item" 
                  key={i}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="opp-icon">{item.icon}</div>
                  <div className="opp-text-wrapper">
                    <h4 className="opp-item-title">{item.title}</h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .opportunities-section {
          background-color: #f6f7f9;
          padding: 80px 0 100px;
          color: #333;
        }

        .opp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .opp-col {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .opp-sub-col {
          display: flex;
          flex-direction: column;
        }

        .opp-title {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          color: #444;
          font-weight: 700;
          margin-bottom: 2rem;
          position: relative;
          padding-bottom: 1rem;
        }

        .opp-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: var(--primary-red);
        }

        .opp-list {
          display: flex;
          flex-direction: column;
        }

        .opp-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }

        .opp-item:last-child {
          border-bottom: none;
        }

        .opp-icon {
          color: var(--primary-red);
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          width: 55px;
          height: 55px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(203, 54, 49, 0.1);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .opp-item:hover .opp-icon {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(203, 54, 49, 0.2);
        }

        .opp-text-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .opp-item-title {
          font-weight: 700;
          font-size: 1rem;
          color: #222;
          transition: color 0.3s;
        }

        .opp-item-sub {
          font-size: 0.8rem;
          color: #777;
        }

        .opp-item:hover .opp-item-title {
          color: var(--primary-red);
        }

        @media (max-width: 900px) {
          .opp-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}} />
    </section>
  );
};

export default OpportunitiesSection;
