import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';

const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openPartner, setOpenPartner] = useState(null);

  const togglePartner = (partnerName) => {
    if (openPartner === partnerName) {
      setOpenPartner(null);
    } else {
      setOpenPartner(partnerName);
    }
  };

  const partnersData = [
    {
      name: "Oxfam",
      description: "A global nonprofit focused on poverty alleviation, inequality, and humanitarian response.",
      withAasu: "Partners on youth advocacy, inequality campaigns, and student-led social justice initiatives.",
      link: "https://www.oxfam.org"
    },
    {
      name: "African Union",
      description: "A continental body promoting unity, development, and integration across Africa.",
      withAasu: "Engages student voices in policy dialogues, youth development, and Agenda 2063 initiatives.",
      link: "https://au.int"
    },
    {
      name: "Organisation of Southern Cooperation",
      description: "A platform advancing collaboration among Global South countries.",
      withAasu: "Supports South–South cooperation, youth leadership, and academic exchange.",
      link: "https://osc.ngo"
    },
    {
      name: "Natural Justice",
      description: "Focuses on environmental and community rights, especially in Africa.",
      withAasu: "Works on climate justice awareness and student engagement in environmental governance.",
      link: "https://naturaljustice.org"
    },
    {
      name: "Bologna Follow-Up Group",
      description: "Oversees the European Higher Education Area (EHEA) reforms.",
      withAasu: "Collaborates on higher education policy dialogue and student mobility frameworks.",
      link: "https://www.ehea.info"
    },
    {
      name: "Global Student Forum",
      description: "A global umbrella body for democratic student unions representing millions of students.",
      withAasu: "Strategic partner amplifying African student voices globally.",
      link: "https://globalstudentforum.org"
    },
    {
      name: "100 Million Campaign",
      description: "Advocates for the rights of marginalized children and youth worldwide.",
      withAasu: "Mobilizes African students for advocacy and grassroots campaigns.",
      link: "https://100million.org"
    },
    {
      name: "Open Society Initiative for Southern Africa",
      description: "Supports democracy, governance, and human rights in Southern Africa.",
      withAasu: "Funds and supports student-led civic engagement initiatives.",
      link: "https://osisa.org"
    },
    {
      name: "National Union of Ghana Students",
      description: "The main student representative body in Ghana.",
      withAasu: "National member organization contributing to continental student representation.",
      link: "https://nugs.org.gh"
    },
    {
      name: "Ministry of Foreign Affairs - The Republic of Ghana",
      description: "Handles Ghana’s diplomacy and international relations.",
      withAasu: "Supports student diplomacy, visas, and international engagements.",
      link: "https://mfa.gov.gh"
    },
    {
      name: "ActionAid",
      description: "Works on human rights, poverty, and social justice.",
      withAasu: "Collaborates on youth activism and policy advocacy campaigns.",
      link: "https://www.actionaid.org"
    },
    {
      name: "Danske Studerendes Fællesråd",
      description: "Denmark’s national student union.",
      withAasu: "Engages in North–South student solidarity and exchange programs.",
      link: "https://dsfnet.dk"
    },
    {
      name: "Amnesty International",
      description: "Global movement advocating for human rights.",
      withAasu: "Partners on student human rights campaigns and awareness.",
      link: "https://www.amnesty.org"
    },
    {
      name: "Anijie Global Foundation",
      description: "Focuses on youth empowerment and development initiatives.",
      withAasu: "Supports student leadership and capacity-building programs.",
      link: null
    },
    {
      name: "British Council",
      description: "Promotes education, culture, and international opportunities.",
      withAasu: "Supports scholarships, exchanges, and student capacity development.",
      link: "https://www.britishcouncil.org"
    },
    {
      name: "University of Professional Studies, Accra",
      description: "A public university in Ghana focused on professional education.",
      withAasu: "Institutional partner for student programs, research, and events.",
      link: "https://upsa.edu.gh"
    },
    {
      name: "UNESCO",
      description: "Promotes education, science, and culture globally.",
      withAasu: "Collaborates on education policy, youth inclusion, and SDGs.",
      link: "https://www.unesco.org"
    },
    {
      name: "European Students' Union",
      description: "Represents students across Europe.",
      withAasu: "Works on global student advocacy and higher education reforms.",
      link: "https://esu-online.org"
    },
    {
      name: "Students Organizing for Sustainability International",
      description: "Global student network for sustainability advocacy.",
      withAasu: "Supports African student climate action initiatives.",
      link: "https://sosi.world"
    },
    {
      name: "United Nations Environment Programme",
      description: "Leads global environmental efforts within the UN system.",
      withAasu: "Engages students in environmental awareness and policy advocacy.",
      link: "https://www.unep.org"
    },
    {
      name: "Equip Ghana Beyond Success",
      description: "Focuses on youth empowerment and skills development in Ghana.",
      withAasu: "Collaborates on leadership training and student development programs.",
      link: null
    },
    {
      name: "International Labour Organization",
      description: "UN agency promoting decent work and labor rights.",
      withAasu: "Works on youth employment and student transition to work programs.",
      link: "https://www.ilo.org"
    },
    {
      name: "UNHCR",
      description: "Protects refugees and displaced persons globally.",
      withAasu: "Supports inclusion of refugee students in education systems.",
      link: "https://www.unhcr.org"
    },
    {
      name: "UNICEF",
      description: "Advocates for children’s rights and wellbeing.",
      withAasu: "Collaborates on youth education and student welfare initiatives.",
      link: "https://www.unicef.org"
    },
    {
      name: "Africa's Campus Battle",
      description: "A youth-focused competition and engagement platform across African campuses.",
      withAasu: "Engages students in leadership, innovation, and advocacy activities.",
      link: null
    },
    {
      name: "Kofi Annan International Peacekeeping Training Centre",
      description: "Provides training and research on peace and security.",
      withAasu: "Supports student education on peacebuilding and security studies.",
      link: "https://www.kaiptc.org"
    },
    {
      name: "Pan African Youth Union",
      description: "Represents youth organizations across Africa.",
      withAasu: "Works closely on youth policy advocacy and continental representation.",
      link: "https://payu.org"
    },
    {
      name: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
      description: "German agency for international development cooperation.",
      withAasu: "Funds and supports youth empowerment and education projects.",
      link: "https://www.giz.de"
    },
    {
      name: "Africa Center for Strategic Studies",
      description: "Promotes security studies and leadership in Africa.",
      withAasu: "Engages students in governance and security discourse.",
      link: "https://africacenter.org"
    },
    {
      name: "European Union",
      description: "Political and economic union of European countries.",
      withAasu: "Supports education funding, exchanges, and youth policy programs.",
      link: "https://europa.eu"
    },
    {
      name: "Forum for African Women Educationalists",
      description: "Promotes girls’ and women’s education in Africa.",
      withAasu: "Works on gender equity and inclusion in student leadership.",
      link: "https://fawe.org"
    },
    {
      name: "Globe Educational Center",
      description: "Provides educational support and development programs.",
      withAasu: "Collaborates on training and student capacity building.",
      link: null
    },
    {
      name: "Open Society Foundations",
      description: "Funds initiatives promoting democracy, rights, and education.",
      withAasu: "Supports student-led advocacy and governance programs.",
      link: "https://www.opensocietyfoundations.org"
    },
    {
      name: "Scholars at Risk Network",
      description: "Protects academic freedom and threatened scholars.",
      withAasu: "Supports student rights and academic freedom advocacy.",
      link: "https://www.scholarsatrisk.org"
    },
    {
      name: "International Association of Universities",
      description: "Global association of higher education institutions.",
      withAasu: "Collaborates on higher education policy and student engagement.",
      link: "https://www.iau-aiu.net"
    },
    {
      name: "Global Campaign for Education",
      description: "Advocates for education as a basic human right.",
      withAasu: "Joint campaigns for inclusive and equitable education.",
      link: "https://campaignforeducation.org"
    },
    {
      name: "Magna Charta Universitatum Observatory",
      description: "Promotes academic freedom and institutional autonomy.",
      withAasu: "Supports student engagement in university governance discussions.",
      link: "https://www.magna-charta.org"
    },
    {
      name: "Education International",
      description: "Global federation of teachers’ unions.",
      withAasu: "Collaborates on education policy and student-teacher solidarity.",
      link: "https://www.ei-ie.org"
    }
  ];

  return (
    <div className="partners-page">
      {/* Page Header Image */}
      <section className="partners-hero">
      </section>

      {/* Intro Section */}
      <section className="partners-intro">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Partners
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="partners-subtitle"
          >
            AASU is a collaborative organisation working with a wide variety of governmental and non-governmental organisations in Africa and beyond. On this page, you will find information and links to the partners of AASU.
          </motion.p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="partners-list-section">
        <div className="container">
          <div className="accordion-wrapper">
            {partnersData.map((partner, idx) => {
              const isOpen = openPartner === partner.name;

              return (
                <div className="accordion-item" key={idx}>
                  <button 
                    className={`accordion-header ${isOpen ? 'active' : ''}`}
                    onClick={() => togglePartner(partner.name)}
                  >
                    <span>{partner.name}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        className="accordion-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="content-inner">
                          <div className="description-container">
                            <p className="description">{partner.description}</p>
                            <p className="description highlight">
                              <strong>With AASU:</strong> {partner.withAasu}
                            </p>
                            
                            {partner.link && (
                              <a href={partner.link} target="_blank" rel="noreferrer" className="partner-link">
                                <LinkIcon size={16} /> Visit Partner Website
                              </a>
                            )}
                          </div>
                          
                          {partner.name === 'Global Student Forum' && (
                            <div className="partner-logo-box">
                              {/* Conceptual mockup replacing the missing image */}
                              <div className="mock-gsf-logo">
                                <span className="gsf-text-1">GLOBAL</span><br />
                                <span className="gsf-text-2">STUDENT</span><br />
                                <span className="gsf-text-3">FORUM</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .partners-page {
          background-color: #fcfcfc;
        }

        .partners-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/history-bg.png') center/cover no-repeat;
          height: 550px;
          border-bottom: 5px solid var(--primary-red);
        }

        .partners-intro {
          text-align: center;
          padding: 80px 0 40px;
          background: #fff;
        }

        .partners-intro h1 {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 1.5rem;
        }

        .partners-subtitle {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .partners-list-section {
          padding: 40px 0 100px;
          background: #fff;
        }

        .accordion-wrapper {
          max-width: 900px;
          margin: 0 auto;
          border-top: 1px solid #e0e0e0;
        }

        .accordion-item {
          border-bottom: 1px solid #e0e0e0;
        }

        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          border: none;
          padding: 1.5rem 0;
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-red);
          cursor: pointer;
          text-align: left;
          transition: color 0.2s;
        }

        .accordion-header:hover {
          color: #a0201c;
        }

        .accordion-header.active {
          color: #a0201c;
        }

        .accordion-content {
          overflow: hidden;
        }

        .content-inner {
          padding: 0 0 2rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .description-container {
          flex: 1;
        }

        .description {
          color: #555;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 0.8rem;
        }

        .description.highlight {
          background: #f8f9fa;
          padding: 1rem;
          border-left: 3px solid var(--primary-red);
          border-radius: 0 4px 4px 0;
        }

        .partner-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
          color: var(--primary-red);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .partner-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .partner-logo-box {
          flex: 0 0 200px;
          display: flex;
          justify-content: flex-end;
        }

        .mock-gsf-logo {
          font-family: Impact, sans-serif;
          transform: rotate(-10deg);
          line-height: 1;
          text-align: left;
        }

        .mock-gsf-logo .gsf-text-1 {
          color: #3b2b68;
          font-size: 1.8rem;
        }
        .mock-gsf-logo .gsf-text-2 {
          color: #d12e3e;
          font-size: 1.5rem;
        }
        .mock-gsf-logo .gsf-text-3 {
          color: #4b8b3b;
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .partners-hero {
            height: 300px;
          }
          .partners-intro h1 {
            font-size: 2.5rem;
          }
          .content-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .partner-logo-box {
            justify-content: flex-start;
            margin-top: 1rem;
          }
        }
      `}} />
    </div>
  );
};

export default PartnersPage;
