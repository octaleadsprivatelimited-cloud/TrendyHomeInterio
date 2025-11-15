import React from 'react';
import aboutUsHero from '../../assets/images/about-us-hero.jpeg';
import './AboutUs.scss';

const AboutUs = () => {
  const values = [
    {
      title: 'Our Mission',
      description: 'To create beautiful, functional spaces that enhance the quality of life for our clients through innovative design solutions.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 6V2M24 46V42M42 24H46M2 24H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Our Vision',
      description: 'To be the leading interior design firm recognized for creativity, excellence, and commitment to client satisfaction.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 16V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: 'Our Values',
      description: 'We believe in integrity, creativity, attention to detail, and building lasting relationships with our clients.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 2L30 16L44 18L32 28L34 42L24 34L14 42L16 28L4 18L18 16L24 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const stats = [
    { 
      number: '500+', 
      label: 'Projects Completed',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M16 4L8 8V20L16 24L24 20V8L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4V16M16 16L24 8M16 16L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 12L32 8V20L24 24L16 20V8L24 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 12V24M24 24L32 16M24 24L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 20L8 24V36L16 40L24 36V24L16 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 20V32M16 32L24 24M16 32L8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      number: '10+', 
      label: 'Years Experience',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      number: '98%', 
      label: 'Client Satisfaction',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 2L30 16L44 18L32 28L34 42L24 34L14 42L16 28L4 18L18 16L24 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 8L28 18L38 20L30 26L32 38L24 32L16 38L18 26L10 20L20 18L24 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      number: '50+', 
      label: 'Awards Won',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 4L28 12L36 14L30 20L32 28L24 24L16 28L18 20L12 14L20 12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 20V36M24 36L18 40M24 36L30 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="2" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="hero-background" style={{ backgroundImage: `url(${aboutUsHero})` }}>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
        </div>
      </section>

      <div className="about-body">
        <section className="about-story">
        <div className="container">
          <div className="story-header">
            <div className="story-badge">
              <span className="badge-text">Our Story</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="story-title">Passionate About Design</h2>
            <p className="story-subtitle">Transforming spaces into extraordinary environments since 2014</p>
          </div>

          <div className="story-content">
            <div className="story-text-card">
              <div className="card-gradient-bg"></div>
              <div className="card-content-wrapper">
                <div className="story-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L8 12V28L24 36L40 28V12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 4V20M24 20L40 12M24 20L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Vision</h3>
                <p>
                  TrendyHomeInterio was founded with a vision to transform ordinary spaces into extraordinary 
                  environments. With over a decade of experience in the design industry, we've helped 
                  countless clients create spaces that reflect their personality and meet their lifestyle needs.
                </p>
              </div>
            </div>

            <div className="story-text-card">
              <div className="card-gradient-bg"></div>
              <div className="card-content-wrapper">
                <div className="story-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 2L30 16L44 18L32 28L34 42L24 34L14 42L16 28L4 18L18 16L24 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Expertise</h3>
                <p>
                  Our team of talented designers brings creativity, expertise, and passion to every project. 
                  We stay up-to-date with the latest design trends and techniques to ensure your space is 
                  both stylish and timeless.
                </p>
              </div>
            </div>

            <div className="story-text-card">
              <div className="card-gradient-bg"></div>
              <div className="card-content-wrapper">
                <div className="story-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 16V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Our Commitment</h3>
                <p>
                  We believe that great design is not just about aesthetics—it's about creating spaces 
                  that enhance your quality of life. Our team is dedicated to understanding your unique 
                  needs and translating them into beautiful, functional designs.
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className="values-section">
        <div className="container">
          <div className="values-header">
            <div className="values-badge">
              <span className="badge-text">What Drives Us</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="values-title">Our Core Values</h2>
            <p className="values-description">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className={`value-card value-card-${index + 1}`}>
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <div className="value-icon-wrapper">
                    <div className="value-icon">{value.icon}</div>
                    <div className="icon-glow"></div>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <div className="value-decoration">
                    <div className="decoration-line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="stats-section">
        <div className="container">
          <div className="stats-header">
            <div className="stats-badge">
              <span className="badge-text">Our Achievements</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="stats-title">Numbers That Speak</h2>
            <p className="stats-description">A decade of excellence in interior design</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card stat-card-${index + 1}`}>
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <div className="stat-icon-wrapper">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="icon-glow"></div>
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-decoration">
                    <div className="decoration-dot"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        <section className="team-section">
        <div className="container">
          <div className="team-header">
            <div className="team-badge">
              <span className="badge-text">Our Team</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="team-title">Meet the Experts</h2>
            <p className="team-description">Our talented team of designers brings years of experience and creative vision to every project</p>
          </div>
          <div className="team-grid">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Lead Interior Designer',
                experience: '12+ Years',
                expertise: 'Modern & Minimalist',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 42C8 34 14 28 24 28C34 28 40 34 40 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: 'Michael Chen',
                role: 'Senior Design Architect',
                experience: '15+ Years',
                expertise: 'Luxury & Commercial',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L8 12V28L24 36L40 28V12L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 4V20M24 20L40 12M24 20L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: 'Emily Rodriguez',
                role: 'Creative Director',
                experience: '10+ Years',
                expertise: 'Residential & Space Planning',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 20L22 26L32 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                name: 'David Kumar',
                role: 'Project Manager',
                experience: '8+ Years',
                expertise: 'Execution & Quality',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((member, index) => (
              <div key={index} className={`team-card team-card-${index + 1}`}>
                <div className="card-gradient-bg"></div>
                <div className="card-content-wrapper">
                  <div className="team-avatar">
                    <div className="avatar-icon">{member.icon}</div>
                    <div className="avatar-glow"></div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="team-details">
                      <div className="team-detail-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{member.experience}</span>
                      </div>
                      <div className="team-detail-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{member.expertise}</span>
                      </div>
                    </div>
                  </div>
                  <div className="team-social">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 14V9M7 6V6.01M13 14V11C13 10.4696 12.7893 9.96086 12.4142 9.58579C12.0391 9.21071 11.5304 9 11 9H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a href="mailto:contact@trendyhomeinterio.com" className="social-link" aria-label="Email">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M3 4L10 10L17 4M3 4H17M3 4V16H17V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
