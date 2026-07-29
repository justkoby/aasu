import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Target, ArrowRight, Rocket, Shield, Leaf, Zap, Users, Globe, Newspaper, FileText, Calendar, Download, ExternalLink } from 'lucide-react';
import ProjectExplorer from '../../components/ProjectExplorer';
import { flagshipPrograms, priorityProjects } from '../../data/programsData';
import { newsEventsData } from '../../data/newsEventsData';
import { reportsData } from '../../data/reportsData';
import SEO from '../../components/SEO';

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
      <SEO 
        title="Climate Action & Environmental Sustainability" 
        description="Mobilizing African students to lead climate education, advocacy, and community action for a sustainable, resilient continent." 
      />
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">

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
              <p>Climate change is a defining challenge of this generation, and African students are both among the most affected and the most innovative actors in responding to it. Through this priority, AASU promotes youth-led climate action, environmental education, and sustainability practices across educational institutions and communities.</p>
              <p>AASU supports student leadership in climate justice advocacy, environmental awareness, green skills development, and locally grounded solutions that connect climate action to education, livelihoods, and social equity. The Union positions students as critical partners in shaping Africa’s environmental future and advancing sustainable development pathways.</p>
              <p>This priority contributes to SDG 13 (Climate Action) and reinforces Agenda 2063’s aspiration for environmentally sustainable and climate-resilient development across the continent.</p>
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
      <ProjectExplorer key={5} pillarIndex={5} hideTabs={true} />

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
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="focus-timeline-item">
                <div className="focus-header-row">
                  <div className="focus-num" style={{ backgroundColor: accentColor }}>{focus.num}</div>
                  <h3 className="focus-title">{focus.title}</h3>
                </div>
                <ul className="focus-list">
                  {focus.points.map((p, pIdx) => <li key={pIdx}>{p}</li>)}
                </ul>
                <p className="focus-footer">{focus.footer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replaced by Project Explorer above */}

      {/* Climate & Environment News Section */}
      {(() => {
        const climateNews = newsEventsData.filter(item => {
          const cat = item.category?.toLowerCase() || '';
          const title = item.title?.toLowerCase() || '';
          const desc = item.description?.toLowerCase() || '';
          return cat.includes('environment') || cat.includes('climate') || cat.includes('sustainability') ||
                 title.includes('climate') || title.includes('greening') || title.includes('sustainability') || title.includes('environment') ||
                 desc.includes('climate') || desc.includes('greening');
        }).slice(0, 3);

        if (climateNews.length === 0) return null;

        return (
          <section className="climate-news-section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #eee' }}>
            <div className="container">
              <div className="section-header" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Newspaper className="section-icon" style={{ color: accentColor }} />
                  <div>
                    <span className="section-tag" style={{ color: accentColor, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Latest Updates</span>
                    <h2 className="section-title" style={{ margin: 0 }}>Environment & Climate News</h2>
                  </div>
                </div>
                <Link to="/news" className="see-all-link" style={{ color: accentColor, fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  View All News & Events <ArrowRight size={16} />
                </Link>
              </div>

              <div className="climate-news-grid">
                {climateNews.map((item) => (
                  <motion.div 
                    key={item.id}
                    className="climate-news-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="news-img-wrapper">
                      <img src={item.img} alt={item.title} />
                      <span className="news-badge" style={{ backgroundColor: accentColor }}>{item.category || item.type}</span>
                    </div>
                    <div className="news-card-content">
                      <div className="news-date">
                        <Calendar size={14} />
                        {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <h3 className="news-card-title">{item.title}</h3>
                      <p className="news-card-excerpt">{item.excerpt}</p>
                      <Link to={`/news/${item.id}`} className="read-more-link" style={{ color: accentColor }}>
                        Read Full Story <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Climate & Environment Reports & Documents Section */}
      {(() => {
        const climateReports = reportsData.filter(item => {
          const pArea = item.priorityArea?.toLowerCase() || '';
          const title = item.title?.toLowerCase() || '';
          const desc = item.description?.toLowerCase() || '';
          return pArea.includes('climate') || pArea.includes('environment') ||
                 title.includes('climate') || title.includes('greening') || title.includes('tree') || title.includes('environment') ||
                 desc.includes('climate') || desc.includes('greening') || desc.includes('environment');
        });

        if (climateReports.length === 0) return null;

        return (
          <section className="climate-reports-section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
            <div className="container">
              <div className="section-header" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FileText className="section-icon" style={{ color: accentColor }} />
                  <div>
                    <span className="section-tag" style={{ color: accentColor, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Publications & Resources</span>
                    <h2 className="section-title" style={{ margin: 0 }}>Climate & Environmental Reports</h2>
                  </div>
                </div>
                <Link to="/reports" className="see-all-link" style={{ color: accentColor, fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  View Document Hub <ArrowRight size={16} />
                </Link>
              </div>

              <div className="climate-reports-grid">
                {climateReports.map((doc) => (
                  <motion.div 
                    key={doc.id}
                    className="climate-report-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="report-thumb-box">
                      <img src={doc.thumbnail || '/report-thumb-placeholder.jpg'} alt={doc.title} />
                      <span className="report-year-badge">{doc.year}</span>
                    </div>
                    <div className="report-card-body">
                      <span className="report-type-tag" style={{ color: accentColor }}>{doc.type}</span>
                      <h3 className="report-card-title">{doc.title}</h3>
                      <p className="report-card-desc">{doc.description}</p>
                      <div className="report-actions">
                        <a 
                          href={doc.fileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="report-download-btn"
                          style={{ backgroundColor: accentColor }}
                          download
                        >
                          <Download size={15} /> Download PDF
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

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
        .priority-hero { min-height: 75vh; position: relative; display: flex; align-items: flex-start; justify-content: flex-start; text-align: left; color: white; background: url('/IMG_1048 copy 2.jpg') center/cover no-repeat; padding-top: 220px; padding-bottom: 60px; }
        .hero-overlay { position: absolute; inset: 0; }
        .hero-content { position: relative; z-index: 2; max-width: 900px; text-align: left; margin: 0; }
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
        .timeline-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .focus-timeline-item { 
          display: flex; 
          flex-direction: column; 
          gap: 1.25rem; 
          background: #ffffff; 
          padding: 2.25rem 2rem; 
          border-radius: 20px; 
          border: 1px solid #eef2f6; 
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); 
          transition: transform 0.3s ease, box-shadow 0.3s ease; 
        }
        .focus-timeline-item:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07); 
          border-color: ${accentColor}; 
        }
        .focus-header-row { display: flex; align-items: center; gap: 1.25rem; }
        .focus-num { width: 44px; height: 44px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.25rem; flex-shrink: 0; }
        .focus-title { font-family: var(--font-headings); font-size: 1.35rem; font-weight: 800; color: #0f172a; margin: 0; line-height: 1.3; }
        .focus-list { list-style: none; margin-bottom: 1rem; flex: 1; }
        .focus-list li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; color: #334155; font-weight: 500; font-size: 0.98rem; line-height: 1.5; }
        .focus-list li::before { content: ''; position: absolute; left: 0; top: 9px; width: 7px; height: 7px; background: ${accentColor}; border-radius: 50%; }
        .focus-footer { font-style: italic; color: #64748b; border-left: 3px solid ${accentColor}; padding-left: 1rem; margin-top: auto; font-weight: 500; font-size: 0.92rem; line-height: 1.4; }
        @media (max-width: 900px) {
          .timeline-grid { grid-template-columns: 1fr; }
        }
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
        /* ── CLIMATE NEWS & REPORTS STYLES ───── */
        .climate-news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        .climate-news-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #eef2f6;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .climate-news-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .news-img-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .news-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .climate-news-card:hover .news-img-wrapper img {
          transform: scale(1.05);
        }

        .news-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          color: white;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 0.85rem;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .news-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .news-date {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .news-card-title {
          font-family: var(--font-headings);
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.4;
          margin-bottom: 0.75rem;
        }

        .news-card-excerpt {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more-link {
          margin-top: auto;
          font-weight: 800;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
        }

        .climate-reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        .climate-report-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 1.25rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .climate-report-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .report-thumb-box {
          position: relative;
          width: 110px;
          height: 150px;
          flex-shrink: 0;
          border-radius: 10px;
          overflow: hidden;
          background: #f1f5f9;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .report-thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .report-year-badge {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          background: rgba(15, 23, 42, 0.85);
          color: white;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .report-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .report-type-tag {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.4rem;
        }

        .report-card-title {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
          margin-bottom: 0.5rem;
        }

        .report-card-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .report-actions {
          margin-top: auto;
        }

        .report-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .report-download-btn:hover {
          opacity: 0.9;
          color: #ffffff;
        }

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
