import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';

export const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  useEffect(() => {
    // Smooth scrolling for hash links
    const handleHashClick = (e) => {
      const link = e.target.closest('a');
      const href = link ? link.getAttribute('href') : null;
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 120; // topbar (40px) + navbar (80px)
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('.nels-root a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleHashClick));
    return () => links.forEach(link => link.removeEventListener('click', handleHashClick));
  }, []);

  const faqData = [
    {
      q: "Who can participate in NELS?",
      a: "NELS is open to all students, regardless of whether they are enrolled in a Bachelor’s, Master’s, or any other level of study."
    },
    {
      q: "Is the programme free?",
      a: "Yes, participation in the NELS online sessions is free for registered participants."
    },
    {
      q: "Do I need to attend all sessions?",
      a: "No. You may participate in individual sessions and receive a digital badge for each completed session. However, participants who complete the full programme qualify for the micro-credential certification."
    },
    {
      q: "What certificate will I receive?",
      a: "Participants receive:\n\n• A digital badge for attending individual sessions\n• A 3 ECTS micro-credential certificate for completing the full course programme"
    },
    {
      q: "How many sessions are included in the programme?",
      a: "The programme includes:\n\n• 1 Welcome Session\n• 5 Main Training Sessions\n\nAll sessions are delivered online."
    },
    {
      q: "What topics are covered?",
      a: "Topics include:\n\n• Future Skills and Megatrends\n• Digitalisation and Digital Transformation\n• Leadership for Student Leaders\n• Communication for Student Leaders\n• New Ways of Student Organising"
    },
    {
      q: "Are the sessions held online or in person?",
      a: "All sessions are conducted virtually through online learning platforms and interactive digital tools."
    },
    {
      q: "What platforms are used for the sessions?",
      a: "Participants will use:\n\n• Moodle\n• Microsoft Teams\n• Interactive collaboration tools such as Miro and Padlet"
    },
    {
      q: "Can students from Africa and Europe both apply?",
      a: "Yes. NELS brings together participants from Europe and Sub-Saharan Africa to encourage intercultural learning and collaboration."
    },
    {
      q: "Will the sessions be recorded?",
      a: "Depending on the facilitator and session format, recordings or learning materials may be shared with registered participants after the session."
    },
    {
      q: "What happens after registration?",
      a: "Once registered, participants will receive:\n\n• A confirmation email\n• Session schedule\n• Access details for Moodle and online sessions\n• Additional programme information"
    },
    {
      q: "Can I join sessions in my timezone?",
      a: "Yes. Sessions are offered at different time slots to accommodate participants across multiple regions and time zones."
    },
    {
      q: "What skills will participants gain?",
      a: "Participants will gain practical skills in:\n\n• Leadership\n• Communication\n• Digital transformation\n• Critical thinking\n• Student organising\n• International collaboration"
    },
    {
      q: "Who facilitates the sessions?",
      a: "Sessions are led by experienced facilitators, educators, and student organisation representatives from Africa and Europe."
    },
    {
      q: "How do I qualify for the 3 ECTS micro-credential?",
      a: "Participants must complete:\n\n• The welcome session\n• All five training sessions\n• Required participation activities or assessments"
    },
    {
      q: "Is prior leadership experience required?",
      a: "No. Students at different levels of leadership experience are welcome to participate."
    },
    {
      q: "How can I contact the NELS team?",
      a: "You can contact the team through:\n\n• The contact form on the website\n• Official project email\n• AASU communication channels"
    },
    {
      q: "Can student organisations partner with NELS?",
      a: "Yes. Student unions, youth organisations, and academic institutions interested in collaboration can contact the project team through the partnerships section."
    }
  ];

  const renderFAQAnswer = (text) => {
    return text.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('•')) {
        return (
          <ul key={idx} className="faq-answer-list" style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            {paragraph.split('\n').map((line, lIdx) => (
              <li key={lIdx} style={{ marginBottom: '0.25rem' }}>
                {line.replace('•', '').trim()}
              </li>
            ))}
          </ul>
        );
      }
      return <p key={idx} style={{ marginBottom: '0.5rem' }}>{paragraph}</p>;
    });
  };

  const sessions = [
    {
      title: "Future Skills and Megatrends",
      icon: "/future-skills.webp",
      time: "(CET: 14:00; GMT 13:00; EAT: 16:00)",
      date: "26th October 2026 - 16th November 2026",
      link: "https://fh-ooe.at/en/nels"
    },
    {
      title: "Digitalisation and Digital Transformation",
      icon: "/digitalisation.webp",
      time: "(CET: 14:00; GMT 13:00; EAT: 16:00)",
      date: "27th October 2026 - 17th November 2026",
      link: "https://fh-ooe.at/en/nels"
    },
    {
      title: "Leadership for Student Leaders",
      icon: "/leadership.webp",
      time: "(CET: 14:00; GMT 13:00; EAT: 16:00)",
      date: "28th October 2026 - 18th November 2026",
      link: "https://fh-ooe.at/en/nels"
    },
    {
      title: "Communication for Student Leaders - Virtual Space",
      icon: "/communication.webp",
      time: "(CET: 14:00; GMT 13:00; EAT: 16:00)",
      date: "29th October 2026 - 19th November 2026",
      link: "https://fh-ooe.at/en/nels"
    },
    {
      title: "New Ways of Student Organizing I",
      icon: "/new-ways.webp",
      time: "(CET: 14:00; GMT 13:00; EAT: 16:00)",
      date: "30th October 2026 - 20th November 2026",
      link: "https://fh-ooe.at/en/nels"
    }
  ];

  return (
    <main className="nels-main">
      <SEO 
        title="NELS - Next Level Skills for Student Leaders" 
        description="Next Level Skills for Student Leaders (NELS) is a dynamic virtual exchange training course designed to equip current and aspiring student leaders in Europe and Sub-Saharan Africa with the next-level skills needed to lead change." 
        keywords="NELS, Next Level Skills, Student Leaders, AASU, All-Africa Students Union, Leadership Training, Erasmus+, capacity building, student empowerment"
        image="/bg-nels.jpg"
        url="https://aasuonline.org/nels"
      />

      {/* Hero Section */}
      <section className="nels-hero-section">
        <div className="hero-grid">
          {/* Left Column: Typography & Action */}
          <div className="hero-left animate-fade-in">
            <h1>NELS - Next Level Skills<br />for Student Leaders</h1>
            <p>
              Next Level Skills for Student Leaders (NELS) is a dynamic virtual training course designed to elevate the capabilities of student leaders across Europe and Sub-Saharan Africa.
            </p>
            <a 
              href="#register" 
              className="btn-hero-cta"
            >
              Register now! <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Column: Image with Geometric Grid Mask */}
          <div className="hero-right">
            <div className="hero-img-container">
              <img 
                src="/bg-nels.jpg" 
                alt="Student Leaders - Next Level Skills" 
                className="hero-img"
              />
              
              {/* Stepped Geometric/Puzzle Overlay Squares */}
              <div className="grid-square sq-top-left-1"></div>
              <div className="grid-square sq-top-left-2"></div>
              <div className="grid-square sq-left-mid"></div>
              <div className="grid-square sq-bottom-right-1"></div>
              <div className="grid-square sq-bottom-right-2"></div>
              <div className="grid-square sq-bottom-mid"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* Sidebar Navigation */}
            <div className="about-sidebar">
              <ul className="sidebar-links">
                <li><a href="https://fh-ooe.at/en/nels" target="_blank" rel="noopener noreferrer" className="sidebar-link">NELS Home</a></li>
                <li><a href="https://fh-ooe.at/en/nels" target="_blank" rel="noopener noreferrer" className="sidebar-link">Future Challenges</a></li>
                <li><a href="https://fh-ooe.at/en/nels" target="_blank" rel="noopener noreferrer" className="sidebar-link active">Next Level Skills</a></li>
                <li><a href="https://fh-ooe.at/en/nels" target="_blank" rel="noopener noreferrer" className="sidebar-link">New Ways of Student Organising</a></li>
                <li><a href="#register" className="sidebar-link">Registration form</a></li>
                <li><a href="#team" className="sidebar-link">NELS Team</a></li>
              </ul>
            </div>
            
            {/* Main Content Pane */}
            <div className="about-content">
              <h2>What is NELS?</h2>
              <p>
                Whether you're representing your student union, leading a campus initiative, or simply passionate about making a difference, NELS empowers you to lead with confidence, creativity, and compassion.
              </p>
              <p>
                NELS brings together student leaders from Europe and Sub-Saharan Africa for virtual training sessions that foster leadership, critical thinking, and intercultural exchange. Participants gain practical tools to drive positive change within and with student movements, organisations and initiatives, and build lasting international networks.
              </p>
              <p>
                The NELS course offers one online <strong>welcome session</strong> and five <strong>training sessions</strong> per semester, all delivered online. Each session is offered at two different times to help interested participants to fit it to their schedule. A digital badge is offered for participation in a single session and a micro credential of 3 ECTS for those who participate in all 6 sessions in a semester.
              </p>
              <p>
                Training sessions are led by experienced facilitators and student organisation representatives from across Africa and Europe.
              </p>
              <p className="highlight-text">
                This course is open to all students, independent of whether they are enrolled in a Bachelor's, Master's, or any other level of study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme & Sessions Section */}
      <section id="programme" className="programme-section">
        <div className="container">
          <h2 className="programme-header">October 2026 - November 2026</h2>
          
          <div className="sessions-list">
            {sessions.map((session, idx) => (
              <div className="session-item animate-fade-in" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="session-icon-wrapper">
                  <img src={session.icon} alt={session.title} className="session-icon" />
                </div>
                <div className="session-details">
                  <h3 className="session-title">{session.title}</h3>
                  <p className="session-time">{session.time}</p>
                  <p className="session-date">{session.date}</p>
                </div>
                <div className="session-action">
                  <a href={session.link} target="_blank" rel="noopener noreferrer" className="more-info-link">
                    <span className="more-info-text">More information</span>
                    <div className="arrow-circle">
                      <ArrowRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes of Participation & Recognition Section */}
      <section className="modes-section">
        <div className="container">
          <div className="modes-grid">
            {/* Left Column: Image */}
            <div className="modes-left animate-fade-in">
              <img 
                src="/NELS-Image-copy_2.webp" 
                alt="Modes of Participation & Recognition" 
                className="modes-img"
              />
            </div>
            
            {/* Right Column: Text & List */}
            <div className="modes-right animate-fade-in">
              <h2>Modes of Participation<br />&amp; Recognition</h2>
              <p className="modes-intro">Students can choose to:</p>
              
              <ul className="modes-list">
                <li>
                  <span className="bullet-point">•</span>
                  <div className="bullet-text">
                    Attend selected individual sessions: a digital badge is offered for participation in a single session.
                  </div>
                </li>
                <li>
                  <span className="bullet-point">•</span>
                  <div className="bullet-text">
                    Participate in the full course (1 Welcome session + 5 sessions): those who complete the full course are eligible to receive 3 micro-credentials (European-standard ECTS credits) issued by FH OOE.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section id="sessions" className="sessions-schedule-section">
        <div className="container">
          <h2 className="schedule-header">Sessions Schedule</h2>
          <p className="schedule-subheader">
            Check the calendar for upcoming cohort sessions, virtual webinars, workshops, and panel dialogues.
          </p>
          
          <div className="timetable-container">
            <table className="nels-timetable">
              <thead>
                <tr>
                  <th className="col-cycle border-right-divider">Cycle 3</th>
                  <th colSpan="4" className="col-offer-header border-right-divider">First Offer</th>
                  <th colSpan="4" className="col-offer-header">Second Offer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-session-name border-right-divider">Welcome Session</td>
                  <td className="col-date border-right-divider">23rd October 2026</td>
                  <td className="col-time">14:00-16:30 CEST - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">12:00-14:30 GMT - Ghana, Gambia</td>
                  <td className="col-time border-right-divider">15:00 - 17:30 EAT - Kenya</td>
                  <td className="col-date border-right-divider">13th November 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time">16:00-18:30 - EAT - Kenya</td>
                </tr>
                <tr>
                  <td className="col-session-name border-right-divider">Future Skills and Megatrends</td>
                  <td className="col-date border-right-divider">26th October 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time border-right-divider">16:00-18:30 – EAT - Kenya</td>
                  <td className="col-date border-right-divider">16th November 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time">16:00-18:30 – EAT - Kenya</td>
                </tr>
                <tr>
                  <td className="col-session-name border-right-divider">Digitalisation and Digital Transformation</td>
                  <td className="col-date border-right-divider">27th October 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time border-right-divider">16:00-18:30 – EAT - Kenya</td>
                  <td className="col-date border-right-divider">17th November 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time">16:00-18:30 – EAT - Kenya</td>
                </tr>
                <tr>
                  <td className="col-session-name border-right-divider">Leadership for Student Leaders</td>
                  <td className="col-date border-right-divider">28th October 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time border-right-divider">16:00-18:30 – EAT - Kenya</td>
                  <td className="col-date border-right-divider">18th November 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time">16:00-18:30 – EAT - Kenya</td>
                </tr>
                <tr>
                  <td className="col-session-name border-right-divider">Communication for Student Leaders - Virtual Space</td>
                  <td className="col-date border-right-divider">29th October 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time border-right-divider">16:00-18:30 – EAT - Kenya</td>
                  <td className="col-date border-right-divider">19th November 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time">16:00-18:30 – EAT - Kenya</td>
                </tr>
                <tr>
                  <td className="col-session-name border-right-divider">New Ways of Student Organizing I</td>
                  <td className="col-date border-right-divider">30th October 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time border-right-divider">16:00-18:30 – EAT - Kenya</td>
                  <td className="col-date border-right-divider">20th November 2026</td>
                  <td className="col-time">14:00-16:30 CET - Austria, Slovenia, Germany, Belgium, Denmark</td>
                  <td className="col-time">13:00-15:30 GMT - Ghana, Gambia</td>
                  <td className="col-time">16:00-18:30 – EAT - Kenya</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Media Insights Section */}
      <section className="nels-social-section">
        <div className="container">
          <h2 className="social-header">More insights on social media</h2>
          
          <div className="social-cards-grid">
            {/* Facebook Card */}
            <a 
              href="https://facebook.com/AASU1972" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card card-facebook"
            >
              <div className="social-icon-box fb-icon">
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </div>
              <p className="social-card-text">Next Level Skills for Students - NELS</p>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card card-linkedin"
            >
              <div className="social-icon-box li-icon">
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <p className="social-card-text">Next Level Skills for Students - NELS</p>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/aasu_1972" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card card-instagram"
            >
              <div className="social-icon-box ig-icon">
                <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <p className="social-card-text">Next Level Skills for Students - NELS</p>
            </a>
          </div>
        </div>
      </section>

      {/* Technical Information & Support Section */}
      <section className="tech-info-section">
        <div className="container">
          <h2>Technical Information &amp; Support</h2>
          
          <div className="tech-info-content">
            <div className="tech-info-item">
              <strong>Platform:</strong> All sessions will be hosted on <strong>Moodle</strong> and conducted via <strong>Teams</strong>
            </div>
            
            <div className="tech-info-item">
              <strong>Support:</strong> AASU, GSF, and ESU teams are available for technical and administrative guidance
            </div>
            
            <div className="tech-info-item">
              <strong>Tools Used:</strong> Breakout rooms, collaborative whiteboards (Padlet, Miro), and gamified learning methods
            </div>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section id="register" className="register-section">
        <div className="container">
          <h2>How to Register</h2>
          <p className="register-desc">
            The <strong>Registration deadline</strong> is one day before the session. After completing it, wait for confirmation via email with details on how to join the <strong>Moodle platform</strong>.
          </p>
          <a 
            href="https://fh-ooe.at/en/nels/registration-form" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-register-outline"
          >
            Register now! <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>

      {/* Partner Institutions Section */}
      <section id="partners" className="partners-section">
        <div className="container">
          <h2 className="partners-header">Partner Institutions</h2>
          <p className="partners-subheader">
            NELS is backed by a global consortium of 12 partner universities across Europe and Sub-Saharan Africa.
          </p>
          
          <div className="partners-grid-content">
            {[
              { name: 'AASU', src: '/nels partners/AASU-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'ACCRA-MET', src: '/nels partners/ACCRA-MET_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'ACDE', src: '/nels partners/ACDE-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'Artboard-49', src: '/nels partners/Artboard-49_353fe568217a4ecd8f2727f818d6534e.webp' },
              { name: 'ESU', src: '/nels partners/ESU-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'FHOOE', src: '/nels partners/FHOOE-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'GSF', src: '/nels partners/GSF-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'KCA', src: '/nels partners/KCA-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'OEH', src: '/nels partners/OEH-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'UCC', src: '/nels partners/UCC-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'UDE', src: '/nels partners/UDE-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'UL', src: '/nels partners/UL-Logo_616b2c32fb7bb9679ad560fc61635847.webp' },
              { name: 'UTG', src: '/nels partners/UTG-Logo_616b2c32fb7bb9679ad560fc61635847.webp' }
            ].map((partner, idx) => (
              <div className="partner-logo-item" key={idx} title={partner.name}>
                <img src={partner.src} alt={`${partner.name} Logo`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="nels-faq-section">
        <div className="container">
          <h2 className="faq-header">Frequently Asked Questions</h2>
          <p className="faq-subheader">
            Find answers to common questions about eligibility, certificates, workload, and technical requirements.
          </p>
          
          <div className="faq-accordion">
            {faqData.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon-arrow">{isOpen ? '−' : '+'}</span>
                  </button>
                  
                  <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '1000px' : '0px' }}>
                    <div className="faq-answer-content">
                      {renderFAQAnswer(item.a)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NELS Project Team Section */}
      <section id="team" className="nels-team-section">
        <div className="container">
          <div className="team-container-box">
            <div className="team-text-content">
              <h2>NELS Project Team</h2>
              <p>
                Backed by a consortium of HEIs and representative student unions, NELS draws on extensive expertise in fostering student engagement and civic involvement. The project runs from 1 February 2025 to 31 January 2028. Funded by the European Union. Views and opinions expressed are however those of the authors only and do not necessarily reflect those of the European Union or EACEA). Neither the European Union nor the granting authority can be held responsible for them.
              </p>
            </div>
            
            <div className="team-grid-pattern">
              <div className="team-square sq-white-top"></div>
              <div className="team-square sq-grey-mid"></div>
              <div className="team-square sq-white-bottom"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: '100px 0', background: '#ffffff', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-headings)' }}>Contact Us</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#475569', lineHeight: 1.7 }}>
            Have questions? Get in touch with our program coordinators and student helpdesk.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
