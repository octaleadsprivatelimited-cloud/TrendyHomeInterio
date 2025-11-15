import React from 'react';
import { Link } from 'react-router-dom';
import modularKitchen1 from '../../assets/images/modular-kitchen-1.jpeg';
import modularKitchen2 from '../../assets/images/modular-kitchen-2.jpeg';
import modularKitchen3 from '../../assets/images/modular-kitchen-3.jpeg';
import modularKitchen4 from '../../assets/images/modular-kitchen-4.jpeg';
import modularKitchen5 from '../../assets/images/modular-kitchen-5.jpeg';
import './ModularKitchen.scss';

const ModularKitchen = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 14H28M10 8V4C10 3.44772 10.4477 3 11 3H21C21.5523 3 22 3.44772 22 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="20" r="1.5" fill="currentColor"/>
          <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
        </svg>
      ),
      title: 'Custom Design',
      description: 'Tailored kitchen layouts designed to maximize your space and workflow efficiency'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Materials',
      description: 'High-quality materials including BWR plywood, premium laminates, and durable hardware'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '45 Days Delivery',
      description: 'Fast installation with professional craftsmanship and minimal disruption to your routine'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty coverage for peace of mind and long-term durability'
    }
  ];

  const designs = [
    { name: 'L-Shaped Kitchen', description: 'Perfect for corner spaces, maximizes efficiency' },
    { name: 'U-Shaped Kitchen', description: 'Ideal for larger spaces with ample storage' },
    { name: 'Straight Line Kitchen', description: 'Compact design for small apartments' },
    { name: 'Island Kitchen', description: 'Modern design with additional workspace' },
    { name: 'Parallel Kitchen', description: 'Efficient galley-style layout' },
    { name: 'Peninsula Kitchen', description: 'Combines island benefits with space efficiency' }
  ];

  const galleryImages = [
    { src: modularKitchen1, alt: 'Modern Modular Kitchen Design 1' },
    { src: modularKitchen2, alt: 'Modern Modular Kitchen Design 2' },
    { src: modularKitchen3, alt: 'Modern Modular Kitchen Design 3' },
    { src: modularKitchen4, alt: 'Modern Modular Kitchen Design 4' },
    { src: modularKitchen5, alt: 'Modern Modular Kitchen Design 5' }
  ];

  return (
    <div className="service-page modular-kitchen-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${modularKitchen1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">MODULAR KITCHEN DESIGNS</h1>
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
      <section className="service-gallery" style={{ backgroundImage: `url(${modularKitchen2})` }}>
        <div className="section-background-overlay"></div>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Gallery</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Our Kitchen Designs</h2>
            <p className="section-description">Explore our stunning collection of modular kitchen designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Kitchen Design {index + 1}</h3>
                      <p>Premium Modular Kitchen</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features" style={{ backgroundImage: `url(${modularKitchen3})` }}>
        <div className="section-background-overlay"></div>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Features</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Why Choose Our Modular Kitchens</h2>
            <p className="section-description">Premium quality and expert craftsmanship in every detail</p>
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

      {/* Designs Section */}
      <section className="service-designs" style={{ backgroundImage: `url(${modularKitchen4})` }}>
        <div className="section-background-overlay"></div>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Designs</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Popular Kitchen Layouts</h2>
            <p className="section-description">Choose from our range of functional and stylish kitchen designs</p>
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

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-gradient-bg"></div>
            <div className="cta-content">
              <h2>Ready to Design Your Dream Kitchen?</h2>
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

export default ModularKitchen;
