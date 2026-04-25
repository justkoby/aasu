import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const StudentVoicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="student-voice-page">
      <section className="student-voice-hero">
        <div className="container h-full">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="voice-title"
            >
              Hear <span className="text-red">Directly</span><br/>
              From African<br/>
              Students
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="voice-subtitle"
            >
              A continental tapestry of ambition, struggle, and resilience. One union, thousands of voices, shaping the future of African education.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="cta-group"
            >
              <button className="btn-primary">
                Share your story <ChevronRight size={18} />
              </button>
              <button className="btn-secondary">
                Explore the stories
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="featured-stories">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Featured Stories: Child Labour Across Africa</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <div className="stories-grid">
            {/* Card 1: Omar */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/child labourer-omar.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <span className="story-location">🇰🇪 Nairobi, Kenya</span>
                <h3>Surviving the Slums: Omar's Plea</h3>
                <p>
                  Omar is a 16 year old child labourer in Nairobi Kenya, who is forced to do dangerous work to survive. Brewing illicit alcohol is extremely physically harmful and illegal, yet he feels he has no other choice.
                  <br/><br/>
                  Omar is calling upon the Government of Kenya to prioritize the needs of the vulnerable children and their communities so no one has to endure what he has.
                </p>
                <div className="story-meta">
                  Testimony captured by Justice for Every Child, Kenya (April 2022)
                </div>
              </div>
            </motion.div>

            {/* Card 2: Janet */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/janet.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <span className="story-location">🇱🇷 Monrovia, Liberia</span>
                <h3>From the Streets: Janet's Call for Education</h3>
                <p>
                  Janet was 7 years old when she first became a child labourer in Liberia, forced to hawk on the streets of Monrovia to support her families survival.
                  <br/><br/>
                  The rates of child labour for children aged 5-11 years old are rising at unprecedented rates and Janet calls on the Government of Liberia to end child labour and deliver the right of education for all.
                </p>
                <div className="story-meta">
                  Testimony captured by the youth-led campaign group 100 Million Liberia (May 2022)
                </div>
              </div>
            </motion.div>

            {/* Card 3: Francis */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/francis.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <span className="story-location">🇲🇼 Malawi</span>
                <h3>Exploited on the Plantations: Francis Demands Change</h3>
                <p>
                  Francis was twelve years old when he first became a child labourer. Losing his parents at a young age, he went to live with his old grandmother who could not provide his basic needs.
                  <br/><br/>
                  Working on the sugar plantations as a cutter where he faced challenges including lack of sleep and exploitation from his supervisors. Francis calls on the Government of Malawi to end child labour and ensure every child has access to education.
                </p>
                <div className="story-meta">
                  Testimony captured by the Youth Coalition for the Consolidation of Democracy - YCD (May 2022)
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Refugee Section */}
      <section className="refugee-section">
        <div className="container">
          <div className="refugee-grid">
            <motion.div 
              className="refugee-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="section-title">Commemorating #WorldRefugeeDay</h2>
              <div className="title-underline align-left"></div>
              
              <div className="refugee-text-block">
                <p>
                  As part of AASU's <strong>#WorldRefugeeDay</strong> commemoration, an interview with <strong>Ms. Andhira Kara</strong>, Lead Country Researcher - Kenya, Local Engagement Refugee Research Network, throws more light on the plights of refugees.
                </p>
                <p>
                  As a refugee herself, she calls on African governments, organizations and individuals to move from just celebrating resilience to making changes in policies to ensure the inclusion of refugees on the continent.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="refugee-video-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="video-card">
                <video controls preload="metadata">
                  <source src="/refugee interview.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pollution Section */}
      <section className="pollution-section">
        <div className="container">
          <div className="pollution-grid">
            <motion.div 
              className="pollution-video-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="video-card">
                <video controls preload="metadata">
                  <source src="/pollution.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <motion.div 
              className="pollution-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="section-title">The History of Pollution</h2>
              <div className="title-underline align-left"></div>
              
              <div className="pollution-text-block">
                <p>
                  If a story could tell the history of pollution, this is what it would look like. Join us for the <strong>Guiding Green Growth Summit</strong> happening 21st October 2023.
                </p>
                <div className="poet-credit">
                  <span className="text-red">Poet:</span> Lawrencia Awinsogya
                </div>
                
                <div className="partners-credit">
                  <strong>Thanks to all partners:</strong><br/>
                  @bisa, Strategic Youth Network for Development Ghana, Africa Global Radio, Green Africa Youth Organization, Y 107.9 FM Ghana, UNDP Africa, UN Climate Change
                </div>
                
                <div className="hashtags">
                  #stories #africa #climateaction #cop28
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Women's Day Section */}
      <section className="iwd-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">International Women’s Day</h2>
            <div className="title-underline"></div>
            <p className="iwd-intro">
              In commemoration of International Women’s Day, the All-Africa Students Union (AASU) proudly highlights the voices and journeys of the remarkable women serving within our leadership.
            </p>
          </motion.div>
          
          <div className="stories-grid">
            {/* Card 1: Boago Dodo Chingapani */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/international-womens day-meet dodo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <h3>Meet Boago Dodo Chingapani</h3>
                <p>
                  Secretary of Gender and Affirmative Action at AASU, who shares her reflections on leadership, service, and the importance of women taking up space in student governance across the continent.
                  <br/><br/>
                  Her story is a reminder that when African women lead, our institutions grow stronger and our future becomes brighter. At AASU, we remain committed to empowering young African women to lead, inspire, and shape the future of our continent.
                </p>
                <div className="hashtags small-tags">
                  #InternationalWomensDay #IWD2026 #WomenInLeadership #StudentLeadership
                </div>
              </div>
            </motion.div>

            {/* Card 2: Oumu Sall */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/international-womens day-meet Oumu Sall.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <h3>Meet Oumu Sall</h3>
                <p>
                  In this special message commemorating International Women’s Day, Oumu Sall, Executive Member, West Africa of the All-Africa Students Union (AASU), shares reflections on the importance of women’s leadership, representation, and empowerment within student movements and beyond.
                  <br/><br/>
                  Her journey is a reminder that when women lead, communities grow stronger and the future becomes brighter. Let us continue to amplify the voices of women and support the next generation of female leaders across the continent.
                </p>
                <div className="hashtags small-tags">
                  #InternationalWomensDay #IWD2026 #WomenInLeadership
                </div>
              </div>
            </motion.div>

            {/* Card 3: Habiba Mohamed */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/international-womens day-meet habiba.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <h3>Meet Habiba Mohamed</h3>
                <p>
                  In this video Habiba Mohamed Executive Committee-North Africa at the All-Africa Students Union (AASU), shares her reflections on leadership, empowerment, and the role young African women play in driving change across our campuses and communities.
                </p>
                <div className="hashtags small-tags">
                  #IWD2026 #AfricanWomenLead #StudentLeadership
                </div>
              </div>
            </motion.div>

            {/* Card 4: Rosália Djedjo */}
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
            >
              <div className="video-container">
                <video controls preload="metadata">
                  <source src="/international-womens day-meet rosalia.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="story-content">
                <h3>Meet Rosália Djedjo</h3>
                <p>
                  Vice-president for West Africa of the All-Africa Students Union (AASU). In this special message for International Women’s Day, she reflects on the journey of women in leadership and the importance of empowering the next generation of female student leaders across the continent.
                </p>
                <div className="hashtags small-tags">
                  #InternationalWomensDay #IWD2026 #WomenInLeadership
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Day of the African Child Section */}
      <section className="african-child-section">
        <div className="container">
          <div className="african-child-grid">
            <motion.div 
              className="african-child-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="section-title">Day of the African Child</h2>
              <div className="title-underline align-left"></div>
              
              <div className="african-child-text-block">
                <p>
                  To commemorate the Day of the African Child, the All-Africa Students UNION partnered with Child Rights International, Ghana, for an Education Outreach Project. The event, themed <strong>"Education for All Children in Africa: The Time is Now,"</strong> took place at the Madina Cluster of Schools.
                </p>
                <p>
                  The project aimed to highlight the importance of education for all children in Africa and to advocate for equitable access to quality education. The event featured engaging activities, educational sessions, and discussions on how to address the barriers to education faced by children across the continent. Through interactive engagements, the children were equipped with an understanding of their rights and responsibilities. 
                </p>
                <p className="gratitude-text">
                  We extend our heartfelt gratitude to all the participants, volunteers, and organizers who contributed to making this event a success. Together, we can make a difference and ensure that every child in Africa has the opportunity to receive a quality education. 
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="african-child-video-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="video-card">
                <video controls preload="metadata">
                  <source src="/commemorate the Day of the African Child.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loom CTA Section */}
      <section className="loom-cta-section">
        <div className="container">
          <div className="loom-cta-grid">
            <motion.div 
              className="loom-cta-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="cta-title">YOUR VOICE IS THE LOOM.</h2>
              <p className="cta-subtitle">
                Whether it's a poem, a photo, or a protest report —your story builds the tapestry of African student life. Don't let it go unheard.
              </p>
              
              <ul className="cta-features">
                <li><CheckCircle2 size={20} className="feature-icon" /> Authenticity Guarantee</li>
                <li><CheckCircle2 size={20} className="feature-icon" /> Direct Advocacy Reach</li>
              </ul>
            </motion.div>

            <motion.div 
              className="loom-cta-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="cta-form-card">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>FULL NAME</label>
                    <input type="text" placeholder="e.g. Kofi Mensah" />
                  </div>
                  
                  <div className="form-group">
                    <label>COUNTRY</label>
                    <div className="select-wrapper">
                      <select defaultValue="">
                        <option value="" disabled>Select Country</option>
                        <option value="ghana">Ghana</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="kenya">Kenya</option>
                        <option value="south-africa">South Africa</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>YOUR STORY / MEDIA</label>
                    <textarea placeholder="What's happening on your campus?" rows="4"></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">Submit Your Voice</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .student-voice-page {
          background-color: #fcfcfc;
          min-height: 100vh;
        }

        .student-voice-hero {
          background: linear-gradient(90deg, #020202 0%, rgba(2, 2, 2, 0.9) 35%, rgba(2, 2, 2, 0.3) 100%), url('/student-voice.jpg') center/cover no-repeat;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: 240px; 
        }

        .h-full {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
        }

        .hero-content {
          max-width: 700px;
          color: white;
          padding: 60px 0;
          text-align: left;
          margin: 0;
        }

        .voice-title {
          font-family: var(--font-headings);
          font-size: 3.75rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .text-red {
          color: var(--primary-red);
        }

        .voice-subtitle {
          font-size: 0.875rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2.5rem;
          max-width: 550px;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        .btn-primary {
          background-color: var(--primary-red);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s;
        }

        .btn-primary:hover {
          background-color: #a0201c;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid white;
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s, color 0.2s, transform 0.2s;
        }

        .btn-secondary:hover {
          background-color: white;
          color: #000;
          transform: translateY(-2px);
        }

        /* Featured Stories Styling */
        .featured-stories {
          padding: 100px 0;
          background-color: #f4f4f4;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 1rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background-color: var(--primary-red);
          margin: 0 auto;
        }

        .stories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .story-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: transform 0.3s;
          display: flex;
          flex-direction: column;
        }

        .story-card:hover {
          transform: translateY(-10px);
        }

        .video-container {
          width: 100%;
          aspect-ratio: 16/9;
          background-color: #000;
        }

        .video-container video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .story-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .story-location {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-red);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .story-content h3 {
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          color: #222;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .story-content p {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .story-meta {
          font-size: 0.85rem;
          color: #888;
          font-style: italic;
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }

        @media (max-width: 991px) {
          .voice-title {
            font-size: 4.5rem;
          }
          .student-voice-hero {
            background: linear-gradient(90deg, #020202 0%, rgba(2, 2, 2, 0.95) 50%, rgba(2, 2, 2, 0.6) 100%), url('/student-voice.jpg') center/cover no-repeat;
          }
        }

        @media (max-width: 768px) {
          .student-voice-hero {
            background: linear-gradient(180deg, rgba(2, 2, 2, 0.9) 0%, rgba(2, 2, 2, 0.95) 100%), url('/student-voice.jpg') center/cover no-repeat;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
            text-align: left;
          }
          .voice-title {
            font-size: 3.5rem;
          }
          .cta-group {
            flex-direction: column;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .section-title {
            font-size: 2rem;
          }
        }

        /* Refugee Section */
        .refugee-section {
          padding: 100px 0;
          background-color: #fff;
        }

        .refugee-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .align-left {
          margin: 0;
          margin-bottom: 2rem;
        }

        .refugee-text-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .refugee-text-block strong {
          color: var(--primary-red);
        }

        .call-to-listen {
          font-weight: 800;
          font-size: 1.25rem !important;
          color: #222 !important;
          margin-top: 2rem;
        }

        .refugee-video-wrapper .video-card {
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          aspect-ratio: 16/9;
        }

        .refugee-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 991px) {
          .refugee-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .align-left {
            margin: 0 auto 2rem;
          }
          .refugee-content {
            text-align: center;
          }
        }

        /* Pollution Section */
        .pollution-section {
          padding: 100px 0;
          background-color: #f9f9f9;
        }

        .pollution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .pollution-text-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .pollution-text-block strong {
          color: #222;
        }

        .poet-credit {
          font-weight: 700;
          font-size: 1.2rem;
          color: #111;
          margin: 1.5rem 0;
          padding-left: 1rem;
          border-left: 3px solid var(--primary-red);
        }

        .partners-credit {
          font-size: 0.9rem;
          color: #777;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: #fff;
          border: 1px solid #eaeaea;
          border-radius: 8px;
        }

        .hashtags {
          font-weight: 800;
          color: var(--primary-red);
          letter-spacing: 0.5px;
        }

        .pollution-video-wrapper .video-card {
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          aspect-ratio: 16/9;
        }

        .pollution-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 991px) {
          .pollution-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .pollution-video-wrapper {
            order: -1;
          }
          .pollution-content {
            text-align: center;
          }
          .poet-credit {
            padding-left: 0;
            border-left: none;
            border-bottom: 2px solid var(--primary-red);
            padding-bottom: 0.5rem;
            display: inline-block;
          }
        }

        /* IWD Section */
        .iwd-section {
          padding: 100px 0;
          background-color: #f4f4f4;
        }

        .iwd-intro {
          font-size: 1.15rem;
          color: #555;
          max-width: 800px;
          margin: 1.5rem auto 3rem;
          line-height: 1.8;
          text-align: center;
        }

        .small-tags {
          font-size: 0.8rem;
          margin-top: auto;
          line-height: 1.6;
        }

        /* Day of the African Child Section */
        .african-child-section {
          padding: 100px 0;
          background-color: #fff;
        }

        .african-child-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .african-child-text-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .african-child-text-block strong {
          color: #222;
        }

        .gratitude-text {
          padding: 1.5rem;
          background-color: #fcfcfc;
          border-left: 4px solid var(--primary-red);
          font-style: italic;
          border-radius: 0 8px 8px 0;
          margin-top: 2rem;
        }

        .african-child-video-wrapper .video-card {
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          aspect-ratio: 16/9;
        }

        .african-child-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 991px) {
          .african-child-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .african-child-content {
            text-align: center;
          }
          .gratitude-text {
            border-left: none;
            border-top: 4px solid var(--primary-red);
            border-radius: 8px;
          }
        }

        /* Loom CTA Section */
        .loom-cta-section {
          background-color: #111;
          color: white;
          padding: 100px 0;
        }

        .loom-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .cta-title {
          font-family: var(--font-headings);
          font-size: 3.5rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #fff;
        }

        .cta-subtitle {
          font-size: 1.15rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2.5rem;
        }

        .cta-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cta-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          font-size: 1.05rem;
          margin-bottom: 1rem;
        }

        .feature-icon {
          color: var(--primary-red);
        }

        .cta-form-card {
          background: #fff;
          padding: 3rem;
          border-radius: 16px;
          border-top: 6px solid var(--primary-red);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          color: #000;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #555;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: #f4f4f4;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.95rem;
          color: #333;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-red);
          box-shadow: 0 0 0 3px rgba(203, 54, 49, 0.1);
        }

        .select-wrapper {
          position: relative;
        }

        .submit-btn {
          width: 100%;
          padding: 1.25rem;
          background-color: var(--primary-red);
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s;
          margin-top: 1rem;
        }

        .submit-btn:hover {
          background-color: #a0201c;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .loom-cta-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .cta-title {
            font-size: 2.75rem;
          }
          .cta-form-card {
            padding: 2rem;
          }
        }
      `}} />
    </div>
  );
};

export default StudentVoicesPage;
