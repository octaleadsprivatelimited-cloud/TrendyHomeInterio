import React from 'react';
import { Link } from 'react-router-dom';
import wardrobe1 from '../../assets/images/wardrobe-1.jpeg';
import wardrobe2 from '../../assets/images/wardrobe-2.jpeg';
import wardrobe3 from '../../assets/images/wardrobe-3.jpeg';
import wardrobe4 from '../../assets/images/wardrobe-4.jpeg';
import wardrobe5 from '../../assets/images/wardrobe-5.jpeg';
import wardrobe6 from '../../assets/images/wardrobe-6.jpeg';
import './Wardrobe.scss';

const Wardrobe = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12H26M6 18H26M6 24H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 8V4C10 3.44772 10.4477 3 11 3H21C21.5523 3 22 3.44772 22 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Smart Storage',
      description: 'Maximize space with intelligent storage solutions and custom compartments'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Materials',
      description: 'High-quality BWR plywood, premium laminates, and durable hardware'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Quick Installation',
      description: 'Professional installation completed in 7-10 days with minimal disruption'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty coverage for long-term peace of mind'
    }
  ];

  const types = [
    { name: 'Sliding Wardrobe', description: 'Space-efficient sliding doors perfect for modern bedrooms' },
    { name: 'Hinged Wardrobe', description: 'Classic design with full access to storage space' },
    { name: 'Walk-in Wardrobe', description: 'Luxury walk-in closets with custom organization' },
    { name: 'Corner Wardrobe', description: 'Maximize corner spaces with smart design solutions' },
    { name: 'Built-in Wardrobe', description: 'Seamless integration with your room architecture' },
    { name: 'Mirror Wardrobe', description: 'Stylish mirrors combined with functional storage' }
  ];

  const galleryImages = [
    { src: wardrobe1, alt: 'Wardrobe Design 1' },
    { src: wardrobe2, alt: 'Wardrobe Design 2' },
    { src: wardrobe3, alt: 'Wardrobe Design 3' },
    { src: wardrobe4, alt: 'Wardrobe Design 4' },
    { src: wardrobe5, alt: 'Wardrobe Design 5' },
    { src: wardrobe6, alt: 'Wardrobe Design 6' }
  ];

  return (
    <div className="service-page wardrobe-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${wardrobe1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">WARDROBE DESIGNS</h1>
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
            <h2 className="section-title">Our Wardrobe Designs</h2>
            <p className="section-description">Explore our stunning collection of wardrobe designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Wardrobe Design {index + 1}</h3>
                      <p>Premium Wardrobe</p>
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
            <h2 className="section-title">Why Choose Our Wardrobes</h2>
            <p className="section-description">Premium quality and intelligent storage solutions</p>
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
            <h2 className="section-title">Wardrobe Types</h2>
            <p className="section-description">Choose the perfect wardrobe style for your space</p>
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
              <h2>Ready to Organize Your Space?</h2>
              <p>Get a free consultation and custom wardrobe design</p>
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

export default Wardrobe;
