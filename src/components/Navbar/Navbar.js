import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      // Close mobile dropdown when menu closes
      setMobileDropdown(null);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Close mobile menu and dropdown when route changes
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+919959921803" className="top-bar-contact">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 2.5C2.5 1.94772 2.94772 1.5 3.5 1.5H4.5C5.05228 1.5 5.5 1.94772 5.5 2.5V3.5M2.5 9.5C2.5 10.0523 2.94772 10.5 3.5 10.5H4.5C5.05228 10.5 5.5 10.0523 5.5 9.5V8.5M9.5 1.5H8.5C7.94772 1.5 7.5 1.94772 7.5 2.5V3.5M9.5 10.5H8.5C7.94772 10.5 7.5 10.0523 7.5 9.5V8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5 6H6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span>+91 99599 21803</span>
            </a>
            <a href="https://wa.me/919959921803" target="_blank" rel="noopener noreferrer" className="top-bar-contact">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1C3.23858 1 1 3.23858 1 6C1 7.5 1.5 8.8 2.3 9.8L1 11L2.2 9.7C3.2 10.5 4.5 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6L5.5 7.5L8 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a href="mailto:hello@trendyhomeinterio.com" className="top-bar-contact">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3L6 6.5L10.5 3M1.5 3V9H10.5V3M1.5 3H10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>hello@trendyhomeinterio.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="TrendyHomeInterio" className="logo-image" />
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
              className={`navbar-item dropdown ${activeDropdown === 'services' ? 'active' : ''} ${mobileDropdown === 'services' ? 'mobile-open' : ''}`}
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setActiveDropdown('services')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setActiveDropdown(null)}
            >
              <span 
                className="navbar-link"
                onClick={() => window.matchMedia('(max-width: 968px)').matches && toggleMobileDropdown('services')}
              >
                Services
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  style={{
                    marginLeft: '4px', 
                    display: 'inline-block',
                    transform: (activeDropdown === 'services' || mobileDropdown === 'services') ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path d="M6 9L1 4H11L6 9Z" fill="currentColor"/>
                </svg>
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'services' || mobileDropdown === 'services' ? 'visible' : ''}`}>
                <Link to="/modular-kitchen" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Modular Kitchen</Link>
                <Link to="/wardrobe" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Wardrobe</Link>
                <Link to="/bedroom" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Bedroom</Link>
                <Link to="/living-room" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Living Room</Link>
                <Link to="/bathroom" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Bathroom</Link>
              </div>
            </div>

            <div 
              className={`navbar-item dropdown ${activeDropdown === 'more' ? 'active' : ''} ${mobileDropdown === 'more' ? 'mobile-open' : ''}`}
              onMouseEnter={() => !window.matchMedia('(max-width: 968px)').matches && setActiveDropdown('more')}
              onMouseLeave={() => !window.matchMedia('(max-width: 968px)').matches && setActiveDropdown(null)}
            >
              <span 
                className="navbar-link"
                onClick={() => window.matchMedia('(max-width: 968px)').matches && toggleMobileDropdown('more')}
              >
                More
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  style={{
                    marginLeft: '4px', 
                    display: 'inline-block',
                    transform: (activeDropdown === 'more' || mobileDropdown === 'more') ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path d="M6 9L1 4H11L6 9Z" fill="currentColor"/>
                </svg>
              </span>
              <div className={`dropdown-menu ${activeDropdown === 'more' || mobileDropdown === 'more' ? 'visible' : ''}`}>
                <Link to="/space-saving-furniture" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Space Saving Furniture</Link>
                <Link to="/home-office" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Home Office</Link>
                <Link to="/design-gallery" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Design Gallery</Link>
                <Link to="/customer-stories" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Customer Stories</Link>
                <Link to="/business-interiors" onClick={() => { setIsMobileMenuOpen(false); setMobileDropdown(null); }}>Business Interiors</Link>
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
