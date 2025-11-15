import React from 'react';
import { Link } from 'react-router-dom';
import bedroom1 from '../../assets/images/bedroom-1.jpeg';
import bedroom2 from '../../assets/images/bedroom-2.jpeg';
import bedroom3 from '../../assets/images/bedroom-3.jpeg';
import bedroom4 from '../../assets/images/bedroom-4.jpeg';
import bedroom5 from '../../assets/images/bedroom-5.jpeg';
import bedroom6 from '../../assets/images/bedroom-6.jpeg';
import bedroom7 from '../../assets/images/bedroom-7.jpeg';
import './Bedroom.scss';

const Bedroom = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 11L16 5L28 11V23H4V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 23V16H22V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Custom Design',
      description: 'Personalized bedroom designs tailored to your style and comfort preferences'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Premium Finishes',
      description: 'High-quality materials and finishes for a luxurious bedroom experience'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Quick Turnaround',
      description: 'Complete bedroom makeover in 15-20 days with professional execution'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Comprehensive warranty on all bedroom furniture and installations'
    }
  ];

  const designs = [
    { name: 'Master Bedroom', description: 'Luxurious designs for the perfect master suite' },
    { name: 'Guest Bedroom', description: 'Welcoming spaces for your guests to feel at home' },
    { name: 'Kids Bedroom', description: 'Fun and functional designs for children of all ages' },
    { name: 'Teen Bedroom', description: 'Modern and trendy spaces for teenagers' },
    { name: 'Minimalist Bedroom', description: 'Clean and simple designs for a peaceful retreat' },
    { name: 'Luxury Bedroom', description: 'Premium designs with high-end finishes and details' }
  ];

  const galleryImages = [
    { src: bedroom1, alt: 'Bedroom Design 1' },
    { src: bedroom2, alt: 'Bedroom Design 2' },
    { src: bedroom3, alt: 'Bedroom Design 3' },
    { src: bedroom4, alt: 'Bedroom Design 4' },
    { src: bedroom5, alt: 'Bedroom Design 5' },
    { src: bedroom6, alt: 'Bedroom Design 6' },
    { src: bedroom7, alt: 'Bedroom Design 7' }
  ];

  return (
    <div className="service-page bedroom-page">
      <section className="service-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${bedroom1})` }}
        ></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Service</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">BEDROOM DESIGNS</h1>
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
            <h2 className="section-title">Our Bedroom Designs</h2>
            <p className="section-description">Explore our stunning collection of bedroom designs</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="card-gradient-bg"></div>
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>Bedroom Design {index + 1}</h3>
                      <p>Premium Bedroom</p>
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
            <h2 className="section-title">Why Choose Our Bedroom Designs</h2>
            <p className="section-description">Premium quality and personalized comfort</p>
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
            <h2 className="section-title">Bedroom Types</h2>
            <p className="section-description">Explore our range of bedroom design solutions</p>
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
              <h2>Ready to Transform Your Bedroom?</h2>
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

export default Bedroom;
