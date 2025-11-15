import React from 'react';
import { Link } from 'react-router-dom';
import bathroom1 from '../../assets/images/bathroom-1.jpeg';
import bathroom2 from '../../assets/images/bathroom-2.jpeg';
import bathroom3 from '../../assets/images/bathroom-3.jpeg';
import bathroom4 from '../../assets/images/bathroom-4.jpeg';
import bathroom5 from '../../assets/images/bathroom-5.jpeg';
import bathroom6 from '../../assets/images/bathroom-6.jpeg';
import bathroom7 from '../../assets/images/bathroom-7.jpeg';
import bathroom8 from '../../assets/images/bathroom-8.jpeg';
import './Bathroom.scss';

const Bathroom = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H28M4 18H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Modern Fixtures',
      description: 'Premium bathroom fixtures and fittings for a luxurious experience'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Tiles',
      description: 'High-quality tiles and waterproofing for long-lasting beauty'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Quick Installation',
      description: 'Professional bathroom renovation completed in 10-15 days'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty on all bathroom installations and fixtures'
    }
  ];

  const designs = [
    { name: 'Modern Bathroom', description: 'Contemporary designs with sleek fixtures and clean lines' },
    { name: 'Luxury Bathroom', description: 'Premium designs with high-end finishes and spa-like features' },
    { name: 'Compact Bathroom', description: 'Space-efficient designs for small bathrooms' },
    { name: 'Master Bathroom', description: 'Luxurious master suites with premium amenities' },
    { name: 'Guest Bathroom', description: 'Elegant and functional designs for guest spaces' },
    { name: 'Powder Room', description: 'Stylish half-bath designs for entertaining' }
  ];

  const galleryImages = [
    { src: bathroom1, alt: 'Bathroom Design 1' },
    { src: bathroom2, alt: 'Bathroom Design 2' },
    { src: bathroom3, alt: 'Bathroom Design 3' },
    { src: bathroom4, alt: 'Bathroom Design 4' },
    { src: bathroom5, alt: 'Bathroom Design 5' },
    { src: bathroom6, alt: 'Bathroom Design 6' },
    { src: bathroom7, alt: 'Bathroom Design 7' },
    { src: bathroom8, alt: 'Bathroom Design 8' }
  ];

  return (
    <div className="service-page bathroom-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${bathroom1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">BATHROOM DESIGNS</h1>
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
            <h2 className="section-title">Our Bathroom Designs</h2>
            <p className="section-description">Explore our stunning collection of bathroom designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Bathroom Design {index + 1}</h3>
                      <p>Premium Bathroom</p>
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
            <h2 className="section-title">Why Choose Our Bathroom Designs</h2>
            <p className="section-description">Premium quality and waterproof solutions</p>
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
            <h2 className="section-title">Bathroom Types</h2>
            <p className="section-description">Explore our range of bathroom design solutions</p>
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
              <h2>Ready to Renovate Your Bathroom?</h2>
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

export default Bathroom;
