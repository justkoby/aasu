import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { ShieldCheck, BookOpen, Users, Award, Wifi, HeartHandshake, ArrowUpRight } from 'lucide-react';
import './Home.css';

export const Home = () => {
  return (
    <main className="home-page fade-in">
      {/* Dynamic Slide Banner */}
      <HeroSlider />

      {/* Campaign Overview */}
      <section id="overview-section" className="section overview-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">CAMPAIGN OVERVIEW</span>
            <h2>Digital Rights & Accessible Education</h2>
          </div>
          
          <div className="grid-2 overview-content">
            <div className="overview-text">
              <p className="lead">
                As students, we have all experienced the devastating effects of the COVID-19 pandemic on our access to quality education. The transition from in-person teaching to online learning exposed and amplified existing socioeconomic inequalities.
              </p>
              <p>
                Students from rural areas and poor urban households who did not have access to either computers or internet (or both) were left behind. Even when access existed, the high cost of data remained largely unaffordable, creating a massive barrier to their basic right to education.
              </p>
              <p>
                To date, there have been no significant efforts by governments, development partners, internet service providers (ISPs), and mobile operators to reduce or eliminate data costs in the backdrop of online learning. Yet, ensuring sustained access to education is the moral and social responsibility of these institutions, and the fundamental right of African children and youth.
              </p>
            </div>
            
            <div className="overview-stats glass">
              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Right of the African Child</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">250+</span>
                <span className="stat-lbl">Student Leaders Trained</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">15+</span>
                <span className="stat-lbl">Zero-rated Study Portals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="section objectives-section section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-secondary">OUR MISSION</span>
            <h2>Project Objectives</h2>
            <p className="section-subtitle">
              Strengthening student leadership across Southern and Central Africa to effectively advocate for digital rights and equitable online learning.
            </p>
          </div>

          <div className="grid-3 objectives-grid">
            <div className="card objective-card">
              <div className="icon-wrapper">
                <ShieldCheck size={28} />
              </div>
              <h3>Strengthen Capacity</h3>
              <p>
                Equip student leaders in Southern and Central Africa with technical skills and resources to organize and lobby effectively.
              </p>
            </div>

            <div className="card objective-card">
              <div className="icon-wrapper">
                <BookOpen size={28} />
              </div>
              <h3>Advocate Rights</h3>
              <p>
                Campaign for the right to education and digital rights, demanding zero-rated educational websites and affordable student data packages.
              </p>
            </div>

            <div className="card objective-card">
              <div className="icon-wrapper">
                <Users size={28} />
              </div>
              <h3>Lobby Governments & ISPs</h3>
              <p>
                Apply structured advocacy pressure on ministries, internet service providers (ISPs), and mobile network operators to eliminate financial barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work & Impact section */}
      <section id="impact-section" className="section impact-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">CAMPAIGN LEGACY</span>
            <h2>Our Work & Impact (2021 - 2023)</h2>
            <p className="section-subtitle-left">
              The Digital Inclusion Campaign concluded its active phases in 2023. Through partnership with the Malawi National Students Union (MANSU) and other regional unions, we achieved significant milestones in policy influence and student capacity building.
            </p>
          </div>

          <div className="grid-3 impact-pillars-grid">
            <div className="card impact-pillar-card">
              <div className="pillar-icon-wrapper">
                <Award size={24} />
              </div>
              <h4>Policy Engagement</h4>
              <p>
                Lobbied regional education ministries to formally recognize student digital rights and propose national digital education funds.
              </p>
            </div>

            <div className="card impact-pillar-card">
              <div className="pillar-icon-wrapper">
                <Wifi size={24} />
              </div>
              <h4>Data Zero-Rating</h4>
              <p>
                Collaborated with telecommunications regulators to list and zero-rate educational domain portals across 15 higher learning institutions.
              </p>
            </div>

            <div className="card impact-pillar-card">
              <div className="pillar-icon-wrapper">
                <HeartHandshake size={24} />
              </div>
              <h4>Leadership Training</h4>
              <p>
                Conducted regional workshops, producing over 250 certified student advocates fully equipped with digital lobbying tools.
              </p>
            </div>
          </div>

          {/* Photo Showcase from Malawi folder */}
          <div className="impact-showcase-container">
            <h3>Archived Photo Showcase: Action Highlights</h3>
            <div className="impact-photo-grid">
              <div className="impact-photo-item glass">
                <img src="/2022/Malawi National Students Union/1-DIGITALINCLUSIONCAMPAIN-min.jpg" alt="Campaign Banner MANSU" />
                <div className="photo-info">
                  <h5>Campaign Mobilization Banner</h5>
                  <p>MANSU advocacy banner calling for internet subsidization.</p>
                </div>
              </div>
              <div className="impact-photo-item glass">
                <img src="/2022/Malawi National Students Union/13-min.jpg" alt="Student Leaders training session" />
                <div className="photo-info">
                  <h5>Regional Advocacy Workshop</h5>
                  <p>Student representatives during interactive training modules.</p>
                </div>
              </div>
              <div className="impact-photo-item glass">
                <img src="/2022/Malawi National Students Union/14-min.jpg" alt="National forum assembly" />
                <div className="photo-info">
                  <h5>MANSU Stakeholder Forum</h5>
                  <p>Deliberating digital rights guidelines with national authorities.</p>
                </div>
              </div>
              <div className="impact-photo-item glass">
                <img src="/2022/Malawi National Students Union/38DIGITALINCLUSIONCAMPAIN-min.jpg" alt="Public press conference" />
                <div className="photo-info">
                  <h5>Media Briefing Session</h5>
                  <p>MANSU presenting their policy declaration on digital access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section cta-section">
        <div className="container text-center cta-container glass">
          <h2>Explore The Campaign Archive</h2>
          <p>
            Review the complete collection of historical media files, advocacy photos, and archived ToRs detailing the project's milestones.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link id="home-gallery-cta-btn" to="/dicampaign/gallery" className="btn btn-secondary">
              View Photo Archive <ArrowUpRight size={18} />
            </Link>
            <Link id="home-opportunities-archive-btn" to="/dicampaign/opportunities" className="btn btn-outline">
              Archived Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
