'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle: React.CSSProperties = {
    marginBottom: '3rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '1.6rem',
    fontWeight: 800,
    color: 'var(--primary-color)',
    marginBottom: '1.25rem',
    lineHeight: 1.3,
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
    lineHeight: 1.8,
    marginBottom: '1rem',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '1rem 0 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
  };

  const bulletStyle: React.CSSProperties = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--secondary-color)',
    flexShrink: 0,
    marginTop: '0.55rem',
  };

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        color: 'white',
        overflow: 'hidden',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('/privacy.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(4,55,129,0.7) 0%, rgba(0,0,0,0.8) 100%)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <Shield size={36} />
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Your privacy is important to us. This policy outlines how ITC India collects, uses, and protects your personal information.
          </p>
          <div style={{ marginTop: '2rem', display: 'inline-block', padding: '0.6rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
            Last Updated: December 2024
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ background: 'white', borderRadius: '28px', padding: '4rem 3.5rem', boxShadow: '0 15px 40px rgba(4,55,129,0.06)', border: '1px solid rgba(4,55,129,0.04)' }}>

            {/* 1. Introduction */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>1. Introduction</h2>
              <p style={textStyle}>
                Welcome to ITC (India) Pvt. Ltd. ("ITC India", "we", "us", or "our"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website and use our inspection, safety, and compliance services.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>2. Information We Collect</h2>
              <p style={textStyle}>We may collect the following types of information:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Personal Information:</strong> Name, email address, phone number, postal address, company name, job title, and other contact details.</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Service-Related Information:</strong> Details about your inspection requirements, site locations, technical specifications, and compliance needs.</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Usage Data:</strong> Information about how you use our website, including IP addresses, browser type, pages visited, and time spent on our site.</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Cookies and Tracking Technologies:</strong> Information collected through cookies and other tracking technologies to enhance your experience on our site and analyze website performance.</span></li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>3. How We Use Your Information</h2>
              <p style={textStyle}>We use your information to:</p>
              <ul style={listStyle}>
                {[
                  'Provide and improve our inspection, safety audit, and compliance services',
                  'Communicate with you regarding inquiries, service requests, and inspection reports',
                  'Personalize your experience on our website',
                  'Analyze usage patterns to enhance website functionality and service delivery',
                  'Process quotes, manage contracts, and handle billing for our services',
                  'Comply with legal obligations and regulatory requirements',
                  'Send you updates about our services and industry insights (with your consent)'
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* 4. Sharing Your Information */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>4. Sharing Your Information</h2>
              <p style={textStyle}>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy. We may share your information with:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting inspections, performing laboratory testing, and managing our business operations</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Business Partners:</strong> Subcontractors, specialized inspection agencies, and certification bodies when required for service delivery</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Legal and Regulatory Authorities:</strong> Law enforcement or other governmental authorities as required by law or to comply with regulatory requirements</span></li>
              </ul>
            </div>

            {/* 5. Data Security */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>5. Data Security</h2>
              <p style={textStyle}>
                We implement a variety of security measures to protect your personal information, including encryption of data in transit and at rest, secure access controls, regular security audits, and employee training on data protection. Despite these efforts, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security. However, we are committed to maintaining the highest standards of data protection.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>6. Your Rights</h2>
              <p style={textStyle}>You have the right to:</p>
              <ul style={listStyle}>
                {[
                  'Access the personal information we hold about you',
                  'Request corrections to any inaccurate or incomplete information',
                  'Request deletion of your personal information (subject to legal retention requirements for inspection records)',
                  'Object to the processing of your personal information',
                  'Withdraw consent at any time where we are relying on consent to process your personal information'
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            {/* 7. Cookies */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>7. Cookies</h2>
              <p style={textStyle}>We use cookies to:</p>
              <ul style={listStyle}>
                {[
                  'Understand and save your preferences for future visits',
                  'Compile aggregate data about site traffic and site interactions',
                  'Enhance your browsing experience and provide personalized content'
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>
                You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
              </p>
            </div>

            {/* 8. Third-Party Links */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>8. Third-Party Links</h2>
              <p style={textStyle}>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or the content of these sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* 9. Changes to This Privacy Policy */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>9. Changes to This Privacy Policy</h2>
              <p style={textStyle}>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* 10. Contact Us */}
            <div style={{ marginBottom: 0 }}>
              <h2 style={headingStyle}>10. Contact Us</h2>
              <p style={textStyle}>
                If you have any questions about this Privacy Policy or wish to exercise your rights regarding your personal information, please contact us at:
              </p>
              <div style={{ background: '#f4f8fc', borderRadius: '18px', padding: '2rem 2.5rem', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@itcindia.org" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>info@itcindia.org</a>
                </p>
                <p style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919316012883" style={{ color: 'var(--secondary-color)', textDecoration: 'none' }}>+91 93160 12883</a>
                </p>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};
