import React from 'react';
import { 
  CheckCircle, 
  MonitorSmartphone, 
  Layers, 
  Eye, 
  Globe,
  Clock,
  AlertTriangle,
  FileText,
  Headset
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './WhyChooseUs.css';

const features = [
  { icon: <CheckCircle className="feature-icon" />, title: 'Certified Professionals', desc: 'Our team consists of certified inspection professionals with multi-domain expertise across electrical, mechanical, safety, and environmental disciplines. Each inspector holds relevant certifications including IECEx, ATEX, ISO, and local regulatory accreditations.' },
  { icon: <MonitorSmartphone className="feature-icon" />, title: 'Modern Digital Platform', desc: 'Leverage our responsive, SEO-optimized digital platform for seamless project management, real-time reporting, and transparent communication. Access inspection reports, compliance documentation, and project updates from anywhere, anytime.' },
  { icon: <Layers className="feature-icon" />, title: 'Comprehensive Coverage', desc: 'We offer comprehensive inspection services across 50+ categories including explosion-proof equipment, electrical systems, robotics, solar installations, perimeter security, building health, and specialized environmental assessments.' },
  { icon: <Eye className="feature-icon" />, title: 'Transparent Systems', desc: 'Experience complete transparency with our clear quotation system, detailed reporting, and open communication channels. We provide itemized cost breakdowns, timeline estimates, and regular progress updates throughout your project.' },
  { icon: <Globe className="feature-icon" />, title: 'Global Standards Compliance', desc: 'Our inspections align with international standards including IECEx, ATEX, ISO, NFPA, and local regulatory requirements. We ensure your facilities meet global compliance standards for seamless international operations.' },
  { icon: <Clock className="feature-icon" />, title: 'Fast Turnaround', desc: 'Efficient processes and streamlined workflows enable quick inspection delivery without compromising quality or thoroughness. We understand time-sensitive projects and deliver results when you need them most.' },
  { icon: <AlertTriangle className="feature-icon" />, title: 'Risk Assessment Expertise', desc: 'Advanced risk assessment methodologies help identify potential hazards before they become critical issues. Our comprehensive risk analysis includes probability assessment, impact evaluation, and prioritized remediation recommendations.' },
  { icon: <FileText className="feature-icon" />, title: 'Detailed Reporting', desc: 'Receive comprehensive inspection reports with high-resolution photographs, detailed findings, risk ratings, and actionable remediation plans. Our reports are designed for both technical teams and regulatory compliance officers.' },
  { icon: <Headset className="feature-icon" />, title: 'Ongoing Support', desc: 'We provide continuous support beyond the initial inspection, including follow-up verification, compliance monitoring, and consultation services. Our team remains available to address questions and provide guidance throughout your compliance journey.' }
];

export const WhyChooseUs: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="why-choose-us" className="section why-choose-us">
      <div className="container">
        <div className="wcu-layout" ref={ref as any}>
          {/* Sticky Left Column */}
          <div className="wcu-sticky-col">
            <h2 className="section-title reveal-text">Why Choose Us</h2>
            <p className="section-subtitle reveal-text" style={{ animationDelay: '0.1s' }}>
              We combine decades of industry expertise with cutting-edge technology to deliver inspection and consulting services that exceed expectations. Our commitment to excellence, compliance, and client success sets us apart in the industry.
            </p>
          </div>

          {/* Scrolling Right Column (Now a 2-column Grid) */}
          <div className="wcu-scroll-col">
            {features.map((feature, index) => (
              <div 
                className={`wcu-card ${isVisible ? 'visible' : ''}`} 
                key={index}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="wcu-icon">
                  {feature.icon}
                </div>
                <div className="wcu-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
