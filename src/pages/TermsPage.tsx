import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionStyle: React.CSSProperties = { marginBottom: '3rem' };

  const headingStyle: React.CSSProperties = {
    fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '1.25rem', lineHeight: 1.3,
  };

  const textStyle: React.CSSProperties = {
    fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem',
  };

  const listStyle: React.CSSProperties = {
    listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
  };

  const listItemStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7,
  };

  const bulletStyle: React.CSSProperties = {
    width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary-color)', flexShrink: 0, marginTop: '0.55rem',
  };

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>

      {/* Hero Section */}
      <section style={{
        position: 'relative', padding: '6rem 0', color: 'white', overflow: 'hidden', minHeight: '350px', display: 'flex', alignItems: 'center',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('/terms.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(4,55,129,0.7) 0%, rgba(0,0,0,0.8) 100%)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <FileText size={36} />
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '650px', margin: '0 auto' }}>
            Please read these terms carefully before using our inspection services. These terms govern your use of ITC India's services and website.
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

            {/* 1 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>1. Introduction</h2>
              <p style={textStyle}>Welcome to ITC (India) Pvt. Ltd. ("ITC India", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website, inspection services, safety audits, compliance assessments, and certification services. By accessing our website or using our services, you agree to be bound by these Terms.</p>
              <p style={textStyle}>If you do not agree to these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting on our website.</p>
            </div>

            {/* 2 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>2. Services</h2>
              <p style={textStyle}>ITC India provides professional inspection, safety audit, compliance assessment, and certification services for various industries including but not limited to:</p>
              <ul style={listStyle}>
                {[
                  'Explosion and hazardous area safety inspections',
                  'Electrical and electronics system inspections',
                  'Machinery and robotics safety assessments',
                  'Solar and renewable energy system inspections',
                  'Perimeter and security system audits',
                  'CCTV and surveillance system inspections',
                  'Building health and smart building assessments',
                  'Critical infrastructure inspections',
                  'Environmental safety and compliance services',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>All services are provided subject to availability and in accordance with applicable laws, regulations, and industry standards.</p>
            </div>

            {/* 3 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>3. Service Agreement</h2>
              <p style={textStyle}>When you engage our services, a separate service agreement or contract will be executed that outlines:</p>
              <ul style={listStyle}>
                {[
                  'Specific scope of work and deliverables',
                  'Service fees and payment terms',
                  'Timeline and completion dates',
                  'Client responsibilities and site access requirements',
                  'Limitations of liability and warranties',
                  'Confidentiality and data protection provisions',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>The service agreement will take precedence over these Terms to the extent of any conflict. These Terms will apply to all other aspects of our relationship.</p>
            </div>

            {/* 4 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>4. User Responsibilities</h2>
              <p style={textStyle}>When using our services, you agree to:</p>
              <ul style={listStyle}>
                {[
                  'Provide accurate and complete information about your inspection requirements',
                  'Grant necessary site access and provide required documentation',
                  'Ensure a safe working environment for our inspection personnel',
                  'Comply with all applicable laws and regulations',
                  'Pay all fees and charges as agreed in the service contract',
                  'Maintain confidentiality of inspection reports and findings',
                  'Use inspection reports and certifications only for their intended purpose',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* 5 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>5. Payment Terms</h2>
              <p style={textStyle}>Payment terms for our services are as follows:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Quotes and Estimates:</strong> All quotes are valid for 30 days unless otherwise stated</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Payment Schedule:</strong> Payment terms will be specified in the service agreement, typically including advance payments and milestone-based payments</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Late Payments:</strong> Late payments may incur interest charges and may result in suspension of services</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Refunds:</strong> Refund policies will be outlined in the specific service agreement</span></li>
                <li style={listItemStyle}><div style={bulletStyle}></div><span><strong style={{ color: 'var(--text-main)' }}>Taxes:</strong> All fees are exclusive of applicable taxes, which will be added to invoices as required by law</span></li>
              </ul>
            </div>

            {/* 6 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>6. Intellectual Property</h2>
              <p style={textStyle}>All inspection reports, certifications, methodologies, and other deliverables created by ITC India remain our intellectual property. You are granted a license to use these materials for the purposes specified in the service agreement. You may not:</p>
              <ul style={listStyle}>
                {[
                  'Reproduce, distribute, or modify our reports without written permission',
                  'Use our name, logo, or certifications for marketing purposes without authorization',
                  'Share inspection reports with third parties except as permitted in the service agreement',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* 7 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>7. Limitation of Liability</h2>
              <p style={textStyle}>To the maximum extent permitted by law:</p>
              <ul style={listStyle}>
                {[
                  'Our liability for any claims arising from our services is limited to the total fees paid for the specific service in question',
                  'We are not liable for indirect, incidental, special, or consequential damages',
                  'We are not responsible for delays or failures due to circumstances beyond our reasonable control',
                  'Inspection reports and certifications are based on conditions observed at the time of inspection and may not identify all potential issues',
                  'We are not liable for decisions made by clients based on our inspection reports',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* 8 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>8. Warranties and Disclaimers</h2>
              <p style={textStyle}>Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:</p>
              <ul style={listStyle}>
                {[
                  'Our services will be uninterrupted, error-free, or completely accurate',
                  'All defects or issues will be identified during inspection',
                  'Our services will meet all of your specific requirements',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>We warrant that our services will be performed with professional competence and in accordance with applicable industry standards and regulations.</p>
            </div>

            {/* 9 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>9. Termination</h2>
              <p style={textStyle}>Either party may terminate a service agreement:</p>
              <ul style={listStyle}>
                {[
                  'In accordance with the terms specified in the service agreement',
                  'Immediately in case of material breach by the other party',
                  'With written notice as specified in the agreement',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>Upon termination, you remain responsible for payment of all services rendered up to the termination date. We reserve the right to suspend services for non-payment or breach of these Terms.</p>
            </div>

            {/* 10 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>10. Confidentiality</h2>
              <p style={textStyle}>We respect the confidentiality of your business information and inspection data. We agree to:</p>
              <ul style={listStyle}>
                {[
                  'Keep all client information and inspection findings confidential',
                  'Use information only for the purposes of providing our services',
                  'Not disclose information to third parties except as required by law or with your written consent',
                  'Implement appropriate security measures to protect confidential information',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
              <p style={textStyle}>You agree to maintain the confidentiality of our inspection methodologies and proprietary processes.</p>
            </div>

            {/* 11 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>11. Indemnification</h2>
              <p style={textStyle}>You agree to indemnify and hold harmless ITC India, its officers, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
              <ul style={listStyle}>
                {[
                  'Your breach of these Terms or the service agreement',
                  'Your misuse of our inspection reports or certifications',
                  'Your failure to provide accurate information or required site access',
                  'Any third-party claims related to your use of our services',
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* 12 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>12. Dispute Resolution</h2>
              <p style={textStyle}>In the event of any dispute arising from these Terms or our services:</p>
              <ul style={listStyle}>
                {[
                  'Parties agree to first attempt to resolve disputes through good faith negotiation',
                  'If negotiation fails, disputes will be resolved through arbitration in accordance with Indian arbitration laws',
                  'Arbitration will be conducted in India',
                  "The arbitrator's decision will be final and binding on both parties",
                ].map((item, i) => (
                  <li key={i} style={listItemStyle}><div style={bulletStyle}></div><span>{item}</span></li>
                ))}
              </ul>
            </div>

            {/* 13 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>13. Governing Law</h2>
              <p style={textStyle}>These Terms are governed by and construed in accordance with the laws of India. Any legal proceedings will be subject to the exclusive jurisdiction of the courts in India.</p>
            </div>

            {/* 14 */}
            <div style={sectionStyle}>
              <h2 style={headingStyle}>14. Changes to Terms</h2>
              <p style={textStyle}>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.</p>
            </div>

            {/* 15 */}
            <div style={{ marginBottom: 0 }}>
              <h2 style={headingStyle}>15. Contact Us</h2>
              <p style={textStyle}>If you have any questions about these Terms of Service, please contact us at:</p>
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
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary-color)', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
