import { Card, CardContent } from "@/components/ui/card";
import "../../styles/services.css";

// Sample Data - Aap ise apne hisaab se change kar sakte hain
const practiceAreas = [
  {
    title: "Civil Litigation",
    description: "Expert advocacy in property disputes, contract breaches, and family law matters with a focus on strategic resolution.",
    icon: "⚖️"
  },
  {
    title: "Corporate Law",
    description: "Comprehensive legal support for businesses, including mergers, compliance, and intellectual property protection.",
    icon: "🏛️"
  },
  {
    title: "Criminal Defense",
    description: "Dedicated protection of your rights with aggressive representation in white-collar crimes and serious offenses.",
    icon: "🛡️"
  },
  {
    title: "Arbitration",
    description: "Efficient alternative dispute resolution services to settle complex legal issues outside traditional courtrooms.",
    icon: "🤝"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-glow" />
      
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <span className="text-legal-gold font-bold tracking-[0.4em] uppercase text-xs">
            Expertise
          </span>
          <h2 className="services-title">
            Our <span>Practice</span> Areas
          </h2>
          <div className="w-24 h-1 bg-legal-gold/30 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="service-card-custom">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="service-icon">{area.icon}</div>
                <h3 className="service-item-title">{area.title}</h3>
                <p className="service-item-desc">
                  {area.description}
                </p>
                <a href="#" className="service-link">
                  Learn More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;