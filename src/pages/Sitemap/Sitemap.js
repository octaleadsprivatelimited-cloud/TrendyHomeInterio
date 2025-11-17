import React from 'react';
import { Link } from 'react-router-dom';
import './Sitemap.scss';

const sitemapSections = [
  {
    label: 'Core Experiences',
    description: 'Start with the most visited experiences across the platform.',
    accent: 'primary',
    links: [
      { to: '/', text: 'Home' },
      { to: '/services', text: 'Services' },
      { to: '/design-gallery', text: 'Design Gallery' },
      { to: '/design-ideas', text: 'Design Ideas' },
      { to: '/estimate', text: 'Instant Estimate' },
    ],
  },
  {
    label: 'Living Spaces',
    description: 'Curated journeys for every room and lifestyle need.',
    accent: 'neutral',
    links: [
      { to: '/modular-kitchen', text: 'Modular Kitchen' },
      { to: '/wardrobe', text: 'Wardrobe' },
      { to: '/bedroom', text: 'Bedroom' },
      { to: '/living-room', text: 'Living Room' },
      { to: '/bathroom', text: 'Bathroom' },
      { to: '/space-saving-furniture', text: 'Space Saving Furniture' },
      { to: '/home-office', text: 'Home Office' },
    ],
  },
  {
    label: 'Stories & Inspiration',
    description: 'Dive deeper into our philosophy, work, and community.',
    accent: 'warm',
    links: [
      { to: '/about-us', text: 'About Us' },
      { to: '/customer-stories', text: 'Customer Stories' },
      { to: '/business-interiors', text: 'Business Interiors' },
      { to: '/design-journal', text: 'Design Journal' },
      { to: '/design-library', text: 'Design Library' },
      { to: '/interiors-by-trendyhomeinterio', text: 'Interiors by TrendyHomeInterio' },
    ],
  },
  {
    label: 'Programs & Extensions',
    description: 'Specialized offerings that extend the TrendyHomeInterio ecosystem.',
    accent: 'cool',
    links: [
      { to: '/trendyhomeinterio-luxe', text: 'TrendyHomeInterio Luxe' },
      { to: '/trendyhomeinterio-decko', text: 'TrendyHomeInterio Decko' },
      { to: '/trendyhomeinterio-care', text: 'TrendyHomeInterio Care' },
      { to: '/tech', text: 'Tech' },
      { to: '/partner', text: 'Partner With Us' },
      { to: '/refer', text: 'Refer & Earn' },
    ],
  },
  {
    label: 'Support & Resources',
    description: 'All the essentials for guidance, policies, and help.',
    accent: 'neutral',
    links: [
      { to: '/contact', text: 'Contact' },
      { to: '/support', text: 'Support' },
      { to: '/store-locator', text: 'Store Locator' },
      { to: '/careers', text: 'Careers' },
      { to: '/login', text: 'Client Login' },
      { to: '/privacy', text: 'Privacy Policy' },
      { to: '/terms', text: 'Terms of Use' },
      { to: '/faq', text: 'FAQs' },
    ],
  },
];

const Sitemap = () => {
  return (
    <div className="sitemap-page">
      <section className="sitemap-hero">
        <div className="sitemap-hero-content">
          <span className="hero-pill">Sitemap</span>
          <h1>Everything TrendyHomeInterio, beautifully organized</h1>
          <p>
            Explore every experience, service, and resource we offer from a single, thoughtfully
            designed map. Use it as a quick navigator or share it with clients and collaborators.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="hero-btn primary">
              Talk to a Designer
            </Link>
            <a href="/sitemap.xml" className="hero-btn ghost" target="_blank" rel="noopener noreferrer">
              Download XML
            </a>
          </div>
        </div>
        <div className="sitemap-hero-visual">
          <div className="node node-main">
            <span>TrendyHomeInterio</span>
          </div>
          <div className="node node-secondary">Design</div>
          <div className="node node-secondary">Build</div>
          <div className="node node-secondary">Care</div>
          <div className="node node-tertiary">Stories</div>
          <div className="node node-tertiary">Support</div>
        </div>
      </section>

      <section className="sitemap-grid">
        {sitemapSections.map((section) => (
          <div key={section.label} className={`sitemap-card ${section.accent}`}>
            <div className="card-header">
              <span className="card-label">{section.label}</span>
              <p>{section.description}</p>
            </div>
            <ul className="card-links">
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>
                    <span>{link.text}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 12L12 4M12 4H5M12 4V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="sitemap-cta">
        <div className="cta-card">
          <div>
            <p className="cta-label">Need a custom walkthrough?</p>
            <h2>We can curate a presentation-ready sitemap just for you.</h2>
            <p>
              Share your brief and our design advisors will assemble exactly what you need—PDF decks,
              moodboards, pricing, and more.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="cta-btn primary">
              Book a Consultation
            </Link>
            <a href="/sitemap.xml" className="cta-btn secondary" target="_blank" rel="noopener noreferrer">
              View XML Sitemap
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;

