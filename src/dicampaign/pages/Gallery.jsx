import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import { Maximize2, Filter } from 'lucide-react';
import './Gallery.css';

const GALLERY_IMAGES = [
  {
    url: '/2022/Malawi National Students Union/22DIGITALINCLUSIONCAMPAIN-min.jpg',
    title: 'Malawi Campaign Press Launch',
    category: 'Campaign'
  },
  {
    url: '/2022/Malawi National Students Union/13-min.jpg',
    title: 'Student Leaders Training Assembly',
    category: 'Workshops'
  },
  {
    url: '/2022/Malawi National Students Union/14-min.jpg',
    title: 'National Students Union Forum',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/30DIGITALINCLUSIONCAMPAIN-min.jpg',
    title: 'Digital Rights Action Group',
    category: 'Advocacy'
  },
  {
    url: '/2022/Malawi National Students Union/38DIGITALINCLUSIONCAMPAIN-min.jpg',
    title: 'Mobilization Press Statement',
    category: 'Advocacy'
  },
  {
    url: '/2022/Malawi National Students Union/ghghgh.jpg',
    title: 'Advocacy Panel Discussion',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_4580.jpg',
    title: 'Regional Delegation Group',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_4581.jpg',
    title: 'Regional Training Session',
    category: 'Workshops'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_4582.jpg',
    title: 'Student Leadership Workshop',
    category: 'Workshops'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_4583-min.jpeg',
    title: 'Malawi Student Union Representatives',
    category: 'Campaign'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_4586-min.jpeg',
    title: 'Policy Strategy Round Table',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9173-min.jpg',
    title: 'Malawi Campaign Assembly',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9298.jpg',
    title: 'Advocacy Campaign Group',
    category: 'Campaign'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9299-scaled.jpg',
    title: 'Advocacy Campaign Briefing',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9301.jpg',
    title: 'Regional Workshop Leaders',
    category: 'Workshops'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9315.jpg',
    title: 'Digital Rights Strategy Session',
    category: 'Workshops'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9327.jpg',
    title: 'Campaign Action Committee',
    category: 'Campaign'
  },
  {
    url: '/2022/Malawi National Students Union/IMG_9384.jpg',
    title: 'Youth Digital Inclusion Forum',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/rrr.jpg',
    title: 'Lobbying Delegation Group',
    category: 'Advocacy'
  },
  {
    url: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.44.30AM.jpeg',
    title: 'Malawi National Students Union Launch',
    category: 'Campaign'
  },
  {
    url: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.44.34AM.jpeg',
    title: 'Press Conference On Internet Subsidies',
    category: 'Advocacy'
  },
  {
    url: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.49.52AM.jpeg',
    title: 'National Campaign Representatives',
    category: 'Meetings'
  },
  {
    url: '/2022/Malawi National Students Union/WhatsAppImage2022-08-17at1.49.57AM.jpeg',
    title: 'Advocacy Forum Highlights',
    category: 'Campaign'
  },
  {
    url: '/2022/Malawi National Students Union/1-DIGITALINCLUSIONCAMPAIN-min.jpg',
    title: 'Digital Inclusion Campaign Banner',
    category: 'Campaign'
  }
];

const CATEGORIES = ['All', 'Campaign', 'Workshops', 'Advocacy', 'Meetings'];

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Filter images client-side
  const filteredImages = GALLERY_IMAGES.filter(img => 
    selectedCategory === 'All' || img.category === selectedCategory
  );

  const openLightbox = (imageIndex) => {
    // Map the index in the filtered list back to the original index in GALLERY_IMAGES
    const clickedImg = filteredImages[imageIndex];
    const originalIndex = GALLERY_IMAGES.findIndex(img => img.url === clickedImg.url);
    setLightboxIndex(originalIndex !== -1 ? originalIndex : 0);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex(prev => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    setLightboxIndex(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <>
      <main className="gallery-page fade-in">
      {/* Banner */}
      <div className="gallery-banner">
        <div className="container">
          <h1 className="page-title">Media Archive</h1>
          <p className="page-subtitle">
            Historical photo records documenting the Malawi National Students Union digital inclusion workshops, campaigns, and stakeholder sessions.
          </p>
        </div>
      </div>

      <section className="section gallery-grid-section">
        <div className="container">
          {/* Header & Categories Selector */}
          <div className="gallery-controls">
            <div className="section-header">
              <span className="badge">CAMPAIGN ACTIONS</span>
              <h2>Advocacy & Mobilization Gallery</h2>
              <p>Explore archived photographs from different phases of our campaign actions.</p>
            </div>
            
            <div className="gallery-filters glass">
              <span className="filter-label"><Filter size={16} /> Filter:</span>
              <div className="filter-buttons">
                {CATEGORIES.map(cat => (
                  <button
                    id={`gallery-filter-btn-${cat.toLowerCase()}`}
                    key={cat}
                    className={`gallery-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Items Grid */}
          <div className="gallery-grid">
            {filteredImages.map((img, idx) => (
              <div 
                key={img.url} 
                className="gallery-item-wrapper card"
                onClick={() => openLightbox(idx)}
              >
                <div className="gallery-img-container">
                  <img src={img.url} alt={img.title} className="gallery-img" loading="lazy" />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-cat">{img.category}</span>
                    <h3>{img.title}</h3>
                    <Maximize2 size={24} className="zoom-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal mounted outside the animated main container to avoid fixed positioning bugs */}
      <Lightbox
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};
export default Gallery;
