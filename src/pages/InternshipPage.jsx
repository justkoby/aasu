import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase, GraduationCap, Clock, Globe,
  CheckCircle2, ArrowRight, ChevronDown,
  Search, Users, BookOpen, Megaphone,
  Layout, ClipboardList
} from 'lucide-react';

/* ── Animation Variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

/* ── Data ────────────────────────────────────────────────────── */
const INTERNSHIP_AREAS = [
  {
    icon: <Search size={28} />,
    title: 'Policy & Advocacy',
    tasks: ['Support policy research', 'Assist in advocacy campaigns', 'Draft briefs and reports'],
    color: '#cb3631'
  },
  {
    icon: <Megaphone size={28} />,
    title: 'Communications & Media',
    tasks: ['Manage social media', 'Create content (graphics, video, writing)', 'Support campaigns'],
    color: '#1d4ed8'
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Research',
    tasks: ['Conduct data collection and analysis', 'Support publications', 'Contribute to knowledge generation'],
    color: '#15803d'
  },
  {
    icon: <Layout size={28} />,
    title: 'Programs & Events',
    tasks: ['Assist with event planning', 'Coordinate logistics', 'Support project execution'],
    color: '#7c3aed'
  },
  {
    icon: <ClipboardList size={28} />,
    title: 'Administration & Operations',
    tasks: ['Support internal processes', 'Assist coordination across teams', 'Help manage documentation'],
    color: '#b45309'
  },
];

const STEPS = [
  { n: '01', title: 'Apply Online', desc: 'Submit the internship application form with your details.' },
  { n: '02', title: 'Screening', desc: 'Applications are reviewed based on eligibility and fit.' },
  { n: '03', title: 'Interview', desc: 'Shortlisted candidates are contacted for a virtual interview.' },
  { n: '04', title: 'Selection', desc: 'Successful applicants are officially onboarded into the team.' },
];

const GAINS = [
  'Real work experience in a continental organisation',
  'Mentorship from experienced professionals',
  'Exposure to international partners and policy spaces',
  'Skill development (research, communication, leadership)',
  'Certificate of completion',
  'Potential pathway to leadership roles within AASU'
];

const InternshipPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const formRef = useRef(null);
  const opportunitiesRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const [form, setForm] = useState({
    name: '', email: '', school: '', area: '', motivation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Internship Application – ${form.name} (${form.area})`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Institution: ${form.school}\n` +
      `Area of Interest: ${form.area}\n\n` +
      `Motivation:\n${form.motivation}`
    );
    window.location.href = `mailto:info@aasuonline.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="int-page">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="int-hero">
        <div className="int-hero-overlay" />
        <div className="container int-hero-content">
          <motion.h1
            className="int-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Start Your <span className="int-red">Career Journey</span><br />
            with AASU
          </motion.h1>
          <motion.p
            className="int-hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Gain hands-on experience, build professional skills, and contribute to impactful projects shaping education and youth development across Africa.
          </motion.p>
          <motion.div
            className="int-hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="btn-int-red" onClick={() => scrollTo(formRef)}>Apply for Internship</button>
            <button className="btn-int-outline" onClick={() => scrollTo(opportunitiesRef)}>View Opportunities</button>
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT PROGRAM ══════════════════════════════════════ */}
      <section className="int-about">
        <div className="container">
          <motion.div
            className="int-about-inner"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="int-badge">The Program</div>
            <h2>About the AASU Internship Program</h2>
            <p className="int-about-text">
              The AASU Internship Program provides students and recent graduates with practical experience in areas such as advocacy, research, communications, and program management. Interns work alongside experienced professionals and contribute to real projects that impact students across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ INTERNSHIP AREAS ═══════════════════════════════════ */}
      <section ref={opportunitiesRef} className="int-areas">
        <div className="container">
          <motion.div className="int-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="int-section-title">Internship Areas</h2>
            <div className="int-section-line" />
            <p className="int-section-sub">Gain specialised skills in a continental environment.</p>
          </motion.div>

          <motion.div
            className="int-areas-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {INTERNSHIP_AREAS.map((area, i) => (
              <motion.div key={i} variants={fadeUp} className="int-area-card" style={{ '--accent': area.color }}>
                <div className="int-area-icon" style={{ background: `${area.color}15`, color: area.color }}>
                  {area.icon}
                </div>
                <h3>{area.title}</h3>
                <ul>
                  {area.tasks.map((task, ti) => (
                    <li key={ti}><CheckCircle2 size={16} /> {task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ WHO & COMMITMENT ═══════════════════════════════════ */}
      <section className="int-who">
        <div className="container">
          <div className="int-who-grid">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="int-section-title text-white">Who Can Apply</h2>
              <div className="int-section-line left" />
              <ul className="int-who-list">
                <li><GraduationCap size={22} /> University students (final year preferred)</li>
                <li><Users size={22} /> Recent graduates looking for experience</li>
                <li><Search size={22} /> Passion for education, youth development, or policy</li>
                <li><CheckCircle2 size={22} /> Strong communication and teamwork skills</li>
              </ul>
            </motion.div>

            <motion.div
              className="int-commitment-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="int-comm-header">
                <Clock size={24} color="#cb3631" />
                <h3>Duration & Commitment</h3>
              </div>
              <div className="int-comm-items">
                <div className="int-comm-item">
                  <strong>Duration:</strong>
                  <span>3–6 months (flexible)</span>
                </div>
                <div className="int-comm-item">
                  <strong>Mode:</strong>
                  <span>Remote / Hybrid</span>
                </div>
                <div className="int-comm-item">
                  <strong>Hours:</strong>
                  <span>10–20 hrs/week (Part-time)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ WHAT YOU GAIN ══════════════════════════════════════ */}
      <section className="int-gains">
        <div className="container">
          <motion.div className="int-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="int-section-title">What Interns Gain</h2>
            <div className="int-section-line" />
          </motion.div>

          <motion.div
            className="int-gains-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {GAINS.map((gain, i) => (
              <motion.div key={i} variants={fadeUp} className="int-gain-item">
                <ArrowRight size={20} color="#cb3631" />
                <p>{gain}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section className="int-process">
        <div className="container">
          <motion.div className="int-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="int-section-title">Application Process</h2>
            <div className="int-section-line" />
          </motion.div>

          <motion.div
            className="int-steps-row"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STEPS.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="int-step">
                <div className="int-step-num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ APPLICATION FORM ═══════════════════════════════════ */}
      <section ref={formRef} className="int-form-section">
        <div className="container">
          <motion.div className="int-form-wrap" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="int-form-header">
              <h2>Internship Application</h2>
              <p>Apply today and start your journey with AASU.</p>
            </div>

            {submitted ? (
              <div className="int-success">
                <CheckCircle2 size={54} color="#15803d" />
                <h3>Application Started!</h3>
                <p>Your email client has opened with your application pre-filled. Please complete the details and send. We will be in touch shortly.</p>
                <button className="btn-int-red" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="int-form">
                <div className="int-form-row">
                  <div className="int-form-group">
                    <label htmlFor="int-name">Full Name *</label>
                    <input id="int-name" name="name" type="text" required placeholder="Enter your full name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="int-form-group">
                    <label htmlFor="int-email">Email Address *</label>
                    <input id="int-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="int-form-row">
                  <div className="int-form-group">
                    <label htmlFor="int-school">Institution *</label>
                    <input id="int-school" name="school" type="text" required placeholder="Your University / School" value={form.school} onChange={handleChange} />
                  </div>
                  <div className="int-form-group">
                    <label htmlFor="int-area">Internship Area *</label>
                    <div className="int-select-wrap">
                      <select id="int-area" name="area" required value={form.area} onChange={handleChange}>
                        <option value="">-- Select area --</option>
                        {INTERNSHIP_AREAS.map(a => <option key={a.title} value={a.title}>{a.title}</option>)}
                      </select>
                      <ChevronDown size={16} className="int-select-icon" />
                    </div>
                  </div>
                </div>

                <div className="int-form-group">
                  <label htmlFor="int-motivation">Short Motivation *</label>
                  <textarea id="int-motivation" name="motivation" required rows={5} placeholder="Tell us why you want to intern at AASU and what you aim to achieve..." value={form.motivation} onChange={handleChange} />
                </div>

                <button type="submit" className="int-submit-btn">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .int-page { background: #fdfdfd; }

        /* ── HERO ────────────────────────────────── */
        .int-hero {
          position: relative;
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/header-2.jpg') center / cover no-repeat;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 240px;
        }

        .int-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8));
        }

        .int-hero-content {
          position: relative;
          z-index: 2;
        }

        .int-hero-title {
          font-family: var(--font-headings);
          font-size: 3.75rem; /* ~60px */
          font-weight: 900;
          color: white;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .int-red { color: var(--primary-red); }

        .int-hero-sub {
          font-size: 0.875rem; /* 14px */
          color: rgba(255,255,255,0.8);
          max-width: 500px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .int-hero-ctas {
          display: flex;
          gap: 0.75rem;
        }

        .btn-int-red, .btn-int-outline, .btn-int-dark {
          padding: 0.7rem 1.75rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          transition: all 0.25s ease;
        }

        .btn-int-red { background: var(--primary-red); color: white; }
        .btn-int-red:hover { background: #a82b26; transform: translateY(-2px); }

        .btn-int-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4); }
        .btn-int-outline:hover { border-color: white; background: rgba(255,255,255,0.1); }

        /* ── ABOUT ───────────────────────────────── */
        .int-about { padding: 100px 0; background: white; text-align: center; }
        .int-about-inner { max-width: 800px; margin: 0 auto; }
        .int-badge { display: inline-block; background: rgba(203,54,49,0.1); color: var(--primary-red); padding: 0.4rem 1rem; border-radius: 50px; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 1rem; }
        .int-about h2 { font-family: var(--font-headings); font-size: 2.25rem; font-weight: 900; margin-bottom: 1.5rem; color: #111; }
        .int-about-text { font-size: 1.15rem; line-height: 1.8; color: #444; }

        /* ── AREAS ───────────────────────────────── */
        .int-areas { padding: 100px 0; background: #fdfdfd; }
        .int-section-header { text-align: center; margin-bottom: 4rem; }
        .int-section-title { font-family: var(--font-headings); font-size: 2.5rem; font-weight: 900; color: #111; }
        .int-section-line { height: 4px; width: 60px; background: var(--primary-red); margin: 0.75rem auto 1.25rem; border-radius: 2px; }
        .int-section-line.left { margin-left: 0; }
        .int-section-sub { color: #666; font-size: 1.05rem; }

        .int-areas-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; }
        .int-area-card { background: white; padding: 2.5rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-top: 4px solid var(--accent); transition: transform 0.3s ease; }
        .int-area-card:hover { transform: translateY(-8px); }
        .int-area-icon { width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
        .int-area-card h3 { font-family: var(--font-headings); font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem; color: #111; }
        .int-area-card ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .int-area-card li { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.95rem; color: #555; line-height: 1.5; }
        .int-area-card li svg { color: var(--accent); flex-shrink: 0; margin-top: 2px; }

        /* ── WHO ─────────────────────────────────── */
        .int-who { padding: 100px 0; background: #111; color: white; }
        .int-who-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .text-white { color: white !important; }
        .int-who-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2rem; }
        .int-who-list li { display: flex; align-items: center; gap: 1rem; font-size: 1.1rem; color: rgba(255,255,255,0.8); }
        .int-who-list li svg { color: var(--primary-red); }

        .int-commitment-card { background: white; padding: 3rem; border-radius: 20px; color: #111; box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
        .int-comm-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1.5rem; }
        .int-comm-header h3 { font-family: var(--font-headings); font-size: 1.5rem; font-weight: 800; }
        .int-comm-items { display: flex; flex-direction: column; gap: 1.25rem; }
        .int-comm-item { display: flex; flex-direction: column; gap: 0.25rem; }
        .int-comm-item strong { font-size: 0.85rem; text-transform: uppercase; color: #888; letter-spacing: 1px; }
        .int-comm-item span { font-size: 1.1rem; font-weight: 700; color: #111; }

        /* ── GAINS ───────────────────────────────── */
        .int-gains { padding: 100px 0; background: white; }
        .int-gains-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem 4rem; }
        .int-gain-item { display: flex; align-items: center; gap: 1.25rem; padding: 1rem 0; border-bottom: 1px solid #f0f0f0; }
        .int-gain-item p { font-size: 1.05rem; font-weight: 600; color: #333; margin: 0; }

        /* ── PROCESS ─────────────────────────────── */
        .int-process { padding: 100px 0; background: #fdfdfd; }
        .int-steps-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
        .int-step { text-align: center; }
        .int-step-num { width: 60px; height: 60px; background: var(--primary-red); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-family: var(--font-headings); font-size: 1.25rem; font-weight: 900; box-shadow: 0 10px 20px rgba(203,54,49,0.2); }
        .int-step h4 { font-family: var(--font-headings); font-size: 1.1rem; font-weight: 800; margin-bottom: 0.5rem; }
        .int-step p { font-size: 0.9rem; color: #666; line-height: 1.6; }

        /* ── FORM ────────────────────────────────── */
        .int-form-section { padding: 100px 0; background: #f9f9f9; }
        .int-form-wrap { max-width: 800px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.1); }
        .int-form-header { background: #111; color: white; padding: 3rem; text-align: center; }
        .int-form-header h2 { font-family: var(--font-headings); font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem; }
        .int-form-header p { opacity: 0.7; }
        .int-form { padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem; }
        .int-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .int-form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .int-form-group label { font-size: 0.85rem; font-weight: 700; color: #444; text-transform: uppercase; }
        .int-form-group input, .int-form-group textarea, .int-form-group select { padding: 0.85rem 1.25rem; border: 2px solid #eee; border-radius: 10px; outline: none; font-family: inherit; font-size: 1rem; transition: border-color 0.2s; }
        .int-form-group input:focus, .int-form-group textarea:focus, .int-form-group select:focus { border-color: var(--primary-red); }
        .int-select-wrap { position: relative; }
        .int-select-icon { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); pointer-events: none; color: #999; }
        .int-select-wrap select { background: transparent; width: 100%; -webkit-appearance: none; appearance: none; }
        .int-submit-btn { background: var(--primary-red); color: white; font-family: var(--font-headings); font-weight: 800; text-transform: uppercase; padding: 1.1rem; border-radius: 10px; cursor: pointer; border: none; display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-top: 1rem; transition: background 0.2s; }
        .int-submit-btn:hover { background: #a82b26; }
        .int-success { padding: 4rem; text-align: center; }
        .int-success h3 { margin: 1.5rem 0 1rem; font-family: var(--font-headings); font-size: 1.75rem; }

        @media (max-width: 991px) {
          .int-who-grid { grid-template-columns: 1fr; gap: 3rem; }
          .int-gains-grid { grid-template-columns: 1fr; gap: 0; }
        }
        @media (max-width: 768px) {
          .int-hero-title { font-size: 2.75rem; }
          .int-form-row { grid-template-columns: 1fr; }
          .int-form, .int-form-header { padding: 2rem; }
        }
      `}} />
    </div>
  );
};

export default InternshipPage;
