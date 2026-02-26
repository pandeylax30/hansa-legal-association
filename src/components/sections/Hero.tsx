import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { X, } from "lucide-react";
import '../../styles/hero.css';

// Team Data
const teamMembers = [
  {
    name: "Adv. Hansa Sharma",
    role: "Founder & Managing Partner",
    image: "https://www.peacockride.com/cdn/shop/files/advocate1Asset1_1024x1024.jpg?v=1722856678",
    bio: "With over 18 years of experience in the High Court, Adv. Hansa specializes in Constitutional and Civil law.",
    expertise: ["Constitutional Law", "Civil Litigation", "Strategic Advisory"]
  },
  {
    name: "Adv. Rahul Verma",
    role: "Senior Associate (Criminal)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "Expert in criminal defense and white-collar crime investigations with a track record of successful bail matters.",
    expertise: ["Criminal Defense", "Cyber Crime", "PMLA Cases"]
  },
  {
    name: "Adv. Hansa Sharma",
    role: "Founder & Managing Partner",
    image: "https://www.peacockride.com/cdn/shop/files/advocate1Asset1_1024x1024.jpg?v=1722856678",
    bio: "With over 18 years of experience in the High Court, Adv. Hansa specializes in Constitutional and Civil law.",
    expertise: ["Constitutional Law", "Civil Litigation", "Strategic Advisory"]
  },
  {
    name: "Adv. Rahul Verma",
    role: "Senior Associate (Criminal)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    bio: "Expert in criminal defense and white-collar crime investigations with a track record of successful bail matters.",
    expertise: ["Criminal Defense", "Cyber Crime", "PMLA Cases"]
  }
  // Aap aur members yahan add kar sakti hain
];

const Hero: React.FC = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-container">
        <div className="hero-content">
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
            {/* Redirect to Contact Page (Anchor link) */}
            <Button 
              size="lg" 
              className="btn-main"
              onClick={() => window.location.href = '#contact'}
            >
              Get Consultation
            </Button>

            {/* Open Internal Team View */}
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-gold"
              onClick={() => setShowTeam(true)}
            >
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

      {/* --- INTERNAL TEAM MEMBERS OVERLAY --- */}
<AnimatePresence>
  {showTeam && (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Z-index higher than navbar if needed, and pt-32 adds space from top
      className="fixed inset-0 z-[2000] bg-[#0a0f1a]/98 backdrop-blur-2xl overflow-y-auto pt-32 pb-20"
    >
      <div className="container max-w-6xl mx-auto px-6 relative">
        
        {/* Close Button - Positioned better */}
        <Button 
          onClick={() => setShowTeam(false)}
          className="absolute -top-16 right-6 text-white/50 hover:text-legal-gold transition-all p-2 bg-white/5 rounded-full"
        >
          <X size={24} />
        </Button>

        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-legal-gold text-[10px] font-bold uppercase tracking-[0.5em] block mb-4">Our Core Team</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic tracking-tight">
            The <span className="text-legal-gold">Legal </span>Minds
          </h2>
          <div className="w-100 h-[1px] bg-legal-gold/30 mx-auto mt-8" />
        </div>

        {/* Members Grid (Exactly like your image) */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              {/* Image with Gold Border on Hover */}
              <div className="w-full md:w-56 aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shrink-0 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 border-0 group-hover:border-[1px] border-legal-gold/50 transition-all duration-500" />
              </div>

              {/* Member Details */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif text-white tracking-wide">{member.name}</h3>
                  <p className="text-legal-gold text-[10px] uppercase tracking-[0.2em] font-bold font-sans">
                    {member.role}
                  </p>
                </div>
                
                <p className="text-slate-400 text-[14px] leading-relaxed font-light">
                  {member.bio}
                </p>

                {/* Expertise Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="text-[9px] px-3 py-1.5 bg-white/5 border border-white/10 text-white/50 rounded-full uppercase tracking-widest group-hover:border-legal-gold/30 group-hover:text-white transition-colors">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
};

export default Hero;