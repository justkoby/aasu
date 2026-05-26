import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

const SLIDES = [
  {
    id: 1,
    image: '/2022/Malawi National Students Union/22DIGITALINCLUSIONCAMPAIN-min-2048x1365.jpg',
    title: 'Malawi Digital Inclusion Campaign Launch',
    subtitle: 'The Malawi National Students Union launching regional actions to lobby for students\' digital rights.',
    ctaText: 'View Campaign Gallery',
    ctaLink: '/dicampaign/gallery'
  },
  {
    id: 2,
    image: '/2022/Malawi National Students Union/IMG_9173-min-1536x1024.jpg',
    title: 'Student Leaders Assembly',
    subtitle: 'Strengthening capacity of student union leaders to advocate for affordable online learning.',
    ctaText: 'See Campaign Updates',
    ctaLink: '/dicampaign/updates'
  },
  {
    id: 3,
    image: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.44.30AM.jpeg',
    title: 'Advocacy for Digital Rights',
    subtitle: 'Mobilizing student voices across campuses to put pressure on governments and telecom companies.',
    ctaText: 'Review Closed ToRs',
    ctaLink: '/dicampaign/opportunities'
  },
  {
    id: 4,
    image: '/2022/Malawi National Students Union/30DIGITALINCLUSIONCAMPAIN-min.jpg',
    title: 'Eliminating Financial Barriers',
    subtitle: 'Advocating for zero-rated educational websites and affordable student data packages.',
    ctaText: 'View Campaign Gallery',
    ctaLink: '/dicampaign/gallery'
  },
  {
    id: 5,
    image: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.49.52AM.jpeg',
    title: 'Action Planning Round Tables',
    subtitle: 'Student union representatives collaborating on campaign roadmaps and lobbying strategies.',
    ctaText: 'See Campaign Impact',
    ctaLink: '#impact-section'
  },
  {
    id: 6,
    image: '/2022/Malawi National Students Union/IMG_4583-min-2048x1365.jpeg',
    title: 'Press Briefings & Public Declarations',
    subtitle: 'Rallying media and public attention to educational inequities in online platforms.',
    ctaText: 'See Updates',
    ctaLink: '/dicampaign/updates'
  },
  {
    id: 7,
    image: '/2022/Malawi National Students Union/IMG_4586-min-2048x1365.jpeg',
    title: 'Strategic Regional Coalitions',
    subtitle: 'Building solid partnerships across Central and Southern Africa for sustainable digital inclusion.',
    ctaText: 'View Campaign Gallery',
    ctaLink: '/dicampaign/gallery'
  },
  {
    id: 8,
    image: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.49.57AM.jpeg',
    title: 'Empowering Student Voices',
    subtitle: 'Standing together for quality education as a fundamental right of every African child.',
    ctaText: 'See Campaign Impact',
    ctaLink: '#impact-section'
  },
  {
    id: 9,
    image: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.44.34AM.jpeg',
    title: 'Telecom Engagement Sessions',
    subtitle: 'Engaging regulatory bodies and network operators to outline subsidization structures.',
    ctaText: 'See Campaign Updates',
    ctaLink: '/dicampaign/updates'
  },
  {
    id: 10,
    image: '/2022/Malawi National Students Union/IMG_9384.jpg',
    title: 'Regional Advocacy Dialogues',
    subtitle: 'Collaborating on cross-border solutions for student digital inclusion and educational continuity.',
    ctaText: 'Explore Opportunities',
    ctaLink: '/dicampaign/opportunities'
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Autoplay hook
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

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
    <div 
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`slide ${idx === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65)), url("${slide.image}")` }}
        >
          <div className="container slide-container">
            <div className="slide-content fade-in">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="slide-actions">
                {slide.ctaLink.startsWith('#') ? (
                  <a 
                    id={`hero-cta-${slide.id}`}
                    href={slide.ctaLink} 
                    className="btn btn-primary"
                    onClick={(e) => handleCtaClick(e, slide.ctaLink)}
                  >
                    {slide.ctaText}
                  </a>
                ) : (
                  <Link 
                    id={`hero-cta-${slide.id}`}
                    to={slide.ctaLink} 
                    className="btn btn-primary"
                  >
                    {slide.ctaText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button id="slider-prev-btn" className="slider-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft size={24} />
      </button>
      <button id="slider-next-btn" className="slider-arrow next" onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default HeroSlider;
