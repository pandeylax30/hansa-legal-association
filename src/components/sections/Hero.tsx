import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import '../../styles/hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper">
      {/* Background elements are handled in CSS via ::before */}
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Shadcn Badge with new theme colors */}
          <Badge variant="outline" className="hero-badge">
            Expert Legal Counsel
          </Badge>
          
          <h1 className="hero-h1">
            Justice in the <br />
            <span>Light of Truth</span>
          </h1>

          <p className="hero-p">
            Hansa Legal Association bridges the gap between complex law and citizens 
            with modern technology and expert advocacy.
          </p>

          <div className="hero-actions">
            <Button size="lg" className="btn-main">
              Get Consultation
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-gold">
              Our Members
            </Button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-border-decoration">
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
              className="hero-img" 
              alt="Legal Authority" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;