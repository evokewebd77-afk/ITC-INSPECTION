import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send, Loader2 } from 'lucide-react';
import { sendFormToGoogleSheet } from '../utils/submitForm';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendFormToGoogleSheet(formData);

    setLoading(false);
    setFormSubmitted(true);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="cta-two-col">

          {/* LEFT SIDE — Content */}
          <div className="cta-left">
            <h2 className="cta-headline">Ready to Inspect with Confidence?</h2>
            <p className="cta-subtext">
              Reach out for expert consultation or to schedule an inspection. Our team is available to help you achieve compliance and safety excellence.
            </p>

            {/* Contact Info Cards */}
            <div className="cta-info-list">
              <a href="tel:+919316012883" className="cta-info-item">
                <div className="cta-info-icon call-icon"><Phone size={22} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p className="cta-info-highlight">+91 93160 12883</p>
                  <p className="cta-info-meta">Available Mon-Sat, 9 AM - 6 PM</p>
                </div>
              </a>

              <a href="mailto:info@itcindia.org" className="cta-info-item">
                <div className="cta-info-icon email-icon"><Mail size={22} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p className="cta-info-highlight">info@itcindia.org</p>
                  <p className="cta-info-meta">We respond within 24 hours</p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=ITC+India" target="_blank" rel="noopener noreferrer" className="cta-info-item">
                <div className="cta-info-icon visit-icon"><MapPin size={22} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p className="cta-info-highlight">ITC India Office</p>
                  <p className="cta-info-meta">Schedule an in-person consultation</p>
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="cta-trust-row">
              {['Quick Response', 'Expert Consultation', 'Free Quote', 'Certified Team'].map((badge, i) => (
                <div className="cta-trust-badge" key={i}>
                  <CheckCircle size={18} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — Contact Form */}
          <div className="cta-right">
            <div className="cta-form-card">
              <h3 className="cta-form-title">Request a Quote</h3>
              <p className="cta-form-sub">Fill out the form and our team will get back to you shortly.</p>

              {formSubmitted ? (
                <div className="cta-form-success">
                  <CheckCircle size={48} />
                  <h4>Thank You!</h4>
                  <p>We've received your request. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label>Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                    </div>
                    <div className="cta-form-group">
                      <label>Company Name *</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company" required />
                    </div>
                  </div>
                  <div className="cta-form-row">
                    <div className="cta-form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@company.com" required />
                    </div>
                    <div className="cta-form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 1234567890" required />
                    </div>
                  </div>
                  <div className="cta-form-group">
                    <label>Service Interest</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                      <option value="" disabled>Select a service</option>
                      <option value="Explosion & Hazardous Area Safety">Explosion & Hazardous Area Safety</option>
                      <option value="Electrical & Electronics">Electrical & Electronics</option>
                      <option value="Machinery & Robotics">Machinery & Robotics</option>
                      <option value="Perimeter & Security">Perimeter & Security</option>
                      <option value="CCTV & Surveillance">CCTV & Surveillance</option>
                      <option value="Any Other">Any Other</option>
                    </select>
                  </div>
                  <div className="cta-form-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your inspection requirements..." rows={4}></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="cta-submit-btn" style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Submit Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
