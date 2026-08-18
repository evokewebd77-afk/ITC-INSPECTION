import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img 
                src="https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp" 
                alt="ITC India Logo" 
                height="48" 
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="footer-brand-title">Inspection Services</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem', fontWeight: 500 }}>A Division of ITC (India) Pvt. Ltd.</span>
              </div>
            </h3>
            <p className="footer-desc">
              Trusted experts in inspection, safety, and compliance for critical industries across India.
            </p>
            
            <div className="footer-contact" style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <Phone size={18} style={{ color: 'var(--secondary-color)' }} />
                <strong>Phone:</strong> <a href="tel:+919316012883" style={{ color: 'inherit', textDecoration: 'none' }}>+91 93160 12883</a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--secondary-color)' }} />
                <strong>Email:</strong> <a href="mailto:info@itcindia.org" style={{ color: 'inherit', textDecoration: 'none' }}>info@itcindia.org</a>
              </p>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Inspection Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Inspection Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/explosion-hazardous">Explosion & Hazardous Area Safety</Link></li>
              <li><Link href="/services/advanced-electrical">Electrical & Electronics</Link></li>
              <li><Link href="/services/machinery-robotics">Machinery & Robotics</Link></li>
              <li><Link href="/services/perimeter-security">Perimeter & Security</Link></li>
              <li><Link href="/services" style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>View All Inspection Services →</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom" style={{ justifyContent: 'center' }}>
          <p>© 2025 ITC India – Inspection Division | Developed by Damnart | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
