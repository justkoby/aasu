import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Plane, Target, Rocket, Globe, FileCheck, ShieldCheck, Network, Info, ArrowRight, BookOpen, Users } from 'lucide-react';

const MigrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#8E24AA"; // Purple for Migration & Mobility

  return (
    <div className="priority-area-page migration-page">
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="priority-badge" style={{ backgroundColor: accentColor }}>Strategic Priority</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-title">MIGRATION, MOBILITY & <span style={{ color: accentColor }}>EXCHANGES</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-subtitle">Connecting African students across borders through education, mobility, and global opportunities</motion.p>
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
              <p>In an increasingly interconnected world, the ability of students to move, learn, and collaborate across borders is essential for Africa’s development.</p>
              <p>Academic mobility, student exchanges, and cross-border education opportunities play a critical role in building knowledge, fostering innovation, and strengthening continental integration. However, many African students still face barriers such as visa restrictions, limited funding, and challenges in recognition of qualifications.</p>
              <p>The All-Africa Students Union (AASU) is committed to breaking down these barriers by promoting safe, accessible, and equitable mobility opportunities for students across Africa and beyond.</p>
              <p>Through partnerships, advocacy, and student-led platforms, AASU is working to create an environment where students can learn without borders, share experiences, and contribute to a more integrated and globally competitive Africa.</p>
              <p>Aligned with continental priorities on education harmonization and global cooperation, this priority area positions mobility as a tool for unity, knowledge exchange, and opportunity creation.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overview-image-container">
              <img src="/header-2.jpg" alt="Migration Overview" className="overview-image" />
              <div className="accent-box" style={{ borderColor: accentColor }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="focus-areas-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="section-header centered">
            <Globe className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">WHAT THIS AREA IS ABOUT</h2>
            <p className="section-subtitle">Enabling students to access opportunities beyond their environments</p>
          </div>
          <div className="focus-grid">
            {[
              { icon: <Plane />, title: 'Academic Mobility', desc: 'Promoting opportunities for students to study, train, and collaborate across institutions and countries.' },
              { icon: <FileCheck />, title: 'Recognition of Qualifications', desc: 'Advocating for systems that ensure academic credentials are recognized across borders seamlessly.' },
              { icon: <Info />, title: 'Access to Information', desc: 'Addressing the information gap that limits students’ ability to explore mobility options and global opportunities.' },
              { icon: <ShieldCheck />, title: 'Safe Migration Systems', desc: 'Promoting policies that protect the rights and well-being of student migrants.' },
              { icon: <Network />, title: 'Continental Integration', desc: 'Strengthening ties between African countries through shared education systems and collaboration.' }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="focus-card">
                <div className="card-icon-wrap" style={{ color: accentColor }}>{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="current-focus-section" style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', color: '#222' }}>
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">CURRENT FOCUS (2025–2026)</h2>
          </div>
          <div className="timeline-grid">
            {[
              { num: '1', title: 'Strengthening Mobility Systems', points: ['Improve frameworks for student exchanges', 'Promote harmonization of education systems', 'Support initiatives that ease cross-border learning'], footer: 'Creating a continent where students can move and learn freely.' },
              { num: '2', title: 'Improving Recognition of Qualifications', points: ['Standardized systems for academic credentials', 'Reduce barriers to credit transfer', 'Greater institutional collaboration'], footer: 'Ensuring mobility leads to real academic and professional progress.' },
              { num: '3', title: 'Expanding Access to Opportunities', points: ['Provide information on scholarships and programs', 'Promote awareness of global/regional opportunities', 'Support students in navigating mobility systems'], footer: 'Access to opportunity should not depend on privilege or location.' },
              { num: '4', title: 'Promoting Safe Migration', points: ['Advocate for policies protecting student migrants', 'Engage with stakeholders to improve migration systems', 'Raise awareness of student rights in mobility contexts'], footer: 'Mobility must be safe, fair, and student-centered.' },
              { num: '5', title: 'Fostering Strategic Partnerships', points: ['Collaborate with international organizations', 'Work with educational institutions', 'Engage with governments and policy bodies'], footer: 'Strengthening Africa’s position in global education networks.' }
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

      <section className="initiatives-section" style={{ backgroundColor: '#111', color: 'white' }}>
        <div className="container">
          <div className="section-header centered">
            <Rocket className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">KEY PROJECTS & INITIATIVES</h2>
          </div>
          <div className="initiatives-grid">
            {[
              { title: 'Academic Mobility Forums', desc: 'Platforms bringing together students and policymakers to address challenges in mobility systems.', features: ['Dialogue', 'Collaboration', 'Policy'] },
              { title: 'International Partnerships', desc: 'Collaborations with global bodies to advocate for improved migration frameworks and exchange access.', features: ['Global Reach', 'Cooperation', 'Advocacy'] },
              { title: 'Awareness Campaigns', desc: 'Providing guidance on mobility opportunities and empowering students to explore global pathways.', features: ['Information', 'Rights', 'Guidance'] },
              { title: 'Mobility Policy Engagement', desc: 'Engaging with regional bodies to ensure mobility systems are inclusive and student-focused.', features: ['Governance', 'Efficiency', 'Inclusion'] }
            ].map((init, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="initiative-card">
                <h3 className="init-title">{init.title}</h3>
                <p className="init-desc">{init.desc}</p>
                <div className="init-tags">{init.features.map((f, fIdx) => <span key={fIdx} className="init-tag" style={{ color: accentColor }}>#{f}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="vision-card" style={{ borderColor: accentColor }}>
            <div className="section-header centered">
              <Compass className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">Mobility is more than movement—it is a pathway to opportunity, collaboration, and unity.</p>
            <div className="vision-grid">
              <div className="vision-item">Freely moving across borders for education</div>
              <div className="vision-item">Globally recognized and valued qualifications</div>
              <div className="vision-item">Cross-border innovation and development</div>
            </div>
            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>When students can move, learn, and connect across borders, Africa moves forward together.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #000)` }}>
            <h2>Learn without borders</h2>
            <div className="cta-links">
              <a href="/reports" className="cta-btn">Explore Opportunities <ArrowRight size={18} /></a>
              <a href="/contact" className="cta-btn outline">Partner with AASU</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .priority-area-page { padding-top: 0; }
        .priority-hero { height: 70vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: url('/header-2.jpg') center/cover no-repeat; }
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
        .overview-image-container { position: relative; }
        .overview-image { width: 100%; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
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
          .section-grid, .initiatives-grid, .vision-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 3rem; }
          .cta-links { flex-direction: column; }
          .vision-card { padding: 3rem 1.5rem; }
        }
      `}} />
    </div>
  );
};

export default MigrationPage;
