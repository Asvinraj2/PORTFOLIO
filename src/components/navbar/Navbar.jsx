import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './navbar.css';
import aswinLogo from './aswinLogo.jpg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <>
      <header className="header">
        {/* Logo Section */}
        <a href="#" className="logo">
          <img src={aswinLogo} alt="Logo" className="logo-img" />
          <span className="logo-text">ASWIN</span>
        </a>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i> {/* Toggle icon */}
        </div>

        {/* Navbar Links */}
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" style={{ '--i': 1 }} className="active">Home</a>
          <a href="#about" style={{ '--i': 2 }} className="nav-link">About</a>
          <a href="#skills" style={{ '--i': 3 }} className="nav-link">Skill</a>
          <a href="#portfolio" style={{ '--i': 4 }} className="nav-link">Portfolio</a>
          <a href="#contact" style={{ '--i': 5 }} className="nav-link">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;