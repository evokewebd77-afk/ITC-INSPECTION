'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../data/services';
import { sendFormToGoogleSheet } from '../utils/submitForm';

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
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(2, 26, 62, 0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '5vh 1rem',
      animation: 'fadeIn 0.3s ease'
    }} onClick={onClose}>
      
      {/* Modal Content container */}
      <div style={{
        background: 'white',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '700px',
        maxHeight: '95vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        animation: 'slideUp 0.3s ease'
      }} onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'var(--bg-muted)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            transition: 'background 0.2s',
            zIndex: 10
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e2e8f0'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-muted)'}
        >
          <X size={24} />
        </button>

        {/* Form Content */}
        <div style={{ padding: '3.5rem 3rem' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>Request a Quote</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Fill out the form below and our team will get back to you shortly.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--primary-color)' }}>
              <CheckCircle size={56} style={{ color: '#25D366', marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Thank You!</h4>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Your quote request has been submitted successfully. We will get in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="John Doe" required />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Company Name *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="Company Ltd." required />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="email@company.com" required />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="+91 1234567890" required />
                </div>
              </div>

              {/* Dropdown */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Service Interest</label>
                <select name="service" value={formData.service} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
                  <option value="" disabled>Select a service category</option>
                  {servicesData.slice(0, 6).map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                  <option value="Any Other">Any Other</option>
                </select>
              </div>

              {/* Textarea */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>Project Details</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', resize: 'none', outline: 'none', fontFamily: 'inherit' }} placeholder="Tell us about your requirements..."></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.15rem', justifyContent: 'center', borderRadius: '16px', fontWeight: 800, marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
