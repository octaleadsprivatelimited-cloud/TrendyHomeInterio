import React, { useState } from 'react';
import './Estimate.scss';

const Estimate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    type: 'full-home'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon with your estimate.');
  };

  return (
    <div className="estimate">
      <section className="page-hero">
        <div className="container">
          <h1>Get Free Estimate</h1>
          <p>Calculate the cost of doing up your home interiors</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container">
          <form onSubmit={handleSubmit} className="estimate-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Service Type *</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="full-home">Full Home Interiors</option>
                <option value="kitchen">Kitchen</option>
                <option value="wardrobe">Wardrobe</option>
                <option value="bedroom">Bedroom</option>
                <option value="living-room">Living Room</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Get Free Estimate</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Estimate;

