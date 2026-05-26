import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const NelsNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'About', path: '#about' },
    { label: 'Programme', path: '#programme' },
    { label: 'Sessions', path: '#sessions' },
    { label: 'Partners', path: '#partners' },
    { label: 'FAQ', path: '#faq' },
    { label: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <header className={`nels-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo: NELS */}
          <Link to="/nels" className="logo-lockup" onClick={closeMobileMenu}>
            <img src="/NELS-Logo.png" alt="NELS Logo" className="nels-logo" />
          </Link>

          {/* Desktop Navbar Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.path} className="nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#register" 
                  className="btn-nav-cta"
                >
                  Register Now <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link to="/nels" className="logo-lockup" onClick={closeMobileMenu}>
            <img src="/NELS-Logo.png" alt="NELS Logo" className="nels-logo" />
          </Link>
          <button className="close-btn" onClick={closeMobileMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav style={{ marginTop: '2rem' }}>
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.path} className="mobile-link" onClick={closeMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: '1rem' }}>
              <a 
                href="#register" 
                className="btn-nav-cta"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={closeMobileMenu}
              >
                Register Now <ArrowRight size={16} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Overlay background */}
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default NelsNavbar;
