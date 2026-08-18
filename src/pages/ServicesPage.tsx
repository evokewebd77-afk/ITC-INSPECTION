import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Activity, BarChart, CheckCircle } from 'lucide-react';
import { servicesData, mainServiceIds } from '../data/services';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../sections/Services.css';

export const ServicesPage: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = servicesData.filter(s => mainServiceIds.includes(s.id));

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Premium Hero Section */}
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
          backgroundImage: `url('https://res.cloudinary.com/didtfhfme/image/upload/v1786438910/ChatGPT_Image_Aug_11_2026_02_31_28_PM_yjrztd.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50px', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            50+ Categories
          </div>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 800, textShadow: '0 4px 20px rgba(0,0,0,0.5)', color: 'white' }}>Our Inspection Services</h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '900px', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.3)', fontWeight: 500 }}>
            Comprehensive inspection and certification services across 50+ categories. From explosion-proof equipment to smart building systems, we ensure your facilities meet international safety and compliance standards.
          </p>
        </div>
      </section>

      {/* Professional Overview text section */}
      <div style={{ backgroundColor: 'transparent', padding: '5rem 0 1rem 0' }}>
        <div className="container text-center">
          <p style={{ fontSize: '1.35rem', color: 'var(--text-main)', maxWidth: '1000px', margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>
            <strong style={{ color: 'var(--primary-color)' }}>Professional Inspection Services:</strong> We provide comprehensive inspection and certification services across 50+ categories, ensuring your facilities meet international safety and compliance standards. Our certified inspectors deliver detailed reports with actionable recommendations for maintaining operational excellence.
          </p>
        </div>
      </div>

      {/* Services Grid (Mapped from Data) */}
      <section className="section" style={{ backgroundColor: '#e3f2fd' }} ref={ref as any}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 700 }}>Core Inspection Service Areas</h2>
          </div>
          
          <div className={`services-grid reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
            {mainServices.map((service, index) => (
              <Link to={`/services/${service.id}`} className="premium-service-card" key={index}>
                <div className="premium-image-wrapper">
                  <img src={service.img} alt={service.title} className="premium-img" />
                  <div className="premium-overlay-gradient"></div>
                  <div className="premium-icon-glass">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                </div>
                <div className="premium-content">
                  <h3 className="premium-title">{service.title}</h3>
                  <p className="premium-desc">{service.desc}</p>
                  <div className="premium-action">
                    <span>View Service</span>
                    <div className="action-circle">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="section" style={{ backgroundColor: '#f4f8fc' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 700 }}>Our Inspection Process</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', position: 'relative' }}>
            {/* Desktop Connector Line */}
            <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', background: 'rgba(4, 55, 129, 0.1)', zIndex: 0 }} className="process-line"></div>
            
            {[
              { icon: <Search size={32} />, title: 'Discovery & Scope', desc: 'Understanding your requirements and defining inspection scope.' },
              { icon: <Activity size={32} />, title: 'On-Site Inspection', desc: 'Thorough examination using advanced diagnostic tools.' },
              { icon: <BarChart size={32} />, title: 'Analysis & Reporting', desc: 'Comprehensive reports with detailed findings and recommendations.' },
              { icon: <CheckCircle size={32} />, title: 'Follow-Up Support', desc: 'Ongoing verification and compliance monitoring.' }
            ].map((step, index) => (
              <div key={index} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  width: '80px', height: '80px', background: 'white', color: 'var(--primary-color)', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  margin: '0 auto 2rem auto', border: '4px solid #f4f8fc', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', position: 'relative' 
                }}>
                  {step.icon}
                  <div style={{ position: 'absolute', top: '-5px', right: '-5px', width: '28px', height: '28px', background: 'var(--secondary-color)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
                    {index + 1}
                  </div>
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 800 }}>{step.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#e3f2fd', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>Need a Custom Inspection Solution?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem auto', fontWeight: 500, lineHeight: 1.6 }}>
            Our team can design a tailored inspection program to meet your specific requirements and compliance needs.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, borderRadius: '50px' }}>
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
};
