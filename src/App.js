import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import WhatToExpect from './pages/WhatToExpect';
import Gallery from './pages/Gallery';
import './App.css'; // Ensure this import is here to apply the styles

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/what-to-expect" element={<WhatToExpect />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

