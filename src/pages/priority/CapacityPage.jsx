import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Target, Rocket, Globe, Briefcase, Lightbulb, Monitor, TrendingUp, Users, ArrowRight, BookOpen } from 'lucide-react';

const CapacityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#1E88E5"; // Blue for Capacity Building

  return (
    <div className="priority-area-page capacity-page">
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="priority-badge" style={{ backgroundColor: accentColor }}>Strategic Priority</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-title">CAPACITY BUILDING, SKILLS DEVELOPMENT & <span style={{ color: accentColor }}>EMPLOYABILITY</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="hero-subtitle">Equipping African students with the skills, knowledge, and opportunities to thrive in a rapidly evolving world</motion.p>
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
              <p>Africa’s greatest asset is its youth—but unlocking that potential requires more than access to education. It requires skills, exposure, and opportunities that prepare students for the realities of the modern world.</p>
              <p>Across the continent, many graduates face challenges transitioning from education to employment due to skills gaps, limited access to practical training, and evolving labour market demands.</p>
              <p>The All-Africa Students Union (AASU) is committed to bridging this gap by empowering students with the tools, competencies, and networks needed to succeed.</p>
              <p>Through training programs, partnerships, and innovation-driven initiatives, AASU is shaping a generation of students who are not only educated—but skilled, employable, and capable of driving economic and social transformation.</p>
              <p>Aligned with global frameworks such as the Sustainable Development Goals and the UN Youth Strategy 2030, this priority area focuses on preparing students for leadership, entrepreneurship, and the future of work.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overview-image-container dual-carousel">
              <div className="carousel-column col-1">
                <div className="carousel-track vertical reverse">
                  {[1, 2, 3, 4, 5, 6, 7, 15, 16, 1, 2, 3, 4, 5, 6, 7, 15, 16].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-cap-carousel-${num}${num >= 5 && num <= 7 ? '.JPG' : '.jpg'}`} alt={`Capacity Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-column col-2">
                <div className="carousel-track vertical">
                  {[8, 9, 10, 11, 12, 13, 14, 17, 8, 9, 10, 11, 12, 13, 14, 17].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-cap-carousel-${num}.jpg`} alt={`Capacity Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="accent-box" style={{ borderColor: accentColor }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="focus-areas-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="section-header centered">
            <TrendingUp className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">WHAT THIS AREA IS ABOUT</h2>
            <p className="section-subtitle">Strengthening abilities to succeed academically and professionally</p>
          </div>
          <div className="focus-grid">
            {[
              { icon: <Cpu />, title: 'Skills Development & Training', desc: 'Providing students with practical, technical, and soft skills required in today’s workforce.' },
              { icon: <Users />, title: 'Leadership Development', desc: 'Equipping students with the capacity to lead, influence, and drive change in their communities.' },
              { icon: <Lightbulb />, title: 'Entrepreneurship & Innovation', desc: 'Encouraging students to create opportunities through business, creativity, and problem-solving.' },
              { icon: <Monitor />, title: 'Digital & Technological Competence', desc: 'Promoting skills in ICT, AI, and digital tools critical for the modern economy.' },
              { icon: <Briefcase />, title: 'Career Readiness', desc: 'Bridging the gap between education and employment through mentorship and real-world learning.' }
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
              { num: '1', title: 'Developing 21st-Century Skills', points: ['Enhancing digital literacy and technological competence', 'Promoting critical thinking and creativity', 'Preparing for a rapidly changing job market'], footer: 'Ensuring students are adaptable and globally competitive.' },
              { num: '2', title: 'Expanding Digital & AI Awareness', points: ['Promoting awareness and application of AI', 'Supporting ICT training programs', 'Encouraging digital innovation'], footer: 'Positioning African students at the forefront of the digital era.' },
              { num: '3', title: 'Strengthening Entrepreneurship', points: ['Develop entrepreneurial mindsets', 'Build startups and innovative solutions', 'Create employment opportunities'], footer: 'Key to economic resilience and independence.' },
              { num: '4', title: 'Enhancing Career Readiness', points: ['Facilitating training, internships, and mentorship', 'Connecting students with industry networks', 'Providing exposure to real-world work'], footer: 'Ensuring students graduate with skills that match market demands.' },
              { num: '5', title: 'Building Leadership Capacity', points: ['Train student leaders across Africa', 'Strengthen student unions and youth networks', 'Develop ethical and impactful leaders'], footer: 'Leadership is at the heart of sustainable development.' }
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
              { title: 'Training Workshops', desc: 'Workshops and skill-based programs tailored to student needs across multiple disciplines.', features: ['Hands-on', 'Practical', 'Technical'] },
              { title: 'ICT & AI Initiatives', desc: 'Promoting digital literacy and introducing students to emerging technologies for the digital economy.', features: ['Innovation', 'Tech-driven', 'Digital Skills'] },
              { title: 'Leadership Development', desc: 'Leadership bootcamps and forums cultivating a generation of visionary and responsible leaders.', features: ['Mentorship', 'Networking', 'Impact'] },
              { title: 'Entrepreneurship Platforms', desc: 'Supporting student-led startups and innovation challenges to foster self-reliance.', features: ['Startups', 'Creativity', 'Enterprise'] }
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
              <Globe className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">A skilled and empowered youth population is essential for Africa’s growth and global competitiveness.</p>
            <div className="vision-grid">
              <div className="vision-item">Equipped with future-ready skills</div>
              <div className="vision-item">Young people as innovators and job creators</div>
              <div className="vision-item">Education aligned with real-world needs</div>
            </div>
            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>Education alone is not enough—skills, innovation, and leadership are what turn knowledge into impact.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #000)` }}>
            <h2>Step into the future of work</h2>
            <div className="cta-links">
              <a href="/internship" className="cta-btn">Join Training Programs <ArrowRight size={18} /></a>
              <a href="/contact" className="cta-btn outline">Partner with AASU</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .priority-area-page { padding-top: 0; }
        .priority-hero { height: 70vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: url('/donation-laptops.jpg') center/cover no-repeat; }
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
        .carousel-track.vertical { display: flex; flex-direction: column; gap: 1rem; animation: scroll-vertical 40s linear infinite; }
        .carousel-track.vertical.reverse { animation: scroll-vertical-reverse 40s linear infinite; }
        .carousel-item { width: 100%; flex-shrink: 0; }
        .carousel-item img { width: 100%; height: 220px; object-fit: cover; border-radius: 12px; }
        
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
          .section-grid, .initiatives-grid, .vision-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 3rem; }
          .cta-links { flex-direction: column; }
          .vision-card { padding: 3rem 1.5rem; }
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
            animation: scroll-horizontal 30s linear infinite; 
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

export default CapacityPage;
