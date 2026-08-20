'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Phone, Mail, MapPin, CheckCircle, Clock, Loader2 } from 'lucide-react';
import { servicesData } from '../data/services';
import { sendFormToGoogleSheet } from '../utils/submitForm';

export const ContactPage: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

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

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-muted)', minHeight: '100vh' }}>
      
      {/* Page Header */}
      <section style={{ 
        position: 'relative', 
        padding: '8rem 0', 
        color: 'white', 
        overflow: 'hidden',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Image & Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image
            src="https://res.cloudinary.com/didtfhfme/image/upload/f_auto,q_auto,w_1400/v1786439430/ChatGPT_Image_Aug_11_2026_02_40_06_PM_bbui4d.png"
            alt="Contact ITC India"
            fill
            priority
            quality={75}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Ready to Inspect with Confidence?</h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Reach out for expert consultation or to schedule an inspection. Our team is ready to help you achieve compliance and safety excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section" ref={ref as any}>
        <div className="container">
          <div className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Contact Info (Left Column) */}
            <div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(5, 158, 246, 0.1)', color: 'var(--secondary-color)', borderRadius: '50px', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Direct Communication</div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 800 }}>Get In Touch</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
                Have questions about our inspection processes, standards compliance, or need a custom quote for your facility? Reach out to our expert team through any of the channels below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Phone */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', color: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(4, 55, 129, 0.2)' }}>
                    <Phone size={26} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>Phone Consultation</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: 1.5 }}>
                      Direct: <a href="tel:+919316012883" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600 }}>+91 93160 12883</a><br />
                      WhatsApp: <a href="https://wa.me/919056544487" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>+91 90565 44487</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', color: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(4, 55, 129, 0.2)' }}>
                    <Mail size={26} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>Email Inquiries</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0, lineHeight: 1.5 }}>
                      General: <a href="mailto:info@itcindia.org" style={{ color: 'var(--secondary-color)', textDecoration: 'none', fontWeight: 600 }}>info@itcindia.org</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', color: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(4, 55, 129, 0.2)' }}>
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>Head Office</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.5, margin: 0 }}>ITC India Office</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '60px', height: '60px', background: 'var(--primary-color)', color: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(4, 55, 129, 0.2)' }}>
                    <Clock size={26} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>Operational Hours</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.5 }}>Monday - Saturday: 9:00 AM - 6:00 PM<br />Emergency Support Available</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="contact-page-card" style={{ background: 'white', borderRadius: '30px', padding: '3.5rem', border: '1px solid rgba(4, 55, 129, 0.05)', boxShadow: '0 25px 50px rgba(4, 55, 129, 0.08)' }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>Request a Quote</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
                Fill out the form below and we'll get back to you with a customized quote.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--primary-color)' }}>
                  <CheckCircle size={56} style={{ color: '#25D366', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Thank You!</h4>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Your request has been submitted. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Form Grid Row 1 */}
                  <div className="contact-page-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.9rem' }}>Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="contact-page-input" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="Full Name" required />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.9rem' }}>Company Name *</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="contact-page-input" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="Company Name" required />
                    </div>
                  </div>

                  {/* Form Grid Row 2 */}
                  <div className="contact-page-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.9rem' }}>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="contact-page-input" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="email@company.com" required />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.9rem' }}>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="contact-page-input" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none' }} placeholder="+91 93160 12883" required />
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.9rem' }}>Service Interest</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="contact-page-select" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', outline: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
                      <option value="" disabled>Select a service category</option>
                      {servicesData.slice(0, 6).map((service, idx) => (
                        <option key={idx} value={service.title}>{service.title}</option>
                      ))}
                      <option value="Any Other">Any Other</option>
                    </select>
                  </div>

                  {/* Textarea */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.9rem' }}>Project Details / Requirements</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="contact-page-textarea" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', resize: 'vertical', outline: 'none', fontFamily: 'inherit' }} placeholder="Tell us about your inspection requirements..."></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '1.1rem', fontSize: '1.1rem', justifyContent: 'center', borderRadius: '16px', fontWeight: 800, opacity: loading ? 0.7 : 1 }}>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 700 }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Find quick answers to common questions about our inspection processes and timelines.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { q: 'How quickly can you schedule an inspection?', a: 'We typically schedule standard inspections within 3-5 business days. For urgent or critical compliance issues, we offer expedited 24-hour response teams.' },
              { q: 'Do you operate nationwide across India?', a: 'Yes, we have certified inspection teams deployed across multiple strategic locations in India, allowing us to serve clients nationwide efficiently.' },
              { q: 'What happens if our facility fails an inspection?', a: 'Our reports include detailed, actionable remediation steps. We act as your compliance partner, guiding your team through the necessary fixes to achieve full certification.' },
              { q: 'Are your reports accepted globally?', a: 'Absolutely. We inspect against strict international standards (IECEx, ATEX, ISO, NFPA) and our certifications are widely recognized by global regulatory bodies.' }
            ].map((faq, i) => (
              <div key={i} style={{ padding: '2rem', background: 'white', borderRadius: '16px', border: '1px solid rgba(4, 55, 129, 0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 800 }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
