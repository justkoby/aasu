import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import SEO from '../../components/SEO';

export const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // 1. Sliding Images (nels-1 to nels-14)
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const nelsImages = Array.from({ length: 14 }, (_, i) => `/nels-${i + 1}.jpg`);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImgIndex(prev => (prev + 1) % nelsImages.length);
    }, 4000);
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

  const formatText = (text) => {
    if (!text) return null;
    const lines = text.split('\n\n');
    return lines.map((para, i) => {
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
            <div className="hero-img-container" style={{ position: 'relative' }}>
              {nelsImages.map((imgSrc, idx) => (
                <img 
                  key={idx} 
                  src={imgSrc} 
                  alt={`Student Leaders - Next Level Skills ${idx + 1}`} 
                  className="hero-img"
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
              
              {/* Stepped Geometric/Puzzle Overlay Squares */}
              <div className="grid-square sq-top-left-1" style={{ zIndex: 2 }}></div>
              <div className="grid-square sq-top-left-2" style={{ zIndex: 2 }}></div>
              <div className="grid-square sq-left-mid" style={{ zIndex: 2 }}></div>
              <div className="grid-square sq-bottom-right-1" style={{ zIndex: 2 }}></div>
              <div className="grid-square sq-bottom-right-2" style={{ zIndex: 2 }}></div>
              <div className="grid-square sq-bottom-mid" style={{ zIndex: 2 }}></div>
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

      {/* Video Presentation Section */}
      <section className="nels-video-showcase-section">
        <div className="container">
          <div className="nels-video-spotlight-title-container">
            <div className="spotlight-badge subtitle-badge">
              <Sparkles size={14} className="sparkle-icon" />
              NELS Video Highlights
            </div>
            <h2 className="nels-video-main-heading">
              Voices of NELS: <span className="highlight-red">Hear from our Leaders &amp; Experts</span>
            </h2>
          </div>

          <div className="nels-video-grid">
            {/* Video Text Information - Left Side */}
            <div className="nels-video-info-panel">
              <h3 className="nels-video-current-title">
                {videos[activeVideoIndex].title}
              </h3>
              
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

              {/* Circular Stack Navigation Controls */}
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

      <style dangerouslySetInnerHTML={{ __html: `
        /* Video Showcase Section styles */
        .nels-video-showcase-section {
          background: #ffffff;
          padding: 100px 0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .nels-video-spotlight-title-container {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .nels-video-main-heading {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 900;
          color: #111;
          margin: 0;
        }

        .nels-video-main-heading .highlight-red {
          color: var(--primary-red);
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
          font-size: 2rem;
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
          color: #4a5568;
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
          .nels-video-grid {
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
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
            font-size: 2rem;
          }
        }
      `}} />
    </main>
  );
};

export default Home;
