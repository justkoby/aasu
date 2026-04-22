import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = `Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AUser Type: ${formData.get('user_type')}%0D%0AMessage: ${formData.get('message')}`;
    const subject = encodeURIComponent(formData.get('subject') || 'Inquiry via AASU Website');
    window.location.href = `mailto:info@aasuonline.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container h-full">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In <span className="text-red">Touch</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Connect with the All-Africa Students Union.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left: Form */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">What's on your mind?</h2>
              <p className="contact-intro">
                We value your input, questions, and feedback. Whether you’re a student, partner organization, or simply want to learn more about our work in empowering Africa’s student community, we are here to assist.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Kwame Osei" required />
                  </div>
                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="kwame@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>I am a...</label>
                    <div className="select-wrapper">
                      <select name="user_type" defaultValue="" required>
                        <option value="" disabled>Select Option</option>
                        <option value="student">Student</option>
                        <option value="union">Student Union Representative</option>
                        <option value="partner">Partner / Organization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="Partnership Inquiry..." required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your message (optional)</label>
                  <textarea name="message" rows="5" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Message
                </button>
              </form>
            </motion.div>

            {/* Right: Info */}
            <motion.div 
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="info-card">
                <h3>Contact Information</h3>
                <p>Reach out to us directly via our official channels or visit our headquarters in Accra, Ghana.</p>

                <ul className="info-list">
                  <li>
                    <MapPin className="info-icon" />
                    <div>
                      <strong>Address</strong>
                      <span>State House, P.O. Box OS 2056,<br/>Osu, Accra, Ghana</span>
                    </div>
                  </li>
                  <li>
                    <Phone className="info-icon" />
                    <div>
                      <strong>Phone Number</strong>
                      <span>+233 (0) 54 123 4567<br/>+233 (0) 30 234 5678</span>
                    </div>
                  </li>
                  <li>
                    <Mail className="info-icon" />
                    <div>
                      <strong>Email Address</strong>
                      <span>info@aasuonline.org<br/>support@aasuonline.org</span>
                    </div>
                  </li>
                  <li>
                    <Clock className="info-icon" />
                    <div>
                      <strong>Working Hours</strong>
                      <span>Monday - Friday: 8:00 AM - 5:00 PM<br/>Saturday - Sunday: Closed</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container" style={{ padding: '0 20px 100px' }}>
          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Find Our Office</h2>
            <div className="map-embed">
              <iframe 
                src="https://maps.google.com/maps?q=All-Africa%20Students%20Union%20Accra&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map-action text-center" style={{ marginTop: '2rem' }}>
              <a href="https://maps.app.goo.gl/XSSYvii5fxV7sTye7" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'inline-block', borderColor: 'var(--primary-red)', color: 'var(--primary-red)' }}>
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page {
          background-color: #fcfcfc;
          min-height: 100vh;
        }

        .contact-hero {
          background: linear-gradient(90deg, #020202 0%, rgba(2, 2, 2, 0.9) 35%, rgba(2, 2, 2, 0.4) 100%), url('/header-1.jpg') center/cover no-repeat;
          min-height: 50vh;
          display: flex;
          align-items: center;
          padding-top: 80px; 
        }

        .h-full {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
        }

        .hero-title {
          font-family: var(--font-headings);
          font-size: 4.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 600px;
        }

        .text-red {
          color: var(--primary-red);
        }

        .contact-section {
          padding: 80px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .section-title {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        
        .text-center {
          text-align: center;
        }

        .contact-intro {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .contact-form {
          background: #fff;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #333;
          margin-bottom: 0.6rem;
          text-transform: uppercase;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: #f9f9f9;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          color: #333;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-red);
          box-shadow: 0 0 0 3px rgba(203, 54, 49, 0.1);
          background: #fff;
        }

        .btn-primary {
          background-color: var(--primary-red);
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.2s, transform 0.2s;
        }

        .btn-primary:hover {
          background-color: #a0201c;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--primary-red);
          border: 2px solid var(--primary-red);
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background-color: var(--primary-red);
          color: #fff !important;
        }

        .info-card {
          background: #111;
          color: #fff;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .info-card h3 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .info-card p {
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-list li {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--primary-red);
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .info-list strong {
          display: block;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-list span {
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.5;
          display: block;
        }

        .map-embed {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .info-card {
            order: -1;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .hero-title {
            font-size: 3.5rem;
          }
          .section-title {
            font-size: 2.2rem;
          }
        }
      `}} />
    </div>
  );
};

export default ContactPage;
