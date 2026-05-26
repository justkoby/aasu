import React, { useState } from 'react';
import { FileText, X, AlertTriangle, MapPin, Briefcase, Calendar, Info } from 'lucide-react';
import './Opportunities.css';

const CONSULTANCIES = [
  {
    id: 'graphic-design',
    title: 'Terms of Reference (ToR) for Graphic Design',
    type: 'Short-term Consultancy',
    location: 'Remote (Southern/Central Africa)',
    deadline: 'June 15, 2023',
    scope: 'Develop unified visual identities, campaign posters, social media banners, and report layouts for the Digital Inclusion Campaign.',
    deliverables: [
      'Campaign Brand Stylebook',
      '12 Social Media Banner Templates',
      '3 Advocacy Report Layout Designs',
      'Printable Campaign Posters & Flysheets'
    ],
    requirements: [
      '3+ years experience in brand design or agency creative work',
      'Strong portfolio demonstrating infographics or advocacy material layouts',
      'Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign)'
    ]
  },
  {
    id: 'translator',
    title: 'Terms of Reference (ToR) for French & Portuguese Translator',
    type: 'Contract',
    location: 'Remote',
    deadline: 'June 20, 2023',
    scope: 'Translate digital rights campaign materials, manuals, and advocacy declarations from English into French and Portuguese to ensure regional access.',
    deliverables: [
      'Translation of Campaign Kit into French',
      'Translation of Campaign Kit into Portuguese',
      'Live translation support during 2 regional webinars'
    ],
    requirements: [
      'Native or bi-lingual proficiency in French/Portuguese and English',
      'Proven experience translating policy, human rights, or educational documents',
      'Familiarity with digital rights or student union terminology is an asset'
    ]
  },
  {
    id: 'social-media',
    title: 'Terms of Reference (ToR) for Social Media Campaign Consultant',
    type: 'Short-term Consultancy',
    location: 'Remote / Hybrid',
    deadline: 'June 18, 2023',
    scope: 'Devise and launch an engaging, multi-platform social media strategy focusing on Twitter, Facebook, and Instagram to rally support for zero data costs.',
    deliverables: [
      'Social Media Campaign Calendar',
      'Hashtag strategy and mobilization guidelines',
      'Bi-weekly metrics performance reports'
    ],
    requirements: [
      'Proven track record running digital advocacy or NGO mobilization campaigns',
      'Excellent graphic editing and short-form copy-writing skills',
      'Experience using social listening and analytics dashboards'
    ]
  },
  {
    id: 'photographer',
    title: 'Terms of Reference (ToR) for Photographer / Documentarian',
    type: 'Event-based Contract',
    location: 'Regional Hubs (South Africa / DR Congo)',
    deadline: 'June 25, 2023',
    scope: 'Capture high-quality visual stories, portraits of student leaders, and event photography during regional training workshops and lobbying rallies.',
    deliverables: [
      '50 high-resolution edited campaign photographs',
      'Short 2-minute video snippets of leader testimonials',
      'Metadata and release forms archive'
    ],
    requirements: [
      'Professional photography equipment (DSLR, stabilizers, lighting)',
      'Experience in event or photojournalism formats',
      'Ability to deliver edited media files on tight timelines'
    ]
  },
  {
    id: 'advocacy',
    title: 'Terms of Reference (ToR) for Advocacy & Students Campaign Consultancy',
    type: 'Lead Consultancy',
    location: 'Johannesburg / Hybrid',
    deadline: 'June 12, 2023',
    scope: 'Lead the programmatic design of training kits for student unions. Mentor student leaders on methods of structured dialogue and lobbying of ISPs.',
    deliverables: [
      'Student Union Advocacy Training Manual',
      'Strategic lobbying roadmap for Southern Africa',
      'Facilitation of 3 regional training sessions'
    ],
    requirements: [
      'Advanced degree in Public Policy, Human Rights, Education, or related fields',
      '5+ years leading student or youth advocacy mobilization projects in Africa',
      'Strong network with regional telecommunications regulatory bodies'
    ]
  }
];

export const Opportunities = () => {
  const [selectedTor, setSelectedTor] = useState(null);

  const handleOpenModal = (tor) => {
    setSelectedTor(tor);
  };

  const handleCloseModal = () => {
    setSelectedTor(null);
  };

  return (
    <main className="opportunities-page fade-in">
      {/* Banner */}
      <div className="opportunities-banner" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url('/assets/call-for-consul.jpg')" }}>
        <div className="container">
          <h1 className="page-title">Opportunities Archive</h1>
          <p className="page-subtitle">
            Historical listing of programmatic calls and consultancies launched during the active phases of the campaign.
          </p>
        </div>
      </div>

      <section className="section opportunites-list-section">
        <div className="container">
          {/* Informational Alert */}
          <div className="archive-notice glass">
            <Info className="info-icon" size={24} />
            <div>
              <h3>Campaign Status: Concluded</h3>
              <p>
                All project actions and campaign consultancies successfully concluded in **2023**. These Terms of References (ToRs) are retained as read-only historical records for researchers and partners. Application submissions are closed.
              </p>
            </div>
          </div>

          <div className="opportunities-grid">
            {CONSULTANCIES.map((item) => (
              <div key={item.id} className="card opportunity-card closed">
                <div className="opp-meta">
                  <span className="opp-tag"><Briefcase size={14} /> {item.type}</span>
                  <span className="opp-tag"><MapPin size={14} /> {item.location}</span>
                  <span className="opp-status-badge">Closed</span>
                </div>
                <h3>{item.title.replace('Terms of Reference (ToR) for ', '')}</h3>
                <p className="opp-desc">{item.scope}</p>
                
                <div className="opp-deliverables">
                  <h4>Key Deliverables (Summary):</h4>
                  <ul>
                    {item.deliverables.slice(0, 2).map((del, idx) => (
                      <li key={idx}>{del}</li>
                    ))}
                    {item.deliverables.length > 2 && <li>...and {item.deliverables.length - 2} more.</li>}
                  </ul>
                </div>
                
                <div className="opp-footer">
                  <span className="opp-deadline"><Calendar size={14} /> Concluded: {item.deadline}</span>
                  <button 
                    id={`view-tor-btn-${item.id}`}
                    className="btn btn-outline" 
                    onClick={() => handleOpenModal(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for viewing ToR details (No download option) */}
      {selectedTor && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content glass fade-in" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '650px' }}>
            <button className="modal-close" onClick={handleCloseModal} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="tor-details-modal">
              <div className="form-header text-left">
                <FileText size={32} className="form-icon" />
                <h3>Terms of Reference Details</h3>
                <span className="tor-modal-subtitle">{selectedTor.type} | {selectedTor.location}</span>
              </div>

              {/* Status Alert */}
              <div className="modal-status-alert">
                <AlertTriangle size={20} className="alert-icon" />
                <div>
                  <strong>Archived Position (Ended 2023)</strong>
                  <p>This consultancy call is closed. Downloading files is disabled.</p>
                </div>
              </div>

              <div className="tor-section">
                <h4>1. Scope of Work</h4>
                <p>{selectedTor.scope}</p>
              </div>

              <div className="tor-section">
                <h4>2. Key Deliverables</h4>
                <ul>
                  {selectedTor.deliverables.map((del, idx) => (
                    <li key={idx}>{del}</li>
                  ))}
                </ul>
              </div>

              <div className="tor-section">
                <h4>3. Requirements & Qualifications</h4>
                <ul>
                  {selectedTor.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions-footer">
                <button id="modal-close-details-btn" className="btn btn-primary" onClick={handleCloseModal}>
                  Close Specifications
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default Opportunities;
