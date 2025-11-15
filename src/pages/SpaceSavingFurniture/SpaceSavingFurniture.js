import React from 'react';
import { Link } from 'react-router-dom';
import spaceSaving1 from '../../assets/images/space-saving-furniture-1.jpeg';
import spaceSaving2 from '../../assets/images/space-saving-furniture-2.jpeg';
import spaceSaving3 from '../../assets/images/space-saving-furniture-3.jpeg';
import spaceSaving4 from '../../assets/images/space-saving-furniture-4.jpeg';
import spaceSaving5 from '../../assets/images/space-saving-furniture-5.jpeg';
import spaceSaving6 from '../../assets/images/space-saving-furniture-6.png';
import './SpaceSavingFurniture.scss';

const SpaceSavingFurniture = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 14H28M10 8V4C10 3.44772 10.4477 3 11 3H21C21.5523 3 22 3.44772 22 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Maximize Space',
      description: 'Intelligent designs that make the most of every square foot'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Multi-Functional',
      description: 'Furniture that serves multiple purposes in one compact design'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Quick Delivery',
      description: 'Fast installation and setup for immediate space optimization'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty on all space-saving furniture'
    }
  ];

  const types = [
    { name: 'Murphy Beds', description: 'Wall-mounted beds that fold away to create more space' },
    { name: 'Sofa Beds', description: 'Convertible sofas that transform into comfortable beds' },
    { name: 'Storage Beds', description: 'Beds with built-in storage drawers and compartments' },
    { name: 'Foldable Tables', description: 'Tables that fold down when not in use' },
    { name: 'Nesting Furniture', description: 'Stackable and nestable pieces for flexible layouts' },
    { name: 'Wall-Mounted Desks', description: 'Space-efficient desks that fold against the wall' }
  ];

  const galleryImages = [
    { src: spaceSaving1, alt: 'Space Saving Furniture 1' },
    { src: spaceSaving2, alt: 'Space Saving Furniture 2' },
    { src: spaceSaving3, alt: 'Space Saving Furniture 3' },
    { src: spaceSaving4, alt: 'Space Saving Furniture 4' },
    { src: spaceSaving5, alt: 'Space Saving Furniture 5' },
    { src: spaceSaving6, alt: 'Space Saving Furniture 6' }
  ];

  return (
    <div className="service-page space-saving-furniture-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${spaceSaving1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">SPACE SAVING FURNITURE</h1>
            <Link to="/estimate" className="hero-cta">
              <span>Get Free Estimate</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="service-gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Gallery</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Our Space Saving Furniture</h2>
            <p className="section-description">Explore our collection of innovative space-saving solutions</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Space Saving Furniture {index + 1}</h3>
                      <p>Premium Design</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Features</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Why Choose Our Space Saving Furniture</h2>
            <p className="section-description">Smart designs for compact living</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-designs">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Products</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Space Saving Solutions</h2>
            <p className="section-description">Explore our range of innovative furniture pieces</p>
          </div>
          <div className="designs-grid">
            {types.map((type, index) => (
              <div key={index} className="design-card">
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-gradient-bg"></div>
            <div className="cta-content">
              <h2>Ready to Maximize Your Space?</h2>
              <p>Get a free consultation and discover space-saving solutions</p>
              <Link to="/estimate" className="cta-button">
                <span>Book Free Consultation</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceSavingFurniture;
