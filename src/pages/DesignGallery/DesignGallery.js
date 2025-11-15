import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DesignGallery.scss';

// Import hero background image
import heroBackground from '../../assets/images/hero-background.jpeg';

// Import all images by category
import modularKitchen1 from '../../assets/images/modular-kitchen-1.jpeg';
import modularKitchen2 from '../../assets/images/modular-kitchen-2.jpeg';
import modularKitchen3 from '../../assets/images/modular-kitchen-3.jpeg';
import modularKitchen4 from '../../assets/images/modular-kitchen-4.jpeg';
import modularKitchen5 from '../../assets/images/modular-kitchen-5.jpeg';

import wardrobe1 from '../../assets/images/wardrobe-1.jpeg';
import wardrobe2 from '../../assets/images/wardrobe-2.jpeg';
import wardrobe3 from '../../assets/images/wardrobe-3.jpeg';
import wardrobe4 from '../../assets/images/wardrobe-4.jpeg';
import wardrobe5 from '../../assets/images/wardrobe-5.jpeg';
import wardrobe6 from '../../assets/images/wardrobe-6.jpeg';

import bedroom1 from '../../assets/images/bedroom-1.jpeg';
import bedroom2 from '../../assets/images/bedroom-2.jpeg';
import bedroom3 from '../../assets/images/bedroom-3.jpeg';
import bedroom4 from '../../assets/images/bedroom-4.jpeg';
import bedroom5 from '../../assets/images/bedroom-5.jpeg';
import bedroom6 from '../../assets/images/bedroom-6.jpeg';
import bedroom7 from '../../assets/images/bedroom-7.jpeg';

import livingRoom1 from '../../assets/images/living-room-1.jpeg';
import livingRoom2 from '../../assets/images/living-room-2.jpeg';
import livingRoom3 from '../../assets/images/living-room-3.jpeg';
import livingRoom4 from '../../assets/images/living-room-4.jpeg';
import livingRoom5 from '../../assets/images/living-room-5.jpeg';
import livingRoom6 from '../../assets/images/living-room-6.jpeg';
import livingRoom7 from '../../assets/images/living-room-7.jpeg';
import livingRoom8 from '../../assets/images/living-room-8.jpeg';
import livingRoom9 from '../../assets/images/living-room-9.jpeg';

import bathroom1 from '../../assets/images/bathroom-1.jpeg';
import bathroom2 from '../../assets/images/bathroom-2.jpeg';
import bathroom3 from '../../assets/images/bathroom-3.jpeg';
import bathroom4 from '../../assets/images/bathroom-4.jpeg';
import bathroom5 from '../../assets/images/bathroom-5.jpeg';
import bathroom6 from '../../assets/images/bathroom-6.jpeg';
import bathroom7 from '../../assets/images/bathroom-7.jpeg';
import bathroom8 from '../../assets/images/bathroom-8.jpeg';

import homeOffice1 from '../../assets/images/home-office-1.jpeg';
import homeOffice2 from '../../assets/images/home-office-2.jpeg';
import homeOffice3 from '../../assets/images/home-office-3.jpeg';
import homeOffice4 from '../../assets/images/home-office-4.jpeg';
import homeOffice5 from '../../assets/images/home-office-5.jpeg';
import homeOffice6 from '../../assets/images/home-office-6.jpeg';
import homeOffice7 from '../../assets/images/home-office-7.jpeg';
import homeOffice8 from '../../assets/images/home-office-8.jpeg';

import spaceSaving1 from '../../assets/images/space-saving-furniture-1.jpeg';
import spaceSaving2 from '../../assets/images/space-saving-furniture-2.jpeg';
import spaceSaving3 from '../../assets/images/space-saving-furniture-3.jpeg';
import spaceSaving4 from '../../assets/images/space-saving-furniture-4.jpeg';
import spaceSaving5 from '../../assets/images/space-saving-furniture-5.jpeg';

import businessInteriors1 from '../../assets/images/business-interiors-1.jpeg';
import businessInteriors2 from '../../assets/images/business-interiors-2.jpeg';
import businessInteriors3 from '../../assets/images/business-interiors-3.jpeg';
import businessInteriors4 from '../../assets/images/business-interiors-4.jpeg';
import businessInteriors5 from '../../assets/images/business-interiors-5.jpeg';
import businessInteriors6 from '../../assets/images/business-interiors-6.jpeg';
import businessInteriors7 from '../../assets/images/business-interiors-7.jpeg';

const DesignGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Organize all images by category
  const galleryImages = {
    'Modular Kitchen': [
      { src: modularKitchen1, alt: 'Modular Kitchen Design 1' },
      { src: modularKitchen2, alt: 'Modular Kitchen Design 2' },
      { src: modularKitchen3, alt: 'Modular Kitchen Design 3' },
      { src: modularKitchen4, alt: 'Modular Kitchen Design 4' },
      { src: modularKitchen5, alt: 'Modular Kitchen Design 5' }
    ],
    'Wardrobe': [
      { src: wardrobe1, alt: 'Wardrobe Design 1' },
      { src: wardrobe2, alt: 'Wardrobe Design 2' },
      { src: wardrobe3, alt: 'Wardrobe Design 3' },
      { src: wardrobe4, alt: 'Wardrobe Design 4' },
      { src: wardrobe5, alt: 'Wardrobe Design 5' },
      { src: wardrobe6, alt: 'Wardrobe Design 6' }
    ],
    'Bedroom': [
      { src: bedroom1, alt: 'Bedroom Design 1' },
      { src: bedroom2, alt: 'Bedroom Design 2' },
      { src: bedroom3, alt: 'Bedroom Design 3' },
      { src: bedroom4, alt: 'Bedroom Design 4' },
      { src: bedroom5, alt: 'Bedroom Design 5' },
      { src: bedroom6, alt: 'Bedroom Design 6' },
      { src: bedroom7, alt: 'Bedroom Design 7' }
    ],
    'Living Room': [
      { src: livingRoom1, alt: 'Living Room Design 1' },
      { src: livingRoom2, alt: 'Living Room Design 2' },
      { src: livingRoom3, alt: 'Living Room Design 3' },
      { src: livingRoom4, alt: 'Living Room Design 4' },
      { src: livingRoom5, alt: 'Living Room Design 5' },
      { src: livingRoom6, alt: 'Living Room Design 6' },
      { src: livingRoom7, alt: 'Living Room Design 7' },
      { src: livingRoom8, alt: 'Living Room Design 8' },
      { src: livingRoom9, alt: 'Living Room Design 9' }
    ],
    'Bathroom': [
      { src: bathroom1, alt: 'Bathroom Design 1' },
      { src: bathroom2, alt: 'Bathroom Design 2' },
      { src: bathroom3, alt: 'Bathroom Design 3' },
      { src: bathroom4, alt: 'Bathroom Design 4' },
      { src: bathroom5, alt: 'Bathroom Design 5' },
      { src: bathroom6, alt: 'Bathroom Design 6' },
      { src: bathroom7, alt: 'Bathroom Design 7' },
      { src: bathroom8, alt: 'Bathroom Design 8' }
    ],
    'Home Office': [
      { src: homeOffice1, alt: 'Home Office Design 1' },
      { src: homeOffice2, alt: 'Home Office Design 2' },
      { src: homeOffice3, alt: 'Home Office Design 3' },
      { src: homeOffice4, alt: 'Home Office Design 4' },
      { src: homeOffice5, alt: 'Home Office Design 5' },
      { src: homeOffice6, alt: 'Home Office Design 6' },
      { src: homeOffice7, alt: 'Home Office Design 7' },
      { src: homeOffice8, alt: 'Home Office Design 8' }
    ],
    'Space Saving Furniture': [
      { src: spaceSaving1, alt: 'Space Saving Furniture 1' },
      { src: spaceSaving2, alt: 'Space Saving Furniture 2' },
      { src: spaceSaving3, alt: 'Space Saving Furniture 3' },
      { src: spaceSaving4, alt: 'Space Saving Furniture 4' },
      { src: spaceSaving5, alt: 'Space Saving Furniture 5' }
    ],
    'Business Interiors': [
      { src: businessInteriors1, alt: 'Business Interiors 1' },
      { src: businessInteriors2, alt: 'Business Interiors 2' },
      { src: businessInteriors3, alt: 'Business Interiors 3' },
      { src: businessInteriors4, alt: 'Business Interiors 4' },
      { src: businessInteriors5, alt: 'Business Interiors 5' },
      { src: businessInteriors6, alt: 'Business Interiors 6' },
      { src: businessInteriors7, alt: 'Business Interiors 7' }
    ]
  };

  // Get all images or filter by category
  const getAllImages = () => {
    if (selectedCategory === 'All') {
      return Object.values(galleryImages).flat();
    }
    return galleryImages[selectedCategory] || [];
  };

  const categories = [
    'All',
    'Modular Kitchen',
    'Wardrobe',
    'Bedroom',
    'Living Room',
    'Bathroom',
    'Home Office',
    'Space Saving Furniture',
    'Business Interiors'
  ];


  return (
    <div className="service-page design-gallery-page">
      <section className="service-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">Gallery</span>
              <div className="badge-line"></div>
            </div>
            <h1 className="hero-title">DESIGN GALLERY</h1>
            <p className="hero-description">
              Explore our extensive collection of interior design projects. 
              Browse through hundreds of completed homes and commercial spaces to find inspiration for your next project.
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

      <section className="service-designs">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-text">Gallery</span>
              <div className="badge-line"></div>
            </div>
            <h2 className="section-title">Design Gallery</h2>
            <p className="section-description">Browse designs by style and category</p>
          </div>

          {/* Category Filter */}
          <div className="gallery-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Gallery Grid */}
          <div className="gallery-grid">
            {getAllImages().map((image, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <p className="gallery-alt">{image.alt}</p>
                    </div>
                  </div>
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
              <h2>Inspired by Our Designs?</h2>
              <p>Get a free consultation and bring your favorite design to life</p>
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

export default DesignGallery;
