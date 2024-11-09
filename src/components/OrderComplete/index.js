import React from 'react';
import './index.css';
import { FaCheckCircle } from 'react-icons/fa';

const OrderComplete = () => {
  return (
    <div className="order-complete-container">
      
      <div className="confirmation-card">
        <div className="guest-details">
          <div className="guest-info">
            <h2>Amit Jha</h2>
            <p>+91 - 7784990722</p>
            <p>amit.jha0700@gmail.com</p>
            <p>1 Adults and 2 Children</p>
          </div>
          <div className="status">
            <FaCheckCircle className="check-icon" />
            <div className="status-text">
              <h3>Order Complete</h3>
              <p>have questions?</p>
              <a href="/contact">contact us</a>
            </div>
          </div>
        </div>

        <div className="booking-details">
          <div className="detail-item">
            <label>CHECK-IN</label>
            <p>01 Feb 2022</p>
          </div>
          <div className="detail-item">
            <label>CHECK-OUT</label>
            <p>07 Feb 2022</p>
          </div>
          <div className="detail-item">
            <label>ROOMS</label>
            <p>1</p>
          </div>
          <div className="price">
            <p>₹ 12,430</p>
          </div>
        </div>
      </div>

      <footer className="footer1">
        <div className="footer-content1">
          <h3>Brisphere</h3>
          <p>Spituk, Ladakh,</p>
          <p>India, 194101</p>
          <p>+91 - 7784990533</p>
          <p>amit.jha0700@gmail.com</p>
          <button className="location-btn">Location</button>
        </div>
      </footer>
    </div>
  );
};

export default OrderComplete;
