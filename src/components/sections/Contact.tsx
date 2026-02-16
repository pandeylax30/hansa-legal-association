import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react"; // Lucide icons for premium feel
import '../../styles/contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section-wrapper" id="contact">
      {/* Background Glow matching Hero */}
      <div className="contact-glow-overlay"></div>

      <div className="contact-container">
        
        {/* Left Side: Professional Info */}
        <div className="contact-info-side">
          <span className="text-legal-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
            Consultation
          </span>
          <h2 className="contact-h2">
            Secure Your <span>Legal Future</span> <br /> With Expert Advice
          </h2>
          <p className="contact-p">
            Our association provides a sanctuary for justice. Reach out to our 
            certified advocates for a confidential case evaluation.
          </p>
          
          <div className="contact-details-grid">
            <div className="contact-item">
              <div className="contact-icon-box"><Phone size={20} /></div>
              <div>
                <p className="contact-label">Direct Line</p>
                <p className="contact-value">+91 99887 76655</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-box"><Mail size={20} /></div>
              <div>
                <p className="contact-label">Official Registry</p>
                <p className="contact-value">registry@hansalegal.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-box"><MapPin size={20} /></div>
              <div>
                <p className="contact-label">Chambers</p>
                <p className="contact-value">High Court Block, New Delhi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Royal Appointment Form */}
        <div className="contact-form-side">
          <Card className="form-card-premium">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-serif text-white">Book Appointment</CardTitle>
              <CardDescription className="text-legal-silver/40 uppercase tracking-widest text-[10px]">
                Submit your case details for review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="form-label-gold">Full Name</Label>
                    <Input className="form-input-premium" placeholder="e.g. Adv. Rajesh Kumar" />
                  </div>
                  <div className="space-y-2">
                    <Label className="form-label-gold">Email</Label>
                    <Input className="form-input-premium" type="email" placeholder="name@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="form-label-gold">Legal Category</Label>
                  <Input className="form-input-premium" placeholder="Civil, Criminal, Corporate..." />
                </div>

                <div className="space-y-2">
                  <Label className="form-label-gold">Brief Case Summary</Label>
                  <Textarea className="form-input-premium min-h-[100px] resize-none" placeholder="Enter your query here..." />
                </div>

                <Button className="btn-submit-premium">
                  Request Consultation
                </Button>
                
                <div className="flex items-center gap-3 justify-center text-[10px] text-white/20 tracking-tighter uppercase">
                  <Clock size={12} /> Response Time: within 24 business hours
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;