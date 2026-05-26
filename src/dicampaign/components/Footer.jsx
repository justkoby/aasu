import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Send, Check } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
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
    <footer id="footerSection" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Info */}
          <div className="footer-info">
            <h3>Digital Inclusion Campaign</h3>
            <p>
              An initiative of the All-Africa Students Union (AASU) in partnership with the Open Society Initiative for Southern Africa (OSISA), focused on securing the rights to education and digital rights.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/dicampaign">Home</Link></li>
              <li><Link to="/dicampaign/opportunities">Opportunities</Link></li>
              <li><Link to="/dicampaign/updates">Updates</Link></li>
              <li><Link to="/dicampaign/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to receive news and updates on advocacy actions.</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                id="newsletter-email-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button id="newsletter-submit-btn" type="submit" className="btn btn-primary" aria-label="Subscribe">
                {subscribed ? <Check size={16} /> : <Send size={16} />}
              </button>
            </form>
            {subscribed && (
              <p className="subscribe-success-msg fade-in">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Sponsor/Partners Banner */}
        <div className="partners-banner">
          <h5>In Collaboration With</h5>
          <div className="partners-logos">
            <Link to="/dicampaign" className="partner-logo">
              <img src="/assets/DIP-LOGO-LANDSCAPE-.png" alt="Digital Inclusion Project" />
            </Link>
            <a href="https://aasuonline.org" target="_blank" rel="noopener noreferrer" className="partner-logo">
              <img src="/assets/aasu-logo-format-with-balck-text-1.png" alt="All-Africa Students Union" />
            </a>
            <a href="https://osisa.org" target="_blank" rel="noopener noreferrer" className="partner-logo">
              <img src="/assets/OSISA-Logo.png-high-resolution.png" alt="OSISA Logo" />
            </a>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Digital Inclusion Campaign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
