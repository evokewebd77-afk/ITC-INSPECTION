'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { servicesData, mainServiceIds } from '../data/services';
import './Services.css';

export const Services: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const mainServices = servicesData.filter(s => mainServiceIds.includes(s.id));

  return (
    <section id="services" className="section services-section">
      <div className="container" ref={ref as any}>
        <div className={`text-center reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="section-title">Core Service Areas</h2>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Experience our premium, comprehensive inspection services designed to secure critical industrial categories across the globe.
          </p>
        </div>
        
        <div className={`services-grid reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {mainServices.map((service, index) => (
            <Link href={`/services/${service.id}`} className="premium-service-card" key={index}>
              <div className="premium-image-wrapper">
                <img src={service.img} alt={service.title} className="premium-img" />
                <div className="premium-overlay-gradient"></div>
                <div className="premium-icon-glass">
                  {service.icon}
                </div>
              </div>
              <div className="premium-content">
                <h3 className="premium-title">{service.title}</h3>
                <p className="premium-desc">{service.desc}</p>
                <div className="premium-action">
                  <span>Explore Service</span>
                  <div className="action-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center services-footer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '400ms', marginTop: '4rem' }}>
          <Link href="/services" className="btn btn-outline" style={{ borderRadius: '50px', padding: '1rem 2.5rem' }}>
            View All Inspection Services
          </Link>
        </div>
      </div>
    </section>
  );
};
