import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ExecutiveCommitteePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const executives = [
    { name: "OSISIOGU OSIKENYI ENYINNAYA", position: "President", country: "Nigeria", flag: "🇳🇬", pic: "1-01.webp" },
    { name: "DIVINE EDEM KWADZODEH", position: "Secretary General", country: "Ghana", flag: "🇬🇭", pic: "3-01.webp" },
    { name: "MARAVILHA KAPAIA", position: "Deputy President", country: "Angola", flag: "🇦🇴", pic: "2-01.webp" },
    { name: "ALISTAR PFUNYE", position: "Deputy Secretary General", country: "Zimbabwe", flag: "🇿🇼", pic: "4-01.webp" },
    { name: "JABER MAATAOUI", position: "Vice President for North Africa", country: "Morocco", flag: "🇲🇦", pic: "Jaber-Maataoui-01.jpg" },
    { name: "ROSÁLIA DJEDJO", position: "Vice President for West Africa", country: "Guinea-Bissau", flag: "🇬🇼", pic: "5-01.webp" },
    { name: "CRÉSCENCE NAOMIE MBAN-NY", position: "Vice President for Central Africa", country: "Cameroon", flag: "🇨🇲", pic: "Crescence-Naomie-Mban-ny-01.jpg" },
    { name: "VALENTINE MUGUN CHEPKOECH", position: "Vice President for East Africa", country: "Kenya", flag: "🇰🇪", pic: "valentine-01.webp" },
    { name: "BUTHANANI THOBELA", position: "Vice President for Southern Africa", country: "South Africa", flag: "🇿🇦", pic: "BUTHANANI-THOBELA-01.jpg" },
    { name: "HABIBA MOHAMED ABDALLAH", position: "Executive Committee Member for North Africa", country: "Egypt", flag: "🇪🇬", pic: "HABIBA-MOHAMED-MOHAMED-IBRAHEIM-01.jpg" },
    { name: "OUMU SALL", position: "Executive Committee Member for West Africa", country: "Liberia", flag: "🇱🇷", pic: "OUMU-SALL-01.jpg" },
    { name: "BENITA NDOKOLO MFUKE", position: "Executive Committee Member for Central Africa", country: "DR Congo", flag: "🇨🇩", pic: "BENITA-NDOKOLO-MFUKE.jpeg-01.jpg" },
    { name: "STELLAH AKUR GARANG", position: "Executive Committee Member for East Africa", country: "South Sudan", flag: "🇸🇸", pic: "Stellah-Akur-Garang-01.jpg" },
    { name: "ESTHER GOMANI", position: "Executive Committee Member for Southern Africa", country: "Malawi", flag: "🇲🇼", pic: "ESTHER-GOMANI-01.jpg" },
    { name: "AJAVON KOKOE VANÉSSA AUGUSTINE", position: "Secretary for Finance and Administration", country: "Togo", flag: "🇹🇬", pic: "6-01.webp" },
    { name: "BEN-CHRIST TRÉSOR SAIZONOU", position: "Secretary for Education and Students’ Rights", country: "Benin", flag: "🇧🇯", pic: "BEN-CHRIST-TRESOR-SAIZONOU-01.jpg" },
    { name: "AMADOU B. JOBARTEH", position: "Secretary for Press and Information", country: "The Gambia", flag: "🇬🇲", pic: "AMADOU-B.-JOBARTEH-01.jpg" },
    { name: "BOAGO DODO CHINGAPANI", position: "Secretary for Gender & Affirmative Action", country: "Botswana", flag: "🇧🇼", pic: "BOAGO-DODO-CHINGAPANI-01.jpg" }
  ];

  return (
    <div className="executives-page">
      {/* Hero Section */}
      <section className="exec-hero">
        <div className="container h-full">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Executive <span className="text-red">Committee</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The second highest organ of the Union.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="exec-intro-section">
        <div className="container">
          <motion.div 
            className="intro-card wrap-text"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-center">Executives</h2>
            <div className="title-underline margin-auto"></div>
            
            <p className="intro-paragraph">
              The Executive Committee is the second highest organ of the Union, and assumes responsibility for the execution of all policies and programmes adopted by the Congress.
            </p>
            <p className="intro-paragraph">
              The Executive Committee meets once a year and comprise the Secretariat members and representatives of each sub-region namely:
            </p>
            
            <div className="regions-container">
              <span className="region-pill">West Africa</span>
              <span className="region-pill">East Africa</span>
              <span className="region-pill">North Africa</span>
              <span className="region-pill">Southern Africa</span>
              <span className="region-pill">Central Africa</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="exec-grid-section">
        <div className="container">
          <div className="exec-grid">
            {executives.map((exec, idx) => (
              <motion.div 
                key={idx}
                className="exec-member-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="member-photo-wrapper">
                  <img src={`/${exec.pic}`} alt={exec.name} className="member-photo" />
                  <div className="member-hover-overlay"></div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{exec.name}</h3>
                  <p className="member-position">{exec.position}</p>
                  <div className="member-country">
                    <span className="member-flag">{exec.flag}</span>
                    <span className="member-country-name">{exec.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .executives-page {
          background-color: #f9f9f9;
          min-height: 100vh;
        }

        /* Hero */
        .exec-hero {
          background: linear-gradient(90deg, #020202 0%, rgba(2, 2, 2, 0.9) 35%, rgba(2, 2, 2, 0.4) 100%), url('/header-2.jpg') center/cover no-repeat;
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

        /* Intro Section */
        .exec-intro-section {
          padding: 80px 0 40px;
        }

        .intro-card {
          background-color: #fff;
          border-radius: 16px;
          padding: 4rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          border-top: 5px solid var(--primary-red);
        }

        .section-title {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .margin-auto {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2rem;
        }

        .intro-paragraph {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .regions-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .region-pill {
          background-color: var(--primary-red);
          color: white;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(203, 54, 49, 0.3);
        }

        /* Grid */
        .exec-grid-section {
          padding: 40px 0 100px;
        }

        .exec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .exec-member-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .exec-member-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .member-photo-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
        }

        .exec-member-card:hover .member-photo {
          transform: scale(1.05);
        }

        .member-hover-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%);
          pointer-events: none;
        }

        .member-info {
          padding: 1.5rem;
          text-align: center;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          border-top: 3px solid var(--primary-red);
        }

        .member-name {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .member-position {
          font-size: 0.95rem;
          color: #cb3631;
          font-weight: 600;
          margin-bottom: 1rem;
          flex-grow: 1;
        }

        .member-country {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #f4f4f4;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-top: auto;
        }

        .member-flag {
          font-size: 1.3rem;
          line-height: 1;
        }

        .member-country-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
          .intro-card {
            padding: 2rem;
          }
        }
      `}} />
    </div>
  );
};

export default ExecutiveCommitteePage;
