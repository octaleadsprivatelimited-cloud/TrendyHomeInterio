import React, { useState } from 'react';
import './DesignIdeas.scss';

const DesignIdeas = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'modern', 'classic', 'industrial', 'scandinavian', 'bohemian', 'luxury'];

  const designIdeas = [
    { id: 1, category: 'modern', title: 'Modern Minimalist', description: 'Clean lines and neutral colors' },
    { id: 2, category: 'classic', title: 'Contemporary Classic', description: 'Timeless elegance with modern touches' },
    { id: 3, category: 'industrial', title: 'Industrial Chic', description: 'Raw materials and urban aesthetics' },
    { id: 4, category: 'scandinavian', title: 'Scandinavian Style', description: 'Light, airy spaces with natural materials' },
    { id: 5, category: 'bohemian', title: 'Bohemian Vibes', description: 'Eclectic mixes of colors and patterns' },
    { id: 6, category: 'luxury', title: 'Luxury Modern', description: 'High-end finishes and sophisticated design' },
    { id: 7, category: 'modern', title: 'Urban Modern', description: 'Sleek design for city living' },
    { id: 8, category: 'classic', title: 'Traditional Elegance', description: 'Classic design with modern comfort' },
    { id: 9, category: 'scandinavian', title: 'Nordic Minimalism', description: 'Simplicity meets functionality' }
  ];

  const filteredIdeas = activeCategory === 'all' 
    ? designIdeas 
    : designIdeas.filter(idea => idea.category === activeCategory);

  return (
    <div className="design-ideas">
      <section className="ideas-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-label">Design Inspiration</span>
          <h1>Explore Design Ideas</h1>
          <p>Discover beautiful interior design styles and get inspired for your next project</p>
        </div>
      </section>

      <section className="ideas-content">
        <div className="container">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="ideas-grid">
            {filteredIdeas.map((idea) => (
              <div key={idea.id} className="idea-card">
                <div className="idea-image">
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <span className="placeholder-icon">✨</span>
                    </div>
                  </div>
                  <div className="idea-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                </div>
                <div className="idea-info">
                  <h3>{idea.title}</h3>
                  <p>{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inspiration-section">
        <div className="container">
          <div className="inspiration-content">
            <h2>Need More Inspiration?</h2>
            <p>Our design experts can help you create a space that perfectly reflects your style and needs.</p>
            <button className="cta-button">Get Design Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignIdeas;
