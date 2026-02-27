import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Scale, Menu, X, LogOut } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import '../../styles/navbar.css';

// --- 1. Prop Interface Define Karein (Error fix karne ke liye) ---
interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Authentication check directly in render
  const isAuthenticated = localStorage.getItem("isAuth") === "true";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- 2. Optimized Logout (No Refresh Needed) ---
  const handleLogout = () => {
    // App.tsx ki state ko false karein
    onLogout(); 
    
    // Mobile menu band karein
    setIsOpen(false);
    
    // Turant redirect karein (Bina refresh ke)
    navigate('/login', { replace: true });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Advocate", href: "#advocate" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  if (location.pathname === '/login') return null;

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

        {/* Logout Button (Desktop) */}
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <button 
              onClick={handleLogout}
              className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 hover:text-white transition-all border border-red-400/20 px-4 py-2 hover:bg-red-500/10 cursor-pointer"
            >
              <LogOut size={14} /> Logout
            </button>
          )}
          
          <button className="md:hidden text-legal-gold p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-legal-navy/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white/80 text-2xl font-serif uppercase tracking-[0.3em] hover:text-legal-gold" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {isAuthenticated && (
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  className="text-red-400 border-red-400/30 px-10 py-6 h-auto text-xl uppercase tracking-widest font-bold bg-transparent hover:bg-red-400/10"
                >
                  Logout
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;