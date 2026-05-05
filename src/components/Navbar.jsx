import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Facebook, Instagram, Twitter, Linkedin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMobileItem = (label) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Synchronized with TopBar
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all menus when route changes
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  }, [location.pathname]);

  const socialUrls = {
    facebook: "https://www.facebook.com/AASU1972",
    instagram: "https://www.instagram.com/aasu_1972/",
    twitter: "https://x.com/aasu_72",
    linkedin: "https://www.linkedin.com/company/aasu1972/"
  };

  const navItems = [
    // ... items remain same ...
    { 
      label: 'WHO WE ARE', 
      hasMega: true,
      megaContent: {
        columns: [
          {
            title: 'About Us',
            links: ['Executive Committee', 'Secretariat', 'Technical Team']
          },
          {
            title: 'Membership',
            links: ['Membership List', 'Board of Members', 'Partners']
          },
          {
            title: 'Background of AASU',
            links: ['History of AASU', 'Profile of AASU']
          }
        ],
        image: '/mega_menu_image.png',
        imageLabel: 'KENYA'
      }
    },
    { 
      label: 'WHAT WE DO', 
      hasMega: true,
      megaContent: {
        columns: [
          {
            title: 'Initiatives',
            links: [
              'Programs & Impact'
            ]
          },
          {
            title: 'Strategic Priorities',
            links: [
              "Education & Students' Rights", 
              'Gender Equity & Social Inclusion', 
              'Democracy, Good Governance, Peace & Security', 
              'Capacity Building, Skills Development & Employability'
            ]
          },
          {
            title: '',
            links: [
              'Migration, Mobility & Exchanges', 
              'Climate Action and Environmental Sustainability', 
              'Pan-Africanism & African Culture'
            ]
          }
        ],
        image: '/IMG_1048 copy 2.jpg',
        imageLabel: 'AASU Story Book Bank Project'
      }
    },
    { 
      label: 'WORK WITH US', 
      hasMega: true,
      megaContent: {
        columns: [
          {
            title: '',
            links: ['Vacancies', 'Volunteer with us', 'Internship Opportunities', 'Careers in AASU', 'Become a Member']
          }
        ],
        image: '/kids-sdg.jpg',
        imageLabel: ''
      }
    },
    { 
      label: 'NEWS & EVENTS', 
      hasMega: true,
      megaContent: {
        columns: [
          {
            title: '',
            links: ['News', 'Upcoming Events', 'Gallery']
          }
        ],
        image: '/donation-laptops.jpg',
        imageLabel: ''
      }
    },
    { 
      label: 'RESOURCES', 
      hasMega: true,
      megaContent: {
        columns: [
          {
            title: 'Statutory Documents',
            links: ['AASU Strategic Plan', 'AASU Constitution']
          },
          {
            title: 'Congress Resolutions',
            links: ['11th Congress Resolutions', '12th Congress Resolutions', '13th Congress Resolutions (EN)', '13th Congress Resolutions (FR)']
          },
          {
            title: 'Publications',
            links: ['Reports', 'Policy Papers', 'Newsletters', 'Press Statements', 'Archive', 'Brand & Media Kit']
          }
        ],
        image: '/women.jpg',
        imageLabel: ''
      }
    },
    { label: 'STUDENTS VOICES', hasDropdown: false },
    { label: 'CONTACT US', hasDropdown: false },
  ];

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        {/* Middle Bar: Logo and Search/Socials */}
        <div className="container middle-bar">
          <div className="logo-container">
            <Link to="/">
              <img src="/logo with white text.png" alt="AASU Logo" className="logo" />
            </Link>
          </div>

          <div className="right-controls d-none d-lg-flex">
            <div className="social-links">
              <a href={socialUrls.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18} className="social-icon" /></a>
              <a href={socialUrls.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} className="social-icon" /></a>
              <a href={socialUrls.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={18} className="social-icon" /></a>
              <a href={socialUrls.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} className="social-icon" /></a>
            </div>
            <div className="search-bar-container">
              <form onSubmit={handleSearch} className="search-bar">
                <input
                  type="text"
                  placeholder="I am looking for..."
                  className="search-input"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>

          {/* Mobile Toggle inside Middle Bar - Positioned on Right */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Bar */}
        <nav className={`nav-bar ${isScrolled ? 'glass' : 'transparent'}`}>
          <div className="container nav-content">
            <div className="nav-links">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`nav-item ${activeMegaMenu === item.label ? 'active' : ''}`}
                  onMouseEnter={() => item.hasMega && setActiveMegaMenu(item.label)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  {item.label === 'STUDENTS VOICES' || item.label === 'CONTACT US' ? (
                    <Link to={item.label === 'STUDENTS VOICES' ? '/students-voices' : '/contact'} className="nav-link">
                      {item.label}
                    </Link>
                  ) : (
                    <a href="#" className="nav-link">
                      {item.label}
                      {(item.hasMega || item.hasDropdown) && <ChevronDown size={14} className="dropdown-icon" />}
                    </a>
                  )}

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {item.hasMega && activeMegaMenu === item.label && (
                      <motion.div 
                        className="mega-menu-wrapper"
                        initial={{ opacity: 0, scaleY: 0.95, transformOrigin: 'top' }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="mega-menu">
                          <div className="container mega-content">
                            <div className="mega-left">
                              <h2 className="mega-title">{item.label}</h2>
                              <div className="mega-grid">
                                {item.megaContent?.columns.map((col, cIdx) => (
                                  <div className="mega-column" key={cIdx}>
                                    {col.title && <h3>{col.title}</h3>}
                                    <ul>
                                      {col.links.map((link, lIdx) => {
                                        let routePath = '#';
                                        if (link === 'History of AASU') routePath = '/history';
                                        if (link === 'Membership List' || link === 'Board of Members') routePath = '/membership';
                                        if (link === 'Partners') routePath = '/partners';
                                        if (link === 'Executive Committee') routePath = '/executives';
                                        if (link === 'Profile of AASU') routePath = '/profile';
                                        if (link === 'Technical Team' || link === 'Secretariat') routePath = '/technical-team';
                                        if (link === 'Volunteer with us') routePath = '/volunteer';
                                        if (link === 'Become a Member') routePath = '/become-a-member';
                                        if (link === 'Internship Opportunities') routePath = '/internship';
                                        if (link === 'Vacancies' || link === 'Careers in AASU') routePath = 'mailto:info@aasuonline.org';
                                        if (link === 'News') routePath = '/news';
                                        if (link === 'Gallery') routePath = '/gallery';
                                        if (link === 'Upcoming Events') routePath = '/events';
                                        if (link === 'Press Statements') routePath = '/news';
                                        if (link === 'Reports' || link === 'Policy Papers' || link === 'Newsletters' || link === 'Archive' || link === 'AASU Strategic Plan' || link === 'AASU Constitution' || link === '11th Congress Resolutions' || link === '12th Congress Resolutions') routePath = '/reports';
                                        if (link === "Education & Students' Rights") routePath = '/priority/education';
                                        if (link === 'Gender Equity & Social Inclusion') routePath = '/priority/gender';
                                        if (link === 'Democracy, Good Governance, Peace & Security') routePath = '/priority/democracy';
                                        if (link === 'Capacity Building, Skills Development & Employability') routePath = '/priority/capacity';
                                        if (link === 'Migration, Mobility & Exchanges') routePath = '/priority/migration';
                                        if (link === 'Climate Action and Environmental Sustainability') routePath = '/priority/climate';
                                        if (link === 'Pan-Africanism & African Culture') routePath = '/priority/culture';
                                        if (link === 'Programs & Impact') routePath = '/programs';
                                        if (link === 'Brand & Media Kit') routePath = '/resources/branding';
                                        if (link === '13th Congress Resolutions (EN)') routePath = '/13th Congress Resolutions.pdf';
                                        if (link === '13th Congress Resolutions (FR)') routePath = '/13th Congress Resolutions(FR).pdf';

                                        return (
                                          <li key={lIdx}>
                                            {routePath.startsWith('mailto:') || routePath.endsWith('.pdf') ? (
                                              <a href={routePath} target={routePath.endsWith('.pdf') ? "_blank" : undefined} rel={routePath.endsWith('.pdf') ? "noopener noreferrer" : undefined}>
                                                {link}
                                              </a>
                                            ) : (
                                              <Link to={routePath}>{link}</Link>
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="mega-right">
                              <div className="mega-image-container">
                                <img src={item.megaContent?.image || "/mega_menu_image.png"} alt={item.label} />
                                <div className="image-label">{item.megaContent?.imageLabel || ""}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
             <div className="mobile-header">
                <img src="/logo with white text.png" alt="Logo" className="mobile-logo" />
                <X className="close-mobile" size={32} onClick={closeMobileMenu} />
             </div>
             
             <div className="mobile-links-container">
                {navItems.map((item, i) => (
                  <div key={i} className="mobile-item-group">
                    <div 
                      className="mobile-link-main"
                      onClick={() => item.hasMega ? toggleMobileItem(item.label) : closeMobileMenu()}
                    >
                      {item.label === 'STUDENTS VOICES' || item.label === 'CONTACT US' ? (
                        <Link to={item.label === 'STUDENTS VOICES' ? '/students-voices' : '/contact'} onClick={closeMobileMenu}>
                          {item.label}
                        </Link>
                      ) : (
                        <span className="mobile-label-text">{item.label}</span>
                      )}
                      {item.hasMega && (
                        <ChevronDown 
                          size={20} 
                          className={`mobile-chevron ${expandedMobileItem === item.label ? 'active' : ''}`}
                        />
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {item.hasMega && expandedMobileItem === item.label && (
                        <motion.div 
                          className="mobile-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          {item.megaContent.columns.map((col, cIdx) => (
                            <div key={cIdx} className="mobile-subcolumn">
                              {col.title && <h5 className="mobile-subtitle">{col.title}</h5>}
                              <ul>
                                {col.links.map((link, lIdx) => {
                                  let routePath = '#';
                                  if (link === 'History of AASU') routePath = '/history';
                                  if (link === 'Membership List' || link === 'Board of Members') routePath = '/membership';
                                  if (link === 'Partners') routePath = '/partners';
                                  if (link === 'Executive Committee') routePath = '/executives';
                                  if (link === 'Profile of AASU') routePath = '/profile';
                                  if (link === 'Technical Team' || link === 'Secretariat') routePath = '/technical-team';
                                  if (link === 'Volunteer with us') routePath = '/volunteer';
                                  if (link === 'Become a Member') routePath = '/become-a-member';
                                  if (link === 'Internship Opportunities') routePath = '/internship';
                                  if (link === 'Vacancies' || link === 'Careers in AASU') routePath = 'mailto:info@aasuonline.org';
                                  if (link === 'News') routePath = '/news';
                                  if (link === 'Gallery') routePath = '/gallery';
                                  if (link === 'Upcoming Events') routePath = '/events';
                                  if (link === 'Press Statements') routePath = '/news';
                                  if (link === 'Reports' || link === 'Policy Papers' || link === 'Newsletters' || link === 'Archive' || link === 'AASU Strategic Plan' || link === 'AASU Constitution' || link === '11th Congress Resolutions' || link === '12th Congress Resolutions') routePath = '/reports';
                                  if (link === "Education & Students' Rights") routePath = '/priority/education';
                                  if (link === 'Gender Equity & Social Inclusion') routePath = '/priority/gender';
                                  if (link === 'Democracy, Good Governance, Peace & Security') routePath = '/priority/democracy';
                                  if (link === 'Capacity Building, Skills Development & Employability') routePath = '/priority/capacity';
                                  if (link === 'Migration, Mobility & Exchanges') routePath = '/priority/migration';
                                  if (link === 'Climate Action and Environmental Sustainability') routePath = '/priority/climate';
                                  if (link === 'Pan-Africanism & African Culture') routePath = '/priority/culture';
                                  if (link === 'Programs & Impact') routePath = '/programs';
                                  if (link === 'Brand & Media Kit') routePath = '/resources/branding';
                                  if (link === '13th Congress Resolutions (EN)') routePath = '/13th Congress Resolutions.pdf';
                                  if (link === '13th Congress Resolutions (FR)') routePath = '/13th Congress Resolutions(FR).pdf';

                                  return (
                                    <li key={lIdx}>
                                      {routePath.startsWith('mailto:') || routePath.endsWith('.pdf') ? (
                                        <a href={routePath} onClick={closeMobileMenu} target={routePath.endsWith('.pdf') ? "_blank" : undefined} rel={routePath.endsWith('.pdf') ? "noopener noreferrer" : undefined}>
                                          {link}
                                        </a>
                                      ) : (
                                        <Link to={routePath} onClick={closeMobileMenu}>{link}</Link>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>

             <div className="mobile-footer">
                <div className="social-links-mobile">
                  <a href={socialUrls.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                  <a href={socialUrls.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                  <a href={socialUrls.twitter} target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
                  <a href={socialUrls.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .main-header {
          position: fixed;
          top: 40px;
          left: 0;
          width: 100%;
          z-index: 990;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-header.scrolled, .main-header.mobile-menu-open {
           top: 0;
           background: rgba(0, 0, 0, 0.95);
           backdrop-filter: blur(20px);
           -webkit-backdrop-filter: blur(20px);
           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
           box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        .middle-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: transparent;
          transition: all 0.4s ease;
          width: 100%;
        }

        .scrolled .middle-bar {
          padding: 0.5rem 2rem;
        }

        .logo {
          height: 80px;
          object-fit: contain;
          transition: height 0.4s ease;
        }
        
        .scrolled .logo {
          height: 60px;
        }

        .right-controls {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          color: white;
          opacity: 0.8;
        }

        .social-icon:hover {
          color: var(--primary-red);
          transform: translateY(-2px);
        }

        .search-bar {
          background: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          padding: 0.35rem 1rem;
          border-radius: 4px;
          gap: 0.75rem;
          width: 300px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .search-input {
          border: none;
          background: transparent;
          width: 100%;
          font-size: 0.8rem;
          outline: none;
          color: #333;
        }

        .search-icon, .close-search {
          color: #999;
          cursor: pointer;
        }

        .nav-bar {
          height: 50px;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
          position: relative;
        }

        .nav-bar.transparent {
          background: transparent;
        }

        .nav-bar.glass {
          background: transparent;
          border-bottom: none;
        }

        .nav-content {
           height: 100%;
        }

        .nav-links {
          display: flex;
          height: 100%;
          width: 100%;
          justify-content: space-between;
        }

        .nav-item {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 0.5rem;
        }

        .nav-item.active {
          background: white;
        }

        .nav-item.active .nav-link {
          color: var(--primary-red);
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-family: var(--font-headings);
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }

        .mega-menu-wrapper {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          z-index: 1000;
        }

        .mega-menu {
          background: #fff;
          color: #333;
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          padding: 4rem 0;
          border-top: 2px solid var(--primary-red);
        }

        .mega-content {
          display: flex;
          gap: 4rem;
        }

        .mega-left {
          flex: 2;
        }

        .mega-title {
          font-size: 2rem;
          font-weight: 900;
          position: relative;
          padding-bottom: 0.75rem;
          color: #111;
        }

        .mega-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: var(--primary-red);
        }

        .mega-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 3.5rem;
        }

        .mega-column h3 {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #000;
        }

        .mega-column ul {
          list-style: none;
        }

        .mega-column ul li {
          margin-bottom: 0.85rem;
        }

        .mega-column ul li a {
          text-decoration: none;
          color: #555;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .mega-column ul li a:hover {
          color: var(--primary-red);
          padding-left: 5px;
        }

        .mega-right {
          flex: 1.2;
        }

        .mega-image-container {
          position: relative;
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .mega-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .mega-image-container:hover img {
           transform: scale(1.05);
        }

        .image-label {
          position: absolute;
          bottom: 0;
          right: 0;
          background: #000;
          color: #fff;
          padding: 0.4rem 1.25rem;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 2px;
        }

        /* Mobile Adjustments */
        .mobile-toggle {
          display: none;
          background: white;
          color: black;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 8px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          z-index: 10001;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #111;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          overflow-y: auto;
          color: white;
        }

        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .mobile-logo {
          height: 45px;
        }

        .close-mobile {
          color: white;
          cursor: pointer;
        }

        .mobile-links-container {
          display: flex;
          flex-direction: column;
        }

        .mobile-item-group {
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .mobile-link-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          cursor: pointer;
        }

        .mobile-label-text, .mobile-link-main a {
          font-family: var(--font-headings);
          font-weight: 800;
          font-size: 1.1rem;
          text-transform: uppercase;
          color: white;
          text-decoration: none;
        }

        .mobile-chevron {
          transition: transform 0.3s ease;
          opacity: 0.7;
        }

        .mobile-chevron.active {
          transform: rotate(180deg);
          color: var(--primary-red);
          opacity: 1;
        }

        .mobile-submenu {
          padding-bottom: 1.5rem;
          padding-left: 1rem;
        }

        .mobile-subcolumn {
          margin-bottom: 1.5rem;
        }

        .mobile-subtitle {
          color: var(--primary-red);
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .mobile-submenu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-submenu ul li a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
        }

        .mobile-footer {
          margin-top: auto;
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .social-links-mobile {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .social-links-mobile a {
          color: white;
          transition: color 0.3s;
        }

        .social-links-mobile a:hover {
          color: var(--primary-red);
        }

        @media (max-width: 1024px) {
          .right-controls, .nav-bar {
             display: none !important;
          }
          .mobile-toggle {
             display: flex !important;
          }
          .logo {
             height: 50px;
          }
          .main-header {
             top: 0;
          }
        }
      `}} />
    </>
  );
};

export default Navbar;
