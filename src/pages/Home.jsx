import React from 'react';
import Hero from '../components/Hero';
import MembershipSection from '../components/MembershipSection';
import ReportsSection from '../components/ReportsSection';
import NewsSection from '../components/NewsSection';
import EventsSection from '../components/EventsSection';
import OpportunitiesSection from '../components/OpportunitiesSection';
import StrategicPriorities from '../components/StrategicPriorities';

const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-text">
            <h1 className="mission-title">
              Education Must Be A <span className="highlight-red">Right</span>
              <br />
              Not A Privilege
            </h1>
            
            <div className="mission-content">
              <p>
                The All-Africa Students Union (AASU) is the umbrella organisation for all African students from the basic level 
                to higher learning institutions and a very dominant force on the African Continent and beyond. 
                With over 75 Member Unions across the Continent, AASU represents over 170 million students in Africa and the diaspora.
              </p>
              <p>
                Since its inception in 1972, AASU now has a presence in 54 Countries in Africa. The Union played an important 
                role in the struggle against colonialism in Africa and the ending of apartheid in South Africa. Today, AASU 
                is at the forefront of the fights for equal access to quality education, quality assurance in higher education, 
                harmonisation of higher education systems – with key emphasis on the mobility of academics and comparability 
                of qualifications, democratic governance, defending students' rights, promotion of gender equality and African 
                culture, sustainable development, entrepreneurship, fostering of academic freedom, freedom of research and 
                autonomy of higher institutions of learning, and the promotion of peace and democratic values, and other noteworthy objectives.
              </p>
              <p>
                AASU’s core activities are focused on a broad range of issues that affect students, including but not limited to 
                the 7 Strategic Priorities of the Union – Education & Students Rights, Capacity Building, Gender Advocacy, 
                Environment & Climate Action, Pan-Africanism & African Culture, Migration & Mobility, Democracy & Good Governance. 
                Our Strategic Priorities are fully aligned to the UN development priorities as articulated in the Sustainable 
                Development Goals (SDGs). Also, these priorities complement the global efforts to build a relevant contemporary 
                human capital capable of fitting into the global citizen ecosystem.
              </p>
              <p>
                The Union is wholly student-run and student-led, autonomous, representative, and operates according to democratic principles.
              </p>
              <p>
                In the year 2000, the UN awarded AASU in recognition of the Union’s efforts at advancing students’ rights and 
                championing the democratisation of education across the African Continent. 
                (See: <a href="http://www.un.org/press/en/2000/20000410.dev2241.doc.html" target="_blank" rel="noopener noreferrer">UN Press Release</a>)
              </p>
              <p>
                AASU’s key strength lies in its diversity and numerical strength; which it employs as a bargaining tool to speak 
                for the supreme interests of students at all times. The Union is made up of diverse students, regardless of their 
                religion, gender, cultural background, political persuasion, ethnic origin or social standing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StrategicPriorities />

      <MembershipSection />
      <ReportsSection />
      <NewsSection />
      <EventsSection />
      <OpportunitiesSection />

      <style dangerouslySetInnerHTML={{ __html: `
        .mission-section {
          background: #fff;
          color: #444;
          padding: 100px 0 140px;
          text-align: center;
        }

        .mission-text {
          max-width: 900px;
          margin: 0 auto;
        }

        .mission-title {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          line-height: 1.1;
          color: #333;
          margin-bottom: 3rem;
          letter-spacing: -1px;
        }

        .highlight-red {
          color: var(--primary-red);
        }

        .mission-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          line-height: 1.8;
          font-size: 1.05rem;
          color: #666;
          text-align: left;
        }

        @media (max-width: 768px) {
          .mission-title {
            font-size: 2.2rem;
          }
        }
      `}} />
    </main>
  );
};

export default Home;
