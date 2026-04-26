import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-page">
      <SEO 
        title="Privacy Policy" 
        description="Learn about how the All-Africa Students Union (AASU) protects your personal information and ensures data transparency in accordance with global standards." 
      />
      <section className="privacy-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="privacy-title"
          >
            Privacy Policy
          </motion.h1>
          <p className="last-updated">Last Updated: April 26, 2026</p>
        </div>
      </section>

      <section className="privacy-content py-large">
        <div className="container narrow-container">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="content-body"
          >
            <div className="policy-section">
              <h3>1. Introduction</h3>
              <p>The All-Africa Students Union (AASU) (“we”, “our”, “us”) is committed to protecting your privacy and ensuring transparency in how your information is handled.</p>
              <p>This Privacy Policy explains what data we collect, how we use it, and your rights when you interact with our website.</p>
            </div>

            <div className="policy-section">
              <h3>2. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              
              <h4>a. Personal Information</h4>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Any information submitted through contact forms or applications</li>
              </ul>

              <h4>b. Usage Data</h4>
              <ul>
                <li>Pages visited</li>
                <li>Time spent on the site</li>
                <li>Browser and device information</li>
              </ul>

              <h4>c. Cookies and Tracking Technologies</h4>
              <p>We use cookies to improve user experience and understand how our platform is used.</p>
            </div>

            <div className="policy-section">
              <h3>3. How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to inquiries and communications</li>
                <li>Provide access to resources, programs, and updates</li>
                <li>Improve website performance and user experience</li>
                <li>Analyze usage trends to better serve students across Africa</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>4. Cookies</h3>
              <p>Our website uses cookies to:</p>
              <ul>
                <li>Ensure core site functionality</li>
                <li>Remember user preferences</li>
                <li>Collect analytics data (where applicable)</li>
              </ul>
              <p>You can manage or disable cookies through your browser settings or via our cookie consent tool.</p>
            </div>

            <div className="policy-section">
              <h3>5. Sharing of Information</h3>
              <p>We do <strong>not sell or rent</strong> your personal information.</p>
              <p>We may share data with:</p>
              <ul>
                <li>Trusted service providers (e.g., analytics tools)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>6. Data Security</h3>
              <p>We take reasonable steps to protect your data from unauthorized access, loss, or misuse. However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="policy-section">
              <h3>7. Your Rights</h3>
              <p>Depending on your location, you may have the right to:</p>
              <ul>
                <li>Request access to your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent for data processing</li>
              </ul>
              <p>To exercise any of these rights, contact us using the details below.</p>
            </div>

            <div className="policy-section">
              <h3>8. Third-Party Links</h3>
              <p>Our website may contain links to external websites. We are not responsible for the privacy practices of those sites.</p>
            </div>

            <div className="policy-section">
              <h3>9. Updates to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
            </div>

            <div className="policy-section">
              <h3>10. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy or how your data is handled, please contact us:</p>
              <div className="contact-card">
                <p><strong>All-Africa Students Union (AASU)</strong></p>
                <p>Email: info@aasuonline.org</p>
                <p>Website: www.aasuonline.org</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .privacy-policy-page {
          background-color: #fff;
        }

        .privacy-hero {
          background-color: #111;
          color: white;
          padding: 160px 0 80px;
          text-align: center;
        }

        .privacy-title {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .last-updated {
          color: #aaa;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .narrow-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .py-large {
          padding: 80px 0;
        }

        .content-body {
          color: #444;
          line-height: 1.8;
          font-size: 1.1rem;
        }

        .policy-section {
          margin-bottom: 3rem;
        }

        .policy-section h3 {
          font-family: var(--font-headings);
          font-size: 1.8rem;
          color: #111;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--primary-red);
          display: inline-block;
        }

        .policy-section h4 {
          font-size: 1.25rem;
          color: #111;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .policy-section ul {
          margin-bottom: 1.5rem;
          padding-left: 1.25rem;
        }

        .policy-section li {
          margin-bottom: 0.5rem;
        }

        .contact-card {
          background-color: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
          border-left: 4px solid var(--primary-red);
          margin-top: 1rem;
        }

        .contact-card p {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .privacy-title {
            font-size: 2.5rem;
          }
          .privacy-hero {
            padding: 120px 0 60px;
          }
        }
      `}} />
    </div>
  );
};

export default PrivacyPolicyPage;
