import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react"; // Professional icon
import '../../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-wrapper ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="brand-logo">
          <Scale className="logo-icon" size={28} />
          <span className="logo-text">Hansa <span>Legal</span></span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links-container">
          <a href="#home" className="nav-link-item">Home</a>
          <a href="#about" className="nav-link-item">About</a>
          <a href="#services" className="nav-link-item">Services</a>
          <a href="#contact" className="nav-link-item">Contact</a>
        </div>

        {/* Action Button */}
        <Button className="nav-cta-btn">
          Client Portal
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;