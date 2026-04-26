import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, FileCheck, ArrowRight, Globe } from 'lucide-react';

const CongressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = "#E53935"; // Red

  const downloads = [
    {
      title: "Announcement and Call for Nominations",
      icon: <FileText />,
      files: [
        { label: "English", url: "/AASU-ANNOUNCEMENT-AND-CALL-FOR-NOMINATIONS-14TH-ELECTIVE-CONGRESS_compressed-new-v2.pdf" },
        { label: "French", url: "/ANNOUNCEMENT-AND-CALL-FOR-NOMINATIONS-FR-new.pdf" },
        { label: "Portuguese", url: "/ANNOUNCEMENT-AND-CALL-FOR-NOMINATIONS-Portuguese-1.pdf" }
      ]
    },
    {
      title: "Election Guidelines for the 14th Elective Congress",
      icon: <CheckCircle2 />,
      files: [
        { label: "English", url: "/AASU-ELECTION-GUIDELINES-14TH-ELECTIVE-CONGRESS_compressed.pdf" },
        { label: "French", url: "/DIRECTIVES-ELECTORALES-POUR-LE-14-CONGRES-ELECTIF.pdf" },
        { label: "Portuguese", url: "/ORIENTACOES-PARA-A-ELEICAO-DO-14o-CONGRESSO-ELECTIVO.pdf" }
      ]
    },
    {
      title: "Nomination Form",
      icon: <FileCheck />,
      files: [
        { label: "English", url: "/AASU-CANDIDATE-NOMINATION-FORM-14TH-ELECTIVE-CONGRESS_compressed.pdf" },
        { label: "French", url: "/FORMULAIRE-DE-NOMINATION.pdf" },
        { label: "Portuguese", url: "/NOMINATION-FORM-PORTUGUESE-new.pdf" }
      ]
    }
  ];

  return (
    <div className="congress-page">
      {/* Hero Section */}
      <section className="congress-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <span className="hero-tag">Continental Event</span>
            <h1>14th ELECTIVE <span className="highlight">CONGRESS</span></h1>
            <p>Commencing the processes toward the 14th Elective Congress in line with AASU's constitutional cycle.</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="congress-intro">
        <div className="container">
          <div className="intro-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="intro-text"
            >
              <h2>A Call for <span style={{ color: accentColor }}>Leadership</span></h2>
              <p>
                The All-Africa Students Union (AASU) held its 13th Elective Congress in 2021, in Accra, Ghana. In line with the constitutional requirement of a four-year electoral cycle, we now commence the processes toward the 14th Elective Congress.
              </p>
              <p>
                This Call for Nominations formally opens the path for eligible member unions to present candidates for leadership in service to Africa’s student movement.
              </p>
              <p>
                The Electoral Commission is committed to delivering elections that are free, fair, transparent, and inclusive. Voting shall be conducted online, using secure accreditation and verified credentials.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="intro-quote"
            >
              <div className="quote-card">
                <Globe className="quote-icon" size={40} />
                <p>"AASU’s strength rests in its diversity. We encourage nominations that reflect our continental breadth and values."</p>
                <div className="quote-author">— Electoral Commission</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="downloads-section">
        <div className="container">
          <div className="section-header centered">
            <Download size={40} color={accentColor} />
            <h2>Download Official Materials</h2>
            <p>Access all necessary documentation for the 14th Elective Congress</p>
          </div>

          <div className="downloads-grid">
            {downloads.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="download-group"
              >
                <div className="group-header">
                  <div className="group-icon">{group.icon}</div>
                  <h3>{group.title}</h3>
                </div>
                <div className="file-list">
                  {group.files.map((file, fIdx) => (
                    <a 
                      key={fIdx} 
                      href={file.url} 
                      className="file-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>{file.label}</span>
                      <Download size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="congress-info-section">
        <div className="container">
          <div className="info-box">
            <h3>Commitment to Transparency</h3>
            <p>
              The Electoral Commission counts on the full cooperation of all member unions, partners, and observers. Together, let us uphold the highest standards of governance and ensure a seamless transition that equips the next administration to serve effectively from day one.
            </p>
            <a href="/contact" className="contact-link">Request Clarification <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .congress-page {
          background: #fff;
        }
        
        .congress-hero {
          height: 60vh;
          min-height: 400px;
          background: url('/hero-background-01-new-14th congress.webp') center/cover no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-tag {
          background: ${accentColor};
          padding: 0.4rem 1rem;
          border-radius: 4px;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .hero-content h1 {
          font-family: var(--font-headings);
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-content h1 .highlight {
          color: ${accentColor};
        }

        .hero-content p {
          font-size: 1.25rem;
          opacity: 0.9;
          font-weight: 500;
        }

        section {
          padding: 100px 0;
        }

        .section-header.centered {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 900;
          margin: 1rem 0;
        }

        .congress-intro {
          background: #fdfdfd;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .intro-text h2 {
          font-family: var(--font-headings);
          font-size: 2.25rem;
          font-weight: 900;
          margin-bottom: 2rem;
        }

        .intro-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 1.5rem;
        }

        .quote-card {
          background: #111;
          color: white;
          padding: 3rem;
          border-radius: 30px;
          position: relative;
          border-left: 8px solid ${accentColor};
        }

        .quote-icon {
          color: ${accentColor};
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }

        .quote-card p {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .quote-author {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          color: ${accentColor};
        }

        .downloads-section {
          background: #fff;
        }

        .downloads-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .download-group {
          background: #ffffff;
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .download-group:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border-color: ${accentColor};
        }

        .group-header {
          margin-bottom: 2rem;
        }

        .group-icon {
          color: ${accentColor};
          margin-bottom: 1rem;
        }

        .group-header h3 {
          font-family: var(--font-headings);
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1.3;
          color: #1a1a1a; /* Explicit dark color for visibility */
        }

        .file-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .file-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          background: white;
          border-radius: 12px;
          text-decoration: none;
          color: #333;
          font-weight: 700;
          border: 1px solid #eee;
          transition: all 0.2s ease;
        }

        .file-link:hover {
          background: ${accentColor};
          color: white;
          border-color: ${accentColor};
        }

        .info-box {
          background: #f8f9fa;
          padding: 4rem;
          border-radius: 30px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .info-box h3 {
          font-family: var(--font-headings);
          font-size: 1.75rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
        }

        .info-box p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 2rem;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          color: ${accentColor};
          text-decoration: none;
          font-size: 1.1rem;
        }

        @media (max-width: 1024px) {
          .downloads-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-content h1 { font-size: 3rem; }
        }

        @media (max-width: 768px) {
          .intro-grid { grid-template-columns: 1fr; }
          .downloads-grid { grid-template-columns: 1fr; }
          .hero-content h1 { font-size: 2.5rem; }
          .downloads-section { padding: 60px 0; }
        }
      `}} />
    </div>
  );
};

export default CongressPage;
