import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:18001024663" className="top-bar-contact">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 2.5C2.5 1.94772 2.94772 1.5 3.5 1.5H4.5C5.05228 1.5 5.5 1.94772 5.5 2.5V3.5M2.5 9.5C2.5 10.0523 2.94772 10.5 3.5 10.5H4.5C5.05228 10.5 5.5 10.0523 5.5 9.5V8.5M9.5 1.5H8.5C7.94772 1.5 7.5 1.94772 7.5 2.5V3.5M9.5 10.5H8.5C7.94772 10.5 7.5 10.0523 7.5 9.5V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 6H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span>1800-102-4663</span>
            </a>
            <a href="mailto:hello@trendyhomeinterio.com" className="top-bar-contact">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3L6 6.5L10.5 3M1.5 3V9H10.5V3M1.5 3H10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>hello@trendyhomeinterio.com</span>
            </a>
            <span className="top-bar-address">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1C4.34315 1 3 2.34315 3 4C3 6.5 6 11 6 11C6 11 9 6.5 9 4C9 2.34315 7.65685 1 6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="6" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Mumbai, Maharashtra</span>
            </span>
          </div>
          <div className="top-bar-right">
            <Link to="/partner">Partner with Us</Link>
            <Link to="/refer">Refer and Earn</Link>
            <Link to="/careers">Join Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">TrendyHomeInterio</span>
          </Link>
          
          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link 
              to="/about-us" 
              className={`navbar-link ${isActive('/about-us') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            <div 
              className={`navbar-item dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="navbar-link">
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '4px', display: 'inline-block'}}>
                  <path d="M6 9L1 4H11L6 9Z" fill="currentColor"/>
                </svg>
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'services' ? 'visible' : ''}`}>
                <Link to="/modular-kitchen" onClick={() => setIsMobileMenuOpen(false)}>Modular Kitchen</Link>
                <Link to="/wardrobe" onClick={() => setIsMobileMenuOpen(false)}>Wardrobe</Link>
                <Link to="/bedroom" onClick={() => setIsMobileMenuOpen(false)}>Bedroom</Link>
                <Link to="/living-room" onClick={() => setIsMobileMenuOpen(false)}>Living Room</Link>
                <Link to="/bathroom" onClick={() => setIsMobileMenuOpen(false)}>Bathroom</Link>
              </div>
            </div>

            <div 
              className={`navbar-item dropdown ${activeDropdown === 'more' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="navbar-link">
                More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '4px', display: 'inline-block'}}>
                  <path d="M6 9L1 4H11L6 9Z" fill="currentColor"/>
                </svg>
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'more' ? 'visible' : ''}`}>
                <Link to="/space-saving-furniture" onClick={() => setIsMobileMenuOpen(false)}>Space Saving Furniture</Link>
                <Link to="/home-office" onClick={() => setIsMobileMenuOpen(false)}>Home Office</Link>
                <Link to="/design-gallery" onClick={() => setIsMobileMenuOpen(false)}>Design Gallery</Link>
                <Link to="/customer-stories" onClick={() => setIsMobileMenuOpen(false)}>Customer Stories</Link>
                <Link to="/business-interiors" onClick={() => setIsMobileMenuOpen(false)}>Business Interiors</Link>
              </div>
            </div>

            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link 
              to="/estimate" 
              className="btn-estimate-nav"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Estimate
            </Link>
          </div>

          <button 
            className="navbar-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
