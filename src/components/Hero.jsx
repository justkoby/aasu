import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useHeroPosts } from '../hooks/useContent';

const STATIC_HEADER_SLIDES = [
  { image: '/header-1.jpg', id: 'static-1', title: 'All-Africa Students Union', excerpt: 'Empowering African Students Across the Continent' },
  { image: '/header-2.jpg', id: 'static-2', title: 'Unity, Leadership & Excellence', excerpt: 'Building the Future of African Education and Rights' },
];

const Hero = () => {
  const { data: heroPosts, loading, error } = useHeroPosts();

  let slides = STATIC_HEADER_SLIDES;

  if (!loading) {
    if (error) {
      console.warn("[AASU Web Hero] Using static fallback slides due to Supabase error:", error.message);
      slides = STATIC_HEADER_SLIDES;
    } else if (heroPosts && heroPosts.length > 0) {
      slides = heroPosts.map(post => ({
        id: post.id,
        image: post.img || post.featured_image_url || '/header-1.jpg',
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        link: post.redirectUrl || `/news/${post.slug || post.id}`,
        alt: post.featured_image_alt || post.title
      }));
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 10, ease: 'linear' } // Ken Burns effect
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 }
      }
    })
  };

  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <section className="hero">
      <div className="hero-carousel">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="slide"
            style={{ backgroundImage: `url(${activeSlide.image})` }}
          >
            <div className="carousel-overlay" />
            
            {activeSlide.title && (
              <div className="container slide-content-wrapper">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="slide-card"
                >
                  {activeSlide.date && (
                    <span className="slide-date">
                      <Calendar size={14} /> {activeSlide.date}
                    </span>
                  )}
                  <h2 className="slide-title">{activeSlide.title}</h2>
                  {activeSlide.excerpt && (
                    <p className="slide-excerpt">{activeSlide.excerpt}</p>
                  )}
                  {activeSlide.link && (
                    <Link to={activeSlide.link} className="slide-cta-btn">
                      Read Full Story <ArrowRight size={16} />
                    </Link>
                  )}
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation */}
        {slides.length > 1 && (
          <div className="carousel-nav container">
            <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next Slide">
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {/* Carousel Indicators */}
        {slides.length > 1 && (
          <div className="carousel-indicators">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`indicator ${i === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setDirection(i > currentSlide ? 1 : -1);
                  setCurrentSlide(i);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Arch Divider */}
      <div className="curve-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C200,0 400,120 600,120 C800,120 1000,0 1200,0 V120 H0 Z" fill="#ffffff" opacity="1"></path>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          background: #000;
          overflow: hidden;
        }

        .hero-carousel {
          position: absolute;
          inset: 0;
        }

        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
        }

        .slide-content-wrapper {
          position: relative;
          z-index: 5;
          width: 100%;
          margin-top: 60px;
        }

        .slide-card {
          max-width: 680px;
          color: white;
          padding: 2.5rem;
          background: rgba(15, 23, 42, 0.45);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .slide-date {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #fbbf24;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
        }

        .slide-title {
          font-family: var(--font-headings);
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1rem;
          color: #ffffff;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .slide-excerpt {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 1.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .slide-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          background: var(--primary-red, #cb3631);
          color: white;
          font-weight: 800;
          font-size: 0.9rem;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(203, 54, 49, 0.4);
        }

        .slide-cta-btn:hover {
          background: #a0201c;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(203, 54, 49, 0.6);
        }

        .carousel-nav {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 4rem;
          pointer-events: none;
          z-index: 10;
        }

        .carousel-arrow {
          pointer-events: auto;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .carousel-arrow:hover {
          background: var(--primary-red);
          border-color: var(--primary-red);
          transform: scale(1.1);
        }

        .carousel-indicators {
          position: absolute;
          bottom: 140px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }

        .indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .indicator.active {
          background: var(--primary-red);
          width: 28px;
          border-radius: 6px;
        }

        .curve-divider {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 20;
        }

        .curve-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 120px;
        }

        @media (max-width: 768px) {
          .slide-title { font-size: 1.75rem; }
          .slide-card { padding: 1.5rem; margin: 0 1rem; }
          .carousel-nav { padding: 0 1rem; }
          .curve-divider svg { height: 60px; }
        }
      `}} />
    </section>
  );
};

export default Hero;
