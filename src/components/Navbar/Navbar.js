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

            {/* Mobile Contact Section */}
            <div className="mobile-contact-section">
              <h3>Contact Us</h3>
              <div className="mobile-contact-items">
                <a href="tel:+919959921803" className="mobile-contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.5 14.1667V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V14.1667M17.5 14.1667L10 8.33333L2.5 14.1667M17.5 14.1667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 99599 21803</span>
                  </div>
                </a>
                <a href="https://wa.me/919959921803" target="_blank" rel="noopener noreferrer" className="mobile-contact-item">
                  <div className="contact-icon whatsapp">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 13.35 3.725 16.1417 6.66667 17.3917C6.65833 16.8083 6.725 15.65 6.80833 15.05L7.5 11.6667H5.83333C5.83333 11.6667 5.83333 10.5 5.83333 9.58333C5.83333 8.25 6.75 7.08333 7.91667 7.08333C8.83333 7.08333 9.25 7.66667 9.25 8.5C9.25 9.41667 8.75 10.75 8.41667 11.8333C8.16667 12.6667 8.83333 13.3333 9.66667 13.3333C11.1667 13.3333 12.1667 11.8333 12.1667 9.75C12.1667 7.91667 10.9167 6.66667 9.08333 6.66667C6.83333 6.66667 5.41667 8.33333 5.41667 9.75C5.41667 10.5 5.75 11.25 6.25 11.5833C6.33333 11.6667 6.35 11.7 6.36667 11.75C6.38333 11.8 6.4 11.8833 6.36667 11.95C6.33333 12.05 6.25 12.3333 6.2 12.5C6.13333 12.75 5.95 12.8333 5.75 12.75C4.75 12.3333 4.16667 10.9167 4.16667 9.58333C4.16667 7.08333 6.25 4.58333 9.41667 4.58333C12.0833 4.58333 14.1667 6.41667 14.1667 9.58333C14.1667 12.5833 12.0833 14.9167 9.25 14.9167C8.25 14.9167 7.33333 14.5 7 14C6.66667 13.5 6.83333 13.0833 7.08333 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">Chat with us</span>
                  </div>
                </a>
                <a href="mailto:hello@trendyhomeinterio.com" className="mobile-contact-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2.5 6.66667L10 11.6667L17.5 6.66667M2.5 6.66667V15.8333H17.5V6.66667M2.5 6.66667H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">hello@trendyhomeinterio.com</span>
                  </div>
                </a>
                <div className="mobile-contact-item location-item">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 1.66667C7.23858 1.66667 5 3.90524 5 6.66667C5 10.8333 10 18.3333 10 18.3333C10 18.3333 15 10.8333 15 6.66667C15 3.90524 12.7614 1.66667 10 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">We Serve</span>
                    <span className="contact-value">Andhra Pradesh & Telangana</span>
                  </div>
                </div>
              </div>
            </div>
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
