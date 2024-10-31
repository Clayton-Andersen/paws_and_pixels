// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.jpg'; // Adjust the path if necessary

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  // Toggles navbar when hamburger is clicked or when a nav item is selected
  const toggleNavbar = () => setExpanded(!expanded);

  return (
<Navbar className="navbar-custom" expand="lg" sticky="top" expanded={expanded} style={{ padding: '15px' }}>
<Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
        <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ fontSize: '18px' }}>
          <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>About</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          <Nav.Link as={Link} to="/what-to-expect" onClick={() => setExpanded(false)}>What to Expect</Nav.Link>
          <Nav.Link as={Link} to="/gallery" onClick={() => setExpanded(false)}>Photo Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
