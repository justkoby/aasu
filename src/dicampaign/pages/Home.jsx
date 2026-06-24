import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
  ShieldCheck, BookOpen, Users, Award, Wifi, HeartHandshake, 
  ArrowUpRight, CheckCircle2, ChevronRight, Landmark, Network, 
  Globe, HelpCircle, FileText, Send, MapPin, DollarSign, Activity
} from 'lucide-react';
import './Home.css';

// Intersection Observer Hook for Triggering Animations (Counters)
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement && !options.triggerOnce) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting];
};

// CountUp Component for Stats
const AnimatedCounter = ({ targetValue, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    // Extract number from string if needed (e.g. 120000 from 120,000 or 10 from $10T)
    const isCurrency = prefix === "$";
    const numericTarget = typeof targetValue === 'string' 
      ? parseFloat(targetValue.replace(/[^0-9.]/g, '')) 
      : targetValue;
    
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function outQuad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * numericTarget);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(numericTarget);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, targetValue, duration, prefix]);

  // Format big numbers with commas
  const formatNumber = (num) => {
    if (num >= 1000 && targetValue.toString().includes(',')) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <span ref={ref} className="counter-value">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export const Home = () => {
  // Hero Particle Canvas ref
  const heroCanvasRef = useRef(null);
  // Stakeholder Canvas ref
  const stakeholderCanvasRef = useRef(null);
  
  // Africa Map State
  const [mapSvgText, setMapSvgText] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('GH'); // Default GH (Ghana)
  const mapContainerRef = useRef(null);

  // Scroll Story Refs
  const storyRef0 = useRef(null);
  const storyRef1 = useRef(null);
  const storyRef2 = useRef(null);
  const storyRef3 = useRef(null);
  const storyRef4 = useRef(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Stories data for Africa Map
  const countryStories = {
    GH: {
      name: "Ghana",
      title: "Student Union Advocacy",
      stat: "18+ campuses zero-rated",
      story: "The National Union of Ghana Students (NUGS) led protests and structured negotiations with the Ministry of Communications. This pressure forced major ISPs to zero-rate core university portals, enabling student access during lockdown periods without internet charges.",
      accent: "var(--accent)"
    },
    KE: {
      name: "Kenya",
      title: "Rural Access Inequality",
      stat: "13% rural internet access",
      story: "In rural counties like Turkana and Marsabit, learners walked up to 10 kilometers to find mobile signals. The campaign in Kenya focused on building regional community networks and lobbying for infrastructure funds to extend fiber backhaul to local community centers.",
      accent: "var(--secondary)"
    },
    ZW: {
      name: "Zimbabwe",
      title: "High Mobile Data Campaign",
      stat: "$8.40 per GB average",
      story: "With data costs scaling past $8 per gigabyte, students in Harare launched the local #DataMustFall chapter. The campaign demanded mobile network operators introduce dedicated, discounted 'E-learning bundles' certified by national regulatory bodies.",
      accent: "#ef4444"
    }
  };

  // Fetch Africa Map SVG on load
  useEffect(() => {
    fetch('/africa.svg')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load map');
        return res.text();
      })
      .then(text => {
        // Strip <?xml ...> tags if any
        const cleanedText = text.replace(/<\?xml.*?\?>/i, '');
        setMapSvgText(cleanedText);
      })
      .catch(err => {
        console.error("Error loading Africa map SVG:", err);
      });
  }, []);

  // Set up event delegation on Africa Map once SVG is loaded
  const handleMapClick = (e) => {
    const path = e.target.closest('path');
    if (!path) return;
    const countryId = path.id; // "GH", "KE", "ZW" etc.
    if (countryStories[countryId]) {
      setSelectedCountry(countryId);
    }
  };

  // Hero Canvas Particle Animation
  useEffect(() => {
    const canvas = heroCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles array
    const particles = [];
    const particleCount = 60;
    const connectionDistance = 120;
    
    // Mouse interaction
    let mouse = { x: null, y: null, radius: 150 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse hover magnetism
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= dx * force * 0.03;
            this.y -= dy * force * 0.03;
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 203, 170, 0.4)';
        ctx.fill();
      }
    }

    // Init particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update & Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - (dist / connectionDistance)) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(15, 203, 170, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas && canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Stakeholder Network Graph Animation
  useEffect(() => {
    const canvas = stakeholderCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 400;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodesData = [
      { name: "Government", group: 1, size: 45 },
      { name: "Education", group: 1, size: 40 },
      { name: "Civil Society", group: 2, size: 38 },
      { name: "Students", group: 3, size: 50 },
      { name: "ISPs", group: 4, size: 36 },
      { name: "MNOs", group: 4, size: 36 },
      { name: "Regulators", group: 1, size: 38 },
      { name: "Digital Rights Groups", group: 2, size: 42 }
    ];

    class Node {
      constructor(data, idx) {
        this.name = data.name;
        this.size = data.size;
        this.group = data.group;
        this.x = (idx * 110) + 80;
        this.y = Math.random() * 200 + 100;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        
        // Colors based on groups
        if (this.group === 1) this.color = 'hsla(170, 90%, 40%, 0.15)'; // Greenish
        else if (this.group === 2) this.color = 'hsla(243, 85%, 65%, 0.15)'; // Blueish
        else if (this.group === 3) this.color = 'hsla(38, 92%, 50%, 0.15)'; // Amber
        else this.color = 'hsla(0, 85%, 60%, 0.15)'; // Reddish

        if (this.group === 1) this.strokeColor = 'hsla(170, 90%, 40%, 0.8)';
        else if (this.group === 2) this.strokeColor = 'hsla(243, 85%, 65%, 0.8)';
        else if (this.group === 3) this.strokeColor = 'hsla(38, 92%, 50%, 0.8)';
        else this.strokeColor = 'hsla(0, 85%, 60%, 0.8)';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x - this.size < 0 || this.x + this.size > canvas.width) this.vx = -this.vx;
        if (this.y - this.size < 0 || this.y + this.size > canvas.height) this.vy = -this.vy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = 'bold 12px "Outfit", sans-serif';
        ctx.fillStyle = 'var(--text-main)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.name, this.x, this.y);
      }
    }

    const nodes = nodesData.map((data, idx) => new Node(data, idx));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
        }
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update & Draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scroll Story Scroll Spy Logic
  useEffect(() => {
    const handleScrollStory = () => {
      const scrollStorySection = document.getElementById('scroll-story-section');
      if (!scrollStorySection) return;

      const storyRefs = [storyRef0, storyRef1, storyRef2, storyRef3, storyRef4];
      const viewPortHeight = window.innerHeight;

      // Check which block is nearest the center of the viewport
      let closestIdx = 0;
      let minDistance = Infinity;

      storyRefs.forEach((ref, idx) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const distToCenter = Math.abs(rect.top + rect.height / 2 - viewPortHeight / 2);
        if (distToCenter < minDistance) {
          minDistance = distToCenter;
          closestIdx = idx;
        }
      });

      setActiveStoryIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScrollStory);
    return () => window.removeEventListener('scroll', handleScrollStory);
  }, []);

  const handleCtaClick = (e, link) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="home-page fade-in dicampaign-root">
      <SEO 
        title="Digital Inclusion Campaign - Data Must Fall" 
        description="Reworking educational systems across Africa. Demanding digital rights, zero-rated study portals, and affordable internet data for students." 
      />

      {/* ══ HERO SECTION (Gradient Mesh + Nodes Canvas) ════════ */}
      <section className="hero-mesh-section">
        <canvas ref={heroCanvasRef} className="hero-particle-canvas" />
        <div className="hero-mesh-bg" />
        
        <div className="container hero-mesh-content text-center">
          <span className="badge badge-secondary fade-in">AASU CAMPAIGN</span>
          <h1 className="hero-giant-title">
            Data Must Fall.<br />
            <span className="gradient-text">Education Must Rise.</span>
          </h1>
          <p className="hero-lead-text">
            Affordable internet data is not a luxury. It is a fundamental key to education, inclusion, and opportunity for every African student.
          </p>
          <div className="hero-actions-row">
            <a href="#problem-section" className="btn btn-primary" onClick={(e) => handleCtaClick(e, '#problem-section')}>
              Explore The Campaign
            </a>
            <a href="#join-section" className="btn btn-outline btn-white-border" onClick={(e) => handleCtaClick(e, '#join-section')}>
              Join The Slogan
            </a>
          </div>
        </div>
      </section>

      {/* ══ PROGRESS TRACKER ══════════════════════════════════ */}
      <section className="tracker-section glass-tracker">
        <div className="container">
          <div className="tracker-grid">
            <div className="tracker-item">
              <span className="tracker-icon">📢</span>
              <div className="tracker-data">
                <h3 className="tracker-num"><AnimatedCounter targetValue={18} /></h3>
                <span className="tracker-lbl">Countries Engaged</span>
              </div>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">🏫</span>
              <div className="tracker-data">
                <h3 className="tracker-num"><AnimatedCounter targetValue={42} /></h3>
                <span className="tracker-lbl">Student Unions</span>
              </div>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">👥</span>
              <div className="tracker-data">
                <h3 className="tracker-num"><AnimatedCounter targetValue={120000} /></h3>
                <span className="tracker-lbl">Students Reached</span>
              </div>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">🤝</span>
              <div className="tracker-data">
                <h3 className="tracker-num"><AnimatedCounter targetValue={35} /></h3>
                <span className="tracker-lbl">Partners Secured</span>
              </div>
            </div>
            <div className="tracker-item">
              <span className="tracker-icon">📜</span>
              <div className="tracker-data">
                <h3 className="tracker-num"><AnimatedCounter targetValue={15} /></h3>
                <span className="tracker-lbl">Policy Dialogues</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: THE PROBLEM (Dark Section) ════════════ */}
      <section id="problem-section" className="section dark-problem-section">
        <div className="container">
          <div className="grid-2 align-center">
            <div className="problem-statement">
              <span className="badge badge-accent">THE CRISIS</span>
              <h2 className="huge-typography">The Digital Divide Is Growing</h2>
              <p className="lead-accent">Every student deserves access to education.</p>
              <p className="problem-para">
                The shift to online learning did not level the playing field—it widened the chasm. Millions of youth face educational exclusion because they cannot afford the data to attend a online lecture or download a syllabus.
              </p>
            </div>
            
            <div className="stats-four-grid">
              <div className="stat-box">
                <h4 className="stat-big-num"><AnimatedCounter targetValue={96} suffix="%" /></h4>
                <p className="stat-small-lbl">Students affected by school closures</p>
              </div>
              <div className="stat-box">
                <h4 className="stat-big-num"><AnimatedCounter targetValue={80} suffix="%" /></h4>
                <p className="stat-small-lbl">Learning poverty in sub-Saharan Africa</p>
              </div>
              <div className="stat-box">
                <h4 className="stat-big-num"><AnimatedCounter targetValue={13} suffix="%" /></h4>
                <p className="stat-small-lbl">Rural student internet access rate</p>
              </div>
              <div className="stat-box">
                <h4 className="stat-big-num"><AnimatedCounter targetValue={10} prefix="$" suffix="T" /></h4>
                <p className="stat-small-lbl">Potential lifetime economic losses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: SCROLL STORY ═══════════════════════════ */}
      <section id="scroll-story-section" className="scroll-story-section">
        <div className="container story-wrapper">
          <div className="story-text-column">
            <div ref={storyRef0} className={`story-block ${activeStoryIndex === 0 ? 'active' : ''}`}>
              <span className="story-step-num">01</span>
              <h3>Education</h3>
              <p>Education is the bedrock of progress. Every African child has the right to learn, discover, and build a brighter future for the continent.</p>
            </div>
            <div ref={storyRef1} className={`story-block ${activeStoryIndex === 1 ? 'active' : ''}`}>
              <span className="story-step-num">02</span>
              <h3>Covid Happened</h3>
              <p>In 2020, the COVID-19 pandemic swept the globe, triggering lockdowns and disrupting traditional classrooms globally.</p>
            </div>
            <div ref={storyRef2} className={`story-block ${activeStoryIndex === 2 ? 'active' : ''}`}>
              <span className="story-step-num">03</span>
              <h3>Schools Closed</h3>
              <p>Physical campuses shut their gates. Classrooms fell silent as lockdowns confined millions of students to their homes.</p>
            </div>
            <div ref={storyRef3} className={`story-block ${activeStoryIndex === 3 ? 'active' : ''}`}>
              <span className="story-step-num">04</span>
              <h3>Learning Moved Online</h3>
              <p>Curriculums migrated to digital portals. Zoom lectures, WhatsApp study groups, and PDFs became the new classrooms.</p>
            </div>
            <div ref={storyRef4} className={`story-block ${activeStoryIndex === 4 ? 'active' : ''}`}>
              <span className="story-step-num">05</span>
              <h3>Millions Left Behind</h3>
              <p>Without fiber internet, computers, or the money to purchase daily data packs, millions of students were locked out of their classrooms.</p>
            </div>
          </div>

          <div className="story-image-column">
            <div className="story-image-frame glass">
              <img 
                src="/images/no_internet.png" 
                alt="Laptop with no internet" 
                className={`story-slide-img ${activeStoryIndex === 0 ? 'visible' : ''}`} 
              />
              <img 
                src="/images/student_studying.png" 
                alt="Student studying" 
                className={`story-slide-img ${activeStoryIndex === 1 ? 'visible' : ''}`} 
              />
              <img 
                src="/images/sharing_phone.png" 
                alt="Girl sharing a phone" 
                className={`story-slide-img ${activeStoryIndex === 2 ? 'visible' : ''}`} 
              />
              <img 
                src="/images/classroom_divide.png" 
                alt="Classroom" 
                className={`story-slide-img ${activeStoryIndex === 3 ? 'visible' : ''}`} 
              />
              <img 
                src="/images/satellite_space.png" 
                alt="Satellite" 
                className={`story-slide-img ${activeStoryIndex === 4 ? 'visible' : ''}`} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: WHO GETS LEFT BEHIND? ══════════════════ */}
      <section className="section who-left-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">VULNERABILITY ASSESSMENT</span>
            <h2>Who Gets Left Behind?</h2>
            <p className="section-subtitle">The digital divide is not uniform. It intersects with socioeconomic structures, disproportionately isolating specific groups.</p>
          </div>

          <div className="grid-3 left-behind-grid">
            <div className="card demographic-card">
              <h4>Girls</h4>
              <p>Cultural norms and household labor allocations frequently prioritize male access to technology, isolating young female learners.</p>
            </div>
            <div className="card demographic-card">
              <h4>Disabled learners</h4>
              <p>Online study platforms rarely support accessibility overlays, creating double barriers for visually or aurally impaired students.</p>
            </div>
            <div className="card demographic-card">
              <h4>Refugees</h4>
              <p>Displaced students in transit camps live completely disconnected, without national registry documentation to buy SIM cards.</p>
            </div>
            <div className="card demographic-card">
              <h4>Rural students</h4>
              <p>Remote topography lacks cellular towers. Students must trek to hilltops or highways just to sync email attachments.</p>
            </div>
            <div className="card demographic-card">
              <h4>Low income families</h4>
              <p>When food and medicine consume 95% of household budgets, buying data packages is a financial impossibility.</p>
            </div>
            <div className="card demographic-card">
              <h4>Indigenous communities</h4>
              <p>Geographically isolated and linguistically unrepresented, indigenous youth face total digital exclusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: DATA COSTS ════════════════════════════ */}
      <section className="section data-costs-section section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-secondary">FINANCIAL BARRIERS</span>
            <h2>Data Costs Are Education Costs</h2>
            <p className="section-subtitle">Average pricing comparison for 1GB of mobile data illustrates the high barrier to educational entry in Southern and Central Africa.</p>
          </div>

          <div className="data-costs-grid">
            <div className="cost-card">
              <span className="cost-country">Egypt</span>
              <h3 className="cost-price">$1.12</h3>
              <span className="cost-label">Average per GB</span>
              <div className="cost-bar" style={{ width: '20%', background: '#10b981' }} />
            </div>
            <div className="cost-card">
              <span className="cost-country">Botswana</span>
              <h3 className="cost-price">$4.06</h3>
              <span className="cost-label">Average per GB</span>
              <div className="cost-bar" style={{ width: '50%', background: 'var(--accent)' }} />
            </div>
            <div className="cost-card highlight-red">
              <span className="cost-country">Zimbabwe</span>
              <h3 className="cost-price">$8.40+</h3>
              <span className="cost-label">Average per GB</span>
              <div className="cost-bar" style={{ width: '100%', background: '#ef4444' }} />
            </div>
            <div className="cost-card">
              <span className="cost-country">Namibia</span>
              <h3 className="cost-price">High</h3>
              <span className="cost-label">Cost relative to income</span>
              <div className="cost-bar" style={{ width: '85%', background: 'var(--secondary)' }} />
            </div>
            <div className="cost-card">
              <span className="cost-country">DRC</span>
              <h3 className="cost-price">High</h3>
              <span className="cost-label">Cost relative to infrastructure</span>
              <div className="cost-bar" style={{ width: '90%', background: 'var(--secondary)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: WHY DATA MUST FALL (Black Section) ════ */}
      <section className="section black-why-data-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-accent">THE CORE RATIONALE</span>
            <h2 className="text-white">Why Data Must Fall</h2>
          </div>

          <div className="grid-3 rationale-grid">
            <div className="rationale-box">
              <div className="rationale-header">
                <BookOpen className="rationale-icon color-green" />
                <h3>Education</h3>
              </div>
              <p>Affordable learning. Zero-rating educational resources ensures that student learning depends on merit and motivation, not monetary reserves.</p>
            </div>
            <div className="rationale-box">
              <div className="rationale-header">
                <Activity className="rationale-icon color-blue" />
                <h3>Opportunity</h3>
              </div>
              <p>Economic inclusion. Digital literacy is the ticket to the modern workspace. Subsidizing access is an investment in future African innovation.</p>
            </div>
            <div className="rationale-box">
              <div className="rationale-header">
                <Users className="rationale-icon color-purple" />
                <h3>Equality</h3>
              </div>
              <p>Nobody left behind. Bridging the connectivity gap ensures rural, marginalized, and vulnerable students enjoy equal educational standing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: WHAT WE WANT (Roadmap) ════════════════ */}
      <section className="section roadmap-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">OUR ULTIMATE DEMANDS</span>
            <h2>What We Want</h2>
            <p className="section-subtitle">We have structured our campaign around five core pillars of digital and educational reform.</p>
          </div>

          <div className="roadmap-horizontal">
            <div className="roadmap-step">
              <div className="step-circle">1</div>
              <h4>Affordable Data</h4>
              <p>Immediate introduction of subsidized data bundles for authenticated students.</p>
            </div>
            <div className="roadmap-step">
              <div className="step-circle">2</div>
              <h4>Universal Access</h4>
              <p>Infrastructure development targeting fiber expansion into remote areas.</p>
            </div>
            <div className="roadmap-step">
              <div className="step-circle">3</div>
              <h4>Digital Rights</h4>
              <p>Protection of student privacy and freedom of expression online.</p>
            </div>
            <div className="roadmap-step">
              <div className="step-circle">4</div>
              <h4>Inclusive Education</h4>
              <p>Accessibility software integrations for disabled students on learning portals.</p>
            </div>
            <div className="roadmap-step">
              <div className="step-circle">5</div>
              <h4>Policy Reform</h4>
              <p>Formal legislation binding telecoms to allocate universal services funds to education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 7: OUR STRATEGY (Timeline) ═══════════════ */}
      <section className="section strategy-section section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-secondary">ADVOCACY TIMELINE</span>
            <h2>Our Strategy</h2>
            <p className="section-subtitle">A systematic, phased pipeline designed to influence decision makers and drive systemic change.</p>
          </div>

          <div className="timeline-vertical">
            <div className="timeline-block">
              <div className="timeline-marker"><CheckCircle2 size={20} /></div>
              <div className="timeline-card glass">
                <span className="timeline-date">Phase 1</span>
                <h3>Research</h3>
                <p>Gathering regional pricing indexes, analyzing telecoms policies, and surveying students on campus difficulties to build data-driven arguments.</p>
              </div>
            </div>
            
            <div className="timeline-block">
              <div className="timeline-marker"><CheckCircle2 size={20} /></div>
              <div className="timeline-card glass">
                <span className="timeline-date">Phase 2</span>
                <h3>Advocacy</h3>
                <p>Rallying student unions, building coalitions, and publishing declarations via national media channels to generate momentum.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-marker"><CheckCircle2 size={20} /></div>
              <div className="timeline-card glass">
                <span className="timeline-date">Phase 3</span>
                <h3>Government Engagement</h3>
                <p>Presenting policy whitepapers to ministries of higher education and communications, proposing national e-learning guidelines.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-marker"><CheckCircle2 size={20} /></div>
              <div className="timeline-card glass">
                <span className="timeline-date">Phase 4</span>
                <h3>Industry Dialogue</h3>
                <p>Bargaining directly with Mobile Network Operators (MNOs) and ISPs to configure zero-rated study portal IP endpoints.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-marker"><CheckCircle2 size={20} /></div>
              <div className="timeline-card glass">
                <span className="timeline-date">Phase 5</span>
                <h3>Public Action</h3>
                <p>Coordinating peaceful digital protest campaigns, campus walkouts, and petition drives to emphasize urgency.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-marker"><CheckCircle2 size={20} /></div>
              <div className="timeline-card glass">
                <span className="timeline-date">Phase 6</span>
                <h3>Policy Change</h3>
                <p>Securing binding regulations, e-education funding, and permanently subsidized student data models at the legislative level.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 8: INTERACTIVE AFRICA MAP ════════════════ */}
      <section className="section map-interactive-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">GEOGRAPHIC CAMPAIGN FOCUS</span>
            <h2>Interactive Africa Map</h2>
            <p className="section-subtitle">Click highlighted countries to read details about localized student movements, data rates, and campaign milestones.</p>
          </div>

          <div className="map-story-grid">
            <div className="map-left-render">
              {mapSvgText ? (
                <div 
                  ref={mapContainerRef}
                  className="interactive-svg-wrapper"
                  onClick={handleMapClick}
                  dangerouslySetInnerHTML={{ __html: mapSvgText }}
                />
              ) : (
                <div className="map-fallback glass text-center">
                  <Globe size={48} className="animate-spin" />
                  <p>Loading Interactive Geographic Map...</p>
                </div>
              )}
              <div className="map-legend">
                <span className="legend-item"><span className="legend-dot active-dot" /> Clickable Country Hotspot</span>
                <span className="legend-item"><span className="legend-dot normal-dot" /> Member Country</span>
              </div>
            </div>

            <div className="map-right-details">
              {selectedCountry && countryStories[selectedCountry] ? (
                <div className="country-story-card glass fade-in">
                  <div className="card-header-row">
                    <span className="country-tag" style={{ background: countryStories[selectedCountry].accent }}>
                      {countryStories[selectedCountry].name}
                    </span>
                    <span className="country-stat-badge">{countryStories[selectedCountry].stat}</span>
                  </div>
                  <h3>{countryStories[selectedCountry].title}</h3>
                  <p className="story-body">{countryStories[selectedCountry].story}</p>
                  <div className="story-meta-row">
                    <MapPin size={16} /> <span>AASU Campaign Hotspot (2021-2023)</span>
                  </div>
                </div>
              ) : (
                <div className="country-story-card glass flex-center text-center">
                  <HelpCircle size={36} />
                  <p>Select highlighted countries on the map to see student impact stories.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 9: PARTNERS (Infinite Marquee) ═══════════ */}
      <section className="marquee-partners-section">
        <div className="container">
          <h3 className="marquee-title text-center">Supported by Regional Networks</h3>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            <span>OSISA</span>
            <span>African Union</span>
            <span>Research ICT Africa</span>
            <span>National Student Unions</span>
            <span>Civil Society Org</span>
            <span>Universities Coalition</span>
            <span>OSISA</span>
            <span>African Union</span>
            <span>Research ICT Africa</span>
            <span>National Student Unions</span>
            <span>Civil Society Org</span>
            <span>Universities Coalition</span>
          </div>
        </div>
        <div className="marquee-container reverse">
          <div className="marquee-track">
            <span>MANSU Malawi</span>
            <span>NUGS Ghana</span>
            <span>ZINASU Zimbabwe</span>
            <span>NANS Nigeria</span>
            <span>SAUS South Africa</span>
            <span>UNES Uganda</span>
            <span>MANSU Malawi</span>
            <span>NUGS Ghana</span>
            <span>ZINASU Zimbabwe</span>
            <span>NANS Nigeria</span>
            <span>SAUS South Africa</span>
            <span>UNES Uganda</span>
          </div>
        </div>
      </section>

      {/* ══ SECTION 10: STAKEHOLDERS (Nodes Canvas) ══════════ */}
      <section className="section stakeholders-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">STAKEHOLDER ECOSYSTEM</span>
            <h2>Stakeholders Graph</h2>
            <p className="section-subtitle">The Digital Inclusion Campaign functions at the center of a complex network of public and private institutions.</p>
          </div>

          <div className="stakeholders-graph-wrap glass">
            <canvas ref={stakeholderCanvasRef} className="stakeholder-canvas" />
            <div className="stakeholder-caption-overlay text-center">
              <p>Interactive Network Animation showing intersections between Students, Governments, ISPs, and Regulators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 11: VISION (Full-screen Overlay) ═════════ */}
      <section className="vision-fullscreen-section">
        <div className="vision-bg-parallax" />
        <div className="container vision-content">
          <span className="badge badge-accent">OUR OUTLOOK</span>
          <h2 className="vision-lead">We Imagine An Africa Where</h2>
          <ul className="vision-list">
            <li>Every learner can connect.</li>
            <li>Every classroom can innovate.</li>
            <li>Every student belongs.</li>
          </ul>
        </div>
      </section>

      {/* ══ ORIGINAL CAMPAIGN LEGACY SHOWCASE ════════════════ */}
      <section id="impact-section" className="section impact-section legacy-archival-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-secondary">CAMPAIGN LEGACY</span>
            <h2>Our Work & Impact (2021 - 2023)</h2>
            <p className="section-subtitle">
              Through strategic mobilization with the Malawi National Students Union (MANSU) and other partners, we secured policy changes and zero-rating parameters.
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
            <h3 className="archive-highlight-title">Archived Photo Showcase: Action Highlights</h3>
            <div className="impact-photo-marquee-wrapper">
              <div className="impact-photo-marquee-track">
                {/* Original set */}
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
                {/* Duplicate set for loop */}
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
        </div>
      </section>

      {/* ══ SECTION 12: JOIN THE MOVEMENT (CTA Section) ═══════ */}
      <section id="join-section" className="section join-movement-section text-center">
        <div className="container join-container">
          <h2 className="cta-giant-slogan">
            # Data Must Fall.<br />
            <span className="glow-red-text">Education Must Rise.</span>
          </h2>
          <p className="join-lead-p">
            Take a stand today. Share your connectivity story, become a partner network, or join the advocacy petition to telecoms and ministries.
          </p>
          
          <div className="cta-button-row">
            <button className="btn btn-secondary pulse-btn">
              Become A Partner
            </button>
            <button className="btn btn-outline btn-white-border">
              Share Your Story
            </button>
            <button className="btn btn-primary">
              Join The Campaign
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
