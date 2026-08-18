'use client';

import React from 'react';
import { 
  CheckCircle2, 
  MonitorSmartphone, 
  Layers, 
  Eye, 
  Globe2,
  Clock,
  AlertTriangle,
  FileCheck2,
  Headphones,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './WhyChooseUs.css';

const features = [
  { 
    id: '01',
    icon: <CheckCircle2 size={26} />, 
    title: 'Certified Professionals', 
    desc: 'Our team consists of certified inspection professionals with multi-domain expertise across electrical, mechanical, safety, and environmental disciplines. Each inspector holds relevant certifications including IECEx, ATEX, ISO, and local regulatory accreditations.' 
  },
  { 
    id: '02',
    icon: <MonitorSmartphone size={26} />, 
    title: 'Modern Digital Platform', 
    desc: 'Leverage our responsive, SEO-optimized digital platform for seamless project management, real-time reporting, and transparent communication. Access inspection reports, compliance documentation, and project updates from anywhere, anytime.' 
  },
  { 
    id: '03',
    icon: <Layers size={26} />, 
    title: 'Comprehensive Coverage', 
    desc: 'We offer comprehensive inspection services across 50+ categories including explosion-proof equipment, electrical systems, robotics, solar installations, perimeter security, building health, and specialized environmental assessments.' 
  },
  { 
    id: '04',
    icon: <Eye size={26} />, 
    title: 'Transparent Systems', 
    desc: 'Experience complete transparency with our clear quotation system, detailed reporting, and open communication channels. We provide itemized cost breakdowns, timeline estimates, and regular progress updates throughout your project.' 
  },
  { 
    id: '05',
    icon: <Globe2 size={26} />, 
    title: 'Global Standards Compliance', 
    desc: 'Our inspections align with international standards including IECEx, ATEX, ISO, NFPA, and local regulatory requirements. We ensure your facilities meet global compliance standards for seamless international operations.' 
  },
  { 
    id: '06',
    icon: <Clock size={26} />, 
    title: 'Fast Turnaround', 
    desc: 'Efficient processes and streamlined workflows enable quick inspection delivery without compromising quality or thoroughness. We understand time-sensitive projects and deliver results when you need them most.' 
  },
  { 
    id: '07',
    icon: <AlertTriangle size={26} />, 
    title: 'Risk Assessment Expertise', 
    desc: 'Advanced risk assessment methodologies help identify potential hazards before they become critical issues. Our comprehensive risk analysis includes probability assessment, impact evaluation, and prioritized remediation recommendations.' 
  },
  { 
    id: '08',
    icon: <FileCheck2 size={26} />, 
    title: 'Detailed Reporting', 
    desc: 'Receive comprehensive inspection reports with high-resolution photographs, detailed findings, risk ratings, and actionable remediation plans. Our reports are designed for both technical teams and regulatory compliance officers.' 
  },
  { 
    id: '09',
    icon: <Headphones size={26} />, 
    title: 'Ongoing Support', 
    desc: 'We provide continuous support beyond the initial inspection, including follow-up verification, compliance monitoring, and consultation services. Our team remains available to address questions and provide guidance throughout your compliance journey.' 
  }
];

export const WhyChooseUs: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="why-choose-us" className="section why-choose-us-section">
      <div className="container">
        
        {/* Header Block */}
        <div ref={ref as any} className={`wcu-header text-center reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="wcu-pill-badge">
            <ShieldCheck size={16} />
            <span>Why Leading Industries Choose Us</span>
          </div>
          <h2 className="wcu-main-title">
            Built on Uncompromising Quality & Precision
          </h2>
          <p className="wcu-main-desc">
            We combine decades of industry expertise with cutting-edge technology to deliver inspection and consulting services that exceed expectations. Our commitment to excellence, compliance, and client success sets us apart.
          </p>
        </div>

        {/* 3x3 Feature Grid */}
        <div className={`wcu-grid reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
          {features.map((feature, index) => (
            <div className="wcu-feature-card" key={index}>
              <div className="wcu-card-header">
                <div className="wcu-icon-box">
                  {feature.icon}
                </div>
                <span className="wcu-card-num">{feature.id}</span>
              </div>
              <h3 className="wcu-card-title">{feature.title}</h3>
              <p className="wcu-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Highlights */}
        <div className={`wcu-footer-trust reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <div className="wcu-trust-item">
            <Award size={20} />
            <span>ISO & IECEx Accredited</span>
          </div>
          <div className="wcu-trust-divider"></div>
          <div className="wcu-trust-item">
            <ShieldCheck size={20} />
            <span>50+ Inspection Categories</span>
          </div>
          <div className="wcu-trust-divider"></div>
          <div className="wcu-trust-item">
            <CheckCircle2 size={20} />
            <span>100% Audit Compliance</span>
          </div>
        </div>

      </div>
    </section>
  );
};
