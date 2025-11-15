import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBackground from '../../assets/images/hero-background.jpeg';
import kitchenImage from '../../assets/images/modular-kitchen-1.jpeg';
import livingRoomImage from '../../assets/images/living-room-1.jpeg';
import wardrobeImage from '../../assets/images/wardrobe-1.jpeg';
import bedroomImage from '../../assets/images/bedroom-1.jpeg';
import bathroomImage from '../../assets/images/bathroom-1.jpeg';
import './Home.scss';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const projects = [
    {
      title: 'Skyline Residence',
      type: 'Residential',
      description: 'Calming neutral palette, layered lighting, and bespoke storage for a 3BHK home.',
      location: 'Mumbai',
      size: '3BHK • 1500 sq.ft',
      timeline: '60 days',
      tags: ['Warm neutrals', 'Smart storage'],
      category: 'residential'
    },
    {
      title: 'Gourmet Kitchen Studio',
      type: 'Residential',
      description: 'Chef-inspired kitchen with quartz surfaces, glass cabinets, and concealed appliances.',
      location: 'Bengaluru',
      size: 'Open kitchen • 320 sq.ft',
      timeline: '45 days',
      tags: ['Quartz counters', 'Handle-less shutters'],
      category: 'residential'
    },
    {
      title: 'Serene Master Suite',
      type: 'Residential',
      description: 'Soft textures, mood lighting, and custom wardrobes for a restful master suite.',
      location: 'Chennai',
      size: 'Master suite • 420 sq.ft',
      timeline: '50 days',
      tags: ['Mood lighting', 'Walk-in storage'],
      category: 'residential'
    },
    {
      title: 'Signature Dining Lounge',
      type: 'Residential',
      description: 'Statement dining with fluted panels, layered lighting, and curated art styling.',
      location: 'Hyderabad',
      size: 'Dining + lounge • 380 sq.ft',
      timeline: '55 days',
      tags: ['Fluted panels', 'Custom banquette'],
      category: 'luxury'
    },
    {
      title: 'Collaborative Workspace',
      type: 'Commercial',
      description: 'Flexible zones, acoustic pods, and biophilic elements for a modern office.',
      location: 'Bengaluru',
      size: 'Office • 4200 sq.ft',
      timeline: '75 days',
      tags: ['Agile zones', 'Acoustic pods'],
      category: 'commercial'
    },
    {
      title: 'Retail Experience Center',
      type: 'Commercial',
      description: 'Immersive retail with modular displays, lighting trails, and interactive demos.',
      location: 'Delhi NCR',
      size: 'Retail • 2800 sq.ft',
      timeline: '68 days',
      tags: ['Interactive demos', 'Modular displays'],
      category: 'commercial'
    },
    {
      title: 'Luxury Lounge',
      type: 'Residential',
      description: 'High-gloss finishes, sculptural lighting, and plush seating for premium living.',
      location: 'Pune',
      size: 'Living lounge • 450 sq.ft',
      timeline: '58 days',
      tags: ['Sculptural lights', 'Plush seating'],
      category: 'luxury'
    },
    {
      title: 'Reception Atrium',
      type: 'Commercial',
      description: 'Double-height reception with terrazzo flooring, bespoke desks, and green walls.',
      location: 'Kochi',
      size: 'Lobby • 1200 sq.ft',
      timeline: '62 days',
      tags: ['Green wall', 'Terrazzo flooring'],
      category: 'commercial'
    }
  ];

  const brandHighlights = [
    {
      title: 'Concierge discovery',
      description: 'In-depth interviews, mood films, and taste-mapping to frame every brief.'
    },
    {
      title: 'Material ateliers',
      description: 'Curated libraries, sample walls, and mockups so decisions feel tactile.'
    },
    {
      title: 'Concierge delivery',
      description: 'Dedicated pods, daily updates, and styled handovers that feel effortless.'
    }
  ];

  const aboutStats = [
    { value: '50K+', label: 'Homes crafted', detail: 'Pan-India delivery' },
    { value: '600+', label: 'Design experts', detail: 'Strategy + ops' },
    { value: '45 Days', label: 'Delivery promise', detail: 'Guaranteed timeline' },
    { value: '10 Yr', label: 'Warranty coverage', detail: 'After-care support' }
  ];

  const aboutMilestones = [
    { year: '2014', title: 'Studio launch', description: 'Opened our first Mumbai experience center with 3 pods.' },
    { year: '2018', title: 'Design Lab 2.0', description: 'Introduced immersive VR previews and remote collaboration tools.' },
    { year: '2021', title: 'Nationwide pods', description: 'Scaled agile execution teams across 8 Indian cities.' },
    { year: '2024', title: 'Experience OS', description: 'Rolled out AI-assisted planning and concierge delivery.' }
  ];

  const trustStats = [
    { value: '60+', label: 'Projects every year', detail: 'Homes, studios, commercial suites' },
    { value: '4.9/5', label: 'Client rating', detail: 'Across Google, Houzz, and in-person' },
    { value: '6+', label: 'Years of delivery', detail: 'Pods active across 3 metro cities' },
    { value: '100%', label: 'Satisfaction', detail: 'Dedicated after-care & support' }
  ];

  const processJourney = [
    {
      phase: '01',
      title: 'Discovery Lab',
      summary: 'Ethnography sprints turn routines, tastes, and budgets into a crisp UX-style brief.',
      duration: 'Week 1-2',
      owner: 'Lead Strategist',
      experience: 'In-studio + virtual',
      rituals: ['Lifestyle audit', 'Mood film workshop', 'Budget mapping']
    },
    {
      phase: '02',
      title: 'Co-Creation Cloud',
      summary: 'Digital twins, VR previews, and tactile kits keep every decision fast and visual.',
      duration: 'Week 3-5',
      owner: 'Design Director',
      experience: 'Hybrid reviews',
      rituals: ['Weekly digital twin', 'Sample tasting', 'Async approvals']
    },
    {
      phase: '03',
      title: 'Build Pods & QA',
      summary: 'Specialist pods build, ship, and install with daily QA snapshots and dashboards.',
      duration: 'Week 6-9',
      owner: 'Pod PM + QA lead',
      experience: 'On-site rituals',
      rituals: ['Pod stand-ups', 'QC scorecards', 'Client site walks']
    },
    {
      phase: '04',
      title: 'Concierge Launch',
      summary: 'Styled reveal, warranty onboarding, and proactive care keep the space “day one”.',
      duration: 'Week 10+',
      owner: 'Concierge team',
      experience: 'White-glove handover',
      rituals: ['Styled reveal', 'Warranty vault', 'Annual health checks']
    }
  ];

  const processMetrics = [
    { value: '92%', label: 'design approvals happen on the first review' },
    { value: '48 hrs', label: 'average turn-around for change requests' },
    { value: '4.9/5', label: 'handover happiness across the last 120 builds' }
  ];

  const whyCards = [
    {
      badge: 'Residential & Commercial',
      title: 'Complete interior solutions',
      description: 'From concept to move-in, every detail is handled by a single studio team.',
      points: ['Space planning', 'Material selection', 'Execution management']
    },
    {
      badge: 'Process',
      title: 'Transparent project updates',
      description: 'Track progress, approvals, and billing through a single dashboard.',
      points: ['Dedicated PM', 'Milestone billing', 'Weekly walk-throughs']
    },
    {
      badge: 'Quality',
      title: 'Premium craftsmanship network',
      description: 'Certified vendors, curated materials, and multi-level quality checks.',
      points: ['10-year warranty', 'QC checklists', 'After-care support']
    }
  ];

  const testimonialStories = [
    {
      name: 'Aisha Verma',
      role: 'Product Lead, Mumbai',
      project: '3BHK Residence',
      quote: 'Every ritual—from morning coffee to weekend hosting—was mapped and designed for. The final home feels intuitive and iconic.',
      metric: '98% punch-list cleared day 1'
    },
    {
      name: 'Rohan Mehta',
      role: 'Retail Director, Delhi',
      project: 'Experience Center',
      quote: 'Customers spend 27% longer in-store thanks to circulation tweaks and lighting theaters. The space finally mirrors our brand.',
      metric: '+27% dwell time'
    },
    {
      name: 'Priya Nair',
      role: 'Strategy Head, Bengaluru',
      project: 'Hybrid Home + Office',
      quote: 'TrendyHomeInterio ran the project like a product sprint—clear rituals, prototypes, and dependable delivery.',
      metric: 'Zero schedule slip'
    }
  ];

  const servicesShowcase = [
    {
      title: 'Modular Kitchen Studios',
      description: 'Chef-grade layouts, quartz counters, and motion-organized storage suites tailored to your cooking rituals.',
      badge: 'Flagship',
      category: 'Kitchens',
      metrics: [
        { label: 'Layouts', value: '120+' },
        { label: 'Delivery', value: '30 days' }
      ],
      to: '/modular-kitchen',
      image: kitchenImage
    },
    {
      title: 'Living & Lounge Concepts',
      description: 'Immersive lighting, smart furniture, and curated styling kits for social-ready living rooms.',
      badge: 'Trending',
      category: 'Living',
      metrics: [
        { label: 'Mood kits', value: '24' },
        { label: 'Styling', value: 'Done-for-you' }
      ],
      to: '/living-room',
      image: livingRoomImage
    },
    {
      title: 'Wardrobe & Storage Systems',
      description: 'Floor-to-ceiling wardrobes, walk-ins, and adaptive storage modules engineered for every routine.',
      badge: 'Best Seller',
      category: 'Wardrobes',
      metrics: [
        { label: 'Modules', value: '40+' },
        { label: 'Warranty', value: '10 years' }
      ],
      to: '/wardrobe',
      image: wardrobeImage
    },
    {
      title: 'Calm Bedroom Retreats',
      description: 'Bespoke headboards, layered textures, and integrated lighting for deeply restful suites.',
      badge: 'New Drop',
      category: 'Bedrooms',
      metrics: [
        { label: 'Concepts', value: '30+' },
        { label: 'Install', value: '25 days' }
      ],
      to: '/bedroom',
      image: bedroomImage
    }
  ];

  return (
    <div className="home-page" style={{ backgroundColor: '#f7f7f5' }}>
      <div className="page-background-overlay"></div>
      {/* Hero Section - Modern Card-Based Design */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge-card">
              <span className="badge-dot"></span>
              <span>Trusted by 50,000+ Happy Customers</span>
            </div>
            
            <h1 className="hero-title">
              Interiors you'll <span className="highlight">love.</span>
            </h1>
            <p className="hero-subtitle">Without the stress!</p>
            
            <div className="hero-features-cards">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <strong>45 Days</strong>
                  <span>Delivery</span>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <strong>10 Year</strong>
                  <span>Warranty</span>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <strong>Free</strong>
                  <span>Design Consultation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-form-card">
            <div className="form-card-header">
              <h2>Meet a designer</h2>
              <p>Get personalized 3D designs for your home</p>
            </div>
            
            <form className="designer-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Mobile Number</label>
                <div className="phone-input-group">
                  <div className="country-code">
                    <span>🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="98765 43210"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="btn-primary-sm submit-button">
                <span className="cta-label">Send</span>
                <span className="free-badge">FREE</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <p className="form-disclaimer">
                By submitting, you agree to our <Link to="/privacy">privacy policy</Link> and <Link to="/terms">terms of use</Link>
              </p>
            </form>
          </div>
        </div>
        
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
      </section>

      <section className="section brand-section">
        <div className="container">
          <div className="brand-grid">
            <div className="brand-copy">
              <p className="section-eyebrow">Interior atelier</p>
              <h2>We craft spaces that feel editorial, effortless, and unmistakably yours</h2>
              <p>
                Each commission is run like a bespoke collection: discovery rituals, material ateliers, and concierge delivery pods under one roof.
                We balance intuition with rigor so every room feels warm, intelligent, and built to last.
              </p>
              <div className="brand-highlights">
                {brandHighlights.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="brand-cta">
                <Link to="/contact" className="btn-primary-sm">Schedule a walk-through</Link>
                <Link to="/design-gallery" className="btn-outline-sm">View portfolio</Link>
              </div>
            </div>
            <div className="brand-visual">
              <div className="visual-primary">
                <img src={livingRoomImage} alt="Signature living room" />
                <div className="visual-caption">
                  <span>Signature Living</span>
                  <p>Mumbai • 3,200 sq.ft</p>
                </div>
              </div>
              <div className="visual-stack">
                <div className="visual-card">
                  <p>Since 2014</p>
                  <span>Multi-city delivery pods with in-house styling</span>
                </div>
                <div className="visual-card accent">
                  <strong>45 Day</strong>
                  <span>handover promise with concierge care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section assurance-section">
        <div className="container">
          <div className="assurance-grid">
            {trustStats.map((stat) => (
              <div key={stat.label} className="assurance-card">
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
                <p>{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section studio-section">
        <div className="container">
          <div className="studio-grid">
            <div className="studio-card stats">
              <p className="section-eyebrow">Studio in numbers</p>
              <h2>Scale meets boutique attention</h2>
              <div className="stat-grid">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    <p>{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="studio-card milestones">
              <p className="section-eyebrow">Milestones</p>
              <h2>Moments that shaped our craft</h2>
              <ul>
                {aboutMilestones.map((milestone) => (
                  <li key={milestone.year}>
                    <span>{milestone.year}</span>
                    <div>
                      <strong>{milestone.title}</strong>
                      <p>{milestone.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlights-section">
        <div className="container">
          <div className="section-heading center">
            <p className="section-eyebrow">Signature pillars</p>
            <h2>Every project blends strategy, craft, and service</h2>
            <p>Residential and commercial spaces delivered with a tried-and-tested operating model.</p>
          </div>
          <div className="highlights-grid">
            {whyCards.map((card) => (
              <div key={card.title} className="highlight-card">
                <span className="pill">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading center">
            <p className="section-eyebrow">Our Services</p>
            <h2>Complete interior design solutions</h2>
            <p>From a single room refresh to multi-floor commercial spaces, we tailor every deliverable.</p>
          </div>
          <div className="services-grid">
            {servicesShowcase.map((service) => (
              <Link to={service.to} key={service.title} className="service-card">
                <div className="service-media">
                  <img src={service.image} alt={service.title} />
                  <span className="service-badge">{service.badge}</span>
                </div>
                <div className="service-content">
                  <span className="service-category">{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-metrics">
                    {service.metrics.map((metric) => (
                      <div key={metric.label}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="services-footer">
            <Link to="/services" className="btn-outline-sm">Explore all services</Link>
            <Link to="/contact" className="btn-text-link">Need a custom scope?</Link>
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-heading center">
            <p className="section-eyebrow">Recent Work</p>
            <h2>Featured projects that inspire</h2>
            <p>Every build pairs smart planning with premium materials to create timeless interiors.</p>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 6).map((project, index) => (
              <Link key={index} to="/customer-stories" className="project-card">
                <div className="project-media">
                  <img
                    src={
                      project.category === 'commercial' ? bedroomImage :
                      project.category === 'luxury' ? livingRoomImage :
                      kitchenImage
                    }
                    alt={project.title}
                  />
                  <span className="project-tag">{project.type}</span>
                </div>
                <div className="project-content">
                  <div className="meta">
                    <span>{project.location}</span>
                    <span>{project.size}</span>
                    <span>{project.timeline}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/design-gallery" className="btn-primary-sm">View full gallery</Link>
            <Link to="/customer-stories" className="btn-text-link">Read customer stories</Link>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading center compact">
            <p className="section-eyebrow">Our Process</p>
            <h2>UI/UX cards that make every phase feel effortless</h2>
            <p>Four crisp rituals, one team of owners, zero guesswork.</p>
          </div>

          <div className="process-card-grid">
            {processJourney.map((step) => (
              <article key={step.phase} className="ux-card">
                <div className="ux-card-header">
                  <span className="ux-phase">Phase {step.phase}</span>
                  <span className="ux-duration">{step.duration}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
                <div className="ux-card-meta">
                  <span>{step.owner}</span>
                  <span>{step.experience}</span>
                </div>
                <div className="ux-chip-row">
                  {step.rituals.map((ritual) => (
                    <span key={ritual}>{ritual}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="process-info-row">
            {processMetrics.map((metric) => (
              <div key={metric.label} className="process-info-card">
                <span className="value">{metric.value}</span>
                <p>{metric.label}</p>
              </div>
            ))}
            <div className="process-cta-card">
              <p>Need to see the backstage dashboard?</p>
              <small>We’ll share a sample sprint board and RCA log during the consult.</small>
              <Link to="/services" className="btn-outline-sm">View detailed playbook</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading center">
            <p className="section-eyebrow">Testimonials</p>
            <h2>What our clients are saying</h2>
            <p>Real stories from homeowners, founders, and teams who trusted us with their spaces.</p>
          </div>
          <div className="testimonials-grid">
            {testimonialStories.map((story) => (
              <div key={story.name} className="testimonial-card">
                <span className="project">{story.project}</span>
                <div className="testimonial-rating">
                  <span>★★★★★</span>
                  <small>Verified client</small>
                </div>
                <blockquote>{story.quote}</blockquote>
                <div className="author">
                  <div className="avatar">{story.name.charAt(0)}</div>
                  <div>
                    <h4>{story.name}</h4>
                    <p>{story.role}</p>
                    <span>{story.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-text">
              <p className="section-eyebrow">Ready to begin?</p>
              <h2>Let’s craft a space that feels distinctly yours</h2>
              <p>Book a walkthrough of our design lab, explore finishes, and leave with a clear roadmap.</p>
            </div>
            <div className="cta-actions">
              <Link to="/estimate" className="btn-primary-sm">Book a consultation</Link>
              <Link to="/contact" className="btn-outline-sm">Talk to our team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
