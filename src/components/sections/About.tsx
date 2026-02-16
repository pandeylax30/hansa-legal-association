import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "../../styles/about.css"; // CSS Import zaroori hai

const About = () => {
  return (
    <section className="about-section"  id="about">
      <div className="about-glow" />

      <div className="about-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
                alt="Advocacy Excellence" 
              />
            </div>
            <div className="about-badge">
              <span className="label">Established</span>
              <span className="year">1995</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col items-start">
            <span className="text-legal-gold font-bold tracking-[0.4em] uppercase text-xs mb-6">
              Our Legacy
            </span>
            
            <h2 className="about-title">
              Upholding the <span>Sacred</span> <br /> 
              Principles of Law
            </h2>
            
            <p className="about-description">
              Hansa Legal Association represents a coalition of elite legal minds dedicated to the pursuit of justice. For over three decades, we have been a pillar of integrity and legal excellence.
            </p>

            {/* Stats using Shadcn Cards with custom classes */}
            <div className="grid grid-cols-2 gap-6 w-full mb-12">
              <Card className="about-stat-card">
                <CardContent className="pt-8">
                  <h4 className="text-4xl font-serif text-legal-gold">500+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-2">
                    Active Advocates
                  </p>
                </CardContent>
              </Card>

              <Card className="about-stat-card">
                <CardContent className="pt-8">
                  <h4 className="text-4xl font-serif text-legal-gold">28+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-2">
                    Years Legacy
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button className="bg-legal-gold text-legal-navy hover:bg-white rounded-none px-12 py-7 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500">
              Read Our Full Story
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;