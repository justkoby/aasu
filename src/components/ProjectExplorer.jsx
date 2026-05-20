import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Download, 
  ExternalLink, 
  ChevronRight,
  BookOpen,
  PieChart,
  Target,
  Globe,
  Rocket
} from 'lucide-react';
import { priorityProjects } from '../data/programsData';

const ProjectExplorer = ({ hideTabs = false, pillarIndex = 0 }) => {
  const [activePillarState, setActivePillarState] = useState(pillarIndex);
  const [activeProject, setActiveProject] = useState(0);
  const detailRef = useRef(null);

  // Sync with pillarIndex prop if it changes
  useEffect(() => {
    setActivePillarState(pillarIndex);
    setActiveProject(0); // Reset project when pillar index prop changes
  }, [pillarIndex]);

  // Reset active project when internal pillar state changes (from tabs)
  useEffect(() => {
    setActiveProject(0);
  }, [activePillarState]);

  // Use prop if tabs are hidden (forced view), otherwise use local state
  const activePillar = hideTabs ? pillarIndex : activePillarState;
  
  const currentPillar = priorityProjects[activePillar] || priorityProjects[0];
  const currentProject = currentPillar?.projects[activeProject] || currentPillar?.projects[0];

  if (!currentPillar || !currentProject) {
    console.error("ProjectExplorer: Missing data for pillar", activePillar);
    return null;
  }

  return (
    <section className="project-explorer-section" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
      <div className="container">
        <div className="section-header centered" style={{ marginBottom: '4rem' }}>
          <span className="section-tag" style={{ color: '#cb3631', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Interactive Explorer</span>
          <h2 className="section-title" style={{ fontSize: '3rem', fontWeight: 900, color: '#111', marginTop: '1rem' }}>Projects by Priority</h2>
        </div>

        {/* Pillar Navigation (Tabs) - Conditional */}
        {!hideTabs && (
          <div className="pillar-tabs-container" style={{ 
            display: 'flex', 
            gap: '1rem', 
            overflowX: 'auto', 
            paddingBottom: '2rem',
            marginBottom: '3rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            borderBottom: '1px solid #eee'
          }}>
            {priorityProjects.map((pillar, idx) => (
              <button
                key={pillar.area}
                onClick={() => setActivePillarState(idx)}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  backgroundColor: activePillar === idx ? pillar.color : '#f5f5f5',
                  color: activePillar === idx ? '#fff' : '#555',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: activePillar === idx ? `0 10px 20px ${pillar.color}33` : 'none',
                  transform: activePillar === idx ? 'translateY(-2px)' : 'none'
                }}
              >
                {pillar.area.split(' & ')[0]}
              </button>
            ))}
          </div>
        )}

        {/* Explorer Body */}
        <div className="explorer-body" style={{ 
          display: 'grid', 
          gridTemplateColumns: '380px 1fr', 
          gap: '4rem',
          minHeight: '600px',
          alignItems: 'start'
        }}>
          
          {/* Left Panel: Project List */}
          <div className="project-list-panel" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem',
            position: 'sticky',
            top: '120px'
          }}>
            <h5 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              color: '#999', 
              fontWeight: 800,
              marginBottom: '1.5rem',
              paddingLeft: '1rem'
            }}>Projects</h5>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                {currentPillar.projects.map((project, idx) => (
                  <motion.div
                    key={project.name}
                    onClick={() => setActiveProject(idx)}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: activeProject === idx ? currentPillar.color : '#f0f0f0',
                      backgroundColor: activeProject === idx ? `${currentPillar.color}08` : 'transparent',
                      transition: 'all 0.3s ease',
                      marginBottom: '1rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    whileHover={{ scale: 1.02, backgroundColor: '#f9f9f9' }}
                  >
                    {activeProject === idx && (
                      <motion.div 
                        layoutId="active-indicator"
                        style={{ 
                          position: 'absolute', 
                          left: 0, 
                          top: 0, 
                          bottom: 0, 
                          width: '4px', 
                          backgroundColor: currentPillar.color 
                        }} 
                      />
                    )}
                    <h4 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 800, 
                      color: activeProject === idx ? currentPillar.color : '#333',
                      marginBottom: '0.5rem'
                    }}>
                      {project.name}
                    </h4>
                    <p style={{ 
                      fontSize: '0.9rem', 
                      color: '#666', 
                      lineHeight: '1.4',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {project.desc}
                    </p>
                    <div style={{ 
                      marginTop: '1rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: activeProject === idx ? currentPillar.color : '#999',
                      opacity: activeProject === idx ? 1 : 0
                    }}>
                      View Details <ChevronRight size={14} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Panel: Detail View */}
          <div className="project-detail-panel" ref={detailRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activePillar}-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: '#fdfdfd',
                  borderRadius: '40px',
                  padding: '4rem',
                  border: '1px solid #eee',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '50px', 
                      backgroundColor: `${currentPillar.color}15`,
                      color: currentPillar.color,
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '1.5rem'
                    }}>
                      <Globe size={14} /> {currentPillar.area}
                    </div>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111', lineHeight: '1.2' }}>{currentProject.name}</h3>
                  </div>
                </div>

                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '3rem' }}>
                  {currentProject.overview || `${currentProject.desc} The ${currentProject.name} is a strategic initiative within the ${currentPillar.area} pillar, designed to address critical challenges and empower African students through targeted research, advocacy, and collaborative action.`}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                  <div className="info-box" style={{ padding: '2rem', borderRadius: '25px', backgroundColor: '#fff', border: '1px solid #f0f0f0' }}>
                    <Target style={{ color: currentPillar.color, marginBottom: '1rem' }} />
                    <h5 style={{ fontWeight: 800, color: '#111', marginBottom: '0.5rem' }}>Core Focus</h5>
                    {currentProject.focus ? (
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: '#666' }}>
                        {currentProject.focus.map((f, i) => (
                          <li key={i} style={{ marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: currentPillar.color }}></div>
                            {f}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>Implementation and scaling across regional clusters.</p>
                    )}
                  </div>
                  <div className="info-box" style={{ padding: '2rem', borderRadius: '25px', backgroundColor: '#fff', border: '1px solid #f0f0f0' }}>
                    <PieChart style={{ color: currentPillar.color, marginBottom: '1rem' }} />
                    <h5 style={{ fontWeight: 800, color: '#111', marginBottom: '0.5rem' }}>Impact</h5>
                    <p style={{ fontSize: '0.95rem', color: '#666', margin: 0 }}>
                      {currentProject.impact || "Measurable improvement in student participation metrics."}
                    </p>
                  </div>
                </div>

                {currentProject.activities && (
                  <div style={{ marginBottom: '4rem' }}>
                    <h4 style={{ fontWeight: 900, color: '#111', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Rocket size={20} style={{ color: currentPillar.color }} /> Key Activities
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {currentProject.activities.map((act, i) => (
                        <div key={i} style={{ 
                          padding: '0.8rem 1.5rem', 
                          backgroundColor: '#f5f5f5', 
                          borderRadius: '12px', 
                          fontSize: '0.9rem', 
                          fontWeight: 600, 
                          color: '#444' 
                        }}>
                          {act}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentProject.whyItMatters && (
                  <div style={{ 
                    padding: '2rem', 
                    borderRadius: '25px', 
                    backgroundColor: `${currentPillar.color}05`, 
                    borderLeft: `4px solid ${currentPillar.color}`,
                    marginBottom: '4rem'
                  }}>
                    <h5 style={{ fontWeight: 800, color: currentPillar.color, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       Why It Matters
                    </h5>
                    <p style={{ fontSize: '1.05rem', color: '#333', fontStyle: 'italic', margin: 0 }}>
                      "{currentProject.whyItMatters}"
                    </p>
                  </div>
                )}

                {/* Downloads Section */}
                <div className="downloads-section" style={{ borderTop: '1px solid #eee', paddingTop: '3rem' }}>
                  <h4 style={{ fontWeight: 900, color: '#111', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BookOpen size={20} /> Resources & Documents
                  </h4>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a 
                      href="/ASGI CONCEPT NOTE.pdf" 
                      download 
                      target="_blank" 
                      className="download-btn" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        padding: '1.2rem 2rem', 
                        borderRadius: '15px', 
                        backgroundColor: '#fff', 
                        border: '2px solid #eee',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ backgroundColor: '#fdebeb', color: '#cb3631', padding: '0.75rem', borderRadius: '10px' }}>
                        <FileText size={24} />
                      </div>
                      <div style={{ textAlign: 'left' }}>
                        <span style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#111' }}>Concept Note</span>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#888' }}>PDF • 2.4 MB</span>
                      </div>
                      <Download size={18} style={{ color: '#ccc', marginLeft: '1rem' }} />
                    </a>

                    <a 
                      href="/impact report - 2025.pdf" 
                      download 
                      target="_blank"
                      className="download-btn" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        padding: '1.2rem 2rem', 
                        borderRadius: '15px', 
                        backgroundColor: '#fff', 
                        border: '2px solid #eee',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ backgroundColor: '#eef6ff', color: '#2563eb', padding: '0.75rem', borderRadius: '10px' }}>
                        <PieChart size={24} />
                      </div>
                      <div style={{ textAlign: 'left' }}>
                        <span style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#111' }}>Impact Report</span>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#888' }}>PDF • 5.1 MB</span>
                      </div>
                      <Download size={18} style={{ color: '#ccc', marginLeft: '1rem' }} />
                    </a>

                    <a 
                      href="/AASU 2025 report.pdf" 
                      download 
                      target="_blank"
                      className="download-btn" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        padding: '1.2rem 2rem', 
                        borderRadius: '15px', 
                        backgroundColor: '#fff', 
                        border: '2px solid #eee',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <div style={{ backgroundColor: '#f0fdf4', color: '#16a34a', padding: '0.75rem', borderRadius: '10px' }}>
                        <FileText size={24} />
                      </div>
                      <div style={{ textAlign: 'left' }}>
                        <span style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: '#111' }}>Annual Report 2025</span>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#888' }}>PDF • 9.4 MB</span>
                      </div>
                      <Download size={18} style={{ color: '#ccc', marginLeft: '1rem' }} />
                    </a>
                  </div>
                </div>

                <div style={{ marginTop: '4rem' }}>
                   <a href="/contact" style={{ 
                     display: 'inline-flex', 
                     alignItems: 'center', 
                     gap: '1rem', 
                     padding: '1.2rem 2.5rem', 
                     borderRadius: '50px', 
                     backgroundColor: '#111', 
                     color: '#fff', 
                     textDecoration: 'none', 
                     fontWeight: 800,
                     fontSize: '1rem'
                   }}>
                     Get Involved in this Project <ExternalLink size={18} />
                   </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .pillar-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .download-btn:hover {
          border-color: #cb3631 !important;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(203, 54, 49, 0.1);
        }
        .download-btn:hover div:last-child {
          color: #cb3631 !important;
        }
        @media (max-width: 1024px) {
          .explorer-body {
            grid-template-columns: 1fr !important;
          }
          .project-list-panel {
            position: relative;
            top: 0;
            order: 1;
            margin-bottom: 3rem;
          }
          .project-detail-panel {
            order: 2;
          }
          .project-detail-panel > div {
            padding: 2rem !important;
          }
          .section-title {
            font-size: 2.2rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default ProjectExplorer;
