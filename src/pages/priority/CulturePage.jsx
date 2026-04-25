import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Target, Rocket, Globe, Shield, Award, Handshake, ArrowRight } from 'lucide-react';
import ProjectExplorer from '../../components/ProjectExplorer';
import { flagshipPrograms, priorityProjects } from '../../data/programsData';

const CulturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#121212"; // Matte Black for Pan-Africanism
  const areaData = priorityProjects.find(a => a.area === "Pan-Africanism & Culture");
  const flagship = flagshipPrograms.find(f => f.area === "Pan-Africanism & Culture");

  return (
    <div className="priority-area-page culture-page">
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="priority-badge" style={{ backgroundColor: accentColor, border: '1px solid #444' }}>Strategic Priority</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-title">PAN-AFRICANISM & <span style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>AFRICAN CULTURE</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-subtitle">Celebrating African identity, strengthening unity, and shaping a shared continental future</motion.p>
          </div>
        </div>
      </section>

      <section className="overview-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="section-grid">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overview-text">
              <div className="section-header">
                <Compass className="section-icon" style={{ color: accentColor }} />
                <h2 className="section-title">OVERVIEW</h2>
              </div>
              <p>Africa’s strength lies in its identity—its people, its history, its culture, and its shared vision for the future.</p>
              <p>Pan-Africanism is more than an idea; it is a movement rooted in the belief that Africa’s progress depends on unity, collaboration, and a shared sense of purpose among its people—both on the continent and in the diaspora.</p>
              <p>The All-Africa Students Union (AASU) stands at the forefront of promoting this vision by empowering students to embrace their identity, celebrate their heritage, and actively contribute to the development of the continent.</p>
              <p>Through cultural engagement, policy advocacy, and continental collaboration, AASU is fostering a generation of students who are not only globally aware—but deeply connected to what it means to be African.</p>
              <p>Aligned with the aspirations of the African Union Agenda 2063, this priority area reinforces the role of culture and identity as drivers of unity, development, and global influence.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overview-image-container dual-carousel">
              <div className="carousel-column col-1">
                <div className="carousel-track vertical reverse">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-pan-carousel-${num}.jpg`} alt={`Pan-Africanism Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-column col-2">
                <div className="carousel-track vertical">
                  {[9, 10, 11, 12, 13, 14, 15, 9, 10, 11, 12, 13, 14, 15].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-pan-carousel-${num}.jpg`} alt={`Pan-Africanism Project ${num}`} />
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
                      Celebrate Africa <ArrowRight size={18} />
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

              <motion.div 
                className="flagship-card theme-peach"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Palette className="card-icon" style={{ color: '#4a2a1a', marginBottom: '1.5rem' }} />
                  <span className="card-number">02. International Cultural Day</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Celebrating diversity and shared heritage across our continental network of member unions.</p>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#4a2a1a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              <motion.div 
                className="flagship-card theme-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Award className="card-icon" style={{ color: '#333', marginBottom: '1.5rem' }} />
                  <span className="card-number">03. Arts & Cultural Expo</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Showcasing Africa’s creative identity through music, art, and fashion displays on global platforms.</p>
                  <span className="card-badge" style={{ background: '#e0e0e0', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800 }}>ONGOING</span>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#333', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              <motion.div 
                className="flagship-card theme-tan"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Target className="card-icon" style={{ color: '#4a3a2a', marginBottom: '1.5rem' }} />
                  <span className="card-number">04. Identity Advocacy</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Promoting African pride and heritage as central drivers of continental development and unity.</p>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#4a3a2a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              <motion.div 
                className="flagship-card theme-peach"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Handshake className="card-icon" style={{ color: '#4a2a1a', marginBottom: '1.5rem' }} />
                  <span className="card-number">05. Cultural Partnerships</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Collaborating with global institutions to preserve and elevate African culture in the diaspora.</p>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#4a2a1a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Localized Project Explorer */}
      <ProjectExplorer pillarIndex={6} hideTabs={true} />

      <section className="current-focus-section" style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', color: '#222' }}>
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">CURRENT FOCUS (2025–2026)</h2>
          </div>
          <div className="timeline-grid">
            {[
              { num: '1', title: 'Strengthening Identity', points: ['Foster shared identity across countries', 'Promote unity among diverse students', 'Encourage collaboration beyond borders'], footer: 'Building a generation that sees itself as Africans first.' },
              { num: '2', title: 'Culture in Modern Contexts', points: ['Showcase culture through modern platforms', 'Integrate cultural values into development', 'Highlight relevance of culture in innovation'], footer: 'Culture evolves and drives contemporary African expression.' },
              { num: '3', title: 'Policy & Dialogue Participation', points: ['Engage in continental discussions', 'Contribute to Agenda 2063 frameworks', 'Represent youth in cultural spaces'], footer: 'Students are key to shaping Africa’s long-term vision.' },
              { num: '4', title: 'Building Global Presence', points: ['Promote identity on global platforms', 'Partner with international institutions', 'Showcase African perspectives globally'], footer: 'Ensuring Africa is defined by its own voice.' },
              { num: '5', title: 'Continental Collaboration', points: ['Build partnerships with Pan-African orgs', 'Encourage cross-cultural exchange', 'Promote unity through shared initiatives'], footer: 'Collaboration is the foundation of progress and integration.' }
            ].map((focus, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="focus-timeline-item">
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

      <section className="vision-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="vision-card" style={{ borderColor: accentColor }}>
            <div className="section-header centered">
              <Globe className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">A united Africa is a powerful Africa—and culture is at the heart of that unity.</p>
            <div className="vision-grid">
              <div className="vision-item">Embracing shared identity and heritage</div>
              <div className="vision-item">Diversity as a strength, not a divide</div>
              <div className="vision-item">Confident global representation</div>
            </div>
            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>Africa’s future is strongest when its people are united by identity, purpose, and vision.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #222)` }}>
            <h2>Carry forward the ideals of unity</h2>
            <div className="cta-links">
              <a href="/become-a-member" className="cta-btn">Engage in Initiatives <ArrowRight size={18} /></a>
              <a href="/contact" className="cta-btn outline">Strengthen Unity</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .priority-area-page { padding-top: 0; }
        .priority-hero { height: 70vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: url('/header-5.jpg') center/cover no-repeat; }
        .hero-overlay { position: absolute; inset: 0; }
        .hero-content { position: relative; z-index: 2; max-width: 900px; }
        .priority-badge { display: inline-block; padding: 0.5rem 1.5rem; border-radius: 50px; font-weight: 800; font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2rem; }
        .hero-title { font-family: var(--font-headings); font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 1.5rem; }
        .hero-subtitle { font-size: 1.5rem; font-weight: 500; opacity: 0.9; }
        section { padding: 100px 0; }
        .section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 3rem; }
        .section-header.centered { flex-direction: column; text-align: center; gap: 0.5rem; }
        .section-icon { width: 40px; height: 40px; }
        .section-title { font-family: var(--font-headings); font-size: 2.25rem; font-weight: 900; color: #111; }
        .overview-section .section-title, .focus-areas-section .section-title, .current-focus-section .section-title, .vision-section .section-title { color: #111 !important; }
        section[style*="background-color: #111"] .section-title, .initiatives-section .section-title { color: white !important; }
        .section-subtitle { font-size: 1.1rem; color: #555; margin-top: 0.5rem; }
        section[style*="background-color: #111"] .section-subtitle,
        .initiatives-section .section-subtitle { color: rgba(255, 255, 255, 0.8); }
        .section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .overview-text p { font-size: 1.15rem; line-height: 1.8; color: #222; margin-bottom: 1.5rem; font-weight: 400; }
        .overview-image-container.dual-carousel { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: 600px; overflow: hidden; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); position: relative; }
        .carousel-column { height: 100%; overflow: hidden; position: relative; }
        .carousel-track.vertical { display: flex; flex-direction: column; gap: 1rem; animation: scroll-vertical 42s linear infinite; }
        .carousel-track.vertical.reverse { animation: scroll-vertical-reverse 42s linear infinite; }
        .carousel-item { width: 100%; flex-shrink: 0; }
        .carousel-item img { width: 100%; height: 210px; object-fit: cover; border-radius: 12px; }
        
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        @keyframes scroll-vertical-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        .accent-box { position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; border: 10px solid; z-index: -1; border-radius: 10px; }
        .focus-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
        .focus-card { background: white; padding: 3rem 2rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: all 0.3s ease; border: 1px solid #f0f0f0; }
        .focus-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: ${accentColor}; }
        .card-icon-wrap { margin-bottom: 1.5rem; }
        .card-icon-wrap svg { width: 40px; height: 40px; }
        .card-title { font-family: var(--font-headings); font-size: 1.25rem; font-weight: 800; margin-bottom: 1rem; }
        .card-desc { color: #666; line-height: 1.6; }
        .timeline-grid { display: grid; gap: 3rem; }
        .focus-timeline-item { display: flex; gap: 2rem; }
        .focus-num { width: 50px; height: 50px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.5rem; flex-shrink: 0; }
        .focus-title { font-family: var(--font-headings); font-size: 1.75rem; font-weight: 800; margin-bottom: 1rem; }
        .focus-list { list-style: none; margin-bottom: 1rem; }
        .focus-list li { position: relative; padding-left: 1.5rem; margin-bottom: 0.8rem; color: #222; font-weight: 500; font-size: 1.05rem; line-height: 1.5; }
        .focus-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 8px; height: 8px; background: ${accentColor}; border-radius: 50%; }
        .focus-footer { font-style: italic; color: #555; border-left: 3px solid #ddd; padding-left: 1rem; margin-top: 1rem; font-weight: 500; }
        .initiatives-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .initiative-card { background: #222; padding: 2.5rem; border-radius: 20px; border-left: 5px solid ${accentColor}; }
        .init-title { font-family: var(--font-headings); font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; }
        .init-desc { opacity: 0.7; line-height: 1.6; margin-bottom: 1.5rem; }
        .init-tags { display: flex; flex-wrap: wrap; gap: 1rem; }
        .init-tag { font-size: 0.8rem; font-weight: 800; text-transform: uppercase; }
        .vision-card { background: white; padding: 5rem; border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.05); border: 1px solid #f0f0f0; text-align: center; }
        .vision-p { font-size: 1.5rem; max-width: 800px; margin: 0 auto 3rem; color: #333; font-weight: 500; }
        .vision-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem; }
        .vision-item { padding: 1.5rem; background: #f9f9f9; border-radius: 15px; font-weight: 700; color: #444; }
        .impact-quote { position: relative; padding: 3rem 0; max-width: 600px; margin: 0 auto; }
        .quote-mark { font-size: 8rem; font-family: serif; position: absolute; top: -2rem; left: 50%; transform: translateX(-50%); opacity: 0.1; }
        .impact-quote p { font-size: 1.75rem; font-weight: 900; font-family: var(--font-headings); color: #111; margin-bottom: 1.5rem; }
        .quote-bar { width: 80px; height: 6px; margin: 0 auto; border-radius: 10px; }
        .cta-box { padding: 5rem; border-radius: 30px; text-align: center; color: white; }
        .cta-box h2 { font-family: var(--font-headings); font-size: 3rem; font-weight: 900; margin-bottom: 2.5rem; }
        .cta-links { display: flex; justify-content: center; gap: 2rem; }
        .cta-btn { padding: 1.2rem 2.5rem; border-radius: 50px; text-decoration: none; font-weight: 800; display: flex; align-items: center; gap: 0.75rem; transition: all 0.3s; }
        .cta-btn:not(.outline) { background: white; color: #000; }
        .cta-btn.outline { border: 2px solid white; color: white; }
        .cta-btn:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        @media (max-width: 1024px) {
          .section-grid, .initiatives-grid, .vision-grid {
            grid-template-columns: 1fr;
          }
          .hero-title { font-size: 3rem; }
          .cta-links { flex-direction: column; }
          .vision-card { padding: 3rem 1.5rem; }
          .flagship-card { grid-template-columns: 1fr !important; padding: 2rem !important; }
          .flagship-visual { order: -1; }
          .flagship-title { font-size: 2rem !important; }
          .overview-image-container.dual-carousel { 
            grid-template-columns: 1fr; 
            height: 200px; 
            width: 100vw; 
            margin-left: -2rem; 
            margin-right: -2rem; 
            border-radius: 0;
            box-shadow: none;
          }
          .carousel-column.col-2 { display: none; }
          .carousel-track.vertical.reverse { 
            flex-direction: row; 
            width: max-content; 
            animation: scroll-horizontal 32s linear infinite; 
            height: 100%;
          }
          .carousel-item { width: 300px; height: 100%; }
          .carousel-item img { width: 100%; height: 100%; border-radius: 10px; }
          
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        }
      `}} />
    </div>
  );
};

export default CulturePage;
