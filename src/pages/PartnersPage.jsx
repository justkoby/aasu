import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Link as LinkIcon } from 'lucide-react';
import SEO from '../components/SEO';

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

  const partnersByCategory = [
    {
      category: "Strategic Partners",
      description: "AASU maintains high-level consultative and strategic relationships with continental and global intergovernmental bodies to influence policy and represent African students.",
      partners: [
        {
          name: "African Union (AU)",
          description: "The primary continental body for Africa's integration and development.",
          withAasu: "AASU serves as a key youth stakeholder, contributing to Agenda 2063 and the AU's educational and youth development frameworks.",
          link: "https://au.int"
        },
        {
          name: "African Union Commission (AUC)",
          description: "The executive arm of the African Union responsible for implementing policies.",
          withAasu: "Collaborates on the Continental Education Strategy for Africa (CESA) and youth mobility initiatives.",
          link: "https://au.int"
        },
        {
          name: "UNESCO",
          description: "United Nations Educational, Scientific and Cultural Organization.",
          withAasu: "Strategic collaboration on Education 2030, Global Convention on Recognition of Qualifications, and youth inclusion in science and culture.",
          link: "https://www.unesco.org"
        },
        {
          name: "ECOWAS",
          description: "Economic Community of West African States.",
          withAasu: "Partners on regional educational integration, student rights advocacy, and peacebuilding in West Africa.",
          link: "https://ecowas.int"
        },
        {
          name: "SADC",
          description: "Southern African Development Community.",
          withAasu: "Engages in regional policy dialogues on student mobility and harmonisation of qualifications in Southern Africa.",
          link: "https://www.sadc.int"
        },
        {
          name: "Global Student Forum (GSF)",
          description: "The worldwide umbrella body for democratic student unions.",
          withAasu: "AASU is a founding member, coordinating global advocacy for student rights and education funding.",
          link: "https://globalstudentforum.org"
        },
        {
          name: "European Union (EU)",
          description: "Political and economic union of European countries.",
          withAasu: "Supports education funding, Africa-EU student exchanges, and youth policy development programs.",
          link: "https://europa.eu"
        },
        {
          name: "Ministry of Foreign Affairs - Republic of Ghana",
          description: "Ghana’s principal diplomatic body.",
          withAasu: "Supports student diplomacy, international mobility coordination, and diplomatic protocol for continental events.",
          link: "https://mfa.gov.gh"
        },
        {
          name: "Organisation of Southern Cooperation (OSC)",
          description: "Intergovernmental organization advancing South-South cooperation.",
          withAasu: "Supports South–South student mobility, research collaboration, and balanced education systems.",
          link: "https://osc.ngo"
        }
      ]
    },
    {
      category: "Academic & Education Partners",
      description: "Our academic network includes leading universities and education quality agencies focused on excellence, mobility, and academic freedom.",
      partners: [
        {
          name: "Association of African Universities (AAU)",
          description: "The voice of higher education in Africa.",
          withAasu: "Collaborates on the Quality Assurance Ambassadors Project and student-led case studies for intra-Africa mobility.",
          link: "https://www.aau.org"
        },
        {
          name: "University at Buffalo (UB)",
          description: "A premier public research university in the United States.",
          withAasu: "Partners on graduate information sessions, academic exchanges, and leadership development for African students.",
          link: "https://www.buffalo.edu"
        },
        {
          name: "University of Warwick",
          description: "A top-tier global university based in the UK.",
          withAasu: "Collaborates on research, leadership training, and student mobility initiatives.",
          link: "https://warwick.ac.uk"
        },
        {
          name: "University of Professional Studies, Accra (UPSA)",
          description: "A leading public university in Ghana.",
          withAasu: "Host institution for major strategic meetings, including the NELS project and student leadership summits.",
          link: "https://upsa.edu.gh"
        },
        {
          name: "International Association of Universities (IAU)",
          description: "Global association of higher education institutions under UNESCO.",
          withAasu: "Works on global higher education policy and the inclusion of student voices in institutional governance.",
          link: "https://www.iau-aiu.net"
        },
        {
          name: "Bologna Follow-Up Group (BFUG)",
          description: "Oversees the European Higher Education Area (EHEA) reforms.",
          withAasu: "Engages in cross-continental dialogue on student-centered learning and mobility frameworks.",
          link: "https://www.ehea.info"
        },
        {
          name: "Scholars at Risk Network",
          description: "An international network protecting threatened scholars and academic freedom.",
          withAasu: "Jointly advocates for the protection of student activists and the preservation of academic freedom in Africa.",
          link: "https://www.scholarsatrisk.org"
        },
        {
          name: "Magna Charta Universitatum Observatory",
          description: "Global body promoting university values and autonomy.",
          withAasu: "Ensures students are recognized as equal partners in the governance and social responsibility of universities.",
          link: "https://www.magna-charta.org"
        },
        {
          name: "Education International (EI)",
          description: "Global federation representing teachers and education employees.",
          withAasu: "Strengthens student-teacher solidarity and advocates for quality public education as a human right.",
          link: "https://www.ei-ie.org"
        },
        {
          name: "University of Ghana (UG)",
          description: "The premier and largest university in Ghana.",
          withAasu: "Key academic partner for research, student advocacy, and hosting continental student forums.",
          link: "https://www.ug.edu.gh"
        },
        {
          name: "University of Cape Coast (UCC)",
          description: "A leading research and teaching university in Ghana.",
          withAasu: "Partners on teacher education standards and student-led academic excellence initiatives.",
          link: "https://www.ucc.edu.gh"
        },
        {
          name: "University of Education, Winneba (UEW)",
          description: "Specialized university for teacher education and professional development.",
          withAasu: "Collaborates on education policy and teacher-trainee rights advocacy.",
          link: "https://www.uew.edu.gh"
        },
        {
          name: "ACQF",
          description: "African Continental Qualifications Framework.",
          withAasu: "Strategic collaboration on harmonizing qualifications and improving student mobility across Africa.",
          link: "https://acqf.africa"
        }
      ]
    },
    {
      category: "Development & NGO Partners",
      description: "AASU partners with leading NGOs and development agencies to deliver impact on the ground across the African continent.",
      partners: [
        {
          name: "UNICEF",
          description: "United Nations Children's Fund.",
          withAasu: "Focuses on the rights of children and young people, particularly on the 'International Day of the Girl Child' campaigns.",
          link: "https://www.unicef.org"
        },
        {
          name: "UNHCR",
          description: "United Nations High Commissioner for Refugees.",
          withAasu: "Collaborates on the inclusion of refugee students in higher education and the protection of displaced youth.",
          link: "https://www.unhcr.org"
        },
        {
          name: "Oxfam",
          description: "Global movement fighting inequality to end poverty.",
          withAasu: "Partners on climate justice, youth advocacy, and campaigns against inequality across Africa.",
          link: "https://www.oxfam.org"
        },
        {
          name: "GIZ",
          description: "German Agency for International Cooperation.",
          withAasu: "Supports technical and vocational education (TVET), entrepreneurship, and youth employment projects.",
          link: "https://www.giz.de"
        },
        {
          name: "Open Society Foundations (OSF)",
          description: "International grantmaking network promoting justice and governance.",
          withAasu: "Funds student-led initiatives in democracy, civic engagement, and human rights advocacy.",
          link: "https://www.opensocietyfoundations.org"
        },
        {
          name: "ActionAid",
          description: "International NGO working for social justice and human rights.",
          withAasu: "Mobilizes youth activists for policy change and economic justice campaigns.",
          link: "https://www.actionaid.org"
        },
        {
          name: "Amnesty International",
          description: "Global movement for human rights protection.",
          withAasu: "Collaborates on student human rights training and rapid response for threatened student leaders.",
          link: "https://www.amnesty.org"
        },
        {
          name: "Forum for African Women Educationalists (FAWE)",
          description: "Pan-African NGO promoting girls' education.",
          withAasu: "Works on gender-transformative education and the empowerment of women in student leadership.",
          link: "https://fawe.org"
        },
        {
          name: "Pure Earth",
          description: "International non-profit organization dedicated to solving toxic pollution problems.",
          withAasu: "Collaborates on environmental health awareness and student-led pollution prevention campaigns.",
          link: "https://www.pureearth.org"
        },
        {
          name: "Obaasima Campaign",
          description: "Women-led initiative promoting menstrual hygiene and girl-child empowerment.",
          withAasu: "Partners on the 'Pad A Girl' campaign and sexual reproductive health education for students.",
          link: null
        }
      ]
    },
    {
      category: "Programme & Event Partners",
      description: "We work with specialized organizations to deliver world-class programs, exhibitions, and leadership initiatives.",
      partners: [
        {
          name: "Prescott Hospital, Ghana",
          description: "A leading private healthcare facility in Accra.",
          withAasu: "Medical partner for AASU events, providing health screenings and student wellness support.",
          link: null
        },
        {
          name: "Groningen Declaration Network (GDN)",
          description: "Global network for digital student data mobility.",
          withAasu: "Partners on digitalizing student credentials and simplifying international mobility for African students.",
          link: "https://www.groningendeclaration.org"
        },
        {
          name: "Global Campaign for Education (GCE)",
          description: "Civil society movement promoting the right to education.",
          withAasu: "Jointly advocates for the 'Education Must Be a Right' campaign and sustainable education funding.",
          link: "https://campaignforeducation.org"
        },
        {
          name: "British Council",
          description: "UK's international organisation for cultural relations and educational opportunities.",
          withAasu: "Collaborates on 21st-century skills training, scholarships, and student capacity development.",
          link: "https://www.britishcouncil.org"
        },
        {
          name: "Students Organizing for Sustainability International (SOS-I)",
          description: "Global student network for sustainability.",
          withAasu: "Strategic partner for the 'Greening Skills' project and continental climate action workshops.",
          link: "https://sosi.world"
        },
        {
          name: "Kofi Annan International Peacekeeping Training Centre (KAIPTC)",
          description: "Centre of excellence for peace and security training.",
          withAasu: "Partners on youth, peace, and security dialogues and student leadership in conflict resolution.",
          link: "https://www.kaiptc.org"
        },
        {
          name: "European Students' Union (ESU)",
          description: "The representative body of students in Europe.",
          withAasu: "Key partner for the NELS project and North-South student solidarity frameworks.",
          link: "https://esu-online.org"
        },
        {
          name: "Pan African Youth Union (PAYU)",
          description: "The continental body for youth organizations in Africa.",
          withAasu: "Coordinates high-level youth representation at AU and international summits.",
          link: "https://payu.org"
        }
      ]
    }
  ];

  return (
    <main className="partners-page">
      <SEO 
        title="Our Partners" 
        description="AASU collaborates with continental and global institutions, including the African Union, United Nations, and various governmental bodies to advance African education." 
      />
      <div className="spacer-header"></div>
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

      {/* Partners List by Category */}
      <section className="partners-list-section">
        <div className="container">
          {partnersByCategory.map((catGroup, groupIdx) => (
            <div key={groupIdx} className="category-group">
              <div className="category-header-box">
                <h2 className="category-title">{groupIdx + 1}. {catGroup.category}</h2>
                <p className="category-desc">{catGroup.description}</p>
              </div>

              <div className="accordion-wrapper">
                {catGroup.partners.map((partner, idx) => {
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
                                  <strong>Collaboration with AASU:</strong> {partner.withAasu}
                                </p>
                                
                                {partner.link && (
                                  <a href={partner.link} target="_blank" rel="noreferrer" className="partner-link">
                                    <LinkIcon size={16} /> Visit Website
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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

        .category-group {
          margin-bottom: 80px;
        }

        .category-header-box {
          margin-bottom: 2rem;
          border-left: 6px solid var(--primary-red);
          padding-left: 2rem;
        }

        .category-title {
          font-family: var(--font-headings);
          font-size: 2.2rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 0.5rem;
        }

        .category-desc {
          color: #666;
          font-size: 1.1rem;
          max-width: 700px;
          line-height: 1.6;
        }

        .accordion-wrapper {
          max-width: 1000px;
          border-top: 1px solid #eee;
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
    </main>
  );
};

export default PartnersPage;
