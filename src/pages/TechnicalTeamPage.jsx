import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder avatar that shows initials when no photo is available
const PlaceholderAvatar = ({ name }) => {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');

  return (
    <div className="tt-placeholder">
      <span className="tt-initials">{initials}</span>
    </div>
  );
};

const MemberCard = ({ member, idx }) => {
  const [imgError, setImgError] = useState(false);
  const showPhoto = member.pic && !imgError;

  return (
    <motion.div
      className="tt-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (idx % 4) * 0.07 }}
      viewport={{ once: true, margin: '-40px' }}
    >
      <div className="tt-photo-wrap">
        {showPhoto ? (
          <>
            <img
              src={`/${member.pic}`}
              alt={member.name}
              className="tt-photo"
              onError={() => setImgError(true)}
            />
            <div className="tt-photo-overlay" />
          </>
        ) : (
          <PlaceholderAvatar name={member.name} />
        )}
      </div>
      <div className="tt-info">
        <h3 className="tt-name">{member.name}</h3>
        <p className="tt-position">{member.position}</p>
      </div>
    </motion.div>
  );
};

const TechnicalTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    // ── Senior Leadership ───────────────────────────────────────────
    {
      name: 'Jemilatu Mamshie Bawa',
      position: 'Chief Operating Officer',
      pic: 'mrs bawa.jpg',
    },
    {
      name: 'Bismark Amefianu Kudoafor',
      position: 'Deputy Chief Operating Officer (Administration)',
      pic: 'CTO.jpg',
    },
    {
      name: 'Samuel Sasu Adonteng',
      position: 'Deputy Chief Operating Officer (Technical)',
      pic: 'CCO.jpg',
    },
    {
      name: 'James Kodjie',
      position: 'Chief Programmes Officer',
      pic: 'CPO.jpg',
    },
    // ── Procurement & Finance ────────────────────────────────────────
    {
      name: 'Akua Asantewaa Adusei',
      position: 'Chief Procurement Officer',
      pic: null, // placeholder
    },
    {
      name: 'Hamdia Suleman',
      position: 'Head of Accounts',
      pic: 'Accountant.jpg',
    },
    {
      name: 'Jacob Aryee',
      position: 'Assistant Accountant Officer',
      pic: null, // placeholder
    },
    {
      name: 'Prince Teye Ali',
      position: 'Internal Auditor',
      pic: 'AUDITER.jpg',
    },
    // ── Human Resources & Administration ────────────────────────────
    {
      name: 'George Sampson-Graves',
      position: 'Human Resource Officer',
      pic: 'HR.jpg',
    },
    {
      name: 'Sulemana Atawa Shamsia',
      position: 'Administrative Secretary',
      pic: 'Administrative-sec.jpg',
    },
    {
      name: 'Jasmine Salisu Mohammed',
      position: 'Protocol Officer',
      pic: 'PROTOCOL-OFFICER.jpg',
    },
    // ── Programmes ──────────────────────────────────────────────────
    {
      name: 'Raymond Frimpong',
      position: 'Programmes Officer – Democracy, Good Governance, Peace and Security',
      pic: null, // placeholder
    },
    {
      name: 'Eunice Kaanye',
      position: 'Assistant Programmes Officer for Education and Students\' Rights',
      pic: 'Eunice.jpg',
    },
    {
      name: 'Walter Nana Owusu Annoh Siameh',
      position: 'Assistant Programmes Officer for Education and Students\' Rights',
      pic: null, // placeholder
    },
    {
      name: 'Memunatu Abubakari',
      position: 'Programmes Officer for Gender Equity and Social Inclusion',
      pic: 'POG.jpg',
    },
    {
      name: 'Belinda Mensah',
      position: 'Programmes Officer – Environment and Climate Action',
      pic: 'belinda.jpg',
    },
    {
      name: 'Hilda Osei-Poku',
      position: 'Programmes Officer for Migration, Mobility and Exchanges',
      pic: 'POM.jpg',
    },
    // ── IT & Digital ────────────────────────────────────────────────
    {
      name: 'Ramzy Fuseini',
      position: 'Special Projects and Strategic Initiatives Coordinator',
      pic: null, // placeholder
    },
    {
      name: 'Eric Chinery',
      position: 'Chief IT Officer',
      pic: 'IT-OFFICER.jpg',
    },
    {
      name: 'Solomon Pobi Darko',
      position: 'Digital Media & Web Communications Officer',
      pic: 'Creative-Lead.jpg',
    },
    {
      name: 'Solomon Abeka',
      position: 'Assistant Branding and Creative Officer',
      pic: null, // placeholder
    },
    {
      name: 'Stephen Brako',
      position: 'Estate/Stores Officer',
      pic: null, // placeholder
    },
    {
      name: 'Ettah Johnson',
      position: 'Assistant Photographer and Videographer Officer',
      pic: null, // placeholder
    },
    {
      name: 'Emmanuel Nyamekye Owusu',
      position: 'Assistant Editorial and Public Relations Officer',
      pic: null, // placeholder
    },
    // ── Executive Support & Drivers ─────────────────────────────────
    {
      name: 'Jerome Kudolo',
      position: 'Executive Assistant to the Secretary General',
      pic: null, // placeholder
    },
    {
      name: 'Robert Idan',
      position: 'Principal Driver',
      pic: 'DRiver-2.jpg',
    },
    {
      name: 'John Yewenu',
      position: 'Assistant Driver',
      pic: 'Driver-1.jpg',
    },
  ];

  return (
    <div className="tech-team-page">

      {/* Hero */}
      <section className="tt-hero">
        <div className="container">
          <motion.h1
            className="tt-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Technical <span className="tt-accent">Team</span>
          </motion.h1>
          <motion.p
            className="tt-hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The dedicated professionals who power the day-to-day operations, programmes, and strategic delivery of the All-Africa Students Union.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="tt-grid-section">
        <div className="container">
          <div className="tt-grid">
            {team.map((member, idx) => (
              <MemberCard key={idx} member={member} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .tech-team-page {
          background-color: #f7f9fa;
          min-height: 100vh;
        }

        /* ── Hero ───────────────────────────────── */
        .tt-hero {
          background:
            linear-gradient(90deg, #0a0a0a 0%, rgba(10,10,10,0.88) 45%, rgba(10,10,10,0.45) 100%),
            url('/header-2.jpg') center / cover no-repeat;
          min-height: 52vh;
          display: flex;
          align-items: center;
          padding: 240px 0 100px;
        }

        .tt-hero-title {
          font-family: var(--font-headings);
          font-size: 4.5rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.05;
        }

        .tt-accent { color: var(--primary-red); }

        .tt-hero-subtitle {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.82);
          max-width: 640px;
          line-height: 1.75;
        }

        /* ── Count bar ──────────────────────────── */
        .tt-count-bar {
          background: #fff;
          border-bottom: 1px solid #eee;
          padding: 1rem 0;
        }

        .tt-count-label {
          font-size: 0.95rem;
          color: #666;
        }

        .tt-count-label strong {
          color: var(--primary-red);
          font-size: 1.1rem;
        }

        /* ── Grid ───────────────────────────────── */
        .tt-grid-section { padding: 60px 0 100px; }

        .tt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        /* ── Card ───────────────────────────────── */
        .tt-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .tt-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 44px rgba(0,0,0,0.13);
        }

        /* Photo */
        .tt-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #e8e8e8;
          overflow: hidden;
        }

        .tt-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.5s ease;
          display: block;
        }

        .tt-card:hover .tt-photo { transform: scale(1.06); }

        .tt-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Placeholder */
        .tt-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tt-initials {
          font-family: var(--font-headings);
          font-size: 3rem;
          font-weight: 900;
          color: rgba(255,255,255,0.18);
          letter-spacing: 2px;
          user-select: none;
        }

        /* Info */
        .tt-info {
          padding: 1.4rem 1.5rem 1.6rem;
          border-top: 3px solid var(--primary-red);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex-grow: 1;
        }

        .tt-name {
          font-family: var(--font-headings);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin: 0;
        }

        .tt-position {
          font-size: 0.85rem;
          color: #cb3631;
          font-weight: 600;
          margin: 0;
          line-height: 1.45;
        }

        /* ── Responsive ─────────────────────────── */
        @media (max-width: 768px) {
          .tt-hero-title { font-size: 3rem; }
          .tt-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .tt-info {
            padding: 1rem 0.75rem;
          }
          .tt-name {
            font-size: 0.8rem;
          }
          .tt-position {
            font-size: 0.7rem;
          }
          .tt-initials {
            font-size: 2rem;
          }
        }
      `}} />
    </div>
  );
};

export default TechnicalTeamPage;
