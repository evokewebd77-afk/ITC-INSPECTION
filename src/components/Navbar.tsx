import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { QuoteModal } from './QuoteModal';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp" alt="ITC India Logo" height="48" style={{ objectFit: 'contain' }} />
          <div className="nav-brand-text" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.2, color: 'var(--primary-color)' }}>Inspection Services</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>A Division of ITC (India) Pvt. Ltd.</span>
          </div>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Inspection Services</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          <li>
            <button className="btn btn-primary" onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }}>
              Request a Quote
            </button>
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </nav>
  );
};
