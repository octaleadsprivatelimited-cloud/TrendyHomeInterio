import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const topContactCards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C12.134 4 9 7.134 9 11C9 17 16 28 16 28C16 28 23 17 23 11C23 7.134 19.866 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Address',
      content: '123 Design Street, Mumbai, Maharashtra 400001'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M22 4H10C8.89543 4 8 4.89543 8 6V26C8 27.1046 8.89543 28 10 28H22C23.1046 28 24 27.1046 24 26V6C24 4.89543 23.1046 4 22 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 22V22.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Phone',
      content: '+91 1800-102-4663, +91 91778 87049'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 8L16 16L28 8M4 8V24H28V8M4 8H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email',
      content: 'hello@trendyhomeinterio.com'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Opening Hours',
      content: 'Mon - Sat: 9am-6pm • Sun: Closed'
    }
  ];

  return (
    <div className="contact-page">
      {/* Top Contact Cards */}
      <section className="top-contact-cards">
        <div className="container">
          <div className="cards-grid">
            {topContactCards.map((card, index) => {
              const isEmail = card.title === 'Email';
              const isPhone = card.title === 'Phone';
              
              return (
                <div key={index} className="top-card">
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    {isEmail ? (
                      <a href={`mailto:${card.content}`} className="card-link">{card.content}</a>
                    ) : isPhone ? (
                      <div className="phone-numbers">
                        {card.content.split(',').map((phone, i) => (
                          <a key={i} href={`tel:${phone.trim().replace(/\s+/g, '')}`} className="card-link">
                            {phone.trim()}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p>{card.content}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-main-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="section-description">Fill out the form below and we'll get back to you as soon as possible</p>
          </div>

          <div className="content-wrapper">
            {/* Left Column - Request a Quote Form */}
            <div className="form-column">
              <div className="form-card">
                <h3 className="form-card-title">Request a Quote</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Inquiry *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="modular-kitchen">Modular Kitchen</option>
                      <option value="wardrobe">Wardrobe</option>
                      <option value="bedroom">Bedroom</option>
                      <option value="living-room">Living Room</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="space-saving">Space Saving Furniture</option>
                      <option value="home-office">Home Office</option>
                      <option value="business-interiors">Business Interiors</option>
                      <option value="full-home">Full Home Interiors</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Our Office & Map */}
            <div className="info-column">
              {/* Our Office Card */}
              <div className="office-card">
                <h3 className="card-title">Our Office</h3>
                <div className="office-info">
                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <p>123 Design Street, Mumbai, Maharashtra 400001</p>
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link">
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21H3.08C2.48 21 2 20.52 2 19.92V16.92M22 16.92L12 10L2 16.92M22 16.92V4.08C22 3.48 21.52 3 20.92 3H3.08C2.48 3 2 3.48 2 4.08V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <a href="mailto:hello@trendyhomeinterio.com" className="info-link">hello@trendyhomeinterio.com</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21H3.08C2.48 21 2 20.52 2 19.92V16.92M22 16.92L12 10L2 16.92M22 16.92V4.08C22 3.48 21.52 3 20.92 3H3.08C2.48 3 2 3.48 2 4.08V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <a href="mailto:hello@trendyhomeinterio.com" className="info-link">hello@trendyhomeinterio.com</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21H3.08C2.48 21 2 20.52 2 19.92V16.92M22 16.92L12 10L2 16.92M22 16.92V4.08C22 3.48 21.52 3 20.92 3H3.08C2.48 3 2 3.48 2 4.08V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="info-content">
                      <a href="tel:18001024663" className="info-link">+91 1800-102-4663</a>
                      <a href="tel:9177887049" className="info-link">+91 91778 87049</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Find Us Card with Map */}
              <div className="map-card">
                <h3 className="card-title">Find Us</h3>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-button">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
