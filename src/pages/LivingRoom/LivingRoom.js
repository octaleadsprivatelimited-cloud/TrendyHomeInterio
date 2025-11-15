import React from 'react';
import { Link } from 'react-router-dom';
import livingRoom1 from '../../assets/images/living-room-1.jpeg';
import livingRoom2 from '../../assets/images/living-room-2.jpeg';
import livingRoom3 from '../../assets/images/living-room-3.jpeg';
import livingRoom4 from '../../assets/images/living-room-4.jpeg';
import livingRoom5 from '../../assets/images/living-room-5.jpeg';
import livingRoom6 from '../../assets/images/living-room-6.jpeg';
import livingRoom7 from '../../assets/images/living-room-7.jpeg';
import livingRoom8 from '../../assets/images/living-room-8.jpeg';
import livingRoom9 from '../../assets/images/living-room-9.jpeg';
import './LivingRoom.scss';

const LivingRoom = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 14H28M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Space Planning',
      description: 'Optimal furniture placement and layout for maximum comfort and functionality'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Furniture',
      description: 'High-quality sofas, TV units, and storage solutions for your living room'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Fast Delivery',
      description: 'Complete living room transformation in 20-25 days'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty on all living room furniture and installations'
    }
  ];

  const designs = [
    { name: 'Modern Living Room', description: 'Contemporary designs with clean lines and minimal aesthetics' },
    { name: 'Traditional Living Room', description: 'Classic elegance with timeless furniture and decor' },
    { name: 'Luxury Living Room', description: 'Premium designs with high-end finishes and materials' },
    { name: 'Compact Living Room', description: 'Space-efficient designs for small apartments' },
    { name: 'Entertainment Living Room', description: 'Perfect setups for home theaters and gatherings' },
    { name: 'Minimalist Living Room', description: 'Simple and serene spaces with essential furniture' }
  ];

  const galleryImages = [
    { src: livingRoom1, alt: 'Living Room Design 1' },
    { src: livingRoom2, alt: 'Living Room Design 2' },
    { src: livingRoom3, alt: 'Living Room Design 3' },
    { src: livingRoom4, alt: 'Living Room Design 4' },
    { src: livingRoom5, alt: 'Living Room Design 5' },
    { src: livingRoom6, alt: 'Living Room Design 6' },
    { src: livingRoom7, alt: 'Living Room Design 7' },
    { src: livingRoom8, alt: 'Living Room Design 8' },
    { src: livingRoom9, alt: 'Living Room Design 9' }
  ];

  return (
    <div className="service-page living-room-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${livingRoom1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">LIVING ROOM DESIGNS</h1>
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
            <h2 className="section-title">Our Living Room Designs</h2>
            <p className="section-description">Explore our stunning collection of living room designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Living Room Design {index + 1}</h3>
                      <p>Premium Living Room</p>
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
            <h2 className="section-title">Why Choose Our Living Room Designs</h2>
            <p className="section-description">Premium quality and functional elegance</p>
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
              <span className="badge-text">Designs</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Living Room Styles</h2>
            <p className="section-description">Choose from our range of living room design styles</p>
          </div>
          <div className="designs-grid">
            {designs.map((design, index) => (
              <div key={index} className="design-card">
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <h3>{design.name}</h3>
                  <p>{design.description}</p>
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
              <h2>Ready to Redesign Your Living Room?</h2>
              <p>Get a free consultation and 3D design visualization</p>
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

export default LivingRoom;
