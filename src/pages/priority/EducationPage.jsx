import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Target, Rocket, Globe, MessageSquare, ArrowRight, Shield, Accessibility, Layers, Users, FileText, CheckCircle2, BarChart3 } from 'lucide-react';
import ProjectExplorer from '../../components/ProjectExplorer';
import { flagshipPrograms, priorityProjects } from '../../data/programsData';

const EducationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#E53935"; // Red for Education
  const areaData = priorityProjects.find(a => a.area === "Education & Students' Rights");
  const educationProjects = areaData ? areaData.projects : [];
  const flagship = flagshipPrograms.find(f => f.area === "Education & Students' Rights");
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div className="priority-area-page education-page">
      {/* Hero Section */}
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-title"
            >
              EDUCATION & <span style={{ color: accentColor }}>STUDENTS’ RIGHTS</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-subtitle"
            >
              Advancing equitable, inclusive and student-centered education across Africa
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="section-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overview-text"
            >
              <div className="section-header">
                <Compass className="section-icon" style={{ color: accentColor }} />
                <h2 className="section-title">OVERVIEW</h2>
              </div>
              <p>
                Education is the foundation of Africa’s transformation—and at the center of that transformation are students.
              </p>
              <p>
                The All-Africa Students Union (AASU) champions an education system that is inclusive, accessible, equitable, and responsive to the realities of African learners. Across the continent, millions of students still face barriers to quality education—from limited access and underfunded institutions to policy gaps and systemic inequalities.
              </p>
              
              <div className={`mobile-read-more-content ${isReadMore ? 'expanded' : ''}`}>
                <p>
                  Through advocacy, partnerships, and student-led initiatives, AASU works to ensure that every African student has the opportunity to learn, thrive, and contribute meaningfully to society.
                </p>
                <p>
                  Aligned with global and continental frameworks such as Sustainable Development Goal 4 (SDG 4) and the Continental Education Strategy for Africa (CESA), this priority area positions students not just as participants—but as key drivers of education reform and innovation.
                </p>
              </div>

              <button 
                onClick={() => setIsReadMore(!isReadMore)}
                className="read-more-btn mobile-only"
                style={{
                  background: 'none',
                  border: `2px solid ${accentColor}`,
                  color: accentColor,
                  padding: '0.6rem 1.2rem',
                  borderRadius: '50px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  marginTop: '1rem',
                  cursor: 'pointer',
                  display: 'none' /* Hidden by default, shown in media query */
                }}
              >
                {isReadMore ? 'Show Less' : 'Read More'}
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overview-image-container dual-carousel">
              <div className="carousel-column col-1">
                <div className="carousel-track vertical reverse">
                  {[1, 2, 3, 4, 1, 2, 3, 4].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-edu-carousel-${num}.jpg`} alt={`Educational Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-column col-2">
                <div className="carousel-track vertical">
                  {[5, 6, 7, 8, 5, 6, 7, 8].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-edu-carousel-${num}.jpg`} alt={`Educational Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="accent-box" style={{ borderColor: accentColor }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Continental Program Ecosystem (Bento Grid) */}
      {flagship && (
        <section className="continental-ecosystem-section" style={{ backgroundColor: '#fdfdfd', padding: '100px 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '4rem' }}>
              <Rocket className="header-icon" style={{ color: accentColor, width: '40px', height: '40px' }} />
              <div className="header-text">
                <span className="section-tag" style={{ color: accentColor, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Continental Program Ecosystem</span>
                <h2 className="section-title" style={{ fontFamily: 'var(--font-headings)', fontSize: '2.5rem', fontWeight: 900, color: '#111' }}>Key Initiatives</h2>
              </div>
            </div>

            <div className="flagship-bento-grid">
              {/* Card 01: The Flagship (Wide) */}
              <motion.div 
                className="flagship-card wide theme-forest"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="wide-content">
                  <span className="card-number" style={{ color: '#ffc107' }}>01. {flagship.title}</span>
                  <p className="card-desc">{flagship.overview}</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {flagship.focusPoints.slice(0, 2).map((p, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffc107' }}></div>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="card-footer">
                    <a href="/contact" className="cta-btn" style={{ background: '#ffc107', color: '#1a3a3a', border: 'none', textDecoration: 'none', padding: '1rem 2rem', borderRadius: '50px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      Join Campaign <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
                <div className="wide-visual" style={{ background: "url('/university_campus_drawing.png') center/cover no-repeat", position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 5 }}>
                     <Shield className="card-icon" style={{ color: '#ffc107', width: '40px', height: '40px' }} />
                  </div>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(26, 58, 58, 0.6)' }}></div>
                </div>
              </motion.div>

              {/* Card 02: Research & Monitoring (SDG 4) */}
              <motion.div 
                className="flagship-card theme-peach"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <BarChart3 className="card-icon" style={{ color: '#4a2a1a', marginBottom: '1.5rem' }} />
                  <span className="card-number">02. SDG 4 Monitoring</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Continental research project tracking progress toward quality education via student-led data collection.</p>
                </div>
                <div className="card-footer">
                   <a href="/programs" className="explore-link" style={{ color: '#4a2a1a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              {/* Card 03: Advocacy (1 in 5) */}
              <motion.div 
                className="flagship-card theme-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Users className="card-icon" style={{ color: '#333', marginBottom: '1.5rem' }} />
                  <span className="card-number">03. 1 in 5 Campaign</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Advocating for increased domestic financing for education, ensuring every child has access to schooling.</p>
                  <span className="card-badge" style={{ background: '#e0e0e0', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800 }}>ACTIVE</span>
                </div>
                <div className="card-footer">
                   <a href="/programs" className="explore-link" style={{ color: '#333', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              {/* Card 04: Quality Assurance */}
              <motion.div 
                className="flagship-card theme-tan"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <CheckCircle2 className="card-icon" style={{ color: '#4a3a2a', marginBottom: '1.5rem' }} />
                  <span className="card-number">04. Quality Assurance</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Collaborating with AU bodies to harmonize quality standards and mobility of qualifications across Africa.</p>
                </div>
                <div className="card-footer">
                   <a href="/programs" className="explore-link" style={{ color: '#4a3a2a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              {/* Card 05: Literacy */}
              <motion.div 
                className="flagship-card theme-peach"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <BookOpen className="card-icon" style={{ color: '#4a2a1a', marginBottom: '1.5rem' }} />
                  <span className="card-number">05. Story Book Bank</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Scaling literacy by providing inclusive learning resources to underserved communities across 20+ countries.</p>
                </div>
                <div className="card-footer">
                   <a href="/programs" className="explore-link" style={{ color: '#4a2a1a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="focus-areas-section">
        <div className="container">
          <div className="section-header centered">
            <BookOpen className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">WHAT THIS AREA IS ABOUT</h2>
            <p className="section-subtitle">Promoting rights, access, and excellence in African education</p>
          </div>
          <div className="focus-grid">
            {[
              { icon: <Shield />, title: 'Academic Freedom', desc: 'Ensuring that students and institutions can operate in environments that promote open inquiry, critical thinking, and intellectual independence.' },
              { icon: <Accessibility />, title: 'Access to Quality Education', desc: 'Advocating for equitable access to education at all levels—especially for marginalized and underserved communities.' },
              { icon: <Layers />, title: 'Quality Assurance & Standards', desc: 'Promoting improved standards in teaching, learning, and institutional governance to ensure globally competitive education systems.' },
              { icon: <Users />, title: 'Student Welfare & Rights Protection', desc: 'Defending students against discrimination, exploitation, and unsafe learning conditions while promoting well-being on campuses.' },
              { icon: <MessageSquare />, title: 'Education Policy Engagement', desc: 'Ensuring that student voices are actively represented in national, regional, and continental education policy discussions.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="focus-card"
              >
                <div className="card-icon-wrap" style={{ color: accentColor }}>{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Section (🎯 CURRENT FOCUS) */}
      <section className="current-focus-section" style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', color: '#222' }}>
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">CURRENT FOCUS (2025–2026)</h2>
          </div>

          <div className="timeline-grid">
            {[
              { 
                num: '1', 
                title: 'Student-Centered Education Reform', 
                points: [
                  'Amplifying student voices in policy design and evaluation',
                  'Promoting inclusive and equitable education systems',
                  'Strengthening accountability mechanisms within education governance'
                ],
                footer: 'Students are being positioned as co-creators of education policy—not passive recipients.'
              },
              { 
                num: '2', 
                title: 'Digital Learning & Innovation', 
                points: [
                  'Expand access to digital learning tools and platforms',
                  'Promote digital literacy and AI awareness among students',
                  'Bridge the digital divide across urban and rural communities'
                ],
                footer: 'African students equipped with 21st-century skills for a global future.'
              },
              { 
                num: '3', 
                title: 'Education in Emergencies', 
                points: [
                  'Advocating for continuity of learning during emergencies',
                  'Supporting resilient education systems that can withstand shocks',
                  'Promoting inclusive policies for displaced and vulnerable students'
                ],
                footer: 'Education must remain accessible—even in the most challenging circumstances.'
              },
              { 
                num: '4', 
                title: 'Equity, Inclusion & Access', 
                points: [
                  'Gender-inclusive education systems',
                  'Support for marginalized and disadvantaged learners',
                  'Policies that eliminate systemic barriers to education'
                ],
                footer: 'The goal is clear: no student should be left behind.'
              }
            ].map((focus, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="focus-timeline-item"
              >
                <div className="focus-num" style={{ backgroundColor: accentColor }}>{focus.num}</div>
                <div className="focus-content">
                  <h3 className="focus-title">{focus.title}</h3>
                  <ul className="focus-list">
                    {focus.points.map((p, pIdx) => <li key={pIdx}>{p}</li>)}
                  </ul>
                  <p className="focus-footer">{focus.footer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Explorer */}
      <ProjectExplorer pillarIndex={0} hideTabs={true} />

      {/* Vision & Impact Statement */}
      <section className="vision-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="vision-card" style={{ borderColor: accentColor }}>
            <div className="section-header centered">
              <Globe className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">
              Education is not just a service—it is a right. And students are not just beneficiaries—they are partners in shaping the future.
            </p>
            <div className="vision-grid">
              <div className="vision-item">Every student has access to quality, inclusive education</div>
              <div className="vision-item">Education systems are resilient, innovative, and future-ready</div>
              <div className="vision-item">Students play a central role in policy, accountability, and reform</div>
            </div>

            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>Students are not beneficiaries—they are co-creators of education systems.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #000)` }}>
            <h2>Ready to make an impact?</h2>
            <div className="cta-links">
              <a href="/become-a-member" className="cta-btn">Join your National Student Union <ArrowRight size={18} /></a>
              <a href="/contact" className="cta-btn outline">Partner with AASU</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .priority-area-page {
          padding-top: 0;
        }

        /* Hero */
        .priority-hero {
          min-height: 75vh;
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          text-align: left;
          color: white;
          background: url('/header-2.jpg') center/cover no-repeat;
          padding-top: 220px;
          padding-bottom: 60px;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          text-align: left;
          margin: 0;
        }

        .priority-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .hero-title {
          font-family: var(--font-headings);
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          opacity: 0.9;
        }

        /* Common Section Styles */
        section {
          padding: 100px 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .section-header.centered {
          flex-direction: column;
          text-align: center;
          gap: 0.5rem;
        }

        .section-icon {
          width: 40px;
          height: 40px;
        }

        .section-title {
          font-family: var(--font-headings);
          font-size: 2.25rem;
          font-weight: 900;
          color: #111;
        }

        .overview-section .section-title,
        .focus-areas-section .section-title,
        .current-focus-section .section-title,
        .vision-section .section-title {
          color: #111 !important;
        }

        section[style*="background-color: #111"] .section-title,
        section[style*="background-color: #111"] .section-subtitle,
        .initiatives-section .section-title {
          color: white !important;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #555;
          margin-top: 0.5rem;
        }

        section[style*="background-color: #111"] .section-subtitle,
        .initiatives-section .section-subtitle {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Overview */
        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .overview-text p {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #222;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .overview-image-container.dual-carousel { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: 600px; overflow: hidden; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .carousel-column { height: 100%; overflow: hidden; position: relative; }
        .carousel-track.vertical { display: flex; flex-direction: column; gap: 1rem; animation: scroll-vertical 30s linear infinite; }
        .carousel-track.vertical.reverse { animation: scroll-vertical-reverse 30s linear infinite; }
        .carousel-item { width: 100%; flex-shrink: 0; }
        .carousel-item img { width: 100%; height: 250px; object-fit: cover; border-radius: 12px; }
        
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scroll-vertical-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .section-grid { grid-template-columns: 1fr; gap: 2rem; }
          .overview-image-container.dual-carousel { 
            grid-template-columns: 1fr; 
            height: 200px; 
            overflow: hidden; 
            width: 100vw; 
            margin-left: -2rem; 
            margin-right: -2rem; 
            border-radius: 0;
            box-shadow: none;
          }
          .carousel-column.col-2 { display: none; }
          .carousel-column.col-1 { width: 100%; }
          .carousel-track.vertical.reverse { 
            flex-direction: row; 
            width: max-content; 
            animation: scroll-horizontal 20s linear infinite; 
            height: 100%;
          }
          .carousel-item { width: 300px; height: 100%; }
          .carousel-item img { width: 100%; height: 100%; border-radius: 10px; }
          
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .mobile-only {
            display: none !important;
          }

          @media (max-width: 768px) {
            .mobile-only {
              display: inline-block !important;
            }
            .mobile-read-more-content {
              max-height: 0;
              overflow: hidden;
              transition: max-height 0.5s ease, opacity 0.5s ease;
              opacity: 0;
            }
            .mobile-read-more-content.expanded {
              max-height: 1000px;
              opacity: 1;
              margin-top: 1rem;
            }
          }
        }

        .accent-box { position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; border: 10px solid; z-index: -1; border-radius: 10px; }

        /* Focus Areas Grid */
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .focus-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .focus-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: ${accentColor};
        }

        .card-icon-wrap {
          margin-bottom: 1.5rem;
        }

        .card-icon-wrap svg {
          width: 40px;
          height: 40px;
        }

        .card-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .card-desc {
          color: #666;
          line-height: 1.6;
        }

        /* Timeline Items */
        .timeline-grid {
          display: grid;
          gap: 3rem;
        }

        .focus-timeline-item {
          display: flex;
          gap: 2rem;
        }

        .focus-num {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .focus-title {
          font-family: var(--font-headings);
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .focus-list {
          list-style: none;
          margin-bottom: 1rem;
        }

        .focus-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          color: #222;
          font-weight: 500;
          font-size: 1.05rem;
          line-height: 1.5;
        }

        .focus-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          background: ${accentColor};
          border-radius: 50%;
        }

        .focus-footer {
          font-style: italic;
          color: #555;
          border-left: 3px solid #ddd;
          padding-left: 1rem;
          margin-top: 1rem;
          font-weight: 500;
        }

        /* Initiatives */
        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .initiative-card {
          background: #222;
          padding: 2.5rem;
          border-radius: 20px;
          border-left: 5px solid ${accentColor};
        }

        .init-title {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .init-desc {
          opacity: 0.7;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .init-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .init-tag {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        /* Vision Card */
        .vision-card {
          background: white;
          padding: 5rem;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
          text-align: center;
        }

        .vision-p {
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #333;
          font-weight: 500;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .vision-item {
          padding: 1.5rem;
          background: #f9f9f9;
          border-radius: 15px;
          font-weight: 700;
          color: #444;
        }

        .impact-quote {
          position: relative;
          padding: 3rem 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .quote-mark {
          font-size: 8rem;
          font-family: serif;
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.1;
        }

        .impact-quote p {
          font-size: 1.75rem;
          font-weight: 900;
          font-family: var(--font-headings);
          color: #111;
          margin-bottom: 1.5rem;
        }

        .quote-bar {
          width: 80px;
          height: 6px;
          margin: 0 auto;
          border-radius: 10px;
        }

        /* CTA */
        .cta-box {
          padding: 5rem;
          border-radius: 30px;
          text-align: center;
          color: white;
        }

        .cta-box h2 {
          font-family: var(--font-headings);
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 2.5rem;
        }

        .cta-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .cta-btn {
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
        }

        .cta-btn:not(.outline) {
          background: white;
          color: #000;
        }

        .cta-btn.outline {
          border: 2px solid white;
          color: white;
        }

        .cta-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        /* Bento Grid */
        .flagship-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(350px, auto);
          gap: 2rem;
        }

        .flagship-card {
          background: white;
          border-radius: 30px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(0,0,0,0.05);
          text-decoration: none;
        }

        .flagship-card.wide {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0;
        }

        .wide-content {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-number {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
          display: block;
        }

        .card-desc {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.8;
          margin-bottom: 2rem;
        }

        .theme-forest { background: #1a3a3a; color: white; }
        .theme-forest .card-desc { opacity: 0.7; }
        .theme-peach { background: #fde2d2; color: #4a2a1a; }
        .theme-cream { background: #f9f5f0; color: #333; }
        .theme-tan { background: #f5e6d3; color: #4a3a2a; }

        @media (max-width: 1024px) {
          .flagship-bento-grid { grid-template-columns: 1fr; }
          .flagship-card.wide { grid-column: span 1; grid-template-columns: 1fr; }
          .wide-visual { height: 200px; }
          .section-grid, .initiatives-grid, .vision-grid {
            grid-template-columns: 1fr;
          }
          .hero-title { font-size: 3rem; }
          .cta-links { flex-direction: column; }
          .vision-card { padding: 3rem 1.5rem; }
        }
      `}} />
    </div>
  );
};

export default EducationPage;
