import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, ChevronDown, MapPin,
  Globe, Users, Award, Handshake, Megaphone,
  BookOpen, Shield, Building2, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
const MEMBER_TYPES = [
  'Full Membership – National Student Union',
  'Associate Membership – University / Polytechnic',
  'Associate Membership – Youth Organisation',
  'Associate Membership – Student-led Group',
  'Other',
];

const WHY_ITEMS = [
  { icon: <Globe size={24} />, text: 'Representation at continental and global platforms' },
  { icon: <Users size={24} />, text: 'Access to a network of student leaders across Africa' },
  { icon: <Handshake size={24} />, text: 'Opportunities for collaboration and partnerships' },
  { icon: <BookOpen size={24} />, text: 'Participation in AASU programmes, trainings, and events' },
  { icon: <Megaphone size={24} />, text: 'Contribution to policy advocacy and education reform' },
  { icon: <Award size={24} />, text: 'Increased visibility and recognition across the continent' },
];

const STEPS = [
  { n: '01', title: 'Submit Application', desc: "Complete the membership application form with your organisation's details." },
  { n: '02', title: 'Review', desc: 'AASU reviews eligibility and documentation submitted.' },
  { n: '03', title: 'Approval', desc: 'Successful applicants are notified and officially onboarded.' },
  { n: '04', title: 'Onboarding', desc: 'Integration into AASU structures, programmes, and activities.' },
];

const REGIONS = [
  { region: 'North Africa', country: 'Mauritania', flag: '🇲🇷' },
  { region: 'East Africa', country: 'Ethiopia', flag: '🇪🇹' },
  { region: 'West Africa', country: 'Senegal', flag: '🇸🇳' },
  { region: 'Central Africa', country: 'Cameroon', flag: '🇨🇲' },
  { region: 'Southern Africa', country: 'Botswana', flag: '🇧🇼' },
];

/* ── Component ───────────────────────────────────────────────── */
const BecomeMemberPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const formRef = useRef(null);
  const rolesRef = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: 'smooth' });

  const [form, setForm] = useState({
    orgName: '', country: '', type: '', contactPerson: '',
    email: '', phone: '', description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileLabel, setFileLabel] = useState('No file chosen');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = e => setFileLabel(e.target.files[0]?.name || 'No file chosen');

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Membership Application – ${form.orgName} (${form.type})`);
    const body = encodeURIComponent(
      `Organisation Name: ${form.orgName}\n` +
      `Country: ${form.country}\n` +
      `Membership Type: ${form.type}\n` +
      `Contact Person: ${form.contactPerson}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n\n` +
      `Organisation Description:\n${form.description}\n\n` +
      `Note: Please attach proof of legitimacy (registration documents) to this email before sending.`
    );
    window.location.href = `mailto:info@aasuonline.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bm-page">

      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="bm-hero">
        <div className="bm-hero-overlay" />
        <div className="container bm-hero-content">
          <motion.h1
            className="bm-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Become a Member<br />
            <span className="bm-red">of AASU</span>
          </motion.h1>
          <motion.p
            className="bm-hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Join the continental platform representing millions of students across Africa and contribute to shaping the future of education and youth development.
          </motion.p>
          <motion.div
            className="bm-hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="btn-bm-red" onClick={() => scrollTo(formRef)}>Apply for Membership</button>
            <button className="btn-bm-outline" onClick={() => scrollTo(rolesRef)}>View Membership Types</button>
          </motion.div>
        </div>
      </section>

      {/* ══ WHAT MEMBERSHIP MEANS ══════════════════════════════ */}
      <section className="bm-context">
        <div className="container">
          <motion.div
            className="bm-context-inner"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bm-context-badge">Who Is This For?</div>
            <p className="bm-context-text">
              Membership of the All-Africa Students Union (AASU) comprises <strong>national student unions</strong> across the 54 African countries. The Union also welcomes <strong>youth organisations</strong> and <strong>tertiary institutions</strong> — including universities, polytechnics, and training institutions — committed to advancing student development and representation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ MEMBERSHIP CATEGORIES ══════════════════════════════ */}
      <section ref={rolesRef} className="bm-categories">
        <div className="container">
          <motion.div className="bm-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="bm-section-title">Membership Categories</h2>
            <div className="bm-section-line" />
            <p className="bm-section-sub">Two pathways to joining the continental student movement.</p>
          </motion.div>

          <motion.div
            className="bm-categories-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* Full Membership */}
            <motion.div variants={fadeUp} className="bm-cat-card bm-cat-full">
              <div className="bm-cat-header">
                <Shield size={32} />
                <div>
                  <h3>Full Membership</h3>
                  <span className="bm-cat-tag">National Student Unions</span>
                </div>
              </div>
              <div className="bm-cat-body">
                <div className="bm-cat-block">
                  <h4>Who Qualifies</h4>
                  <ul>
                    <li><CheckCircle2 size={16} /> Official national student unions representing students at the national level</li>
                  </ul>
                </div>
                <div className="bm-cat-block">
                  <h4>What It Means</h4>
                  <ul>
                    <li><CheckCircle2 size={16} /> Full representation within AASU structures</li>
                    <li><CheckCircle2 size={16} /> Voting rights in all decision-making bodies</li>
                    <li><CheckCircle2 size={16} /> Eligibility for leadership and committee positions</li>
                  </ul>
                </div>
                <div className="bm-cat-block">
                  <h4>Your Role</h4>
                  <ul>
                    <li><CheckCircle2 size={16} /> Shape continental student policies</li>
                    <li><CheckCircle2 size={16} /> Represent national student interests at the continental level</li>
                  </ul>
                </div>
              </div>
              <button className="btn-bm-red mt-auto" onClick={() => scrollTo(formRef)}>Apply – Full Membership</button>
            </motion.div>

            {/* Associate Membership */}
            <motion.div variants={fadeUp} className="bm-cat-card bm-cat-assoc">
              <div className="bm-cat-header">
                <GraduationCap size={32} />
                <div>
                  <h3>Associate Membership</h3>
                  <span className="bm-cat-tag bm-tag-dark">Institutions & Organisations</span>
                </div>
              </div>
              <div className="bm-cat-body">
                <div className="bm-cat-block">
                  <h4>Who Qualifies</h4>
                  <ul>
                    <li><CheckCircle2 size={16} /> Universities, polytechnics, and tertiary institutions</li>
                    <li><CheckCircle2 size={16} /> Youth organisations and student-led groups</li>
                  </ul>
                </div>
                <div className="bm-cat-block">
                  <h4>What It Means</h4>
                  <ul>
                    <li><CheckCircle2 size={16} /> Participation in AASU programmes and activities</li>
                    <li><CheckCircle2 size={16} /> Access to continental networks and opportunities</li>
                    <li><CheckCircle2 size={16} /> Observer status in decision-making forums</li>
                  </ul>
                </div>
                <div className="bm-cat-block">
                  <h4>Your Role</h4>
                  <ul>
                    <li><CheckCircle2 size={16} /> Collaborate on programmes and events</li>
                    <li><CheckCircle2 size={16} /> Expand student engagement across your institution</li>
                  </ul>
                </div>
              </div>
              <button className="btn-bm-dark mt-auto" onClick={() => scrollTo(formRef)}>Apply – Associate Membership</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ WHY BECOME A MEMBER ════════════════════════════════ */}
      <section className="bm-why">
        <div className="container">
          <motion.div className="bm-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="bm-section-title">Why Become a Member</h2>
            <div className="bm-section-line" />
            <p className="bm-section-sub">Real benefits. Real impact. Real continental presence.</p>
          </motion.div>

          <motion.div
            className="bm-why-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {WHY_ITEMS.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bm-why-card">
                <div className="bm-why-icon">{item.icon}</div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ GEOGRAPHIC PRESENCE ════════════════════════════════ */}
      <section className="bm-geo">
        <div className="container">
          <div className="bm-geo-inner">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="bm-section-title bm-white">Geographic Presence</h2>
              <div className="bm-section-line" />

              <div className="bm-hq">
                <MapPin size={20} color="#cb3631" />
                <div>
                  <strong>Headquarters</strong>
                  <span>Accra, Ghana</span>
                </div>
              </div>

              <p className="bm-geo-intro">
                AASU is expanding its reach through the establishment of regional offices across Africa:
              </p>

              <div className="bm-regions-list">
                {REGIONS.map((r, i) => (
                  <div key={i} className="bm-region-item">
                    <span className="bm-region-flag">{r.flag}</span>
                    <div>
                      <strong>{r.region}</strong>
                      <span>{r.country}</span>
                    </div>
                    <span className="bm-wip-badge">In Progress</span>
                  </div>
                ))}
              </div>

              <p className="bm-geo-note">
                These regional offices will enhance coordination, accessibility, and engagement across the continent.
              </p>
            </motion.div>

            <motion.div
              className="bm-geo-map-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/africa.svg" alt="Africa Map" className="bm-africa-map" />
              <p className="bm-map-caption">85+ Member Unions · 54 Countries</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════ */}
      <section className="bm-process">
        <div className="container">
          <motion.div className="bm-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="bm-section-title">Membership Process</h2>
            <div className="bm-section-line" />
            <p className="bm-section-sub">A clear, straightforward path to joining AASU.</p>
          </motion.div>

          <motion.div
            className="bm-steps-row"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STEPS.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="bm-step">
                <div className="bm-step-num">{s.n}</div>
                {i < STEPS.length - 1 && <div className="bm-step-line" />}
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ REQUIREMENTS ═══════════════════════════════════════ */}
      <section className="bm-requirements">
        <div className="container">
          <motion.div className="bm-section-header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="bm-section-title">Requirements</h2>
            <div className="bm-section-line" />
          </motion.div>

          <motion.div
            className="bm-req-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="bm-req-card">
              <Shield size={28} color="#cb3631" />
              <h3>For Full Members</h3>
              <ul>
                <li><ArrowRight size={14} /> Must be a recognised national student union</li>
                <li><ArrowRight size={14} /> Must demonstrate representation of students nationally</li>
                <li><ArrowRight size={14} /> Must align with AASU values and principles</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="bm-req-card">
              <Building2 size={28} color="#111" />
              <h3>For Associate Members</h3>
              <ul>
                <li><ArrowRight size={14} /> Must be a registered institution or organisation</li>
                <li><ArrowRight size={14} /> Must be student-focused or youth-oriented in mandate</li>
                <li><ArrowRight size={14} /> Must align with AASU's mission and vision</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ APPLICATION FORM ═══════════════════════════════════ */}
      <section ref={formRef} className="bm-form-section">
        <div className="container">
          <motion.div className="bm-form-wrap" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bm-form-header">
              <h2>Membership Application</h2>
              <p>Fill in your organisation's details and we will be in touch.</p>
            </div>

            {submitted ? (
              <div className="bm-success">
                <CheckCircle2 size={54} color="#15803d" />
                <h3>Application Submitted!</h3>
                <p>Your email client has opened with your application pre-filled. Attach your proof of legitimacy, then send. Our team will review and reach out shortly.</p>
                <button className="btn-bm-red" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bm-form">
                <div className="bm-form-row">
                  <div className="bm-form-group">
                    <label htmlFor="bm-orgName">Organisation Name *</label>
                    <input id="bm-orgName" name="orgName" type="text" required placeholder="Full legal name of your organisation" value={form.orgName} onChange={handleChange} />
                  </div>
                  <div className="bm-form-group">
                    <label htmlFor="bm-country">Country *</label>
                    <input id="bm-country" name="country" type="text" required placeholder="Country of operation" value={form.country} onChange={handleChange} />
                  </div>
                </div>

                <div className="bm-form-group">
                  <label htmlFor="bm-type">Membership Type *</label>
                  <div className="bm-select-wrap">
                    <select id="bm-type" name="type" required value={form.type} onChange={handleChange}>
                      <option value="">-- Select membership category --</option>
                      {MEMBER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={16} className="bm-select-icon" />
                  </div>
                </div>

                <div className="bm-form-row">
                  <div className="bm-form-group">
                    <label htmlFor="bm-contactPerson">Contact Person *</label>
                    <input id="bm-contactPerson" name="contactPerson" type="text" required placeholder="Name of primary contact" value={form.contactPerson} onChange={handleChange} />
                  </div>
                  <div className="bm-form-group">
                    <label htmlFor="bm-email">Email Address *</label>
                    <input id="bm-email" name="email" type="email" required placeholder="official@email.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="bm-form-group">
                  <label htmlFor="bm-phone">Phone Number</label>
                  <input id="bm-phone" name="phone" type="tel" placeholder="+XXX XXX XXX XXXX" value={form.phone} onChange={handleChange} />
                </div>

                <div className="bm-form-group">
                  <label htmlFor="bm-description">Description of Organisation *</label>
                  <textarea id="bm-description" name="description" required rows={5} placeholder="Briefly describe your organisation — its mandate, membership base, and key activities..." value={form.description} onChange={handleChange} />
                </div>

                <div className="bm-form-group">
                  <label>Proof of Legitimacy</label>
                  <label className="bm-file-label" htmlFor="bm-file">
                    <span className="bm-file-btn">Choose File</span>
                    <span className="bm-file-name">{fileLabel}</span>
                    <input id="bm-file" type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFile} className="bm-file-hidden" />
                  </label>
                  <p className="bm-file-hint">Upload registration certificate, government letter, or equivalent. If emailing directly, attach to the email before sending.</p>
                </div>

                <button type="submit" className="bm-submit-btn">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════ */}
      <section className="bm-final-cta">
        <div className="container bm-text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>Join a continental movement that amplifies student voices and drives change across Africa.</h2>
            <p>Over 85 national unions are already shaping the future of education. Your organisation's seat at the table is waiting.</p>
            <div className="bm-cta-buttons">
              <button className="btn-bm-red-lg" onClick={() => scrollTo(formRef)}>Apply Now</button>
              <Link to="/contact" className="btn-bm-outline-lg">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .bm-page { background: #f7f9fa; }

        /* ── HERO ────────────────────────────────── */
        .bm-hero {
          position: relative;
          background: url('/header-2.jpg') center / cover no-repeat;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .bm-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(5,5,5,0.94) 0%, rgba(10,10,10,0.8) 55%, rgba(203,54,49,0.2) 100%);
        }

        .bm-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 240px;
          padding-bottom: 80px;
        }

        .bm-eyebrow {
          display: inline-block;
          background: var(--primary-red);
          color: white;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }

        .bm-hero-title {
          font-family: var(--font-headings);
          font-size: 3.75rem;
          font-weight: 900;
          color: white;
          line-height: 1.05;
          margin-bottom: 1.25rem;
          max-width: 750px;
        }

        .bm-red { color: var(--primary-red); }

        .bm-hero-sub {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.78);
          max-width: 600px;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .bm-hero-ctas {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* ── SHARED BUTTONS ──────────────────────── */
        .btn-bm-red, .btn-bm-outline, .btn-bm-dark {
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
          text-decoration: none;
          display: inline-block;
        }

        .btn-bm-red { background: var(--primary-red); color: white; }
        .btn-bm-red:hover { background: #a82b26; transform: translateY(-2px); }

        .btn-bm-outline {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.5);
        }
        .btn-bm-outline:hover { border-color: white; background: rgba(255,255,255,0.08); }

        .btn-bm-dark { background: #111; color: white; }
        .btn-bm-dark:hover { background: #333; transform: translateY(-2px); }

        .mt-auto { margin-top: auto; align-self: flex-start; }

        /* ── CONTEXT ─────────────────────────────── */
        .bm-context {
          background: white;
          padding: 80px 0;
        }

        .bm-context-inner {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .bm-context-badge {
          display: inline-block;
          background: rgba(203,54,49,0.08);
          color: var(--primary-red);
          font-weight: 700;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(203,54,49,0.2);
        }

        .bm-context-text {
          font-size: 1.25rem;
          line-height: 1.85;
          color: #333;
        }

        /* ── SHARED SECTION LABELS ───────────────── */
        .bm-section-header { text-align: center; margin-bottom: 3rem; }

        .bm-section-title {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .bm-section-line {
          height: 4px;
          width: 60px;
          background: var(--primary-red);
          margin: 0.75rem auto 1.25rem;
          border-radius: 2px;
        }

        .bm-section-sub { color: #666; font-size: 1.05rem; }

        /* ── CATEGORIES ──────────────────────────── */
        .bm-categories {
          background: #f7f9fa;
          padding: 80px 0;
        }

        .bm-categories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .bm-cat-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.07);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .bm-cat-full { border-top: 5px solid var(--primary-red); }
        .bm-cat-assoc { border-top: 5px solid #111; }

        .bm-cat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem 2rem 1.5rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .bm-cat-full .bm-cat-header svg { color: var(--primary-red); }
        .bm-cat-assoc .bm-cat-header svg { color: #111; }

        .bm-cat-header h3 {
          font-family: var(--font-headings);
          font-size: 1.4rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.25rem;
        }

        .bm-cat-tag {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background: rgba(203,54,49,0.08);
          color: var(--primary-red);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }

        .bm-tag-dark {
          background: rgba(0,0,0,0.06);
          color: #333;
        }

        .bm-cat-body {
          padding: 1.75rem 2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bm-cat-block h4 {
          font-weight: 800;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #888;
          margin-bottom: 0.75rem;
        }

        .bm-cat-block ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .bm-cat-block li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: #444;
          line-height: 1.5;
        }

        .bm-cat-full .bm-cat-block li svg { color: var(--primary-red); flex-shrink: 0; margin-top: 2px; }
        .bm-cat-assoc .bm-cat-block li svg { color: #555; flex-shrink: 0; margin-top: 2px; }

        .bm-cat-card > button, .bm-cat-card > a {
          margin: 0 2rem 2rem;
        }

        /* ── WHY ─────────────────────────────────── */
        .bm-why {
          background: white;
          padding: 80px 0;
        }

        .bm-why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.5rem;
        }

        .bm-why-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem 1.75rem;
          background: #f7f9fa;
          border-radius: 12px;
          border-left: 4px solid var(--primary-red);
          transition: transform 0.25s ease;
        }

        .bm-why-card:hover { transform: translateX(5px); }

        .bm-why-icon { color: var(--primary-red); flex-shrink: 0; }

        .bm-why-card p {
          font-size: 1rem;
          font-weight: 600;
          color: #222;
          margin: 0;
          line-height: 1.5;
        }

        /* ── GEOGRAPHIC ──────────────────────────── */
        .bm-geo {
          background: #111;
          padding: 80px 0;
          color: white;
        }

        .bm-geo-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .bm-white { color: white !important; }
        .bm-geo .bm-section-line { margin: 0.75rem 0 1.5rem; }

        .bm-hq {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }

        .bm-hq strong { display: block; font-size: 1rem; color: white; }
        .bm-hq span { color: rgba(255,255,255,0.65); font-size: 0.95rem; }

        .bm-geo-intro {
          color: rgba(255,255,255,0.65);
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .bm-regions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .bm-region-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 0.85rem 1.25rem;
        }

        .bm-region-flag { font-size: 1.6rem; line-height: 1; }

        .bm-region-item strong {
          display: block;
          font-size: 0.9rem;
          color: white;
          font-weight: 700;
        }

        .bm-region-item span {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.55);
        }

        .bm-wip-badge {
          margin-left: auto;
          background: rgba(203,54,49,0.18);
          color: var(--primary-red);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          padding: 0.25rem 0.7rem;
          border-radius: 50px;
          border: 1px solid rgba(203,54,49,0.3);
          white-space: nowrap;
        }

        .bm-geo-note {
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
          font-style: italic;
          line-height: 1.6;
        }

        .bm-geo-map-card {
          position: sticky;
          top: 120px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
        }

        .bm-africa-map {
          width: 100%;
          max-width: 320px;
          filter: invert(1) opacity(0.15);
        }

        .bm-map-caption {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 1rem;
        }

        /* ── PROCESS ─────────────────────────────── */
        .bm-process {
          background: #f7f9fa;
          padding: 80px 0;
        }

        .bm-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .bm-step {
          text-align: center;
          position: relative;
        }

        .bm-step-num {
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
          box-shadow: 0 6px 20px rgba(203,54,49,0.3);
          position: relative;
          z-index: 1;
        }

        .bm-step h4 {
          font-family: var(--font-headings);
          font-size: 1.05rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .bm-step p {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
        }

        /* ── REQUIREMENTS ────────────────────────── */
        .bm-requirements {
          background: white;
          padding: 80px 0;
        }

        .bm-req-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .bm-req-card {
          background: #f7f9fa;
          border-radius: 14px;
          padding: 2.5rem;
          border-top: 4px solid var(--primary-red);
        }

        .bm-req-card:last-child { border-top-color: #111; }

        .bm-req-card h3 {
          font-family: var(--font-headings);
          font-size: 1.3rem;
          font-weight: 800;
          color: #111;
          margin: 1rem 0;
        }

        .bm-req-card ul {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .bm-req-card li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.97rem;
          color: #444;
          line-height: 1.5;
        }

        .bm-req-card li svg { color: var(--primary-red); flex-shrink: 0; margin-top: 3px; }

        /* ── FORM ────────────────────────────────── */
        .bm-form-section {
          background: #f7f9fa;
          padding: 80px 0 100px;
        }

        .bm-form-wrap {
          max-width: 820px;
          margin: 0 auto;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .bm-form-header {
          background: #111;
          color: white;
          padding: 2.5rem 3rem;
          text-align: center;
        }

        .bm-form-header h2 {
          font-family: var(--font-headings);
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 0.5rem;
        }

        .bm-form-header p { opacity: 0.7; }

        .bm-form {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .bm-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .bm-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .bm-form-group label {
          font-weight: 700;
          font-size: 0.85rem;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .bm-form-group input,
        .bm-form-group textarea,
        .bm-form-group select {
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

        .bm-form-group input:focus,
        .bm-form-group textarea:focus,
        .bm-form-group select:focus {
          border-color: var(--primary-red);
          box-shadow: 0 0 0 3px rgba(203,54,49,0.1);
        }

        .bm-select-wrap { position: relative; }

        .bm-select-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #888;
        }

        /* File Upload */
        .bm-file-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
        }

        .bm-file-btn {
          background: #111;
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
          transition: background 0.2s;
        }

        .bm-file-btn:hover { background: #333; }

        .bm-file-name {
          font-size: 0.9rem;
          color: #888;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bm-file-hidden { display: none; }

        .bm-file-hint {
          font-size: 0.82rem;
          color: #aaa;
          margin-top: 0.35rem;
          line-height: 1.5;
        }

        .bm-submit-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 1.1rem 2.5rem;
          font-size: 1rem;
          font-weight: 700;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.25s ease;
          align-self: flex-start;
        }

        .bm-submit-btn:hover { background: #a82b26; transform: translateY(-2px); }

        .bm-success {
          padding: 4rem 3rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .bm-success h3 {
          font-family: var(--font-headings);
          font-size: 1.75rem;
          font-weight: 800;
          color: #111;
        }

        .bm-success p {
          color: #555;
          max-width: 520px;
          line-height: 1.7;
        }

        /* ── FINAL CTA ───────────────────────────── */
        .bm-final-cta {
          background: linear-gradient(135deg, #0d0d0d 0%, #1a0000 100%);
          padding: 100px 0;
        }

        .bm-text-center { text-align: center; }

        .bm-final-cta h2 {
          font-family: var(--font-headings);
          font-size: 2.6rem;
          font-weight: 900;
          color: white;
          max-width: 780px;
          margin: 0 auto 1.25rem;
          line-height: 1.2;
        }

        .bm-final-cta p {
          color: rgba(255,255,255,0.6);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .bm-cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-bm-red-lg, .btn-bm-outline-lg {
          padding: 1.2rem 3rem;
          border-radius: 50px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          font-family: var(--font-headings);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-decoration: none;
          display: inline-block;
          border: none;
          transition: all 0.25s ease;
        }

        .btn-bm-red-lg { background: var(--primary-red); color: white; }
        .btn-bm-red-lg:hover { background: #a82b26; transform: translateY(-2px); }

        .btn-bm-outline-lg {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.4);
        }
        .btn-bm-outline-lg:hover { border-color: white; background: rgba(255,255,255,0.08); }

        /* ── RESPONSIVE ──────────────────────────── */
        @media (max-width: 991px) {
          .bm-categories-grid,
          .bm-req-grid,
          .bm-geo-inner { grid-template-columns: 1fr; }
          .bm-steps-row { grid-template-columns: repeat(2, 1fr); }
          .bm-geo-map-card { position: static; }
        }

        @media (max-width: 768px) {
          .bm-hero-title { font-size: 3.2rem; }
          .bm-section-title { font-size: 2rem; }
          .bm-final-cta h2 { font-size: 2rem; }
          .bm-form-row { grid-template-columns: 1fr; }
          .bm-form { padding: 2rem; }
          .bm-form-header { padding: 2rem; }
          .bm-steps-row { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default BecomeMemberPage;
