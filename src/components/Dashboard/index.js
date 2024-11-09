import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare} from "react-icons/fa";

import './index.css';
// Import background image

const list_a = [
  {
    id:1,
    imageUrl: 'https://res.cloudinary.com/dqyqjbuku/image/upload/v1731132337/WhatsApp_Image_2024-11-09_at_11.35.12_AM_gxdisd.jpg',
    content: "I am writing this after reflecting on my one month stay here at the airport. It's amazing how quickly time flies when you're having fun. I can't believe I've been here for a month...",
  },
  {
    id:2,
    imageUrl: 'https://res.cloudinary.com/dqyqjbuku/image/upload/v1731132337/WhatsApp_Image_2024-11-09_at_11.35.12_AM_gxdisd.jpg',
    content: "I am writing this after reflecting on my one month stay here at the airport. It's amazing how quickly time flies when you're having fun. I can't believe I've been here for a month...",
  },
  {
    id:3,
    imageUrl: 'https://res.cloudinary.com/dqyqjbuku/image/upload/v1731132337/WhatsApp_Image_2024-11-09_at_11.35.12_AM_gxdisd.jpg',
    content: "I am writing this after reflecting on my one month stay here at the airport. It's amazing how quickly time flies when you're having fun. I can't believe I've been here for a month...",
  },
  

]


const Dashboard = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);

  const handleBook = () => {
    // Booking logic here
    console.log('Booking:', { checkIn, checkOut, rooms });
  };

  return (
    <>
      <div 
        className="dashboard" 
        
      >
        <header className="hero">
          <div className="hero-content">
            <h1>Work from Ladakh</h1>
            <p>India's first true digital tourism ecosystem</p>
            
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare/>
              </a>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1718436280/clouds-3488632_1280_q0exqo.jpg" alt="banner" className='banner-image'/>
          </div>
          
          <div className="booking-widget">
            <div className="booking-inputs">
              <div className="input-group">
                <label>CHECK-IN</label>
                <input 
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label>CHECK-OUT</label>
                <input
                  type="date" 
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              
              <div className="input-group">
                <label>ROOMS</label>
                <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

           <Link to='./booking'> <button className="book-btn" onClick={handleBook}>
              BOOK
            </button></Link>
          </div>
        </header>

        <section className="discover">
          <h2>Discover</h2>
          <div className="testimonials">
            {list_a.map(item => (
              <div key={item.id} className="testimonial-card">
                <div className="profile">
                  <img src={item.imageUrl} alt="Profile" className='images'/> {/* Replace with actual image URL */}
                  <h3><img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731135203/WhatsApp_Image_2024-11-09_at_12.22.53_PM_ew34ee.jpg" alt="profile"/> Arjun Raghav</h3>
                </div>
                <p>{item.content}</p>
                <Link to="/read-more">Read More</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    <section className="services">
      <h2>Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731134445/WhatsApp_Image_2024-11-09_at_12.10.25_PM_tj9vlh.jpg" alt="wifi"/>
          <h3>High Speed Internet</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731133592/WhatsApp_Image_2024-11-09_at_11.51.49_AM_azqwuk.jpg" alt="Meals" />
          <h3>Healthy Meals</h3>
          <p>A healthy breakfast and seasonal meals are provided to all guests. We have meal plans for your entire stay with customized options for other dining situations.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731133677/WhatsApp_Image_2024-11-09_at_11.57.30_AM_g4z3se.jpg" alt="Stay" />
          <h3>Homely Stay</h3>
          <p>Designed for working professionals and digital nomads, our spaces provide more than accommodation - they offer you a home away from your space.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731133759/WhatsApp_Image_2024-11-09_at_11.58.55_AM_je3i9q.jpg" alt="Transportation" />
          <h3>Transportation</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731133938/WhatsApp_Image_2024-11-09_at_12.01.53_PM_dogs8x.jpg" alt="Food Delivery" />
          <h3>Food Delivery</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731134041/WhatsApp_Image_2024-11-09_at_12.03.21_PM_bxbcan.jpg" alt="Tourism" />
          <h3>Tourism</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731134202/WhatsApp_Image_2024-11-09_at_12.06.00_PM_a8drxd.jpg" alt="Location Services" />
          <h3>Location Services</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731134285/WhatsApp_Image_2024-11-09_at_12.07.39_PM_frr2xe.jpg" alt="Taxi Service" />
          <h3>Taxi Service</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>

        <div className="service-card">
          <img src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1731134362/WhatsApp_Image_2024-11-09_at_12.09.00_PM_mz2ue5.jpg" alt="Online Shop" />
          <h3>Online Shop</h3>
          <p>Optical fiber connectivity provides in all of the 8 Guest rooms and other in all the BnSphere rooms working spaces and dinning areas.</p>
        </div>
      </div>

      <div className="contact-info">
        <div>
        <h3>Brisphere</h3>
        <p>Sphok, Ladakh,</p>
        <p>India, 194101</p>
        <p>+91 - 7784490533</p>
        <p>amit.hail1705@gmail.com</p>
        <button className="location-btn">Location</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Dashboard;
