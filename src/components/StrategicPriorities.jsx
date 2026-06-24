
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Heart, Landmark, Cpu, 
  Plane, Leaf, Palette, ArrowRight 
} from 'lucide-react';

const priorities = [
  {
    title: "Education & Students' Rights",
    icon: <BookOpen />,
    color: "#E53935",
    path: "/priority/education",
    desc: "Under this priority, AASU advances the right of every African student - from basic to higher education - to access quality, relevant, inclusive, and future-ready education systems."
  },
  {
    title: "Gender Equity & Social Inclusion",
    icon: <Heart />,
    color: "#FB8C00",
    path: "/priority/gender",
    desc: "Under this priority, AASU works to advance the rights, dignity, and full participation of women, girls, and marginalised student populations across Africa."
  },
  {
    title: "Democracy, Good Governance, Peace & Security",
    icon: <Landmark />,
    color: "#C9A227",
    path: "/priority/democracy",
    desc: "Through this priority, the Union strengthens student participation in democratic governance, civic engagement, and peace-building processes at institutional, national, and continental levels."
  },
  {
    title: "Capacity Building, Skills Development & Employability",
    icon: <Cpu />,
    color: "#1E88E5",
    path: "/priority/capacity",
    desc: "This priority focuses on equipping African students with the leadership, technical, digital, and soft skills required to navigate a rapidly changing global landscape."
  },
  {
    title: "Migration, Mobility & Exchanges",
    icon: <Plane />,
    color: "#8E24AA",
    path: "/priority/migration",
    desc: "Under this priority, AASU works to expand equitable, safe, and accessible pathways for African students to study, train, and collaborate across borders."
  },
  {
    title: "Climate Action & Environmental Sustainability",
    icon: <Leaf />,
    color: "#2E7D32",
    path: "/priority/climate",
    desc: "Through this priority, AASU promotes youth-led climate action, environmental education, and sustainability practices across educational institutions and communities."
  },
  {
    title: "Pan-Africanism & African Culture",
    icon: <Palette />,
    color: "#121212",
    path: "/priority/culture",
    desc: "Under this priority, the Union promotes African unity, shared identity, cultural expression, and historical consciousness among students across the continent and the diaspora."
  }
];

const StrategicPriorities = () => {
  return (
    <section className="priorities-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-tag">AASU Strategy</span>
          <h2 className="section-title">Strategic Priorities</h2>
          <p className="section-subtitle">Our core areas of impact aligned with UN SDGs and AU Agenda 2063</p>
        </div>

        <div className="priorities-grid">
          {priorities.map((item, idx) => (
            <motion.div 
              key={idx}
              className="priority-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="card-top" style={{ backgroundColor: `${item.color}08` }}>
                <div className="icon-box" style={{ backgroundColor: item.color }}>
                  {React.cloneElement(item.icon, { size: 24, color: 'white' })}
                </div>
              </div>
              <div className="card-body">
                <h3 className="priority-title">{item.title}</h3>
                <p className="priority-desc">{item.desc}</p>
                <Link to={item.path} className="explore-btn" style={{ color: item.color }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-all-box">
          <Link to="/programs" className="view-all-btn">
            Explore All Programs & Projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .priorities-section {
          padding: 100px 0;
          background: #fdfdfd;
          border-top: 1px solid #f0f0f0;
        }

        .section-header-centered {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }

        .section-tag {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: var(--primary-red-light);
          color: var(--primary-red);
          border-radius: 50px;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-family: var(--font-headings);
          font-size: 3rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 1.5rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
        }

        .priorities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .priority-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border: 1px solid #f0f0f0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .priority-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #eee;
        }

        .card-top {
          padding: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon-box {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .card-body {
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .priority-title {
          font-family: var(--font-headings);
          font-size: 1.25rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .priority-desc {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .explore-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.9rem;
          text-transform: uppercase;
          transition: gap 0.3s;
        }

        .explore-btn:hover {
          gap: 0.8rem;
        }

        .view-all-box {
          margin-top: 5rem;
          text-align: center;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 2.5rem;
          background: #111;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 800;
          transition: all 0.3s;
        }

        .view-all-btn:hover {
          background: var(--primary-red);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.2rem; }
          .priorities-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default StrategicPriorities;
