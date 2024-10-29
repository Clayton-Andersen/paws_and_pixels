import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Paws and Pixels</p>
    <p>
      <a href="/contact" className="footer-link">Contact</a> |
      <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
    </p>
  </footer>
);

export default Footer;