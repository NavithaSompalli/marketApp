import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Booking = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    adults: '1',
    children: '0',
    checkIn: '',
    checkOut: '',
    rooms: '1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', formData);
    navigate('/order');
  };

  return (
    <div className="booking-container">
      <h2>Brisphere</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-field"
            required
          />
        </div>

        <div className="form-row">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input-field"
            required
          />
          <div className="guests-input">
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="select-field"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
            </select>
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="select-field"
            >
              <option value="0">0 Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="date-rooms-container">
            <div className="date-inputs">
              <div className="date-field">
                <label>CHECK-IN</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="date-field">
                <label>CHECK-OUT</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="rooms-select">
              <label>ROOMS</label>
              <select
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                className="select-field"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="payment-button">
          ₹ 12,430
          <span className="button-subtext">Click to pay token amount</span>
        </button>
      </form>
      
      <div className="footer-content">
        <div className="company-info">
          <h3>Brisphere</h3>
          <p>Sphok, Ladakh,</p>
          <p>India, 194101</p>
          <p>+91 - 7784490533</p>
          <p>amit.jhel700@gmail.com</p>
          <button className="location-btn">Location</button>
        </div>
        <div>
          <p className='paragraph'>
            <span>Terms and Conditions</span><br/>
            <span>Privacy Policy</span><br/>
            <span>Refunds</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
