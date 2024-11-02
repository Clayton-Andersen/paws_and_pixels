import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../path/to/logo.png'; // Update the path to your logo

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev); // Toggle the expanded state
  };

  const handleNavClick = () => {
    setExpanded(false); // Collapse the navbar when an item is clicked
  };

  return (
<nav className="navbar navbar-expand-lg navbar-custom">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Paws and Pixels" style={{ height: '40px' }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNav"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/about" onClick={handleNavClick}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" onClick={handleNavClick}>Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/what-to-expect" onClick={handleNavClick}>What to Expect</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/photo-gallery" onClick={handleNavClick}>Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
console.log("Navbar loaded");
