import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Landmark, Target, Rocket, Globe, Shield, Scale, ArrowRight, Gavel, Users, BarChart3, MessageSquare } from 'lucide-react';

const DemocracyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#C9A227"; // Gold for Democracy & Governance

  return (
    <div className="priority-area-page democracy-page">
      {/* Hero Section */}
      <section className="priority-hero">
        <div className="hero-overlay" style={{ background: `linear-gradient(135deg, ${accentColor}dd 0%, #111111ee 100%)` }}></div>
        <div className="container">
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="priority-badge"
              style={{ backgroundColor: accentColor }}
            >
              Strategic Priority
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-title"
            >
              DEMOCRACY, GOOD GOVERNANCE, <span style={{ color: accentColor }}>PEACE & SECURITY</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-subtitle"
            >
              Empowering students as drivers of democratic accountability, peace, and sustainable governance in Africa
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
              <p>Democracy and good governance are the backbone of a stable, just, and prosperous Africa—and students have a critical role to play in shaping that future.</p>
              <p>
                Across the continent, challenges such as weak institutions, limited youth participation, political instability, and governance gaps continue to affect development and social progress. At the same time, Africa’s youthful population represents a powerful force for change.
              </p>
              <p>
                The All-Africa Students Union (AASU) is committed to harnessing this potential by empowering students to become active participants in democratic processes, governance systems, and peacebuilding efforts.
              </p>
              <p>
                Through advocacy, dialogue, and leadership development, AASU promotes a culture of accountability, transparency, inclusion, and civic responsibility, ensuring that students are not only aware of their rights—but equipped to defend and exercise them.
              </p>
              <p>
                Aligned with Sustainable Development Goals 10 & 16 and the African Union Agenda 2063, this priority area positions students as key stakeholders in building democratic and peaceful societies.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="overview-image-container dual-carousel">
              <div className="carousel-column col-1">
                <div className="carousel-track vertical reverse">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-dem-carousel-${num}.jpg`} alt={`Democracy Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-column col-2">
                <div className="carousel-track vertical">
                  {[9, 10, 11, 12, 13, 14, 15, 16, 9, 10, 11, 12, 13, 14, 15, 16].map((num, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={`/img-dem-carousel-${num}.jpg`} alt={`Democracy Project ${num}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="accent-box" style={{ borderColor: accentColor }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What this area is about */}
      <section className="focus-areas-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="section-header centered">
            <Landmark className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">WHAT THIS AREA IS ABOUT</h2>
            <p className="section-subtitle">Strengthening democratic values through student engagement</p>
          </div>

          <div className="focus-grid">
            {[
              { icon: <Users />, title: 'Democratic Participation', desc: 'Encouraging students to actively engage in political and civic processes at all levels.' },
              { icon: <Shield />, title: 'Governance & Accountability', desc: 'Promoting transparency, rule of law, and responsible leadership in institutions.' },
              { icon: <Gavel />, title: 'Peacebuilding', desc: 'Supporting initiatives that foster dialogue, tolerance, and peaceful coexistence across communities.' },
              { icon: <Scale />, title: 'Youth Leadership', desc: 'Building the capacity of students to understand governance systems and take on leadership roles.' },
              { icon: <MessageSquare />, title: 'Policy Advocacy', desc: 'Creating platforms for students to influence governance policies and reforms.' }
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

      {/* Current Focus */}
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
                title: 'Enhancing Student Participation', 
                points: [
                  'Increase youth representation in decision-making spaces',
                  'Strengthen student unions as democratic institutions',
                  'Promote civic engagement and political awareness'
                ],
                footer: 'Ensuring students have a voice where decisions are made.'
              },
              { 
                num: '2', 
                title: 'Promoting Accountability', 
                points: [
                  'Stronger governance systems within student bodies',
                  'Accountability mechanisms in public leadership',
                  'Ethical leadership practices across all levels'
                ],
                footer: 'Good governance begins with informed and responsible leadership.'
              },
              { 
                num: '3', 
                title: 'Advancing Peace & Security', 
                points: [
                  'Facilitate dialogue platforms for conflict resolution',
                  'Promote tolerance, inclusion, and unity',
                  'Engage youth in peacebuilding initiatives'
                ],
                footer: 'Peace is not just the absence of conflict—it is the presence of justice.'
              },
              { 
                num: '4', 
                title: 'Strengthening Civic Education', 
                points: [
                  'Training programs on governance and leadership',
                  'Youth empowerment initiatives',
                  'Platforms that build awareness of rights'
                ],
                footer: 'Equipping students to become leaders of today.'
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

      {/* Initiatives */}
      <section className="initiatives-section" style={{ backgroundColor: '#111', color: 'white' }}>
        <div className="container">
          <div className="section-header centered">
            <Rocket className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">KEY PROJECTS & INITIATIVES</h2>
          </div>

          <div className="initiatives-grid">
            {[
              { 
                title: 'Africa Students Dialogue Series', 
                desc: 'A flagship platform bringing students together to discuss governance issues and promote youth-led solutions.',
                features: ['Policy Dialogue', 'Pan-Africanism', 'Exchange']
              },
              { 
                title: 'Governance Assessment', 
                desc: 'Assessing governance practices within student bodies and advocating for improved transparency.',
                features: ['Accountability', 'Reform', 'Transparency']
              },
              { 
                title: 'Youth Leadership Programs', 
                desc: 'Workshops and forums building leadership capacity and encouraging participation in democratic processes.',
                features: ['Training', 'Empowerment', 'Civic Action']
              }
            ].map((init, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="initiative-card"
              >
                <h3 className="init-title">{init.title}</h3>
                <p className="init-desc">{init.desc}</p>
                <div className="init-tags">
                  {init.features.map((f, fIdx) => <span key={fIdx} className="init-tag" style={{ color: accentColor }}>#{f}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Statement */}
      <section className="vision-section" style={{ backgroundColor: '#ffffff', color: '#222' }}>
        <div className="container">
          <div className="vision-card" style={{ borderColor: accentColor }}>
            <div className="section-header centered">
              <Globe className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">
              Strong democracies and peaceful societies are essential for Africa’s growth—and students are central to that vision.
            </p>
            <div className="vision-grid">
              <div className="vision-item">Active youth engagement in decision-making</div>
              <div className="vision-item">Transparent and inclusive institutions</div>
              <div className="vision-item">Sustained peace and justice through participation</div>
            </div>

            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>Democracy thrives when young people are informed, engaged, and empowered to lead.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #000)` }}>
            <h2>Be a driver of democratic change</h2>
            <div className="cta-links">
              <a href="/contact" className="cta-btn">Join Governance Programs <ArrowRight size={18} /></a>
              <a href="/search" className="cta-btn outline">Explore Policies</a>
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
        .overview-image-container.dual-carousel { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: 600px; overflow: hidden; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); position: relative; }
        .carousel-column { height: 100%; overflow: hidden; position: relative; }
        .carousel-track.vertical { display: flex; flex-direction: column; gap: 1rem; animation: scroll-vertical 45s linear infinite; }
        .carousel-track.vertical.reverse { animation: scroll-vertical-reverse 45s linear infinite; }
        .carousel-item { width: 100%; flex-shrink: 0; }
        .carousel-item img { width: 100%; height: 200px; object-fit: cover; border-radius: 12px; }
        
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
        .initiatives-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
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
            animation: scroll-horizontal 35s linear infinite; 
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

export default DemocracyPage;
