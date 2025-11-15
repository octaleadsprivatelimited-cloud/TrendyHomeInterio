import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const toggleDropdown = (columnName) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [columnName]: !prev[columnName]
    }));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section with Newsletter */}
        <div className="footer-top">
          <div className="newsletter-section">
            <div className="newsletter-content">
              <h3>Stay Updated</h3>
              <p>Get design inspiration, exclusive offers, and interior trends delivered to your inbox</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <span>Subscribe</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-column company-column">
            <div className="footer-logo">
              <img src={logo} alt="TrendyHomeInterio" className="footer-logo-image" />
              <p className="company-tagline">Transforming spaces into beautiful homes</p>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 6.66667L10 11.6667L17.5 6.66667M2.5 6.66667V15.8333H17.5V6.66667M2.5 6.66667H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <a href="mailto:hello@trendyhomeinterio.com">hello@trendyhomeinterio.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 14.1667V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V14.1667M17.5 14.1667L10 8.33333L2.5 14.1667M17.5 14.1667V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <a href="tel:+919959921803">+91 99599 21803</a>
                  <a href="https://wa.me/919959921803" target="_blank" rel="noopener noreferrer" style={{marginLeft: '12px'}}>WhatsApp</a>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 1.66667H12.5C11.6736 1.66667 10.9011 2.10547 10.3871 2.86389C9.87305 3.62231 9.66667 4.62231 9.66667 5.66667V8.33333H7.16667V11.6667H9.66667V18.3333H13.1667V11.6667H15.8333L17.5 8.33333H13.1667V5.66667C13.1667 5.45652 13.2506 5.25547 13.3996 5.10647C13.5486 4.95747 13.7496 4.87333 13.9583 4.87333H17.5V1.66667H15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="1.66667" y="1.66667" width="16.6667" height="16.6667" rx="4.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 9.58333C13.4104 10.3264 13.2458 11.0731 12.8642 11.7176C12.4826 12.3621 11.9041 12.8721 11.2125 13.1775C10.5209 13.4829 9.75229 13.5689 9.01246 13.4239C8.27263 13.2789 7.59887 12.9101 7.08333 12.3667C6.56779 11.8232 6.23293 11.1306 6.12333 10.375C6.01373 9.61944 6.13587 8.84729 6.47246 8.16667C6.80905 7.48604 7.34305 6.93047 8.00083 6.58333C8.65861 6.23619 9.40861 6.11429 10.1417 6.235C10.8747 6.35571 11.5495 6.71246 12.0667 7.25C12.5838 7.78754 12.9187 8.48014 13.0283 9.23571C13.1379 9.99129 13.0158 10.7634 12.6792 11.444C12.3426 12.1246 11.8086 12.6802 11.1508 13.0273C10.493 13.3745 9.74304 13.4964 9.01 13.3757" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="14.5833" cy="5.41667" r="1.25" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M13.3333 6.66667C14.6594 6.66667 15.9312 7.19345 16.8063 8.19345C17.6813 9.19345 18.0833 10.5652 18.0833 12V15.8333H15.5833V12C15.5833 11.4696 15.3736 10.9609 15.0035 10.5858C14.6334 10.2107 14.1247 10 13.5833 10C13.0419 10 12.5332 10.2107 12.1631 10.5858C11.793 10.9609 11.5833 11.4696 11.5833 12V15.8333H9.08333V12C9.08333 10.5652 9.48529 9.19345 10.3603 8.19345C11.2354 7.19345 12.5072 6.66667 13.8333 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 7.5H2.5V15.8333H5V7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="3.75" cy="3.75" r="1.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="social-link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 13.35 3.725 16.1417 6.66667 17.3917C6.65833 16.8083 6.725 15.65 6.80833 15.05L7.5 11.6667H5.83333C5.83333 11.6667 5.83333 10.5 5.83333 9.58333C5.83333 8.25 6.75 7.08333 7.91667 7.08333C8.83333 7.08333 9.25 7.66667 9.25 8.5C9.25 9.41667 8.75 10.75 8.41667 11.8333C8.16667 12.6667 8.83333 13.3333 9.66667 13.3333C11.1667 13.3333 12.1667 11.8333 12.1667 9.75C12.1667 7.91667 10.9167 6.66667 9.08333 6.66667C6.83333 6.66667 5.41667 8.33333 5.41667 9.75C5.41667 10.5 5.75 11.25 6.25 11.5833C6.33333 11.6667 6.35 11.7 6.36667 11.75C6.38333 11.8 6.4 11.8833 6.36667 11.95C6.33333 12.05 6.25 12.3333 6.2 12.5C6.13333 12.75 5.95 12.8333 5.75 12.75C4.75 12.3333 4.16667 10.9167 4.16667 9.58333C4.16667 7.08333 6.25 4.58333 9.41667 4.58333C12.0833 4.58333 14.1667 6.41667 14.1667 9.58333C14.1667 12.5833 12.0833 14.9167 9.25 14.9167C8.25 14.9167 7.33333 14.5 7 14C6.66667 13.5 6.83333 13.0833 7.08333 12.75C7.16667 12.6667 7.25 12.5833 7.33333 12.5C7.41667 12.4167 7.5 12.3333 7.58333 12.25C7.75 12.0833 7.91667 11.8333 8.08333 11.5833C8.25 11.3333 8.41667 11.0833 8.58333 10.8333C8.75 10.5833 8.91667 10.3333 9.08333 10.0833C9.25 9.83333 9.41667 9.58333 9.58333 9.33333C9.75 9.08333 9.91667 8.83333 10.0833 8.58333C10.25 8.33333 10.4167 8.08333 10.5833 7.83333C10.75 7.58333 10.9167 7.33333 11.0833 7.08333C11.25 6.83333 11.4167 6.58333 11.5833 6.33333C11.75 6.08333 11.9167 5.83333 12.0833 5.58333C12.25 5.33333 12.4167 5.08333 12.5833 4.83333C12.75 4.58333 12.9167 4.33333 13.0833 4.08333C13.25 3.83333 13.4167 3.58333 13.5833 3.33333C13.75 3.08333 13.9167 2.83333 14.0833 2.58333C14.25 2.33333 14.4167 2.08333 14.5833 1.83333C14.75 1.58333 14.9167 1.33333 15.0833 1.08333C15.25 0.833333 15.4167 0.583333 15.5833 0.333333C15.75 0.0833333 15.9167 -0.166667 16.0833 -0.416667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 
              className="footer-column-header"
              onClick={() => toggleDropdown('quickLinks')}
            >
              Quick Links
              <svg 
                className={`dropdown-icon ${openDropdowns.quickLinks ? 'open' : ''}`}
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h3>
            <ul className={`footer-menu ${openDropdowns.quickLinks ? 'open' : ''}`}>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/estimate">Get Estimate</Link></li>
              <li><Link to="/design-gallery">Design Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 
              className="footer-column-header"
              onClick={() => toggleDropdown('services')}
            >
              Services
              <svg 
                className={`dropdown-icon ${openDropdowns.services ? 'open' : ''}`}
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h3>
            <ul className={`footer-menu ${openDropdowns.services ? 'open' : ''}`}>
              <li><Link to="/modular-kitchen">Modular Kitchen</Link></li>
              <li><Link to="/wardrobe">Wardrobe</Link></li>
              <li><Link to="/bedroom">Bedroom</Link></li>
              <li><Link to="/living-room">Living Room</Link></li>
              <li><Link to="/bathroom">Bathroom</Link></li>
              <li><Link to="/space-saving-furniture">Space Saving Furniture</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 
              className="footer-column-header"
              onClick={() => toggleDropdown('support')}
            >
              Support
              <svg 
                className={`dropdown-icon ${openDropdowns.support ? 'open' : ''}`}
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h3>
            <ul className={`footer-menu ${openDropdowns.support ? 'open' : ''}`}>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/customer-stories">Customer Stories</Link></li>
              <li><Link to="/business-interiors">Business Interiors</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 
              className="footer-column-header"
              onClick={() => toggleDropdown('locations')}
            >
              Locations We Serve
              <svg 
                className={`dropdown-icon ${openDropdowns.locations ? 'open' : ''}`}
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h3>
            <ul className={`footer-menu ${openDropdowns.locations ? 'open' : ''}`}>
              <li>Andhra Pradesh (AP)</li>
              <li>Telangana (TG)</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
