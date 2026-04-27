import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Background Map Graphic Overlay */}
      <img src="/africa.svg" alt="Footer map" className="footer-map-bg" />

      <div className="container footer-content">
        <div className="footer-grid">
          {/* Brand & Description */}
          <div className="footer-brand">
            <img src="/logo with white text.png" alt="AASU Logo" className="footer-logo" />
            <p className="footer-desc">
              Advocating for quality education, students' rights, democratic governance, cultural promotion, 
              sustainable development, academic freedom, and peace, while fostering pan-African unity and empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><Link to="/history">History</Link></li>
              <li><Link to="/membership">Membership (list of members)</Link></li>
              <li><Link to="/news">News & Media</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div className="contact-text">
                  <span className="contact-label">Headquarters</span>
                  <span>No. 10 Asanto Mireku Avenue,<br />Westlands, Accra - Ghana</span>
                </div>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div className="contact-text">
                  <span>+233 552 594 294</span>
                  <span>+233 203 927 736</span>
                </div>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div className="contact-text">
                  <a href="mailto:secgen@aasuonline.org">secgen@aasuonline.org</a>
                  <a href="mailto:info@aasuonline.org">info@aasuonline.org</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div className="footer-connect">
            <div className="footer-email-section">
              <h3 className="footer-title">Email Us</h3>
              <form className="footer-form">
                <input type="email" placeholder="Email Address" required className="footer-input" />
                <button type="submit" className="footer-btn">Send</button>
              </form>
            </div>
            
            <div className="social-links">
              <motion.a whileHover={{ y: -3 }} href="https://www.facebook.com/AASU1972" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://x.com/aasu_72" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/company/aasu1972/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://www.instagram.com/aasu_1972/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} All-Africa Students Union. All Rights Reserved</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-section {
          position: relative;
          background: var(--primary-red);
          color: white;
          padding: 80px 0 30px;
          overflow: hidden;
        }

        .footer-map-bg {
          position: absolute;
          right: -100px;
          bottom: -50px;
          height: 120%;
          opacity: 0.1;
          filter: grayscale(1) brightness(0);
          pointer-events: none;
        }

        .footer-content {
          position: relative;
          z-index: 2;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          height: 60px;
          object-fit: contain;
          margin-bottom: 1.5rem;
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.8;
          opacity: 0.9;
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
          font-family: var(--font-headings);
        }

        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-list a {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .footer-list a:hover {
          color: white;
          text-decoration: underline;
        }

        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .contact-icon {
          margin-top: 3px;
          opacity: 0.8;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
          gap: 0.2rem;
        }

        .contact-text a {
          color: white;
          text-decoration: none;
        }
        
        .contact-text a:hover {
          text-decoration: underline;
        }

        .contact-label {
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }

        .footer-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .footer-input {
          flex: 1;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 30px;
          padding: 0.8rem 1.2rem;
          color: white;
          outline: none;
        }

        .footer-input::placeholder {
          color: rgba(255,255,255,0.6);
        }

        .footer-btn {
          background: transparent;
          color: white;
          border: 1px solid white;
          border-radius: 30px;
          padding: 0 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .footer-btn:hover {
          background: white;
          color: var(--primary-red);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .social-links a {
          color: white;
          transition: opacity 0.3s;
        }

        .social-links a:hover {
          opacity: 0.7;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.8;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-section {
            padding: 50px 0 30px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .footer-brand {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-links, .footer-email-section {
            display: none;
          }
          .footer-connect {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
