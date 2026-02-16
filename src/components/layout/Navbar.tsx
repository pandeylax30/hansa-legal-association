import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Scale, Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import '../../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`nav-wrapper ${isScrolled || isOpen ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="brand-logo" onClick={() => setIsOpen(false)}>
          <Scale className="logo-icon" size={28} />
          <span className="logo-text">Hansa <span>Legal</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links-container">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-item">
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Hamburger Icon */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden md:block">
            <Button className="nav-cta-btn">Client Portal</Button>
          </Link>
          
          <button 
            className="md:hidden text-legal-gold p-2 outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Refined Logic */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu-box"
          >
            <div className="flex flex-col gap-6 p-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full h-[1px] bg-white/5 my-2"></div>
              <Link to="/login" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full bg-legal-gold text-legal-navy rounded-none py-6 font-bold uppercase tracking-widest text-[10px]">
                  Client Portal
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;