import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, Target, Rocket, Globe, Heart, Shield, Scale, ArrowRight, UserPlus, Handshake, Landmark } from 'lucide-react';

const GenderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#FB8C00"; // Orange for Gender Equity

  return (
    <div className="priority-area-page gender-page">
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
              GENDER EQUITY & <span style={{ color: accentColor }}>SOCIAL INCLUSION</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-subtitle"
            >
              Building an Africa where every student—regardless of gender or background—has equal opportunity to thrive
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
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
              <p>A truly transformative education system is one that works for everyone.</p>
              <p>
                Across Africa, gender disparities and social inequalities continue to limit access to education, opportunities, and leadership for millions of students—particularly women, girls, and marginalized groups. These challenges are not just social issues; they are systemic barriers that hinder the continent’s full potential.
              </p>
              <p>
                The All-Africa Students Union (AASU) is committed to advancing gender equity and inclusive participation across all levels of education and society. Through advocacy, education, and community engagement, AASU works to create an environment where every student—regardless of gender, socioeconomic background, disability, or identity—can access opportunities and contribute meaningfully.
              </p>
              <p>
                Aligned with Sustainable Development Goal 5 (Gender Equality) and broader inclusion frameworks, this priority area ensures that equity is not an afterthought—but a core pillar of development and education reform.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overview-image-container"
            >
              <img src="/women.jpg" alt="Gender Equity Overview" className="overview-image" />
              <div className="accent-box" style={{ borderColor: accentColor }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What this area is about */}
      <section className="focus-areas-section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header centered">
            <Heart className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">WHAT THIS AREA IS ABOUT</h2>
            <p className="section-subtitle">Promoting fairness, dignity, and equal access for all students</p>
          </div>

          <div className="focus-grid">
            {[
              { icon: <Users />, title: 'Gender Equality & Empowerment', desc: 'Promoting equal opportunities for women and men in education, leadership, and decision-making spaces.' },
              { icon: <Handshake />, title: 'Inclusive Education Systems', desc: 'Advocating for policies that ensure access to education for marginalized and underrepresented groups.' },
              { icon: <Shield />, title: 'Prevention of GBV', desc: 'Raising awareness and driving action against harmful practices such as gender-based violence and harassment.' },
              { icon: <UserPlus />, title: 'Girl-Child Advocacy', desc: 'Supporting initiatives that empower girls through education, mentorship, and leadership opportunities.' },
              { icon: <Scale />, title: 'Social Inclusion & Equity', desc: 'Ensuring that no student is excluded due to economic status, cultural background, or social identity.' }
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
      <section className="current-focus-section" style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div className="section-header">
            <Target className="section-icon" style={{ color: accentColor }} />
            <h2 className="section-title">CURRENT FOCUS (2025–2026)</h2>
          </div>

          <div className="timeline-grid">
            {[
              { 
                num: '1', 
                title: 'Advancing Gender Inclusion in Policy', 
                points: [
                  'Integrate gender perspectives into education policies',
                  'Promote equal representation in leadership',
                  'Ensure accountability in gender-sensitive frameworks'
                ],
                footer: 'Moving from policy statements to real, measurable impact.'
              },
              { 
                num: '2', 
                title: 'Combating GBV & Harmful Practices', 
                points: [
                  'Raise awareness on campuses and communities',
                  'Address harmful cultural practices like early marriage',
                  'Promote safe and supportive learning environments'
                ],
                footer: 'Creating safe spaces is essential for meaningful participation.'
              },
              { 
                num: '3', 
                title: 'Empowering Girls Through Education', 
                points: [
                  'Promote girl-child education initiatives continent-wide',
                  'Support mentorship programs for young women',
                  'Encourage girls into technology and leadership'
                ],
                footer: 'Ensuring girls are not just included—but empowered to lead.'
              },
              { 
                num: '4', 
                title: 'Driving Inclusive Development', 
                points: [
                  'Address barriers faced by students with disabilities',
                  'Advocate for equitable access to resources',
                  'Promote policies reflecting diverse realities'
                ],
                footer: 'Inclusion is about equity across all dimensions of society.'
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
                title: '16 Days of Activism', 
                desc: 'A continent-wide campaign engaging students to raise awareness on GBV and promote behavioral change.',
                features: ['Advocacy', 'Student Engagement', 'Policy Action']
              },
              { 
                title: 'Girl-Child Empowerment Programs', 
                desc: 'Targeted outreach supporting girls in marginalized communities with education access and mentorship.',
                features: ['Leadership', 'Outreach', 'Mentorship']
              },
              { 
                title: 'Community Awareness Campaigns', 
                desc: 'Working at the grassroots level to educate communities on rights, equality, and social justice.',
                features: ['Grassroots', 'Civil Society', 'Rights']
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
      <section className="vision-section">
        <div className="container">
          <div className="vision-card" style={{ borderColor: accentColor }}>
            <div className="section-header centered">
              <Globe className="section-icon" style={{ color: accentColor }} />
              <h2 className="section-title">IMPACT & VISION</h2>
            </div>
            <p className="vision-p">
              Gender equity and social inclusion are not optional—they are essential for sustainable development.
            </p>
            <div className="vision-grid">
              <div className="vision-item">Safe and equitable education for all</div>
              <div className="vision-item">Equal access to leadership for marginalized groups</div>
              <div className="vision-item">Evolved norms supporting fairness and dignity</div>
            </div>

            <div className="impact-quote">
              <div className="quote-mark" style={{ color: accentColor }}>"</div>
              <p>Equity is not about equal access alone—it is about ensuring every student has the opportunity to succeed.</p>
              <div className="quote-bar" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box" style={{ background: `linear-gradient(45deg, ${accentColor}, #000)` }}>
            <h2>Building an inclusive future together</h2>
            <div className="cta-links">
              <a href="/contact" className="cta-btn">Support Equality Initiatives <ArrowRight size={18} /></a>
              <a href="/become-a-member" className="cta-btn outline">Become a Member</a>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .priority-area-page { padding-top: 0; }
        .priority-hero { height: 70vh; position: relative; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: url('/women.jpg') center/cover no-repeat; }
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
        section[style*="background-color: #111"] .section-title,
        .initiatives-section .section-title { color: white; }
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
        }
      `}} />
    </div>
  );
};

export default GenderPage;
