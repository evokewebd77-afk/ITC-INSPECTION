import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-cinematic">
      <Image
        src="/itc.png"
        alt="ITC Inspection Background"
        priority
        fill
        sizes="100vw"
        quality={75}
        style={{ objectFit: 'cover' }}
        className="hero-bg-image"
      />
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container-glass">
        <div className="glass-panel animate-fade-in">
          <div className="hero-badge">
            <ShieldCheck size={16} /> India's Premier Inspection Authority
          </div>
          
          <h1 className="hero-title reveal-text">
            Trusted Experts in <br />
            <span className="hero-highlight">Inspection, Safety & Compliance</span>
          </h1>
          
          <p className="hero-subtitle reveal-text" style={{ animationDelay: '0.1s' }}>
            Ensuring industrial reliability, operational safety, and global compliance through next-generation inspection and certification solutions.
          </p>
          
          <div className="hero-actions delay-200 animate-fade-in">
            <Link href="/services" className="btn btn-primary">
              Explore Services
              <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Request a Quote
            </Link>
          </div>

          {/* Quick Features Strip */}
          <div className="hero-trust-strip">
            <span>✓ ISO 17020 Accredited</span>
            <span>•</span>
            <span>✓ Global Compliance</span>
            <span>•</span>
            <span>✓ 24/7 Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
