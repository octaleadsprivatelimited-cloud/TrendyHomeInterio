import React from 'react';
import { Link } from 'react-router-dom';
import homeOffice1 from '../../assets/images/home-office-1.jpeg';
import homeOffice2 from '../../assets/images/home-office-2.jpeg';
import homeOffice3 from '../../assets/images/home-office-3.jpeg';
import homeOffice4 from '../../assets/images/home-office-4.jpeg';
import homeOffice5 from '../../assets/images/home-office-5.jpeg';
import homeOffice6 from '../../assets/images/home-office-6.jpeg';
import homeOffice7 from '../../assets/images/home-office-7.jpeg';
import homeOffice8 from '../../assets/images/home-office-8.jpeg';
import './HomeOffice.scss';

const HomeOffice = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H28M12 6V2C12 1.44772 12.4477 1 13 1H19C19.5523 1 20 1.44772 20 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Ergonomic Design',
      description: 'Comfortable and productive workspace designs for long work hours'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Quality',
      description: 'High-quality desks, chairs, and storage solutions for your office'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Fast Setup',
      description: 'Quick installation and organization for immediate productivity'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty on all home office furniture'
    }
  ];

  const designs = [
    { name: 'Compact Home Office', description: 'Space-efficient designs for small apartments' },
    { name: 'Dedicated Study Room', description: 'Complete room transformation for focused work' },
    { name: 'Corner Office Setup', description: 'Smart corner solutions to maximize space' },
    { name: 'Luxury Home Office', description: 'Premium designs with high-end finishes' },
    { name: 'Shared Workspace', description: 'Designs for multiple people working from home' },
    { name: 'Minimalist Office', description: 'Clean and distraction-free workspace designs' }
  ];

  const galleryImages = [
    { src: homeOffice1, alt: 'Home Office Design 1' },
    { src: homeOffice2, alt: 'Home Office Design 2' },
    { src: homeOffice3, alt: 'Home Office Design 3' },
    { src: homeOffice4, alt: 'Home Office Design 4' },
    { src: homeOffice5, alt: 'Home Office Design 5' },
    { src: homeOffice6, alt: 'Home Office Design 6' },
    { src: homeOffice7, alt: 'Home Office Design 7' },
    { src: homeOffice8, alt: 'Home Office Design 8' }
  ];

  return (
    <div className="service-page home-office-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${homeOffice1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">HOME OFFICE DESIGNS</h1>
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
            <h2 className="section-title">Our Home Office Designs</h2>
            <p className="section-description">Explore our collection of productive workspace designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Home Office Design {index + 1}</h3>
                      <p>Premium Workspace</p>
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
            <h2 className="section-title">Why Choose Our Home Office Designs</h2>
            <p className="section-description">Productive and comfortable workspace solutions</p>
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
            <h2 className="section-title">Home Office Types</h2>
            <p className="section-description">Choose the perfect workspace solution for your needs</p>
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
              <h2>Ready to Design Your Home Office?</h2>
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

export default HomeOffice;
