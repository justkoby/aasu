import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Lock scrolling when open

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button 
        id="lightbox-close-btn" 
        className="lightbox-btn close-btn" 
        onClick={onClose} 
        aria-label="Close Lightbox"
      >
        <X size={28} />
      </button>

      {/* Prev Navigation Button */}
      <button 
        id="lightbox-prev-btn" 
        className="lightbox-btn nav-btn prev-btn" 
        onClick={(e) => { e.stopPropagation(); onPrev(); }} 
        aria-label="Previous Image"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Lightbox Content */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].title} 
          className="lightbox-img fade-in"
        />
        <div className="lightbox-caption">
          <h3>{images[currentIndex].title}</h3>
          <p>Image {currentIndex + 1} of {images.length}</p>
        </div>
      </div>

      {/* Next Navigation Button */}
      <button 
        id="lightbox-next-btn" 
        className="lightbox-btn nav-btn next-btn" 
        onClick={(e) => { e.stopPropagation(); onNext(); }} 
        aria-label="Next Image"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
};
export default Lightbox;
