import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Send, Check } from 'lucide-react';

export const NelsFooter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="nels-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Info & Socials */}
          <div className="footer-info">
            <h3>Next Level Skills (NELS)</h3>
            <p>
              An Erasmus+ funded project designed to empower student leaders across Europe and Sub-Saharan Africa, in partnership with 12 prestigious global institutions.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com/AASU1972" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/aasu_72" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com/aasu_1972" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About NELS</a></li>
              <li><a href="#programme">Programme & Syllabus</a></li>
              <li><a href="#sessions">Session Schedule</a></li>
              <li><a href="#partners">Partner Universities</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="footer-newsletter">
            <h4>Get Campaign Updates</h4>
            <p>Stay informed about future cohorts, session registrations, and leadership updates.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email Address"
              />
              <button type="submit" aria-label="Subscribe">
                {subscribed ? <Check size={16} /> : <Send size={16} />}
              </button>
            </form>
            {subscribed && (
              <p className="subscribe-success-msg">
                Successfully subscribed to NELS newsletter!
              </p>
            )}
          </div>
        </div>

        {/* Sponsor/Partners Banner */}
        <div className="partners-banner">
          <h5>Co-Funded by the Erasmus+ Programme of the European Union</h5>
          <div className="partners-logos" style={{ marginBottom: '2.5rem' }}>
            <Link to="/nels" className="partner-logo">
              <img src="/NELS-Logo.png" alt="NELS Project Logo" style={{ filter: 'none', opacity: 0.9 }} />
            </Link>
            <a href="https://aasuonline.org" target="_blank" rel="noopener noreferrer" className="partner-logo">
              <img src="/logo with white text.png" alt="All-Africa Students Union Logo" style={{ filter: 'none', opacity: 0.9 }} />
            </a>
          </div>

          <h5>NELS Project Partners</h5>
          <div className="partners-logos" style={{ gap: '2rem' }}>
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
              <div key={idx} className="partner-logo" title={partner.name}>
                <img src={partner.src} alt={`${partner.name} Logo`} style={{ height: '36px' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom footer copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Next Level Skills for Student Leaders (NELS). Supported by AASU. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <a href="https://aasuonline.org" style={{ color: 'inherit', textDecoration: 'none' }}>Main AASU Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NelsFooter;
