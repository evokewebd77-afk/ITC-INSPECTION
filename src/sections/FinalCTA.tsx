import React from 'react';
import { PhoneCall, Mail, MapPin, Zap, CheckCircle, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './FinalCTA.css';

export const FinalCTA: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="final-cta">
      <div className="container cta-container" ref={ref as any}>
        <div className={`cta-content reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2>Ready to Inspect with Confidence?</h2>
          <p>
            Reach out for expert consultation or to schedule an inspection. Our team is available to help you achieve compliance and safety excellence.
          </p>
          <div className="cta-benefits">
            <span className="benefit-item"><Zap size={18} /> Quick Response</span>
            <span className="benefit-item"><Award size={18} /> Expert Consultation</span>
            <span className="benefit-item"><CheckCircle size={18} /> Free Quote</span>
          </div>
        </div>
        
        <div className={`cta-contact-cards reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          <a href="tel:+919316012883" className="contact-card">
            <div className="contact-icon-wrapper">
              <PhoneCall size={24} color="white" />
            </div>
            <div className="contact-details">
              <h4>Call Us</h4>
              <p>+91 93160 12883</p>
              <span>Available Mon-Sat, 9 AM - 6 PM</span>
            </div>
            <div className="contact-action">Call Now →</div>
          </a>

          <a href="mailto:info@itcindia.org" className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail size={24} color="white" />
            </div>
            <div className="contact-details">
              <h4>Email Us</h4>
              <p>info@itcindia.org</p>
              <span>We respond within 24 hours</span>
            </div>
            <div className="contact-action">Send Email →</div>
          </a>

          <a href="https://maps.google.com/?q=ITC+India" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon-wrapper">
              <MapPin size={24} color="white" />
            </div>
            <div className="contact-details">
              <h4>Visit Us</h4>
              <p>ITC India Office</p>
              <span>Schedule an in-person consultation</span>
            </div>
            <div className="contact-action">Get Directions →</div>
          </a>
        </div>
      </div>
    </section>
  );
};
