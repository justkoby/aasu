import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle theme attribute on <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Handle scroll trigger for header stickiness
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

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`main-header glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/dicampaign" className="brand-logo" onClick={closeMobileMenu} end>
          <img src="/assets/DIP-LOGO-LANDSCAPE-.png" alt="Digital Inclusion Campaign Logo" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink to="/dicampaign" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicampaign/opportunities" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Opportunities
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicampaign/updates" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Updates
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicampaign/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          {/* Theme Switcher Button */}
          <button 
            id="theme-toggle-btn"
            className="icon-btn" 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            id="menu-toggle-btn"
            className="icon-btn mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div className={`mobile-nav-drawer glass ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-content">
          <ul className="mobile-nav-links">
            <li>
              <NavLink to="/dicampaign" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMobileMenu} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicampaign/opportunities" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMobileMenu}>
                Opportunities
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicampaign/updates" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMobileMenu}>
                Updates
              </NavLink>
            </li>
            <li>
              <NavLink to="/dicampaign/gallery" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'} onClick={closeMobileMenu}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
