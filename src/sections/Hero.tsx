import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-cinematic">
      <div className="hero-bg-image" style={{ backgroundImage: "url('/itc.png')" }}></div>
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container-glass">
        <div className="glass-panel animate-fade-in">
          <div className="hero-badge">
            <ShieldCheck size={16} /> India's Premier Inspection Authority
          </div>
          
          <h1 className="hero-title reveal-text">
            Trusted Experts in <br /> Inspection, Safety & Compliance
          </h1>
          
          <p className="hero-subtitle reveal-text" style={{ animationDelay: '0.1s' }}>
            Ensuring industrial reliability, operational safety, and global compliance through next-generation inspection and certification solutions.
          </p>
          
          <div className="hero-actions delay-200 animate-fade-in">
            <Link to="/services" className="btn btn-primary">
              Explore Services
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
