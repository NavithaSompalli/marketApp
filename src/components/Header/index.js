import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">Briosphere</Link>
        </div> 
        
        <nav className="nav-links">
          <Link to="/discover">Discover</Link>
          <Link to="/services">Services</Link>
          <Link to="/about-us">About Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
