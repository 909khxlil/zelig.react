import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Leonardo_Phoenix_10_create_a_simple_yet_elegant_logo_design_fo_1-Photoroom.png'; 
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-menu left-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/catalogue" className="nav-link" onClick={toggleMenu}>Catalogue</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-brand">
        <NavLink to="/">
          <img src={logo} alt="Zelij Bzeldi Logo" className="logo" />
        </NavLink>
      </div>

      <div className="navbar-right">
        <ul className="nav-menu right-menu">
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" onClick={toggleMenu}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>
    </nav>
  );
};

export default Navbar;