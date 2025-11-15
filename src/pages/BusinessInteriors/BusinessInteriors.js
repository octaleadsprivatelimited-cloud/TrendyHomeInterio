import React from 'react';
import { Link } from 'react-router-dom';
import businessInteriors1 from '../../assets/images/business-interiors-1.jpeg';
import businessInteriors2 from '../../assets/images/business-interiors-2.jpeg';
import businessInteriors3 from '../../assets/images/business-interiors-3.jpeg';
import businessInteriors4 from '../../assets/images/business-interiors-4.jpeg';
import businessInteriors5 from '../../assets/images/business-interiors-5.jpeg';
import businessInteriors6 from '../../assets/images/business-interiors-6.jpeg';
import businessInteriors7 from '../../assets/images/business-interiors-7.jpeg';
import './BusinessInteriors.scss';

const BusinessInteriors = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 10L14 4L24 10V24H4V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Professional Design',
      description: 'Corporate interiors that reflect your brand identity and values'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Materials',
      description: 'High-quality commercial-grade materials for durability and aesthetics'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Timely Execution',
      description: 'Minimal business disruption with efficient project management'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty on all commercial installations'
    }
  ];

  const types = [
    { name: 'Office Spaces', description: 'Modern office designs for productivity and collaboration' },
    { name: 'Retail Stores', description: 'Attractive store designs that enhance customer experience' },
    { name: 'Restaurants & Cafes', description: 'Welcoming dining spaces that create memorable experiences' },
    { name: 'Hotels & Hospitality', description: 'Luxury interiors for hotels and hospitality venues' },
    { name: 'Healthcare Facilities', description: 'Calming and functional designs for healthcare spaces' },
    { name: 'Educational Spaces', description: 'Inspiring learning environments for schools and colleges' }
  ];

  const galleryImages = [
    { src: businessInteriors1, alt: 'Business Interiors 1' },
    { src: businessInteriors2, alt: 'Business Interiors 2' },
    { src: businessInteriors3, alt: 'Business Interiors 3' },
    { src: businessInteriors4, alt: 'Business Interiors 4' },
    { src: businessInteriors5, alt: 'Business Interiors 5' },
    { src: businessInteriors6, alt: 'Business Interiors 6' },
    { src: businessInteriors7, alt: 'Business Interiors 7' }
  ];

  return (
    <div className="service-page business-interiors-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${businessInteriors1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">BUSINESS INTERIORS</h1>
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
            <h2 className="section-title">Our Business Interiors</h2>
            <p className="section-description">Explore our collection of professional commercial designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Business Interiors {index + 1}</h3>
                      <p>Premium Commercial Design</p>
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
            <h2 className="section-title">Why Choose Our Business Interiors</h2>
            <p className="section-description">Professional solutions for commercial spaces</p>
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
              <span className="badge-text">Services</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Commercial Interior Types</h2>
            <p className="section-description">Comprehensive solutions for various business spaces</p>
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
              <h2>Ready to Transform Your Business Space?</h2>
              <p>Get a free consultation and professional design proposal</p>
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

export default BusinessInteriors;
