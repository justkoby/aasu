import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const slides = [
    { image: '/header-1.jpg', id: 1 },
    { image: '/header-2.jpg', id: 2 },
  ];

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
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="carousel-overlay" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="carousel-nav container">
          <button className="carousel-arrow prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-arrow next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators */}
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
      </div>

      {/* Arch Divider (Peaking in Center) */}
      <div className="curve-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C200,120 400,0 600,0 C800,0 1000,120 1200,120 V120 H0 Z" fill="#ffffff" opacity="1"></path>
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
          background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%);
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
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 60px;
          height: 60px;
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
          bottom: 150px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .indicator.active {
          background: var(--primary-red);
          width: 30px;
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
          .carousel-nav {
            padding: 0 1.5rem;
          }
          .curve-divider svg {
            height: 60px;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
