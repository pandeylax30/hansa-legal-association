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
  { name: "Advocate", href: "#advocate" },
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

      {/* Mobile Menu Overlay */}
<AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[150] bg-legal-navy/98 backdrop-blur-2xl md:hidden"
    >
      <div className="flex flex-col items-center justify-center h-full space-y-10">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-white/80 text-2xl font-serif uppercase tracking-[0.3em] hover:text-legal-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <Link to="/login" onClick={() => setIsOpen(false)}>
          <Button className="bg-legal-gold text-legal-navy px-12 py-6 rounded-none font-bold uppercase tracking-widest">
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