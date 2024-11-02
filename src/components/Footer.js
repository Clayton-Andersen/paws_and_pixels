import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Paws and Pixels</p>
    <p style= {{ color: "#e6a23c" }} >
      <a href="/contact" className="footer-link" >Contact</a> |
      <a 
        href="https://www.instagram.com/paws.pixelsphotography" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i 
          className="fab fa-instagram" 
          style={{ color: "#e6a23c", fontSize: "24px" }}
        ></i>
      </a>
    </p>
  </footer>
);

export default Footer;