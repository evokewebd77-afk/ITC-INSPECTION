'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Target, Search, Beaker, AlertTriangle, ShieldAlert, Award, Phone, Mail } from 'lucide-react';
import { servicesData } from '../data/services';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ServiceDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [ref, isVisible] = useIntersectionObserver();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    if (!service && id) {
      router.push('/services');
    }
  }, [service, id, router]);

  if (!service) {
    return null;
  }

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Dynamic Page Header */}
      <section style={{ 
        position: 'relative', 
        padding: '6rem 0 5rem 0', 
        color: 'white', 
        overflow: 'hidden',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${service.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          zIndex: 0
        }}></div>

        {/* Gradient Overlay to enhance background image visibility */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(180deg, rgba(4, 25, 55, 0.45) 0%, rgba(2, 16, 38, 0.75) 100%)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.6)', textDecoration: 'none', marginBottom: '1.5rem', fontWeight: 700 }}>
            <ArrowLeft size={20} /> Back to Services
          </Link>
          
          <div style={{ 
            background: 'rgba(8, 25, 52, 0.72)', 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)', 
            padding: 'clamp(1.25rem, 3vw, 2.25rem)', 
            borderRadius: '24px', 
            maxWidth: '850px', 
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)', 
            border: '1px solid rgba(255,255,255,0.2)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(5, 158, 246, 0.25)', color: '#ffffff', padding: '0.85rem', borderRadius: '16px', flexShrink: 0 }}>
                {service.icon}
              </div>
              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', margin: 0, fontWeight: 800, color: '#ffffff' }}>{service.title}</h1>
            </div>
            <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
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
            <div className="service-detail-white-box">
              <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 800, borderBottom: '2px solid #f0f4f8', paddingBottom: '1rem' }}>
                Service Overview & Scope
              </h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {service.longDesc || service.desc}
              </p>

              {/* Comprehensive Sub-Services Section */}
              {(() => {
                const subServices = (service as any).subServices || (service as any).extendedContent?.subServices || [];
                const isSubCategory = subServices.length === 0;

                if (isSubCategory) {
                  return (
                    <div style={{ marginTop: '3rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Target size={24} style={{ color: 'var(--secondary-color)' }} /> Key Inspection Focus Areas
                      </h3>
                      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                        Our specialized engineering team delivers rigorous inspection and validation in accordance with international regulatory frameworks:
                      </p>
                      
                      <div className="subservices-grid">
                        {[
                          'Full Compliance Audit & Verification',
                          'Risk Assessment & Mitigation Strategy',
                          'Diagnostic Testing & Calibration',
                          'Detailed Technical Certification Report'
                        ].map((focus, i) => (
                          <div key={i} className="service-feature-card" style={{ cursor: 'default' }}>
                            <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 700 }}>{focus}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
                              Comprehensive assessment ensuring highest safety standards and regulatory compliance.
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div style={{ marginTop: '3rem' }}>
                    <h3 style={{ fontSize: '1.75rem', color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Target size={26} style={{ color: 'var(--secondary-color)' }} /> Comprehensive Sub-Services Included
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                      We provide specialized inspection sub-categories tailored to your specific industry requirements:
                    </p>

                    <div className="subservices-grid">
                      {subServices.map((sub: any, i: number) => {
                        const hasRealLink = sub.link && sub.link !== '#' && sub.link !== `/services/${id}`;
                        const targetId = hasRealLink ? sub.link.replace('/services/', '') : null;
                        const targetService = targetId ? servicesData.find(s => s.id === targetId) : null;

                        const cardTitle = targetService ? targetService.title : sub.title;
                        const cardDesc = targetService ? targetService.desc : sub.desc;
                        const cardLink = targetService ? `/services/${targetService.id}` : sub.link;

                        if (hasRealLink) {
                          return (
                            <Link key={i} href={cardLink} className="service-feature-card">
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

              {/* Key Features List */}
              {(() => {
                const features = (service as any).features || (service as any).extendedContent?.features || [];
                if (features.length === 0) return null;
                return (
                  <div style={{ marginTop: '3.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 700 }}>
                      Inspection Capabilities & Highlights
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                      {features.map((feature: string, idx: number) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <CheckCircle size={20} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                          <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1rem' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Standards Compliance Box */}
              {(() => {
                const standards = (service as any).standards || (service as any).extendedContent?.standards || [];
                if (standards.length === 0) return null;
                return (
                  <div style={{ marginTop: '3.5rem', background: 'linear-gradient(135deg, #043781 0%, #062d5e 100%)', borderRadius: '20px', padding: '2.5rem', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <Award size={32} style={{ color: 'var(--secondary-color)' }} />
                      <h3 style={{ fontSize: '1.5rem', color: 'white', margin: 0, fontWeight: 700 }}>Compliance & Standards Verified</h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                      Our inspections ensure strict adherence to international safety codes and regulatory frameworks:
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {standards.map((std: string, idx: number) => (
                        <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.25)', padding: '0.5rem 1.25rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: 600 }}>
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Bottom CTA Block */}
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
              <Link href="/contact" className="btn btn-white" style={{ padding: '1rem 3rem', fontSize: '1.15rem', borderRadius: '50px', fontWeight: 700 }}>
                Request Inspection Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
