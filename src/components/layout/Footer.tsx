import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, Scale } from "lucide-react";
import '../../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-column">
            <div className="footer-logo">
              <Scale className="inline-block mr-2 mb-1" size={24} />
              HANSA <span>LEGAL</span>
            </div>
            <p className="footer-description">
              Advancing legal advocacy through technology and integrity. Lighting the path to justice for advocates and clients alike since 1995.
            </p>
            <div className="social-links">
              <Button variant="outline" size="icon" className="social-btn">
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="social-btn">
                <Linkedin size={18} />
              </Button>
              <Button variant="outline" size="icon" className="social-btn">
                <Twitter size={18} />
              </Button>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-link-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="footer-link-column">
            <h3 className="footer-heading">Expertise</h3>
            <ul className="footer-list">
              <li><a href="#civil" className="footer-link">Civil Litigation</a></li>
              <li><a href="#criminal" className="footer-link">Criminal Defense</a></li>
              <li><a href="#corporate" className="footer-link">Corporate Law</a></li>
              <li><a href="#arbitration" className="footer-link">Arbitration</a></li>
            </ul>
          </div>

          {/* Column 4: Office */}
          <div className="footer-link-column">
            <h3 className="footer-heading">Office</h3>
            <div className="contact-info-footer">
              <p><MapPin size={14} className="text-legal-gold" /> High Court Road, New Delhi</p>
              <p><Phone size={14} className="text-legal-gold" /> +91 9999 888 777</p>
              <p><Mail size={14} className="text-legal-gold" /> contact@hansalegal.com</p>
            </div>
          </div>
        </div>

        <Separator className="footer-separator" />

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text text-center md:text-left">
            © 2026 Hansa Legal Association. Built for Excellence.
          </p>
          <div className="bottom-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;