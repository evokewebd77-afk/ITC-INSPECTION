import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  FileText,
  Search,
  BarChart,
  Activity,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const AboutPage: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      
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
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url('https://res.cloudinary.com/didtfhfme/image/upload/v1786428650/ChatGPT_Image_Aug_11_2026_11_40_32_AM_jm7dwi.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.8)', color: 'white' }}>About ITC India</h1>
          <p style={{ fontSize: '1.35rem', color: '#ffffff', maxWidth: '800px', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.8)', fontWeight: 500 }}>
            Trusted experts in inspection, safety, and compliance for critical industries across India. We combine decades of industry expertise with cutting-edge technology to deliver inspection services that exceed expectations.
          </p>
        </div>
      </section>

      {/* Who We Are & Expertise Section */}
      <section className="section" ref={ref as any}>
        <div className="container">
          
          {/* Who We Are - Image Left, Text Right */}
          <div className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'center', marginBottom: '8rem' }}>
            <div style={{ position: 'relative', padding: '0 2rem 2rem 0' }}>
              <img src="/abot.png" alt="Inspection Professionals" style={{ borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', width: '100%', objectFit: 'cover', minHeight: '400px' }} />
              
              {/* Floating Badge */}
              <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 2 }}>
                <div style={{ background: 'var(--secondary-color)', color: 'white', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', fontWeight: 800 }}>
                  25+
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--primary-color)', fontSize: '1.35rem', lineHeight: 1.2 }}>Years of</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Excellence</div>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(5, 158, 246, 0.1)', color: 'var(--secondary-color)', borderRadius: '50px', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Our Heritage</div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>Who We Are</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                ITC India is a leading inspection and certification division specializing in comprehensive safety audits, compliance verification, and technical assessments across multiple industrial sectors. With a team of certified professionals and state-of-the-art diagnostic tools, we ensure your facilities meet international standards and regulatory requirements.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Our commitment to excellence drives us to continuously innovate and adapt to evolving industry standards, ensuring that our clients receive the most reliable and up-to-date inspection services available in the market.
              </p>
            </div>
          </div>

          {/* Our Expertise - Premium Card */}
          <div style={{ background: '#f4f8fc', borderRadius: '40px', padding: 'clamp(2rem, 4vw, 5rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '8rem', border: '1px solid rgba(4, 55, 129, 0.05)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Element */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(5, 158, 246, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'white', color: 'var(--secondary-color)', borderRadius: '50px', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>Core Strengths</div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>Our Expertise</h2>
              <p style={{ color: 'var(--text-main)', fontSize: '1.35rem', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.5 }}>
                Delivering insights that go beyond standard compliance checks.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {['IECEx & ATEX Certified Inspectors', 'ISO Accredited Processes', 'Multi-Domain Industrial Knowledge', 'Advanced Diagnostic Technology'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '1.15rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                    <div style={{ width: '36px', height: '36px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                      <CheckCircle size={20} strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: 'white', padding: '4rem 3rem', borderRadius: '30px', boxShadow: '0 25px 50px rgba(4, 55, 129, 0.08)', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '70px', height: '70px', background: 'rgba(5, 158, 246, 0.1)', color: 'var(--secondary-color)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
                <ShieldCheck size={36} />
              </div>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Our team consists of certified inspection professionals with multi-domain expertise across electrical, mechanical, safety, and environmental disciplines. Each inspector holds relevant certifications including IECEx, ATEX, ISO, and local regulatory accreditations, ensuring comprehensive coverage of all inspection requirements.
              </p>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                With years of hands-on experience in diverse industrial environments, our experts bring practical knowledge and technical excellence to every project.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div style={{ background: '#043781', borderRadius: '30px', padding: '4.5rem 2rem', color: 'white', textAlign: 'center', boxShadow: '0 20px 40px rgba(4, 55, 129, 0.2)' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: 800, color: '#ffffff' }}>Our Mission</h2>
            <p style={{ fontSize: '1.25rem', color: '#ffffff', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto 1.5rem auto', fontWeight: 500 }}>
              To provide world-class inspection services that ensure industrial safety, regulatory compliance, and operational excellence. We are committed to helping businesses across India achieve and maintain the highest standards of safety and compliance through thorough, professional, and reliable inspection services.
            </p>
            <p style={{ fontSize: '1.25rem', color: '#ffffff', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto', fontWeight: 500 }}>
              We believe that safety and compliance are not just regulatory requirements but fundamental pillars of sustainable business operations. Our mission extends beyond inspection to building long-term partnerships with our clients, supporting their growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section" style={{ backgroundColor: '#f4f8fc', padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 700 }}>What We Do</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: <ShieldCheck size={32} />, title: 'Comprehensive Inspections', desc: 'We conduct thorough inspections across 50+ categories including explosion-proof equipment, electrical systems, robotics, solar installations, and more. Our systematic approach ensures no detail is overlooked.' },
              { icon: <FileCheck size={32} />, title: 'Compliance Verification', desc: 'Our inspections ensure compliance with international standards including IECEx, ATEX, ISO, NFPA, and local regulatory requirements. We help you navigate complex compliance landscapes with confidence.' },
              { icon: <AlertTriangle size={32} />, title: 'Risk Assessment', desc: 'Advanced risk assessment methodologies help identify potential hazards before they become critical issues with prioritized remediation recommendations. We provide actionable insights for risk mitigation.' },
              { icon: <FileText size={32} />, title: 'Detailed Reporting', desc: 'Receive comprehensive inspection reports with high-resolution photographs, detailed findings, risk ratings, and actionable remediation plans. Our reports are designed for both technical teams and management.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '3rem 2.5rem', background: '#ffffff', borderRadius: '24px', border: '1px solid rgba(4, 55, 129, 0.05)', boxShadow: '0 15px 35px rgba(4, 55, 129, 0.05)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(4, 55, 129, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(4, 55, 129, 0.05)'; }}>
                <div style={{ width: '70px', height: '70px', background: 'var(--primary-color)', color: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(4, 55, 129, 0.2)' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 800 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 700, marginBottom: '1rem' }}>Our Process</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>We follow a systematic, five-step process to ensure thorough and reliable inspection services.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Search />, title: 'Discovery & Scope Definition', desc: 'Understanding your requirements and defining the inspection scope' },
              { icon: <BarChart />, title: 'Analysis & Risk Assessment', desc: 'Comprehensive analysis and identification of potential risks' },
              { icon: <Activity />, title: 'On-Site Inspection', desc: 'Detailed on-site examination using advanced diagnostic tools' },
              { icon: <FileCheck />, title: 'Report & Handover', desc: 'Comprehensive reporting with actionable recommendations' },
              { icon: <CheckCircle />, title: 'Follow-Up & Verification', desc: 'Ongoing support and verification of implemented solutions' }
            ].map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'white', color: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative' }}>
                  {step.icon}
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '30px', height: '30px', background: 'var(--secondary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>{index + 1}</div>
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: 700 }}>{step.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#e3f2fd', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>Ready to Work With Us?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto', fontWeight: 500 }}>
            Get in touch with our team to discuss your inspection needs and learn how we can help you achieve compliance and safety excellence.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, borderRadius: '50px' }}>
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};
