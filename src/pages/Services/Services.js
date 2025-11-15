import React from 'react';
import './Services.scss';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Design',
      description: 'Transform your home into a haven of comfort and style. We create personalized living spaces that reflect your personality and lifestyle.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design']
    },
    {
      icon: '🏢',
      title: 'Commercial Design',
      description: 'Create inspiring work environments that boost productivity and reflect your brand identity. From offices to retail spaces.',
      features: ['Office Design', 'Retail Spaces', 'Hospitality Design', 'Brand Identity']
    },
    {
      icon: '📐',
      title: 'Space Planning',
      description: 'Optimize your space for maximum functionality and flow. We analyze your needs and create efficient, beautiful layouts.',
      features: ['Floor Plans', '3D Visualization', 'Layout Optimization', 'Traffic Flow']
    },
    {
      icon: '🎨',
      title: 'Color Consultation',
      description: 'Expert advice on color schemes that enhance your space. We help you choose the perfect palette for every room.',
      features: ['Color Schemes', 'Paint Selection', 'Material Coordination', 'Mood Creation']
    },
    {
      icon: '🪑',
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that match your style and budget. We source quality pieces that combine form and function.',
      features: ['Custom Furniture', 'Furniture Sourcing', 'Style Matching', 'Budget Planning']
    },
    {
      icon: '🔨',
      title: 'Renovation Services',
      description: 'Complete renovation solutions from design to execution. We manage the entire process for a seamless experience.',
      features: ['Design & Build', 'Project Management', 'Contractor Coordination', 'Quality Control']
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-label">Our Services</span>
          <h1>Comprehensive Interior Design Solutions</h1>
          <p>From concept to completion, we deliver exceptional design services tailored to your needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-button">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>How We Work</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Consultation</h3>
              <p>We discuss your vision, lifestyle, and requirements to understand your needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design Concept</h3>
              <p>We create detailed design concepts with 3D visualizations for your approval.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Execution</h3>
              <p>We manage the entire project from sourcing materials to final installation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Completion</h3>
              <p>We ensure everything is perfect and provide ongoing support for your space.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
