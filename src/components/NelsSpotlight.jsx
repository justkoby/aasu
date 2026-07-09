import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const NelsSpotlight = () => {
  const partnerLogos = [
    '/nels partners/UCC-Logo_616b2c32fb7bb9679ad560fc61635847.webp',
    '/nels partners/ESU-Logo_616b2c32fb7bb9679ad560fc61635847.webp',
    '/nels partners/FHOOE-Logo_616b2c32fb7bb9679ad560fc61635847.webp',
    '/nels partners/GSF-Logo_616b2c32fb7bb9679ad560fc61635847.webp',
    '/nels partners/OEH-Logo_616b2c32fb7bb9679ad560fc61635847.webp',
    '/nels partners/KCA-Logo_616b2c32fb7bb9679ad560fc61635847.webp',
  ];

  // 1. Sliding Images (nels-1 to nels-14)
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const nelsImages = Array.from({ length: 14 }, (_, i) => `/nels-${i + 1}.jpg`);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImgIndex(prev => (prev + 1) % nelsImages.length);
    }, 4000); // cycle every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // 2. Video switcher state & data
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videos = [
    {
      title: "Co-Creating Student Leadership",
      description: `As Cohort 2 of the NELS journey wraps up tomorrow, we hear from our session leaders, **Valentine Chepkoech Mugun** (Vice President East Africa, All Africa Students Union), and **Manja Klemenčič** (Senior Researcher at the Faculty of Education, University of Ljubljana, and Associate at the Department of Sociology, Harvard University), as they share why showing up matters.

This isn’t just another session, it’s your final opportunity to be part of a transformative experience with fellow student leaders, to learn, connect, and grow.

If you’ve been watching from the sidelines, this is your moment. Join us for the final session tomorrow. Come, engage, and finish strong.`,
      src: "/nels-video-1.mp4"
    },
    {
      title: "Quality Assurance & Feedback",
      description: `We spoke with **Dr. Manja Klemenčič**, Senior Researcher at the Faculty of Education, University of Ljubljana, Slovenia, and Associate at the Department of Sociology, Harvard University.

In her brief interview, she explained her role in quality assurance within NELS. She is responsible for designing participant feedback surveys after each session and analysing the responses collected. She then translates this feedback into practical insights, which are shared with session leaders and facilitators to help improve the design and delivery of future sessions.

Through this process, she helps ensure that each cohort is not only delivered effectively, but continuously improved based on participant experience. She encouraged students to take part in the NELS programme and contribute to shaping its ongoing development.`,
      src: "/nels-video-2.mp4",
      regLink: "https://fh-ooe.at/en/nels/registration-form"
    },
    {
      title: "New Ways of Student Organizing",
      description: `In a brief interview, **Laura Reppmann**, International Officer of the Austrian National Students Union (ÖH), encouraged students to sign up for the NELS programme and be part of the upcoming sessions. She also highlighted a few of the topics participants can look forward to, including "New Ways of Student Organizing."

Ready to be part of it?`,
      src: "/nels-video-3.mp4",
      regLink: "https://fh-ooe.at/en/nels/registration-form"
    },
    {
      title: "Advancing Continental Student Leadership",
      description: `During our 3rd Strategic Project Meeting in Ghana, we had the opportunity to speak with **Mr. James Kodjie**, Chief Programmes Officer of the All-Africa Students Union and a key voice in advancing student leadership across the continent.

In this interview, he encouraged youth and student leaders to actively look forward to the upcoming NELS sessions in our second cohort, highlighting the programme as a unique platform for capacity building, collaboration, and shared learning. His message was clear: NELS is more than just a programme; it is a space for growth, empowerment, and shaping the future of student leadership in Africa.

Don’t miss this opportunity to grow, connect, and lead. Now’s the time, secure your spot and keep your leadership journey moving.`,
      src: "/nels-video-4.mp4",
      regLink: "https://fh-ooe.at/en/nels/registration-form"
    },
    {
      title: "Cross-Cultural Communication",
      description: `As part of the 3rd Strategic Project Meeting in Ghana, we engaged session leaders to give students deeper insight into the NELS programme. We had the privilege of interacting with two distinguished session leaders shaping today’s discussion on Cross-Cultural Communication with Stakeholders:

- **Mbakeh Camara** (Director of International Relations and Cross-Sector Partnership Fellow at The Gambia National Assembly)
- **Louis Brau** (Head of Secretariat, European Students' Union and External Professor at Sciences Po Aix)

Their perspectives offered practical, real-world guidance on navigating stakeholder dynamics across cultures, an essential competence for student leaders operating in today’s interconnected space. This is the NELS experience: engaging directly with expertise, asking the right questions, and building the capacity to lead beyond borders.`,
      src: "/nels-video-5.mp4"
    }
  ];

  const handleNextVideo = () => {
    setActiveVideoIndex(prev => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex(prev => (prev - 1 + videos.length) % videos.length);
  };

  // Helper to format bold text and links in descriptions
  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n\n');
    return lines.map((para, i) => {
      // Bold text formatting
      let elements = [];
      const boldRegex = /\*\*([^*]+)\*\*/g;
      let lastIdx = 0;
      let match;
      
      while ((match = boldRegex.exec(para)) !== null) {
        const [full, word] = match;
        if (match.index > lastIdx) {
          elements.push(para.substring(lastIdx, match.index));
        }
        elements.push(<strong key={match.index} style={{ color: 'var(--primary-red)' }}>{word}</strong>);
        lastIdx = boldRegex.lastIndex;
      }
      if (lastIdx < para.length) {
        elements.push(para.substring(lastIdx));
      }

      return (
        <p key={i} className="video-description-paragraph">
          {elements.length > 0 ? elements : para}
        </p>
      );
    });
  };

  return (
    <section className="nels-spotlight-section">
      <div className="container">
        {/* Row 1: The Main Spotlight Grid */}
        <div className="nels-spotlight-grid">
          {/* Left Column: Text & Content */}
          <motion.div 
            className="nels-spotlight-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="spotlight-badge">
              <span className="badge-dot"></span>
              Spotlight Initiative
            </div>
            
            <h2 className="nels-spotlight-heading">
              New Era for Leadership in Schools
            </h2>
            
            <p className="nels-spotlight-text">
              AASU’s NELS Project is empowering student leaders across Africa with the skills, confidence, and networks needed to lead change in their schools and communities. Through leadership training, mentorship, civic engagement, and peer learning, NELS is helping shape a new generation of ethical, informed, and action-driven African student leaders.
            </p>
            
            <div className="nels-spotlight-actions">
              <Link to="/nels" className="nels-spotlight-btn">
                Explore the NELS Project <ArrowRight size={18} />
              </Link>
            </div>

            {/* Partners list */}
            <div className="nels-spotlight-partners">
              <span className="partners-title">Supported by partner institutions including:</span>
              <div className="partners-logo-row">
                {partnerLogos.map((logo, index) => (
                  <img 
                    key={index} 
                    src={logo} 
                    alt="Partner Institution Logo" 
                    className="partner-logo-img" 
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sliding Image Transition Component */}
          <motion.div 
            className="nels-spotlight-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="nels-main-card">
              <div className="nels-image-wrapper">
                {nelsImages.map((imgSrc, idx) => (
                  <img 
                    key={idx} 
                    src={imgSrc} 
                    alt={`NELS Project Slideshow ${idx + 1}`} 
                    className="nels-spotlight-image"
                    style={{ 
                      position: idx === 0 ? 'relative' : 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: idx === activeImgIndex ? 1 : 0, 
                      transition: 'opacity 1s ease-in-out',
                      zIndex: idx === activeImgIndex ? 1 : 0
                    }}
                  />
                ))}
                <div className="nels-image-overlay" style={{ zIndex: 2 }}></div>
              </div>
              <div className="nels-card-content">
                <div className="nels-card-tag">EU ERASMUS+ PROJECT</div>
                <h4 className="nels-card-title">Next Level Skills for Student Leaders</h4>
                <p className="nels-card-desc">Empowering student leaders across 12 African and European partner universities.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="nels-spotlight-divider" />

        {/* Row 2: Video Presentation / Spotlight Section */}
        <div className="nels-video-spotlight-title-container">
          <div className="spotlight-badge subtitle-badge">
            <Sparkles size={14} className="sparkle-icon" />
            NELS Video Highlights
          </div>
          <h3 className="nels-video-main-heading">
            Voices of NELS: <span className="highlight-red">Hear from our Leaders &amp; Experts</span>
          </h3>
        </div>

        <div className="nels-video-grid">
          {/* Video Text Information - Left Side */}
          <div className="nels-video-info-panel">
            <h4 className="nels-video-current-title">
              {videos[activeVideoIndex].title}
            </h4>
            
            <div className="nels-video-current-description">
              {formatText(videos[activeVideoIndex].description)}
            </div>

            {videos[activeVideoIndex].regLink && (
              <a 
                href={videos[activeVideoIndex].regLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nels-video-reg-btn"
              >
                Register for NELS <ArrowRight size={16} />
              </a>
            )}
          </div>

          {/* Video Player & Nav controls - Right Side */}
          <div className="nels-video-player-outer">
            <div className="nels-video-player-wrapper">
              <video 
                key={activeVideoIndex} 
                controls 
                className="nels-video-player-element"
                autoPlay={false}
              >
                <source src={videos[activeVideoIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Circular Stack Navigation Controls on the Right edge of the video */}
            <div className="nels-video-nav-controls">
              <button 
                onClick={handlePrevVideo} 
                className="nels-video-nav-btn" 
                aria-label="Previous Video"
              >
                <ChevronUp size={22} />
              </button>
              <button 
                onClick={handleNextVideo} 
                className="nels-video-nav-btn btn-active" 
                aria-label="Next Video"
              >
                <ChevronDown size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .nels-spotlight-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
          padding: 120px 0;
          overflow: hidden;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        }

        .nels-spotlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        .nels-spotlight-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .spotlight-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(227, 30, 36, 0.08);
          color: var(--primary-red);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(227, 30, 36, 0.15);
        }

        .subtitle-badge {
          background: rgba(142, 36, 170, 0.08);
          color: #8e24aa;
          border-color: rgba(142, 36, 170, 0.15);
          margin-bottom: 1rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--primary-red);
          border-radius: 50%;
          animation: pulse-dot 1.5s infinite;
        }

        @keyframes pulse-dot {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .nels-spotlight-heading {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.15;
          color: #1a1a1a;
          margin: 0 0 1.5rem;
          letter-spacing: -0.5px;
        }

        .nels-spotlight-text {
          font-size: 1.1rem;
          line-height: 1.75;
          color: #555;
          margin: 0 0 2rem;
        }

        .nels-spotlight-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--primary-red);
          color: white;
          padding: 1rem 2.2rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(227, 30, 36, 0.2);
        }

        .nels-spotlight-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(227, 30, 36, 0.35);
          background: #d6181e;
        }

        .nels-spotlight-partners {
          margin-top: 3.5rem;
          width: 100%;
          border-top: 1px solid #eef1f6;
          padding-top: 1.5rem;
        }

        .partners-title {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #999;
          font-weight: 700;
          margin-bottom: 0.8rem;
        }

        .partners-logo-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .partners-logo-row:hover {
          opacity: 0.95;
        }

        .partner-logo-img {
          height: 24px;
          max-width: 80px;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s;
        }

        .partner-logo-img:hover {
          filter: grayscale(0%);
        }

        /* Image Slideshow Styles */
        .nels-spotlight-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nels-main-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 520px;
        }

        .nels-main-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
        }

        .nels-image-wrapper {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #eaeaea;
        }

        .nels-spotlight-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nels-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%);
        }

        .nels-card-content {
          padding: 1.8rem;
        }

        .nels-card-tag {
          font-size: 0.7rem;
          font-weight: 800;
          color: #8e24aa;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .nels-card-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
          line-height: 1.3;
        }

        .nels-card-desc {
          font-size: 0.85rem;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .nels-floating-card {
          position: absolute;
          bottom: 20px;
          left: -10px;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.03);
          z-index: 5;
        }

        .floating-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--primary-red);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 800;
          color: #777;
          letter-spacing: 0.5px;
          margin-top: 0.2rem;
        }

        /* Divider */
        .nels-spotlight-divider {
          border: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.01) 100%);
          margin: 5rem 0;
        }

        /* Video Showcase Section styles */
        .nels-video-spotlight-title-container {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .nels-video-main-heading {
          font-family: var(--font-headings);
          font-size: 2.2rem;
          font-weight: 900;
          color: #111;
          margin: 0;
        }

        .nels-video-main-heading .highlight-red {
          color: var(--primary-red);
        }

        .nels-video-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .nels-video-info-panel {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }

        .nels-video-current-title {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          font-weight: 800;
          color: #111;
          margin: 0;
          line-height: 1.3;
        }

        .nels-video-current-description {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .video-description-paragraph {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #555;
          margin: 0;
        }

        .nels-video-reg-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #8e24aa;
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
          width: fit-content;
          margin-top: 1rem;
          box-shadow: 0 4px 15px rgba(142, 36, 170, 0.2);
          transition: all 0.25s ease;
        }

        .nels-video-reg-btn:hover {
          background: #7b1fa2;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(142, 36, 170, 0.35);
        }

        .nels-video-player-outer {
          display: flex;
          align-items: center;
          gap: 2rem;
          width: 100%;
          justify-content: center;
        }

        .nels-video-player-wrapper {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 9 / 16;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.03);
          background: #000;
        }

        .nels-video-player-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .nels-video-nav-controls {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .nels-video-nav-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
          background: white;
          color: #4a5568;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nels-video-nav-btn:hover {
          transform: scale(1.08);
          border-color: #8e24aa;
          color: #8e24aa;
          box-shadow: 0 6px 15px rgba(142, 36, 170, 0.15);
        }

        .nels-video-nav-btn.btn-active {
          background: #8e24aa;
          color: white;
          border-color: #8e24aa;
          box-shadow: 0 6px 18px rgba(142, 36, 170, 0.3);
        }

        @media (max-width: 991px) {
          .nels-spotlight-grid {
            gap: 3rem;
          }
          .nels-spotlight-heading {
            font-size: 2.3rem;
          }
          .nels-video-grid {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .nels-spotlight-section {
            padding: 80px 0;
          }
          .nels-spotlight-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .nels-spotlight-content {
            align-items: center;
            text-align: center;
          }
          .nels-spotlight-heading {
            font-size: 2rem;
          }
          .nels-spotlight-text {
            font-size: 1rem;
          }
          .nels-spotlight-btn {
            padding: 0.9rem 2rem;
          }
          .nels-spotlight-partners {
            margin-top: 2.5rem;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          .partners-logo-row {
            justify-content: center;
          }
          .nels-spotlight-visual {
            max-width: 100%;
          }
          .nels-floating-card {
            left: 20px;
          }

          /* Mobile layout for videos */
          .nels-video-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .nels-video-info-panel {
            align-items: center;
            text-align: center;
          }
          .nels-video-player-outer {
            flex-direction: column;
            gap: 1.5rem;
          }
          .nels-video-nav-controls {
            flex-direction: row;
            gap: 1.5rem;
          }
          .nels-video-main-heading {
            font-size: 1.8rem;
          }
        }
      `}} />
    </section>
  );
};

export default NelsSpotlight;
