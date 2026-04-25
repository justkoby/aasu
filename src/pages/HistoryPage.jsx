import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HistoryPage = () => {
  // Ensure the page scrolls to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const historyData = [
    {
      year: "1972",
      title: "Founding and First Congress – Kumasi, Ghana",
      content: "The first Congress of the All-Africa Students Union (AASU) was held in 1972 at the University of Science and Technology (UST), now known as Kwame Nkrumah University of Science and Technology (KNUST), in Kumasi, Ghana. Despite facing significant communication, transportation, and financial challenges, representatives from fewer than ten countries attended this constitutive meeting, marking the birth of AASU."
    },
    {
      year: "1973 - 1976",
      title: "Expansion and Early Congresses",
      content: "AASU held its second congress the following year in Dar es Salaam, Tanzania, with increasing participation from more African nations. The third congress took place in Alexandria, Egypt. By the fourth congress, held in Accra, Ghana, AASU had expanded significantly, with most National Students' Organizations and Students’ Sections of National Liberation Movements, such as the African National Congress (ANC) of South Africa and the South West African People’s Organization (SWAPO), joining the union."
    },
    {
      year: "1982",
      title: "African Students' Day and Sixth Congress",
      content: "At the sixth congress in Addis Ababa, Ethiopia in 1982, AASU made a historic decision to declare June 16 as African Students' Day. This decision was made in honor of the pupils who were massacred, maimed, and displaced during the 1976 Soweto Uprising in South Africa under the oppressive apartheid regime. The day also stands as a tribute to all African students who have been victims of violence and intolerance."
    },
    {
      year: "1987 - 1992",
      title: "Consolidation and Further Growth",
      content: "AASU’s influence continued to grow as the seventh congress took place in Luanda, Angola in 1987. The Union returned to Accra in 1992 for its eighth congress, solidifying its leadership role in student movements across Africa."
    },
    {
      year: "2000+",
      title: "Challenges and Reorganization",
      content: "The ninth congress was held in Tripoli, Libya in 2000. During this period, the Union experienced internal challenges and disputes within its secretariat. After several attempts to convene, the tenth congress was finally held in Accra, Ghana, marking a pivotal moment of reorganization and unity."
    }
  ];

  return (
    <div className="history-page">
      {/* Page Header */}
      {/* Page Header Image */}
      <section className="history-hero">
      </section>

      {/* Main Content */}
      <section className="timeline-section">
        <div className="container">
          
          <div className="history-intro">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              History of AASU
            </motion.h1>
            <motion.p 
              className="history-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Historical Milestones of the All-Africa Students Union
            </motion.p>
          </div>

          <div className="timeline-container">
            {historyData.map((item, index) => (
              <motion.div 
                className="timeline-item" 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-text">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div 
            className="history-conclusion"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              From its humble beginnings in 1972, AASU has grown into a significant force on the African continent, representing the voice of students in their quest for equal rights, quality education, and democratic governance. The congresses held over the years serve as milestones in the Union’s ongoing fight for social justice, freedom, and equality for all African students.
              <br /><br />
              <strong>Advocating for quality education, students’ rights, democratic governance, cultural promotion, sustainable development, academic freedom, and peace, while fostering pan-African unity and empowerment.</strong>
            </p>
          </motion.div>

        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .history-page {
          background-color: #f8f9fa;
        }

        .history-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/history-bg.png') center/cover no-repeat;
          height: 550px;
          border-bottom: 5px solid var(--primary-red);
        }

        .timeline-section {
          padding: 80px 0 120px;
        }

        .history-intro {
          text-align: center;
          margin-bottom: 80px;
          color: #111;
        }

        .history-intro h1 {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .history-intro .history-subtitle {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 30px;
          border-left: 3px solid rgba(203, 54, 49, 0.2); /* Faded red line */
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 40px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        /* The Dot */
        .timeline-marker {
          position: absolute;
          left: -40px;
          top: 0;
          width: 18px;
          height: 18px;
          background: white;
          border: 4px solid var(--primary-red);
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(203,54,49,0.1);
        }

        .timeline-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .timeline-year {
          display: inline-block;
          background: var(--primary-red);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-weight: 800;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .timeline-title {
          font-family: var(--font-headings);
          font-size: 1.3rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .timeline-text {
          color: #666;
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }

        .history-conclusion {
          max-width: 900px;
          margin: 80px auto 0;
          background: white;
          padding: 3rem;
          border-radius: 12px;
          border-top: 4px solid var(--primary-red);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          text-align: center;
        }

        .history-conclusion p {
          color: #444;
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0;
        }

        .history-conclusion p strong {
          color: #111;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .history-hero {
            height: 300px;
          }
          .history-intro h1 {
            font-size: 2.5rem;
          }
          .timeline-container {
            padding-left: 20px;
          }
          .timeline-marker {
            left: -28px;
            width: 14px;
            height: 14px;
            border-width: 3px;
          }
          .timeline-item {
            padding-left: 20px;
          }
          .timeline-content {
            padding: 1.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default HistoryPage;
