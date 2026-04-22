import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Shield, Users, BookOpen, Globe, Lightbulb, CheckCircle2 } from 'lucide-react';

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="profile-page">
      {/* 1. Hero Section */}
      <section className="profile-hero">
        <div className="container h-full">
          <div className="hero-content">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="hero-title"
            >
              The Voice of <span className="text-red">African Students</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-subtitle"
            >
              Representing millions of students across Africa and the diaspora, the All-Africa Students Union (AASU) stands at the forefront of student advocacy, leadership, and transformation on the continent.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. About AASU */}
      <section className="about-section py-large bg-white">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="text-center mx-auto max-w-4xl"
          >
            <h2 className="section-heading">Who We Are</h2>
            <div className="heading-underline center-underline"></div>
            
            <p className="large-paragraph space-y-4">
              The All-Africa Students Union (AASU) is the principal continental body representing the interests, aspirations, and collective voice of students across Africa. As an umbrella organization of national student unions and student-led institutions, AASU brings together a diverse network of students from across the continent and the diaspora.
            </p>
            <p className="large-paragraph space-y-4">
              Operating at the intersection of education, policy, and youth development, AASU ensures that African students are not only participants in education systems but active contributors to shaping them. The Union engages governments, regional institutions, and global partners to promote inclusive, equitable, and quality education for all.
            </p>
            <p className="large-paragraph highlight-text">
              Beyond representation, AASU is a movement, one that fosters solidarity, builds leadership, and empowers young people to drive meaningful change within their communities and across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Vision, Mission, Values */}
      <section className="vmv-section py-large bg-light">
        <div className="container">
          <motion.div 
            className="grid-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUpVariant} className="vmv-card">
              <div className="icon-wrapper bg-red-light text-red">
                <Eye size={32} />
              </div>
              <h3>Vision</h3>
              <p>A united, empowered, and influential African student movement shaping inclusive, equitable, and transformative education systems across the continent.</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="vmv-card">
              <div className="icon-wrapper bg-red-light text-red">
                <Target size={32} />
              </div>
              <h3>Mission</h3>
              <p>To mobilize, represent, and strengthen African students by advocating for accessible and quality education, promoting student rights and welfare, and influencing policies at national, regional, and global levels.</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="vmv-card outline-card">
              <div className="icon-wrapper">
                <Star size={32} className="text-red" />
              </div>
              <h3>Core Values</h3>
              <ul className="values-list">
                <li><strong>Unity:</strong> Strengthening solidarity</li>
                <li><strong>Equity & Inclusion:</strong> Promoting equal access</li>
                <li><strong>Advocacy:</strong> Amplifying voices</li>
                <li><strong>Integrity:</strong> Transparency & accountability</li>
                <li><strong>Pan-Africanism:</strong> Collective progress</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. How AASU Works */}
      <section className="how-it-works-section py-large bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading">How AASU Works</h2>
            <div className="heading-underline center-underline"></div>
            <p className="max-w-3xl mx-auto text-desc">
              AASU delivers its mandate through interconnected pillars that drive impact across the continent, ensuring that its work remains responsive to the evolving needs of African students.
            </p>
          </div>

          <motion.div 
            className="pillars-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: <Shield size={28} />, title: 'Advocacy', desc: 'Campaigning for the protection and advancement of students’ rights and influencing democratic education policies.' },
              { icon: <Lightbulb size={28} />, title: 'Capacity Development', desc: 'Equipping students with skills through conferences, workshops, and seminars to thrive in academic and professional arenas.' },
              { icon: <BookOpen size={28} />, title: 'Research & Knowledge', desc: 'Producing evidence-based insights, reports, and policy recommendations to ensure our efforts are highly impactful.' },
              { icon: <Globe size={28} />, title: 'Networking', desc: 'Fostering a continental platform that connects student unions across borders to exchange best practices.' },
              { icon: <Users size={28} />, title: 'Partnerships', desc: 'Collaborating with governmental and global organizations to expand reach and address youth development challenges.' }
            ].map((pillar, index) => (
              <motion.div key={index} variants={fadeUpVariant} className="pillar-item">
                <div className="pillar-icon">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Strategic Priorities & 6. Reach */}
      <section className="priorities-reach-section">
        <div className="container">
          <div className="split-layout">
            
            <motion.div 
              className="priorities-block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">Strategic Priorities</h2>
              <div className="heading-underline"></div>
              <p className="mb-6 text-gray">
                Guided by continental and global development frameworks like the SDGs and AU’s Agenda 2063, our strategic focus includes:
              </p>
              <ul className="priorities-list">
                <li><CheckCircle2 color="#cb3631" size={20} /> Expanding access to quality and affordable education</li>
                <li><CheckCircle2 color="#cb3631" size={20} /> Promoting equity and inclusion across all levels of learning</li>
                <li><CheckCircle2 color="#cb3631" size={20} /> Strengthening student leadership and representation</li>
                <li><CheckCircle2 color="#cb3631" size={20} /> Enhancing youth employability and skills development</li>
                <li><CheckCircle2 color="#cb3631" size={20} /> Supporting sustainable development and social transformation</li>
              </ul>
            </motion.div>

            <motion.div 
              className="reach-block bg-dark text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading text-white">Reach & Impact</h2>
              <p className="mb-8 opacity-80">
                The All-Africa Students Union stands as one of the most influential student movements on the continent and beyond.
              </p>
              
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number text-red">85<span className="plus">+</span></span>
                  <span className="stat-label">Member Unions across Africa</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number text-red">300<span className="plus">M+</span></span>
                  <span className="stat-label">Students Represented Globally</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. Partnerships & 8. Closing Statement */}
      <section className="closing-section py-large text-center">
        <div className="container max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-12 border-bottom"
          >
             <h3 className="text-2xl font-bold mb-4">Partnerships & Collaboration</h3>
             <p className="text-gray text-lg">
               AASU works closely with a diverse range of partners committed to advancing education, youth empowerment, and sustainable development across Africa and globally. Through these collaborations, the Union expands its impact and ensures that the perspectives of African students are represented in international conversations.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-12"
          >
            <p className="text-xl font-medium leading-relaxed italic text-gray-dark">
              "With Africa’s rapidly growing youth population, the role of students in shaping the continent’s future has never been more critical. AASU continues to provide a platform where student voices are heard, leadership is nurtured, and collective action drives progress."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="cta-banner">
        <div className="container text-center">
          <h2>Join a continental movement shaping the future of Africa.</h2>
          <p>Read about our work, amplify the student voice, and drive change.</p>
          <button className="btn btn-white-outline mt-6">Be Part of AASU</button>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .profile-page {
          background-color: #fcfcfc;
        }

        /* Helpers */
        .py-large { padding: 80px 0; }
        .bg-white { background-color: #ffffff; }
        .bg-light { background-color: #f7f9fa; }
        .bg-dark { background-color: #111; }
        .text-red { color: var(--primary-red); }
        .bg-red-light { background-color: rgba(203, 54, 49, 0.1); }
        .text-center { text-align: center; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-4xl { max-width: 900px; }
        .max-w-3xl { max-width: 800px; }
        .mb-12 { margin-bottom: 3rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .pb-12 { padding-bottom: 3rem; }
        .pt-12 { padding-top: 3rem; }
        .space-y-4 { margin-bottom: 1rem; }
        .border-bottom { border-bottom: 1px solid #eaeaea; }
        .text-gray { color: #666; }
        .text-gray-dark { color: #333; }
        .text-2xl { font-size: 1.5rem; }
        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .italic { font-style: italic; }
        .leading-relaxed { line-height: 1.8; }

        .section-heading {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 2.5rem;
          color: #111;
          margin-bottom: 0.5rem;
          text-transform: capitalize;
        }

        .heading-underline {
          height: 4px;
          width: 60px;
          background-color: var(--primary-red);
          margin-bottom: 2rem;
        }

        .center-underline {
          margin-left: auto;
          margin-right: auto;
        }

        /* Hero */
        .profile-hero {
          background: linear-gradient(90deg, #020202 0%, rgba(2, 2, 2, 0.8) 50%, rgba(2, 2, 2, 0.4) 100%), url('/header-2.jpg') center/cover no-repeat;
          min-height: 55vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }

        .h-full {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .hero-title {
          font-family: var(--font-headings);
          font-size: 4rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 700px;
          line-height: 1.7;
        }

        /* About Text */
        .large-paragraph {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #444;
        }

        .highlight-text {
          font-weight: 600;
          color: #111;
          font-size: 1.25rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px dashed #ddd;
        }

        /* Grid Frameworks */
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .vmv-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
          border-top: 4px solid var(--primary-red);
        }

        .vmv-card:hover {
          transform: translateY(-8px);
        }

        .outline-card {
          background: transparent;
          border: 2px solid #ddd;
          border-top: 4px solid #111;
          box-shadow: none;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .vmv-card h3 {
          font-family: var(--font-headings);
          font-size: 1.6rem;
          color: #111;
          margin-bottom: 1rem;
        }

        .vmv-card p {
          color: #555;
          line-height: 1.7;
        }

        .values-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .values-list li {
          margin-bottom: 0.8rem;
          color: #444;
        }

        .values-list li strong {
          color: #111;
        }

        /* Pillars Block */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-content: center;
        }

        .pillar-item {
          padding: 2rem;
          background: #fdfdfd;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .pillar-item:hover {
          border-color: var(--primary-red);
          box-shadow: 0 10px 20px rgba(203, 54, 49, 0.05);
        }

        .pillar-icon {
          color: var(--primary-red);
          margin-bottom: 1.25rem;
        }

        .pillar-title {
          font-family: var(--font-headings);
          font-size: 1.3rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.75rem;
        }

        .pillar-desc {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Layout Block */
        .priorities-reach-section .container {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .priorities-list {
          list-style: none;
          padding: 0;
        }

        .priorities-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
          color: #333;
          font-weight: 500;
        }

        .reach-block {
          padding: 4rem;
          border-radius: 16px;
        }

        .reach-block .section-heading {
          color: white;
        }

        .stats-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat-divider {
          height: 1px;
          width: 100%;
          background: rgba(255,255,255,0.2);
        }

        .stat-number {
          display: block;
          font-family: var(--font-headings);
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .plus {
          font-size: 2.5rem;
          vertical-align: super;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Call to Action */
        .cta-banner {
          background-color: var(--primary-red);
          color: white;
          padding: 5rem 0;
        }

        .cta-banner h2 {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .cta-banner p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .btn-white-outline {
          background: transparent;
          border: 2px solid white;
          color: white;
          padding: 1rem 2.5rem;
          font-weight: 700;
          border-radius: 50px;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .btn-white-outline:hover {
          background: white;
          color: var(--primary-red);
        }

        @media (max-width: 991px) {
          .split-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .reach-block {
            padding: 3rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .section-heading { font-size: 2rem; }
          .cta-banner h2 { font-size: 2rem; }
        }
      `}} />
    </div>
  );
};

export default ProfilePage;
