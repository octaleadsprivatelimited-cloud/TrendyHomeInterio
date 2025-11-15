import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerStories.scss';

const CustomerStories = () => {
  const stories = [
    {
      name: 'Rajesh & Priya Sharma',
      location: 'Mumbai',
      type: '3 BHK Apartment',
      quote: 'TrendyHomeInterio transformed our compact apartment into a spacious, modern home. The space-saving solutions were brilliant!',
      rating: 5,
      project: 'Complete Home Makeover'
    },
    {
      name: 'Amit & Neha Patel',
      location: 'Delhi',
      type: '4 BHK Villa',
      quote: 'From design to execution, everything was seamless. Our home now reflects our personality perfectly.',
      rating: 5,
      project: 'Luxury Villa Interior'
    },
    {
      name: 'Vikram & Anjali Reddy',
      location: 'Bangalore',
      type: '2 BHK Apartment',
      quote: 'The team understood our needs and delivered beyond expectations. Highly professional and creative!',
      rating: 5,
      project: 'Modern Apartment Design'
    },
    {
      name: 'Suresh & Kavita Iyer',
      location: 'Chennai',
      type: '5 BHK Villa',
      quote: 'Premium quality materials and excellent craftsmanship. Our home is now a showpiece!',
      rating: 5,
      project: 'Premium Villa Interior'
    },
    {
      name: 'Rahul & Sneha Mehta',
      location: 'Pune',
      type: '3 BHK Apartment',
      quote: 'The 3D visualization helped us see the final result before execution. Amazing attention to detail!',
      rating: 5,
      project: 'Contemporary Design'
    },
    {
      name: 'Arjun & Divya Nair',
      location: 'Hyderabad',
      type: '4 BHK Apartment',
      quote: 'On-time delivery and excellent customer service. Our dream home is now a reality!',
      rating: 5,
      project: 'Complete Home Renovation'
    }
  ];

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 2L20 10L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '50K+ Happy Customers',
      description: 'Trusted by thousands of satisfied homeowners'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '4.9/5 Rating',
      description: 'Consistently high ratings from our customers'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L26 10M16 16L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: '10 Year Warranty',
      description: 'Long-term assurance on all installations'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12H28M4 18H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Real Stories',
      description: 'Genuine experiences from real customers'
    }
  ];

  return (
    <div className="service-page customer-stories-page">
      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Stories</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">CUSTOMER STORIES</h1>
            <p className="hero-description">
              Read about real homeowners who transformed their spaces with TrendyHomeInterio. 
              Discover their journeys, challenges, and the beautiful results we created together.
            </p>
            <Link to="/estimate" className="hero-cta">
              <span>Get Free Estimate</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="service-features">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Trust</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Why Customers Trust Us</h2>
            <p className="section-description">Real results from real customers</p>
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
              <span className="badge-text">Stories</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Customer Success Stories</h2>
            <p className="section-description">Real experiences from satisfied customers</p>
          </div>
          <div className="designs-grid">
            {stories.map((story, index) => (
              <div key={index} className="design-card story-card">
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <div className="story-header">
                    <div className="story-avatar">
                      <div className="avatar-initial">{story.name.charAt(0)}</div>
                    </div>
                    <div className="story-info">
                      <h3>{story.name}</h3>
                      <p className="story-meta">{story.location} • {story.type}</p>
                    </div>
                  </div>
                  <div className="story-rating">
                    {[...Array(story.rating)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 1L11.5 6.5L17.5 7.5L13 11.5L14.5 17.5L9 14.5L3.5 17.5L5 11.5L0.5 7.5L6.5 6.5L9 1Z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="story-quote">{story.quote}</blockquote>
                  <div className="story-project">{story.project}</div>
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
              <h2>Ready to Create Your Success Story?</h2>
              <p>Join thousands of happy customers and transform your home today</p>
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

export default CustomerStories;
