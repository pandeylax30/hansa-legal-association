import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const AdvocateProfile = () => {
  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden border-y border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
        <h2 className="text-[20vw] font-serif text-slate-100 tracking-tighter uppercase">Integrity</h2>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Image Section (Expanded to 6 columns for larger presence) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start"
          >
            <div className="relative group w-full">
              {/* Image Card - Increased scale and presence */}
              <div className="relative z-10 p-1.5 bg-gradient-to-tr from-legal-gold/50 via-legal-gold/20 to-legal-gold/5 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="bg-[#0a0f1a] p-2 rounded-sm">
                  <img 
                    src="https://www.peacockride.com/cdn/shop/files/advocate1Asset1_1024x1024.jpg?v=1722856678" 
                    alt="Adv. Hansa Sharma" 
                    className="w-full h-auto min-h-[500px] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 shadow-inner"
                  />
                </div>
              </div>
              
              {/* Extra large decorative frame for a "Big" feel */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-legal-gold/40 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-legal-gold/20 -z-10" />
            </div>

            {/* Signature Text - Adjusted for larger image */}
            <div className="mt-10 self-center lg:self-start ml-4">
              <span className="font-serif text-5xl text-white italic tracking-wide opacity-90 antialiased block">
                Hansa Sharma
              </span>
              <div className="h-[2px] w-full bg-legal-gold/40 mt-2"></div>
            </div>
          </motion.div>

          {/* RIGHT: Content Section (Slightly narrower to accommodate big image) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-50 leading-[1.1] tracking-tight">
                "Justice must not only <br /> be done, 
                <span className="text-legal-gold italic font-light block mt-2">it must also be seen to be done."</span>
              </h2>
            </div>

            {/* Content Blocks */}
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-6 bg-legal-gold"></div>
                  <h4 className="text-legal-gold text-[10px] font-bold uppercase tracking-[0.3em]">The Journey</h4>
                </div>
                <p className="text-slate-400 text-[15px] leading-relaxed text-justify font-light">
                  With over 18 years of dedicated practice in the High Courts, our principal advocate has navigated the complexities of constitutional law with unyielding integrity and precision.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-6 bg-legal-gold"></div>
                  <h4 className="text-legal-gold text-[10px] font-bold uppercase tracking-[0.3em]">The Philosophy</h4>
                </div>
                <p className="text-slate-400 text-[15px] leading-relaxed text-justify font-light">
                  Our practice is built on the belief that every client deserves a shield. We don't just provide legal advice; we provide a pathway to justice through strategic litigation.
                </p>
              </div>
            </div>

            {/* Shadcn-Style Footer */}
            <div className="pt-10 flex flex-col items-end text-right border-t border-white/10">
              <div className="flex flex-col items-end gap-1">
                <h4 className="text-2xl font-serif text-slate-50 tracking-wider">Adv. Hansa Sharma</h4>
                <p className="text-legal-gold/80 text-[10px] uppercase tracking-[0.5em] font-medium">
                  Founder & Managing Partner
                </p>
              </div>
              
              <div className="mt-6 p-3 rounded-full bg-white/5 border border-white/10 text-legal-gold/40 hover:text-legal-gold transition-colors duration-500">
                <Quote size={24} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AdvocateProfile;