import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Target, Search, Beaker, AlertTriangle, ShieldAlert, Award, Phone, Mail } from 'lucide-react';
import { servicesData } from '../data/services';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const [ref, isVisible] = useIntersectionObserver();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Dynamic Page Header */}
      <section className="service-hero" style={{ position: 'relative', marginTop: '-80px', paddingTop: '120px', paddingBottom: '6rem', overflow: 'hidden', borderBottom: '1px solid rgba(4, 55, 129, 0.05)' }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${service.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          zIndex: 0
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 700 }}>
            <ArrowLeft size={20} /> Back to Services
          </Link>
          
          <div style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(12px)', padding: 'clamp(1.25rem, 3vw, 2.5rem)', borderRadius: '24px', maxWidth: '850px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(5, 158, 246, 0.1)', color: 'var(--secondary-color)', padding: '1rem', borderRadius: '16px', flexShrink: 0 }}>
                {service.icon}
              </div>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', margin: 0, fontWeight: 800, color: 'var(--primary-color)' }}>{service.title}</h1>
            </div>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'var(--text-main)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              {service.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section" ref={ref as any}>
        <div className="container">
          <div className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Main Content */}
            <div>
              {(service as any).extendedContent ? (
                <>
                  {/* Intro section heading & description if present */}
                  {(service as any).extendedContent.detailIntroTitle && (
                    <div style={{ marginBottom: '2.5rem' }}>
                      <h2 style={{ fontSize: '2.2rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 800 }}>
                        {(service as any).extendedContent.detailIntroTitle}
                      </h2>
                      {(service as any).extendedContent.detailIntroDesc && (
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, margin: 0 }}>
                          {(service as any).extendedContent.detailIntroDesc}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Feature items / Sub-services Include section */}
                  {(() => {
                    const subServices = (service as any).extendedContent?.subServices;
                    if (!subServices || subServices.length === 0) return null;

                    return (
                      <div style={{ marginBottom: '3.5rem' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 700 }}>
                          Our Inspection Services Include:
                        </h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                          {subServices.map((sub: any, i: number) => {
                            const hasRealLink = sub.link && sub.link !== '#' && sub.link !== `/services/${id}`;
                            const targetId = hasRealLink ? sub.link.replace('/services/', '') : null;
                            const targetService = targetId ? servicesData.find(s => s.id === targetId) : null;

                            const cardTitle = targetService ? targetService.title : sub.title;
                            const cardDesc = targetService ? targetService.desc : sub.desc;
                            const cardLink = targetService ? `/services/${targetService.id}` : sub.link;

                            if (hasRealLink) {
                              return (
                                <Link key={i} to={cardLink} className="service-feature-card">
                                  <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: 700 }}>{cardTitle}</h4>
                                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>{cardDesc}</p>
                                  <div className="learn-more">
                                    Learn More <ArrowRight size={16} />
                                  </div>
                                </Link>
                              );
                            }

                            return (
                              <div key={i} className="service-feature-card" style={{ cursor: 'default' }}>
                                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', marginBottom: '0.75rem', fontWeight: 700 }}>{cardTitle}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>{cardDesc}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  <div style={{ 
                    background: 'var(--primary-color)', 
                    padding: '6rem 0', 
                    marginBottom: '5rem',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)',
                    width: '100vw',
                    boxShadow: '0 20px 40px rgba(4, 55, 129, 0.15)' 
                  }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                      <h3 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '3.5rem', fontWeight: 800, textAlign: 'center' }}>Detailed Scope & Methodology</h3>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {(service as any).extendedContent.overview && (
                          <div className="scope-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                              <div className="scope-icon-wrapper"><Target size={24} /></div>
                              <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Overview</h4>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.overview}</p>
                          </div>
                        )}

                        <div className="scope-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="scope-icon-wrapper"><Target size={24} /></div>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Key Inspection Areas</h4>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.keyInspectionAreas}</p>
                        </div>

                        <div className="scope-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="scope-icon-wrapper"><Search size={24} /></div>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Scope of Inspection</h4>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.scopeOfInspection}</p>
                        </div>

                        <div className="scope-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="scope-icon-wrapper"><Beaker size={24} /></div>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Key Tests</h4>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.keyTests}</p>
                        </div>

                        <div className="scope-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="scope-icon-wrapper"><AlertTriangle size={24} /></div>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Quality Issues</h4>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.qualityIssues}</p>
                        </div>

                        <div className="scope-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="scope-icon-wrapper"><ShieldAlert size={24} /></div>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Risk & Safety Issues</h4>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.riskAndSafetyIssues}</p>
                        </div>

                        <div className="scope-card">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div className="scope-icon-wrapper"><Award size={24} /></div>
                            <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: 0, fontWeight: 800 }}>Compliance & Report</h4>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'left', margin: 0, flexGrow: 1 }}>{(service as any).extendedContent.complianceAndCertification}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {(service as any).extendedContent.whyChooseUs && (service as any).extendedContent.whyChooseUs.length > 0 && (
                    <>
                      <h3 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: 800, textAlign: 'center' }}>Why Choose Our Services?</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                        {(service as any).extendedContent.whyChooseUs.map((reason: any, i: number) => (
                          <div key={i} className="why-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                              <CheckCircle style={{ color: 'var(--secondary-color)' }} size={24} />
                              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', margin: 0, fontWeight: 700 }}>{reason.title}</h4>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, marginLeft: '40px' }}>{reason.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', padding: 'clamp(2rem, 4vw, 3.5rem) 1.5rem', borderRadius: '20px', color: 'white', textAlign: 'center', marginTop: '4rem', boxShadow: '0 20px 40px rgba(4, 55, 129, 0.2)' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem', fontWeight: 800, color: 'white' }}>Ready to Ensure Your Safety?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem auto', color: 'white' }}>
                      Get expert consultation for your {service.title.toLowerCase()} needs
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem', fontWeight: 600 }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '50%' }}><Phone size={24} /></div>
                        +91 93160 12883
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem', fontWeight: 600 }}>
                        <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.75rem', borderRadius: '50%' }}><Mail size={24} /></div>
                        info@itcindia.org
                      </div>
                    </div>
                    <Link to="/contact" style={{ display: 'inline-block', background: 'white', color: 'var(--primary-color)', padding: '1.2rem 3rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 800, fontSize: '1.15rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }}>
                      Request a Quote
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 700 }}>Service Overview</h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                    {service.longDesc}
                  </p>

                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 700 }}>Key Benefits</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {['Comprehensive risk auditing and reporting', 'Guaranteed compliance with global standards', 'Actionable remediation plans provided instantly'].map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        <CheckCircle style={{ color: 'var(--secondary-color)', flexShrink: 0, marginTop: '2px' }} size={20} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
