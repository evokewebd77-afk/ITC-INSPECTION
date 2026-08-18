'use client';

import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Newsletter.css';

export const Newsletter: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="newsletter container" ref={ref as any}>
      <div className={`newsletter-glass reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
        <div className="newsletter-content">
          <h2>Stay Ahead with Safety Insights</h2>
          <p>
            Get exclusive updates on inspection innovations, compliance alerts, industry best practices, and expert insights delivered to your inbox.
          </p>
          <div className="newsletter-features">
            <span className="feature-item"><CheckCircle size={18} /> Industry Updates</span>
            <span className="feature-item"><CheckCircle size={18} /> Compliance Alerts</span>
            <span className="feature-item"><CheckCircle size={18} /> Expert Insights</span>
          </div>
        </div>
        
        <div className="newsletter-form-container">
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe Now</button>
            </div>
            <div className="newsletter-meta">
              <span className="meta-item"><Mail size={16} /> No spam, unsubscribe anytime</span>
              <span className="meta-item"><ShieldCheck size={16} /> Privacy protected</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
