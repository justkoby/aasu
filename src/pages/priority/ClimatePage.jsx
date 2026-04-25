import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, ArrowRight, Rocket, Shield, Leaf, Zap, Users, Globe } from 'lucide-react';
import ProjectExplorer from '../../components/ProjectExplorer';
import { flagshipPrograms, priorityProjects } from '../../data/programsData';

const ClimatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#2E7D32"; // Green for Climate & Environment
  const areaData = priorityProjects.find(a => a.area === "Climate Action & Sustainability");
  const climateProjects = areaData ? areaData.projects : [];
  const flagship = flagshipPrograms.find(f => f.area === "Climate Action & Sustainability");

  return (
    <div className="priority-area-page climate-page">
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="priority-badge" style={{ backgroundColor: accentColor }}>Strategic Priority</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-title">CLIMATE ACTION & <span style={{ color: accentColor }}>ENVIRONMENTAL SUSTAINABILITY</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-subtitle">Driving student-led climate action for a sustainable and resilient Africa</motion.p>
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
              <p>Climate change is one of the greatest challenges facing Africa today—and its impact goes far beyond the environment.</p>
              <p>From disrupted education systems and food insecurity to economic instability and conflict, the effects of climate change are deeply interconnected with every aspect of development. Young people, especially students, are among the most affected—but also among the most powerful agents of change.</p>
              <p>The All-Africa Students Union (AASU) is committed to mobilizing students across the continent to take action on climate and environmental issues. By promoting awareness, advocacy, and innovation, AASU is ensuring that students are not only informed—but actively involved in shaping solutions.</p>
              <p>Through education, partnerships, and student-led initiatives, this priority area focuses on building a generation that is environmentally conscious, climate-resilient, and solution-driven.</p>
              <p>Aligned with global and continental frameworks, this work positions climate action as a core pillar of sustainable development and future-focused education systems.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overview-image-container dual-carousel">
              <div className="carousel-column col-1">
                <div className="carousel-track vertical reverse">
                  {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-env-carousel-${num}.jpg`} alt={`Climate Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-column col-2">
                <div className="carousel-track vertical">
                  {[7, 8, 9, 10, 11, 12, 7, 8, 9, 10, 11, 12].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-env-carousel-${num}.jpg`} alt={`Climate Project ${num}`} />
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
                      Go Green <ArrowRight size={18} />
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

              {/* Card 02: Green Ghana */}
              <motion.div 
                className="flagship-card theme-peach"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Leaf className="card-icon" style={{ color: '#4a2a1a', marginBottom: '1.5rem' }} />
                  <span className="card-number">02. Green Ghana Project</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Mobilizing students for massive tree-planting and environmental restoration efforts across institutions.</p>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#4a2a1a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              {/* Card 03: Oxfam Advocacy */}
              <motion.div 
                className="flagship-card theme-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Zap className="card-icon" style={{ color: '#333', marginBottom: '1.5rem' }} />
                  <span className="card-number">03. Climate Advocacy</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Building capacity for climate awareness and advocacy through strategic global partnerships.</p>
                  <span className="card-badge" style={{ background: '#e0e0e0', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800 }}>IMPACTFUL</span>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#333', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              {/* Card 04: World Clean-up */}
              <motion.div 
                className="flagship-card theme-tan"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Shield className="card-icon" style={{ color: '#4a3a2a', marginBottom: '1.5rem' }} />
                  <span className="card-number">04. Clean-up Day</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Tackling waste and pollution through student-led community action and circular economy programs.</p>
                </div>
                <div className="card-footer">
                   <a href="#" className="explore-link" style={{ color: '#4a3a2a', textDecoration: 'none', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     Explore Strategy <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>

              {/* Card 05: Campus Campaigns */}
              <motion.div 
                className="flagship-card theme-peach"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <Users className="card-icon" style={{ color: '#4a2a1a', marginBottom: '1.5rem' }} />
                  <span className="card-number">05. Campus Campaigns</span>
                  <p className="card-desc" style={{ fontSize: '0.95rem' }}>Driving grassroots awareness and sustainability practices within educational institutions.</p>
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
      <ProjectExplorer pillarIndex={5} hideTabs={true} />

      <section className="current-focus-section" style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', color: '#222' }}>
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">CURRENT FOCUS (2025–2026)</h2>
          </div>
          <div className="timeline-grid">
            {[
              { num: '1', title: 'Promoting Resilient Education', points: ['Advocate for systems that adapt to climate disruptions', 'Integrate sustainability into learning frameworks', 'Support continuity of education in affected areas'], footer: 'Education must remain accessible in the face of environmental challenges.' },
              { num: '2', title: 'Greening Education Systems', points: ['Incorporate climate education into curricula', 'Promote environmentally responsible practices', 'Encouraging sustainable campus initiatives'], footer: 'Sustainability becomes part of how students learn and live.' },
              { num: '3', title: 'Empowering Student Action', points: ['Lead climate awareness campaigns', 'Participate in environmental initiatives', 'Advocate for policy changes at multiple levels'], footer: 'Students are being positioned as frontline actors in climate solutions.' },
              { num: '4', title: 'Raising Awareness on Wider Impact', points: ['Educate on links between climate and development', 'Highlight relationship between environment and security', 'Promote informed and responsible action'], footer: 'Climate action is connected to Africa’s overall development and stability.' },
              { num: '5', title: 'Strengthening Global Partnerships', points: ['Collaborate with governments and development partners', 'Work with environmental organizations', 'Engage in global climate conversations'], footer: 'Ensuring student voices are part of global climate solutions.' }
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

      {/* Replaced by Project Explorer above */}

      <section className="vision-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="vision-card" style={{ borderColor: accentColor }}>
            <div className="section-header centered">
              <Globe className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">Sustainability is not just about protecting the environment—it is about securing the future.</p>
            <div className="vision-grid">
              <div className="vision-item">Students leading climate action efforts</div>
              <div className="vision-item">Resilient and conscious education systems</div>
              <div className="vision-item">Communities adopting long-term sustainability</div>
            </div>
            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>Sustainability starts with awareness—but it is driven by action.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #000)` }}>
            <h2>Protect our shared future</h2>
            <div className="cta-links">
              <a href="/reports" className="cta-btn">Join Climate Initiatives <ArrowRight size={18} /></a>
              <a href="/contact" className="cta-btn outline">Partner with AASU</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .priority-area-page { padding-top: 0; }
        .priority-hero { height: 70vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: url('/IMG_1048 copy 2.jpg') center/cover no-repeat; }
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
        .carousel-track.vertical { display: flex; flex-direction: column; gap: 1rem; animation: scroll-vertical 35s linear infinite; }
        .carousel-track.vertical.reverse { animation: scroll-vertical-reverse 35s linear infinite; }
        .carousel-item { width: 100%; flex-shrink: 0; }
        .carousel-item img { width: 100%; height: 240px; object-fit: cover; border-radius: 12px; }
        
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
            animation: scroll-horizontal 25s linear infinite; 
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

export default ClimatePage;
