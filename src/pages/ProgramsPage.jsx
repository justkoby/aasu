
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Target, Users, Globe, Award, 
  ArrowRight, CheckCircle2, Zap, BarChart3,
  Heart, Shield, BookOpen, Briefcase, Handshake, Landmark, Palette
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectExplorer from '../components/ProjectExplorer';
import { flagshipPrograms, impactStats } from '../data/programsData';

import './ProgramsPage.css';

const ProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <span className="hero-badge">Programs & Impact</span>
            <h1>DRIVING CHANGE <br /><span className="text-gradient">ACROSS AFRICA</span></h1>
            <p>From advocacy and policy to digital skills and climate action, our programs are designed to empower students and transform the continent.</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Strip */}
      <section className="impact-strip">
        <div className="container">
          <div className="stats-grid">
            {impactStats && impactStats.length > 0 ? impactStats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="stat-value">{stat.value}</h2>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-suffix">{stat.suffix}</p>
              </motion.div>
            )) : null}
          </div>
        </div>
      </section>

      {/* Flagship Programs Section */}
      <section className="flagships-section">
        <div className="container">
          <div className="section-header">
            <Rocket className="header-icon" />
            <div className="header-text">
              <h2 className="section-title">FLAGSHIP PROGRAMS</h2>
              <p>Our high-impact, cross-continental initiatives shaping Africa's future.</p>
            </div>
          </div>

          <div className="flagship-bento-grid">
            {flagshipPrograms && flagshipPrograms.length > 0 ? flagshipPrograms.map((prog, idx) => {
              // Assign themes and layout based on index (simulating the bento pattern)
              const isWide = idx === 0;
              const themes = ['theme-forest', 'theme-peach', 'theme-cream', 'theme-tan', 'theme-peach', 'theme-cream', 'theme-forest'];
              const currentTheme = themes[idx % themes.length];
              const cardNumber = (idx + 1).toString().padStart(2, '0');

              const getPillarLink = (area) => {
                const map = {
                  "Education & Students' Rights": "education",
                  "Gender Equality & Inclusive Participation": "gender",
                  "Migration, Mobility & Exchanges": "migration",
                  "Capacity Building & Employability": "capacity",
                  "Democracy & Peace building": "democracy",
                  "Climate Action & Sustainability": "climate",
                  "Pan-Africanism & African Culture": "culture"
                };
                return `/priority/${map[area] || 'education'}`;
              };

              if (isWide) {
                return (
                  <motion.div 
                    key={prog.id}
                    className={`flagship-card wide ${currentTheme}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="wide-content">
                      <span className="card-number">{cardNumber}. {prog.title}</span>
                      <p className="card-desc">{prog.overview}</p>
                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        {prog.focusPoints.slice(0, 2).map((p, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffc107' }}></div>
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="card-footer">
                        <Link to={getPillarLink(prog.area)} className="btn-primary" style={{ background: '#ffc107', color: '#1a3a3a', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                          Explore Initiative <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                    <div className="wide-visual">
                      <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 5 }}>
                         <Shield className="card-icon" style={{ color: '#ffc107', width: '40px', height: '40px' }} />
                      </div>
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(26, 58, 58, 0.6)' }}></div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div 
                  key={prog.id}
                  className={`flagship-card ${currentTheme}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <span className="card-number">{cardNumber}. {prog.title}</span>
                    <p className="card-desc">{prog.overview}</p>
                    <span className="card-badge">STRATEGIC</span>
                  </div>
                  <div className="card-footer">
                    {idx === 2 && <span className="card-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Current Cycle</span>}
                    {idx === 4 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                         <div style={{ display: 'flex' }}>
                            {[1,2,3].map(i => (
                              <div key={i} style={{ width: '25px', height: '25px', borderRadius: '50%', background: '#ccc', border: '2px solid white', marginLeft: i > 1 ? '-10px' : 0 }}></div>
                            ))}
                         </div>
                         <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>+2k Trained</span>
                      </div>
                    )}
                    <Link to={prog.path || getPillarLink(prog.area)} className="explore-link">
                      Explore Strategy <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            }) : null}
          </div>
        </div>
      </section>

      {/* Interactive Project Explorer Section */}
      <ProjectExplorer />

      {/* Cross-Cutting Programs Section */}
      <section className="cross-cutting-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-content">
              <h2>Cross-Cutting Initiatives</h2>
              <p>Partnerships and global engagements that span across all our priority areas.</p>
              <div className="cta-grid">
                <div className="cta-card">
                  <Handshake className="cta-icon" />
                  <h4>Partnerships Program</h4>
                  <p>20+ co-created initiatives with UNESCO, Oxfam, and AU bodies.</p>
                </div>
                <div className="cta-card">
                  <Globe className="cta-icon" />
                  <h4>Global Engagement</h4>
                  <p>50+ international conferences and high-level AU summits attended.</p>
                </div>
              </div>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">Partner with AASU <ArrowRight size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramsPage;
