import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone, Video, BookOpen, Calendar, Globe,
  CheckCircle2, ArrowRight, Award, Network, Users,
  GraduationCap, Star, ChevronDown
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ROLES = [
  'Campus Ambassador',
  'Communications & Media Team',
  'Research & Policy Volunteer',
  'Programs & Events Team',
  'Regional Coordinator',
  'Other',
];

const STEPS = [
  { n: '01', title: 'Submit Application', desc: 'Fill out the form below with your basic details and area of interest.' },
  { n: '02', title: 'Application Review', desc: 'The AASU team carefully reviews all applications received.' },
  { n: '03', title: 'Interview & Selection', desc: 'Shortlisted candidates are contacted for a brief interview.' },
  { n: '04', title: 'Onboarding', desc: 'Selected volunteers receive orientation and role assignment.' },
];

const OPPORTUNITIES = [
  {
    icon: <Megaphone size={30} />,
    title: 'Campus Ambassadors',
    role: 'Represent AASU in your institution',
    tasks: ['Mobilize students around key campaigns', 'Share AASU news on campus', 'Organize campus activities and events'],
    color: '#cb3631',
  },
  {
    icon: <Video size={30} />,
    title: 'Communications & Media',
    role: 'Tell the AASU story',
    tasks: ['Create social media content', 'Design graphics, videos, and written pieces', 'Promote continental campaigns'],
    color: '#1d4ed8',
  },
  {
    icon: <BookOpen size={30} />,
    title: 'Research & Policy',
    role: 'Support advocacy with data',
    tasks: ['Research education issues across Africa', 'Draft policy briefs and reports', 'Support evidence-based advocacy work'],
    color: '#15803d',
  },
  {
    icon: <Calendar size={30} />,
    title: 'Programs & Events',
    role: 'Execute AASU initiatives',
    tasks: ['Organize conferences and webinars', 'Manage event logistics', 'Support programme coordination'],
    color: '#7c3aed',
  },
  {
    icon: <Globe size={30} />,
    title: 'Regional Coordinators',
    role: 'Lead engagement in your region',
    tasks: ['Coordinate volunteers across your region', 'Liaise with national student unions', 'Drive regional advocacy campaigns'],
    color: '#b45309',
  },
];

const GAINS = [
  { icon: <Award size={22} />, text: 'Leadership and practical experience' },
  { icon: <Network size={22} />, text: 'Access to continental and global networks' },
  { icon: <GraduationCap size={22} />, text: 'Training and capacity-building programmes' },
  { icon: <Star size={22} />, text: 'Opportunity to contribute to real policy impact' },
  { icon: <CheckCircle2 size={22} />, text: 'Certificates and official recognition' },
  { icon: <Globe size={22} />, text: 'Exposure to international organisations' },
];

const VolunteerPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    name: '', country: '', institution: '', email: '',
    role: '', motivation: '', skills: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Volunteer Application – ${form.role || 'AASU'}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\n` +
      `Country: ${form.country}\n` +
      `Institution: ${form.institution}\n` +
      `Email: ${form.email}\n` +
      `Area of Interest: ${form.role}\n\n` +
      `Motivation:\n${form.motivation}\n\n` +
      `Skills:\n${form.skills || 'N/A'}`
    );
    window.location.href = `mailto:info@aasuonline.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="vol-page">

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="vol-hero">
        <div className="vol-hero-overlay" />
        <div className="container vol-hero-content">
          <motion.h1
            className="vol-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Join the Movement.<br />
            <span className="vol-red">Amplify Student Voices</span><br />
            Across Africa.
          </motion.h1>
          <motion.p
            className="vol-hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Be part of a continental network of young leaders driving change in education, policy, and student advocacy.
          </motion.p>
          <motion.div
            className="vol-hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <button className="btn-red" onClick={scrollToForm}>Apply Now</button>
            <a href="#roles" className="btn-outline-white">Explore Roles</a>
          </motion.div>
        </div>
        <div className="vol-hero-scroll">
          <ChevronDown size={28} className="bounce" />
        </div>
      </section>

      {/* ══ WHY VOLUNTEER ════════════════════════════════════════ */}
      <section className="vol-why">
        <div className="container">
          <motion.div
            className="vol-why-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="vol-why-badge">Why Volunteer With AASU</div>
            <p className="vol-why-text">
              Volunteering with AASU is more than service — it's an opportunity to{' '}
              <strong>lead, influence policy, build networks across Africa</strong>, and contribute to shaping the future of education on the continent.
              Every role you play directly strengthens a movement that represents over 300 million students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ OPPORTUNITIES ════════════════════════════════════════ */}
      <section id="roles" className="vol-roles">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Volunteer Opportunities</h2>
            <div className="section-line" />
            <p className="section-sub">Five ways to contribute your skills to the continent.</p>
          </motion.div>

          <motion.div
            className="roles-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {OPPORTUNITIES.map((opp, i) => (
              <motion.div key={i} variants={fadeUp} className="role-card" style={{ '--accent': opp.color }}>
                <div className="role-icon-wrap" style={{ background: `${opp.color}18`, color: opp.color }}>
                  {opp.icon}
                </div>
                <h3 className="role-title">{opp.title}</h3>
                <p className="role-subtitle">{opp.role}</p>
                <ul className="role-tasks">
                  {opp.tasks.map((t, ti) => (
                    <li key={ti}><ArrowRight size={14} className="task-arrow" />{t}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ WHO CAN APPLY ════════════════════════════════════════ */}
      <section className="vol-who">
        <div className="container vol-who-inner">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title text-white">Who Can Apply</h2>
            <div className="section-line" />
            <ul className="who-list">
              <li><CheckCircle2 size={20} /> Students based in Africa or in the diaspora</li>
              <li><CheckCircle2 size={20} /> Passionate about education, leadership, or advocacy</li>
              <li><CheckCircle2 size={20} /> Willing to collaborate, learn, and contribute</li>
              <li><CheckCircle2 size={20} /><strong>&nbsp;No strict prior experience required</strong> — your drive matters most</li>
            </ul>
          </motion.div>
          <motion.div
            className="who-commitment"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Flexible Commitment</h3>
            <p>
              Volunteer roles are designed to fit around your academic schedule. Opportunities may be project-based or ongoing depending on the role — so you can contribute meaningfully without compromising your studies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ WHAT YOU GAIN ════════════════════════════════════════ */}
      <section className="vol-gains">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">What You Gain</h2>
            <div className="section-line" />
            <p className="section-sub">Real value, real growth, real impact.</p>
          </motion.div>

          <motion.div
            className="gains-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {GAINS.map((g, i) => (
              <motion.div key={i} variants={fadeUp} className="gain-card">
                <div className="gain-icon">{g.icon}</div>
                <p className="gain-text">{g.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ APPLICATION PROCESS ══════════════════════════════════ */}
      <section className="vol-process">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="section-title">Application Process</h2>
            <div className="section-line" />
          </motion.div>

          <motion.div
            className="steps-row"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STEPS.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="step-item">
                <div className="step-num">{step.n}</div>
                <div className="step-connector" />
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ APPLICATION FORM ═════════════════════════════════════ */}
      <section id="volunteer-form" className="vol-form-section">
        <div className="container">
          <motion.div className="vol-form-wrap" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="vol-form-header">
              <h2>Apply to Volunteer</h2>
              <p>Fill out the form below and we will be in touch.</p>
            </div>

            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={48} color="#15803d" />
                <h3>Application Sent!</h3>
                <p>Your email client has opened with your application pre-filled. Once sent, our team will review it and reach out shortly.</p>
                <button className="btn-red" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="vol-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="v-name">Full Name *</label>
                    <input id="v-name" name="name" type="text" required placeholder="Your full name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="v-country">Country *</label>
                    <input id="v-country" name="country" type="text" required placeholder="Your country" value={form.country} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="v-institution">Institution *</label>
                    <input id="v-institution" name="institution" type="text" required placeholder="University / College / School" value={form.institution} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="v-email">Email Address *</label>
                    <input id="v-email" name="email" type="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="v-role">Area of Interest *</label>
                  <div className="select-wrap">
                    <select id="v-role" name="role" required value={form.role} onChange={handleChange}>
                      <option value="">-- Select a volunteer role --</option>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <ChevronDown size={16} className="select-icon" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="v-motivation">
                    Short Motivation *
                    <span className="label-hint">(100–200 words)</span>
                  </label>
                  <textarea
                    id="v-motivation"
                    name="motivation"
                    required
                    rows={5}
                    placeholder="Tell us why you want to volunteer with AASU and what you hope to contribute..."
                    value={form.motivation}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="v-skills">
                    Relevant Skills
                    <span className="label-hint">(optional)</span>
                  </label>
                  <textarea
                    id="v-skills"
                    name="skills"
                    rows={3}
                    placeholder="e.g. graphic design, writing, social media, research, event management..."
                    value={form.skills}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="vol-submit-btn">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ FINAL CTA ═══════════════════════════════════════════ */}
      <section className="vol-final-cta">
        <div className="container text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>Be part of a continental movement shaping the future of African education.</h2>
            <p>Hundreds of students across Africa are already making a difference. Your seat at the table is waiting.</p>
            <button className="btn-red-large" onClick={scrollToForm}>Apply Now</button>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .vol-page { background: #f7f9fa; }

        /* ── HERO ────────────────────────────────── */
        .vol-hero {
          position: relative;
          background: url('/header-2.jpg') center / cover no-repeat;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .vol-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(5,5,5,0.93) 0%, rgba(10,10,10,0.8) 60%, rgba(203,54,49,0.25) 100%);
        }

        .vol-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 100px;
          padding-bottom: 60px;
        }

        .vol-eyebrow {
          display: inline-block;
          background: var(--primary-red);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .vol-hero-title {
          font-family: var(--font-headings);
          font-size: 3.75rem;
          font-weight: 900;
          color: white;
          line-height: 1.05;
          margin-bottom: 1.25rem;
          max-width: 800px;
        }

        .vol-red { color: var(--primary-red); }

        .vol-hero-sub {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.78);
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .vol-hero-ctas {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .btn-red {
          background: var(--primary-red);
          color: white;
          border: none;
          padding: 0.7rem 1.75rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: background 0.25s ease, transform 0.25s ease;
          text-decoration: none;
          display: inline-block;
        }
        .btn-red:hover { background: #a82b26; transform: translateY(-2px); }

        .btn-outline-white {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.55);
          padding: 0.7rem 1.75rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          display: inline-block;
          transition: all 0.25s ease;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.12); border-color: white; }

        .vol-hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: rgba(255,255,255,0.4);
        }

        .bounce {
          animation: bounceY 2s ease-in-out infinite;
        }

        @keyframes bounceY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        /* ── WHY VOLUNTEER ───────────────────────── */
        .vol-why {
          background: white;
          padding: 80px 0;
        }

        .vol-why-inner {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .vol-why-badge {
          display: inline-block;
          background: rgba(203,54,49,0.08);
          color: var(--primary-red);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(203,54,49,0.2);
        }

        .vol-why-text {
          font-size: 1.35rem;
          line-height: 1.85;
          color: #333;
        }

        /* ── SHARED SECTION STYLES ───────────────── */
        .section-header { text-align: center; margin-bottom: 3.5rem; }

        .section-title {
          font-family: var(--font-headings);
          font-size: 2.6rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .section-line {
          height: 4px;
          width: 60px;
          background: var(--primary-red);
          margin: 0.75rem auto 1.25rem;
          border-radius: 2px;
        }

        .section-sub {
          color: #666;
          font-size: 1.1rem;
        }

        /* ── ROLES ───────────────────────────────── */
        .vol-roles {
          padding: 80px 0;
          background: #f7f9fa;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 2rem;
        }

        .role-card {
          background: white;
          border-radius: 14px;
          padding: 2rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          border-top: 4px solid var(--accent, #cb3631);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .role-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.11);
        }

        .role-icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .role-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.35rem;
        }

        .role-subtitle {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent, #cb3631);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.25rem;
        }

        .role-tasks {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .role-tasks li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.92rem;
          color: #555;
          line-height: 1.5;
        }

        .task-arrow {
          color: var(--accent, #cb3631);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── WHO CAN APPLY ───────────────────────── */
        .vol-who {
          background: #111;
          padding: 80px 0;
        }

        .vol-who-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .text-white { color: white !important; }

        .vol-who .section-title { color: white; }
        .vol-who .section-line { margin: 0.75rem 0 1.5rem; }

        .who-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .who-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.82);
          line-height: 1.5;
        }

        .who-list li svg { color: var(--primary-red); flex-shrink: 0; margin-top: 2px; }

        .who-commitment {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 2.5rem;
          border-left: 4px solid var(--primary-red);
        }

        .who-commitment h3 {
          font-family: var(--font-headings);
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .who-commitment p {
          color: rgba(255,255,255,0.72);
          font-size: 1.05rem;
          line-height: 1.75;
        }

        /* ── GAINS ───────────────────────────────── */
        .vol-gains {
          background: white;
          padding: 80px 0;
        }

        .gains-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .gain-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 1.75rem;
          background: #f7f9fa;
          border-radius: 12px;
          border-left: 4px solid var(--primary-red);
          transition: transform 0.25s ease;
        }

        .gain-card:hover { transform: translateX(4px); }

        .gain-icon { color: var(--primary-red); flex-shrink: 0; }

        .gain-text {
          font-size: 1rem;
          font-weight: 600;
          color: #222;
          margin: 0;
        }

        /* ── PROCESS ─────────────────────────────── */
        .vol-process {
          background: #f7f9fa;
          padding: 80px 0;
        }

        .steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .step-item {
          text-align: center;
          position: relative;
        }

        .step-num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--primary-red);
          color: white;
          font-family: var(--font-headings);
          font-size: 1.2rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          box-shadow: 0 6px 20px rgba(203,54,49,0.35);
        }

        .step-title {
          font-family: var(--font-headings);
          font-size: 1.1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .step-desc {
          font-size: 0.92rem;
          color: #666;
          line-height: 1.6;
        }

        /* ── FORM ────────────────────────────────── */
        .vol-form-section {
          background: white;
          padding: 80px 0 100px;
        }

        .vol-form-wrap {
          max-width: 800px;
          margin: 0 auto;
          background: #fdfdfd;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .vol-form-header {
          background: var(--primary-red);
          color: white;
          padding: 2.5rem 3rem;
          text-align: center;
        }

        .vol-form-header h2 {
          font-family: var(--font-headings);
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .vol-form-header p {
          opacity: 0.85;
          font-size: 1rem;
        }

        .vol-form {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 700;
          font-size: 0.9rem;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .label-hint {
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0;
          font-size: 0.82rem;
          color: #888;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          border: 2px solid #e5e5e5;
          border-radius: 10px;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          color: #111;
          background: white;
          font-family: var(--font-body);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--primary-red);
          box-shadow: 0 0 0 3px rgba(203,54,49,0.1);
        }

        .select-wrap {
          position: relative;
        }

        .select-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #888;
        }

        .vol-submit-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 1.1rem 2.5rem;
          font-size: 1.05rem;
          font-weight: 700;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.25s ease, transform 0.25s ease;
          align-self: flex-start;
        }

        .vol-submit-btn:hover { background: #a82b26; transform: translateY(-2px); }

        .form-success {
          padding: 4rem 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .form-success h3 {
          font-family: var(--font-headings);
          font-size: 1.75rem;
          font-weight: 800;
          color: #111;
        }

        .form-success p {
          color: #555;
          max-width: 480px;
          line-height: 1.7;
        }

        /* ── FINAL CTA ───────────────────────────── */
        .vol-final-cta {
          background: linear-gradient(135deg, #0d0d0d 0%, #1a0000 100%);
          padding: 100px 0;
          text-align: center;
        }

        .vol-final-cta h2 {
          font-family: var(--font-headings);
          font-size: 2.8rem;
          font-weight: 900;
          color: white;
          max-width: 750px;
          margin: 0 auto 1.25rem;
          line-height: 1.2;
        }

        .vol-final-cta p {
          color: rgba(255,255,255,0.65);
          font-size: 1.15rem;
          margin-bottom: 2.5rem;
        }

        .btn-red-large {
          background: var(--primary-red);
          color: white;
          border: none;
          padding: 1.2rem 3.5rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1.1rem;
          cursor: pointer;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .btn-red-large:hover { background: #a82b26; transform: translateY(-3px); }

        .text-center { text-align: center; }

        /* ── RESPONSIVE ──────────────────────────── */
        @media (max-width: 991px) {
          .vol-who-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .steps-row { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .vol-hero-title { font-size: 3.2rem; }
          .section-title { font-size: 2rem; }
          .vol-final-cta h2 { font-size: 2rem; }
          .form-row { grid-template-columns: 1fr; }
          .vol-form { padding: 2rem; }
          .vol-form-header { padding: 2rem; }
          .steps-row { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default VolunteerPage;
