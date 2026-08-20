'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../data/services';
import { sendFormToGoogleSheet } from '../utils/submitForm';
import './QuoteModal.css';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendFormToGoogleSheet(formData);

    setLoading(false);
    setSubmitted(true);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="quote-modal-backdrop" onClick={onClose}>
      
      {/* Modal Content container */}
      <div className="quote-modal-container" onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="quote-modal-close-btn"
          aria-label="Close Modal"
        >
          <X size={22} />
        </button>

        {/* Form Content */}
        <div className="quote-modal-body">
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--primary-color)', marginBottom: '0.4rem', fontWeight: 800 }}>Request a Quote</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
            Fill out the form below and our team will get back to you shortly.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--primary-color)' }}>
              <CheckCircle size={52} style={{ color: '#25D366', marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>Thank You!</h4>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>Your quote request has been submitted successfully. We will get in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="quote-modal-grid">
                <div className="quote-form-field">
                  <label className="quote-form-label">Full Name *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="quote-form-input" placeholder="John Doe" required />
                </div>
                <div className="quote-form-field">
                  <label className="quote-form-label">Company Name *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="quote-form-input" placeholder="Company Ltd." required />
                </div>
                <div className="quote-form-field">
                  <label className="quote-form-label">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="quote-form-input" placeholder="email@company.com" required />
                </div>
                <div className="quote-form-field">
                  <label className="quote-form-label">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="quote-form-input" placeholder="+91 1234567890" required />
                </div>
              </div>

              {/* Dropdown */}
              <div className="quote-form-field">
                <label className="quote-form-label">Service Interest</label>
                <select name="service" value={formData.service} onChange={handleChange} className="quote-form-select">
                  <option value="" disabled>Select a service category</option>
                  {servicesData.slice(0, 6).map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                  <option value="Any Other">Any Other</option>
                </select>
              </div>

              {/* Textarea */}
              <div className="quote-form-field">
                <label className="quote-form-label">Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="quote-form-textarea" placeholder="Tell us about your requirements..."></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={loading} className="quote-submit-btn" style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Loader2 size={20} className="animate-spin" /> Submitting...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
