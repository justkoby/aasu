import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Copy, Search, Check, ExternalLink, Image as ImageIcon, Palette, Type, ShieldCheck, Briefcase, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { brandColors, coreLogos, priorityLogos, unitLogos, otherAssets, merchItems } from '../data/brandingData';
import './BrandingPage.css';

const BrandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [copyStatus, setCopyStatus] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(text);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  const filteredLogos = coreLogos.filter(logo => 
    logo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPriority = priorityLogos.filter(logo => 
    logo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUnits = unitLogos.filter(logo => 
    logo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="branding-page">
      <SEO 
        title="Brand & Media Kit" 
        description="Download official AASU logos, brand assets, and guidelines for partners, media, and designers." 
      />

      {/* Hero Section */}
      <section className="brand-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <span className="badge">RESOURCES</span>
            <h1>Brand & Media Kit</h1>
            <p>Download official logos, brand assets, and guidelines for using AASU materials correctly.</p>
            <div className="hero-ctas">
              <button className="cta-primary">
                <Download size={20} />
                Download Full Brand Kit (ZIP)
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UX Controls */}
      <div className="ux-controls-sticky">
        <div className="container">
          <div className="ux-bar">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search assets (logo, colors, unit...)" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-chips">
              {['all', 'logos', 'colors', 'typography', 'programs', 'merch'].map(filter => (
                <button 
                  key={filter}
                  className={`chip ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container brand-content">
        {/* LOGOS SECTION */}
        {(activeFilter === 'all' || activeFilter === 'logos') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="logos"
          >
            <div className="section-header">
              <div className="header-icon"><ImageIcon size={24} /></div>
              <h2>Core Logos</h2>
              <p>Primary visual identifiers for the Union. Use the appropriate version for your background contrast.</p>
            </div>

            <div className="logo-grid">
              {filteredLogos.map((logo, idx) => (
                <div key={idx} className="logo-card">
                  <div className={`logo-preview ${logo.darkBg ? 'dark-bg' : ''}`}>
                    <img src={logo.preview} alt={logo.title} />
                  </div>
                  <div className="logo-info">
                    <h3>{logo.title}</h3>
                    <div className="format-links">
                      {logo.formats.map((fmt, fIdx) => (
                        <a key={fIdx} href={fmt.url} download className="format-btn">
                          {fmt.type}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="usage-rules">
              <h3>Logo Usage Rules</h3>
              <div className="rules-grid">
                <div className="rule-item">
                  <ShieldCheck className="rule-icon success" />
                  <span>Minimum spacing: Maintain clear space around the logo equivalent to the height of the symbol.</span>
                </div>
                <div className="rule-item">
                  <ShieldCheck className="rule-icon danger" />
                  <span>Do not stretch: Always scale the logo proportionally.</span>
                </div>
                <div className="rule-item">
                  <ShieldCheck className="rule-icon danger" />
                  <span>Do not recolor: Use only the provided color variants.</span>
                </div>
                <div className="rule-item">
                  <ShieldCheck className="rule-icon danger" />
                  <span>Contrast: Do not place on low contrast or busy backgrounds.</span>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* BRAND COLORS */}
        {(activeFilter === 'all' || activeFilter === 'colors') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="colors"
          >
            <div className="section-header">
              <div className="header-icon"><Palette size={24} /></div>
              <h2>Brand Colors</h2>
              <p>Our color palette reflects our diverse strategic priorities and Pan-African heritage.</p>
            </div>

            <div className="color-grid">
              {brandColors.map((color, idx) => (
                <div key={idx} className="color-card" style={{ '--color': color.hex }}>
                  <div className="color-swatch">
                    <button className="copy-btn" onClick={() => handleCopy(color.hex)}>
                      {copyStatus === color.hex ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <div className="color-details">
                    <h3>{color.name}</h3>
                    <div className="color-values">
                      <div className="val-row">
                        <span>HEX</span>
                        <strong>{color.hex}</strong>
                      </div>
                      <div className="val-row">
                        <span>RGB</span>
                        <strong>{color.rgb}</strong>
                      </div>
                    </div>
                    <p className="color-usage">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* STRATEGIC PRIORITY LOGOS */}
        {(activeFilter === 'all' || activeFilter === 'programs') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="priority-logos"
          >
            <div className="section-header">
              <div className="header-icon"><ShieldCheck size={24} /></div>
              <h2>Program Branding</h2>
              <p>Each strategic priority has a unique identifier that aligns with our core identity.</p>
            </div>

            <div className="priority-grid">
              {filteredPriority.map((logo, idx) => (
                <div key={idx} className="priority-card">
                  <img src={logo.icon} alt={logo.name} />
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* UNIT LOGOS */}
        {(activeFilter === 'all' || activeFilter === 'programs') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="unit-logos"
          >
            <div className="section-header">
              <div className="header-icon"><Briefcase size={24} /></div>
              <h2>Unit Identities</h2>
              <p>Specialized units within AASU maintaining consistent branding with project-specific nuances.</p>
            </div>

            <div className="unit-grid">
              {filteredUnits.map((logo, idx) => (
                <div key={idx} className="unit-card">
                  <div className="unit-img">
                    <img src={logo.icon} alt={logo.name} />
                  </div>
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* TYPOGRAPHY */}
        {(activeFilter === 'all' || activeFilter === 'typography') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="typography"
          >
            <div className="section-header">
              <div className="header-icon"><Type size={24} /></div>
              <h2>Typography System</h2>
              <p>Dual-font system balancing visual impact and professional clarity.</p>
            </div>

            <div className="typo-split">
              <div className="typo-col design">
                <div className="typo-label">PRIMARY (DESIGN & DIGITAL)</div>
                <h3 className="font-lufga">Lufga</h3>
                <p className="typo-desc">Modern, bold, youth-driven identity used for social media, website UI, and campaign visuals.</p>
                <div className="typo-rules">
                  <div className="rule">H1 — Lufga Bold / 48–72px</div>
                  <div className="rule">Body — Lufga Regular / 16px</div>
                </div>
                <div className="typo-example font-lufga">
                  BUILDING AFRICA’S LARGEST STUDENT MOVEMENT
                </div>
              </div>

              <div className="typo-col formal">
                <div className="typo-label">SECONDARY (FORMAL DOCUMENTS)</div>
                <h3 className="font-calisto">Calisto MT</h3>
                <p className="typo-desc">Professional, readable, institutional tone used for official letters, reports, and policy documents.</p>
                <div className="typo-rules">
                  <div className="rule">Title — Calisto MT Bold / 24pt</div>
                  <div className="rule">Body — Calisto MT Regular / 12pt</div>
                </div>
                <div className="typo-example font-calisto">
                  The All-Africa Students Union is committed to advancing student representation.
                </div>
              </div>
            </div>

            <div className="font-pairing-rules">
              <h3>Font Pairing Principles</h3>
              <p>Lufga and Calisto MT should <strong>NEVER</strong> appear together in the same asset. Think of it as: Lufga = External Identity, Calisto MT = Institutional Voice.</p>
            </div>
          </motion.section>
        )}

        {/* ASSETS & PPT */}
        {(activeFilter === 'all') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="assets"
          >
            <div className="section-header">
              <div className="header-icon"><FileText size={24} /></div>
              <h2>Presentations & Documents</h2>
              <p>Pre-designed templates for consistent communication.</p>
            </div>

            <div className="asset-list">
              {otherAssets.map((asset, idx) => (
                <div key={idx} className="asset-item">
                  <div className="asset-info">
                    <span className="asset-type">{asset.type}</span>
                    <h4>{asset.name}</h4>
                  </div>
                  <a href={asset.url} download className="download-btn-asset">
                    <Download size={18} />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* MERCHANDISE */}
        {(activeFilter === 'all' || activeFilter === 'merch') && (
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brand-section"
            id="merch"
          >
            <div className="section-header">
              <div className="header-icon"><ShieldCheck size={24} /></div>
              <h2>Brand in Action</h2>
              <p>Visualizing the AASU brand in physical and digital touchpoints.</p>
            </div>

            <div className="merch-grid">
              {merchItems.map((item, idx) => (
                <div key={idx} className="merch-card">
                  <div className="merch-placeholder">
                    <span>{item.name} Mockup</span>
                  </div>
                  <div className="merch-info">
                    <h4>{item.name}</h4>
                    <span className="merch-cat">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default BrandingPage;
