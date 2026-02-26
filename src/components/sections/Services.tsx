import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
import "../../styles/services.css";
import { Button } from '../ui/button';

// 1. Interface for Type Safety (Fixes your TS Errors)
interface PracticeArea {
  title: string;
  description: string;
  icon: string;
  details: string;
  points: string[];
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Civil Litigation",
    description: "Expert advocacy in property disputes, contract breaches, and family law matters with a focus on strategic resolution.",
    icon: "⚖️",
    details: "Our civil practice involves representing clients in High Courts for property partitions, recovery suits, and matrimonial disputes. We prioritize strategic litigation while ensuring justice is served.",
    points: ["Property & Real Estate", "Contract Enforcement", "Consumer Rights", "Family Law"]
  },
  {
    title: "Corporate Law",
    description: "Comprehensive legal support for businesses, including mergers, compliance, and intellectual property protection.",
    icon: "🏛️",
    details: "We act as external general counsel for startups and firms, handling shareholder agreements, M&A, and regulatory compliance.",
    points: ["M&A Advisory", "Employment Compliance", "Trademark Filing", "Shareholder Agreements"]
  },
  {
    title: "Criminal Defense",
    description: "Dedicated protection of your rights with aggressive representation in white-collar crimes and serious offenses.",
    icon: "🛡️",
    details: "Specializing in anticipatory bails, quashing of FIRs, and trial advocacy for offenses under IPC and PMLA Acts.",
    points: ["White Collar Crimes", "Quashing of FIR", "Anticipatory Bails", "Trial Advocacy"]
  },
  {
    title: "Arbitration",
    description: "Efficient alternative dispute resolution services to settle complex legal issues outside traditional courtrooms.",
    icon: "🤝",
    details: "Handling domestic and international commercial arbitration. We focus on fast-tracking awards and enforcing them efficiently.",
    points: ["Commercial Disputes", "ADR Proceedings", "Award Enforcement", "Mediation Services"]
  }
];

const Services = () => {
  // State with proper type to fix 'never' error
  const [selectedService, setSelectedService] = useState<PracticeArea | null>(null);

  return (
    <section id="services" className="services-section py-24 relative overflow-hidden">
      <div className="services-glow" />
      
      <div className="services-container max-w-7xl mx-auto px-6 relative z-10">
        <div className="services-header text-center mb-20">
          <span className="text-legal-gold font-bold tracking-[0.4em] uppercase text-[10px] block mb-3">Expertise</span>
          <h2 className="services-title text-4xl md:text-6xl font-serif text-white">
            Our <span className="text-legal-gold italic font-light">Practice</span> Areas
          </h2>
          <div className="w-24 h-[1px] bg-legal-gold/30 mx-auto mt-8" />
        </div>

        {/* 4-Column Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="service-card-custom group bg-white/5 border-white/10 hover:border-legal-gold/40 transition-all duration-500">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="service-icon text-3xl mb-6">{area.icon}</div>
                <h3 className="service-item-title text-xl font-serif text-white mb-4">{area.title}</h3>
                <p className="service-item-desc text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {area.description}
                </p>
                <button 
                  onClick={() => setSelectedService(area)}
                  className="mt-auto flex items-center gap-2 text-legal-gold text-[10px] font-bold uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* DETAIL OVERLAY: Start below navbar to prevent touching */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // mt-20 ensures it stays below a standard navbar
            className="fixed inset-0 z-[50] bg-[#0a0f1a]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 mt-16"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0a0f1a] border border-white/10 max-w-5xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-16 relative rounded-sm shadow-2xl custom-scrollbar"
            >
              {/* Close Button */}
              <Button
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-legal-gold transition-colors p-2"
              >
                <X size={28} />
              </Button>

              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <span className="text-6xl block">{selectedService.icon}</span>
                  <h2 className="text-5xl font-serif text-white leading-tight">
                    {selectedService.title} <br />
                    <span className="text-legal-gold italic font-light">Excellence.</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed font-light">
                    {selectedService.details}
                  </p>
                  <button className="px-10 py-5 bg-legal-gold text-legal-navy font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all shadow-lg shadow-legal-gold/10">
                    Consult For This Practice
                  </button>
                </div>

                <div className="space-y-10 bg-white/[0.02] p-8 border border-white/5 rounded-sm self-start">
                  <h4 className="text-legal-gold uppercase tracking-[0.4em] text-[10px] font-bold">Scope of Expertise</h4>
                  <div className="grid gap-6">
                    {selectedService.points.map((pt: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 text-white/80 group">
                        <CheckCircle2 size={20} className="text-legal-gold/60 group-hover:text-legal-gold transition-colors" />
                        <span className="text-sm font-light tracking-wide">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;