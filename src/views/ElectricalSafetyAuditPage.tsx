'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Phone,
  CheckCircle,
  AlertTriangle,
  FileText,
  Building2,
  Zap,
  Flame,
  Camera,
  BarChart3,
  Clock,
  Send,
  ChevronDown,
  Check,
  HelpCircle,
  Award,
  Globe,
  Loader2,
  Mail
} from 'lucide-react';
import { sendFormToGoogleSheet } from '../utils/submitForm';
import { getWhatsAppTrackedUrl, trackClickEvent } from '../utils/attribution';
import './ElectricalSafetyAuditPage.css';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const ElectricalSafetyAuditPage: React.FC = () => {
  const [waUrl, setWaUrl] = useState('https://wa.me/919056544487');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showStandardsCompliance, setShowStandardsCompliance] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    siteLocation: '',
    facilityType: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setWaUrl(
      getWhatsAppTrackedUrl(
        '919056544487',
        'Hello ITC Inspection Team! I am interested in an Electrical Safety Audit for my facility.'
      )
    );
  }, []);

  const scrollToEnquiryForm = () => {
    const el =
      document.getElementById('enquiry-form') ||
      document.getElementById('enquiry-form-mobile');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullName: formData.fullName,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      service: `Electrical Safety Audit (${formData.facilityType || 'General'})`,
      siteLocation: formData.siteLocation,
      facilityType: formData.facilityType,
      message: formData.message,
      formName: 'Electrical Safety Audit Landing Form'
    };

    const success = await sendFormToGoogleSheet(payload);
    setLoading(false);

    if (success) {
      setSubmitted(true);
      setFormData({
        fullName: '',
        company: '',
        phone: '',
        email: '',
        siteLocation: '',
        facilityType: '',
        message: ''
      });
    } else {
      alert('Something went wrong while submitting your request. Please try contacting us directly.');
    }
  };

  const faqs = [
    {
      q: 'What is an electrical safety audit?',
      a: 'An electrical safety audit is a structured assessment of electrical installations, equipment, documentation and maintenance practices. Its purpose is to identify electrical hazards, system weaknesses and areas requiring corrective action.'
    },
    {
      q: 'Who needs an electrical safety audit?',
      a: 'Factories, offices, hospitals, schools, hotels, warehouses, residential societies, commercial buildings and other facilities can benefit from periodic electrical safety audits.'
    },
    {
      q: 'What does an electrical audit cover?',
      a: 'The scope may include panels, distribution boards, wiring, cables, earthing, protective devices, backup power, lightning protection, maintenance records and relevant electrical tests. The exact scope is confirmed before the audit.'
    },
    {
      q: 'Is thermal imaging included?',
      a: 'Thermal imaging can be included where appropriate and agreed in the audit scope. It is commonly used to identify abnormal heating in electrical panels, connections and components.'
    },
    {
      q: 'Will we receive an electrical safety audit report?',
      a: 'Yes. The report documents the agreed scope, observations, evidence, risk levels and recommended corrective actions.'
    },
    {
      q: 'How long does an electrical safety audit take?',
      a: 'The duration depends on the facility size, number of electrical systems, accessibility, operating conditions and testing requirements. The expected schedule will be shared after the initial scope review.'
    },
    {
      q: 'Can the audit be conducted while the facility is operating?',
      a: 'Many visual inspections and assessments can be conducted during normal operations. Certain tests may require coordination, controlled access or an electrical shutdown. These requirements will be discussed in advance.'
    },
    {
      q: 'Do you provide third-party electrical safety audits?',
      a: 'Yes. ITC India provides third-party electrical safety audit and inspection services based on an agreed scope of work.'
    },
    {
      q: 'Do you provide electrical safety certification?',
      a: 'The audit normally results in an inspection or audit report. Any certificate, statutory approval or formal clearance depends on the agreed service, applicable requirements and authority involved. This should be confirmed before booking.'
    },
    {
      q: 'How much does an electrical safety inspection cost?',
      a: 'Electrical safety audit charges vary according to the site, system complexity, facility size, testing requirements and reporting scope. Contact us for a customised quotation.'
    }
  ];

  return (
    <div className="esa-container">
      {/* HERO SECTION */}
      <section className="esa-hero">
        <div className="esa-hero-grid">
          {/* Left Text */}
          <div>
            <div className="esa-eyebrow">
              <ShieldCheck size={18} style={{ color: '#38bdf8' }} />
              <span>Third-Party Electrical Safety Audit Services</span>
            </div>
            <h1 className="esa-hero-title">
              Electrical Safety Audits for Buildings and Industrial Facilities
            </h1>
            <p className="esa-hero-desc">
              Identify electrical hazards, unsafe installations, overheating, inadequate earthing and compliance gaps before they result in fire, electric shock, equipment failure or business disruption.
              <br /><br />
              ITC India provides professional electrical safety audit and inspection services for commercial buildings, factories, offices, hospitals, schools, residential societies and industrial plants across India.
            </p>

            <div className="esa-hero-ctas">
              <button onClick={scrollToEnquiryForm} className="esa-btn-primary">
                <span>Request an Audit Quotation</span>
                <ChevronDown size={18} />
              </button>

              <a 
                href="tel:+919316012883" 
                onClick={() => trackClickEvent('phone', 'ESA Hero Call')}
                className="esa-btn-secondary"
              >
                <Phone size={18} />
                <span>Call an Electrical Safety Expert</span>
              </a>

              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackClickEvent('whatsapp', 'ESA Hero WhatsApp')}
                className="esa-btn-whatsapp"
              >
                <WhatsAppIcon />
                <span>Discuss Your Requirement on WhatsApp</span>
              </a>
            </div>

            <div className="esa-hero-highlights">
              <span>On-site inspection</span> • 
              <span>Electrical testing</span> • 
              <span>Risk-based findings</span> • 
              <span>Actionable audit report</span>
            </div>
          </div>

          {/* Right Hero Form */}
          <div id="enquiry-form" className="esa-form-card esa-hero-form">
            <h3 className="esa-form-title">Request an Electrical Safety Audit</h3>
            <p className="esa-form-subtitle">
              Tell us about your site, and our team will contact you to discuss the audit scope and quotation.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', background: '#dcfce7', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={32} />
                </div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Quotation Request Received!</h4>
                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. Our electrical safety engineering team will review your site requirements and contact you promptly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--secondary-color)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="esa-form-grid-2">
                  <div className="esa-form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      value={formData.fullName} 
                      onChange={handleFormChange}
                      placeholder="e.g. Rahul Sharma" 
                      className="esa-form-input" 
                    />
                  </div>
                  <div className="esa-form-group">
                    <label>Company / Organisation</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleFormChange}
                      placeholder="e.g. Acme Industries Ltd" 
                      className="esa-form-input" 
                    />
                  </div>
                </div>

                <div className="esa-form-grid-2">
                  <div className="esa-form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone} 
                      onChange={handleFormChange}
                      placeholder="+91 98765 43210" 
                      className="esa-form-input" 
                    />
                  </div>
                  <div className="esa-form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleFormChange}
                      placeholder="name@company.com" 
                      className="esa-form-input" 
                    />
                  </div>
                </div>

                <div className="esa-form-grid-2">
                  <div className="esa-form-group">
                    <label>Site Location (City/State) *</label>
                    <input 
                      type="text" 
                      name="siteLocation" 
                      required 
                      value={formData.siteLocation} 
                      onChange={handleFormChange}
                      placeholder="e.g. Ahmedabad, Gujarat" 
                      className="esa-form-input" 
                    />
                  </div>
                  <div className="esa-form-group">
                    <label>Building or Facility Type *</label>
                    <select 
                      name="facilityType" 
                      required 
                      value={formData.facilityType} 
                      onChange={handleFormChange}
                      className="esa-form-select"
                    >
                      <option value="">Select Facility Type</option>
                      <option value="Industrial / Manufacturing Plant">Industrial / Manufacturing Plant</option>
                      <option value="Commercial Building / Office">Commercial Building / Office</option>
                      <option value="Hospital / Healthcare Premise">Hospital / Healthcare Premise</option>
                      <option value="School / Educational Institution">School / Educational Institution</option>
                      <option value="Hotel / Hospitality Property">Hotel / Hospitality Property</option>
                      <option value="Residential Society / Housing">Residential Society / Housing</option>
                      <option value="Data Centre / Critical Facility">Data Centre / Critical Facility</option>
                      <option value="Other Facility">Other Facility</option>
                    </select>
                  </div>
                </div>

                <div className="esa-form-group">
                  <label>Brief Requirement / Scope</label>
                  <textarea 
                    name="message" 
                    rows={3} 
                    value={formData.message} 
                    onChange={handleFormChange}
                    placeholder="Briefly describe your site, panels count, connected load, or specific audit goals..." 
                    className="esa-form-textarea"
                  />
                </div>

                <button type="submit" disabled={loading} className="esa-form-submit-btn">
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Audit Quotation</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="esa-privacy-note">
                  🔒 Your information will only be used to respond to your electrical safety audit enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="esa-trust-strip">
        <div className="esa-trust-inner">
          <h3 className="esa-trust-title">Make Electrical Risks Visible Before They Become Incidents</h3>
          <div className="esa-trust-grid">
            {[
              'Independent third-party assessment',
              'Experienced inspection professionals',
              'Photographic evidence of findings',
              'Risk-based prioritisation',
              'Practical corrective recommendations',
              'Audit services available across India'
            ].map((item, idx) => (
              <div key={idx} className="esa-trust-item">
                <CheckCircle size={18} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE OVERVIEW */}
      <section className="esa-section esa-service-overview">
        <div className="esa-section-header">
          <span className="esa-section-tag">Service Overview</span>
          <h2 className="esa-section-title">Comprehensive Electrical Safety Audit Services</h2>
          <p className="esa-section-subtitle">
            ITC India conducts electrical safety inspections and audits based on the facility type, electrical infrastructure, operating conditions and agreed scope of work. The audit combines visual inspection, document review, measurements and electrical testing where appropriate. Findings are presented in a structured report to help management and technical teams understand the risks and take corrective action.
          </p>
        </div>

        <div className="esa-cards-grid">
          {[
            {
              icon: <Zap size={24} />,
              title: 'Electrical Panels and Distribution Boards',
              desc: 'Inspection of main panels, sub-distribution boards, switchgear, circuit protection, panel condition, accessibility, labelling and visible signs of deterioration.'
            },
            {
              icon: <FileText size={24} />,
              title: 'Wiring and Cable Systems',
              desc: 'Assessment of visible cables, wiring routes, termination points, cable loading, physical condition and protection against mechanical or environmental damage.'
            },
            {
              icon: <ShieldCheck size={24} />,
              title: 'Earthing and Bonding Systems',
              desc: 'Review of earthing arrangements, continuity, connections and earth-resistance measurements where included in the agreed scope.'
            },
            {
              icon: <AlertTriangle size={24} />,
              title: 'Protective Devices',
              desc: 'Assessment of MCBs, MCCBs, RCCBs, relays, fuses and other protective devices for condition, application and coordination concerns.'
            },
            {
              icon: <Camera size={24} />,
              title: 'Thermal Imaging',
              desc: 'Thermal scanning of accessible electrical panels and connections, where required, to identify abnormal heating, loose connections, imbalance and overloaded components.'
            },
            {
              icon: <BarChart3 size={24} />,
              title: 'Insulation and Electrical Testing',
              desc: 'Insulation-resistance and other relevant electrical tests may be performed depending on the installation, accessibility, operational conditions and audit scope.'
            },
            {
              icon: <Flame size={24} />,
              title: 'Emergency and Backup Power',
              desc: 'Inspection of generators, UPS systems, emergency electrical supplies and associated distribution arrangements where included.'
            },
            {
              icon: <ShieldCheck size={24} />,
              title: 'Lightning Protection',
              desc: 'Review of accessible lightning-protection and earthing arrangements based on the agreed inspection scope.'
            },
            {
              icon: <FileText size={24} />,
              title: 'Electrical Documentation',
              desc: 'Review of available single-line diagrams, maintenance records, inspection reports, test records, equipment schedules and previous corrective actions.'
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className={`esa-card${idx >= 4 ? (showAllServices ? ' esa-card-shown' : ' esa-card-collapsed') : ''}`}
            >
              <div className="esa-card-icon">{card.icon}</div>
              <h3 className="esa-card-title">{card.title}</h3>
              <p className="esa-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="esa-view-all">
          <button
            className="esa-view-all-btn"
            onClick={() => setShowAllServices(v => !v)}
          >
            <span>{showAllServices ? 'Show Less' : 'View All Services'}</span>
            <ChevronDown
              size={18}
              style={{ transition: 'transform 0.3s ease', transform: showAllServices ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </div>
      </section>

      {/* FACILITIES WE SERVE */}
      <section className="esa-section esa-section-white">
        <div className="esa-section-header">
          <span className="esa-section-tag">Facilities We Serve</span>
          <h2 className="esa-section-title">Electrical Audits for Different Types of Properties</h2>
          <p className="esa-section-subtitle">
            Our electrical safety audit services can be adapted to the requirements of different buildings and operating environments.
          </p>
        </div>

        <div className="esa-facility-grid">
          {[
            {
              emoji: '🏭',
              title: 'Industrial & Manufacturing',
              desc: 'Factories, production units, warehouses, workshops and industrial plants.'
            },
            {
              emoji: '🏢',
              title: 'Commercial & Offices',
              desc: 'Offices, corporate buildings, business parks and commercial properties.'
            },
            {
              emoji: '🏥',
              title: 'Hospitals & Healthcare',
              desc: 'Healthcare premises, including critical and backup electrical systems.'
            },
            {
              emoji: '🎓',
              title: 'Schools & Education',
              desc: 'Schools, colleges, universities, laboratories and training facilities.'
            },
            {
              emoji: '🏨',
              title: 'Hotels & Hospitality',
              desc: 'Guest areas, kitchens, plant rooms, utility spaces and operational facilities.'
            },
            {
              emoji: '🏘️',
              title: 'Residential Societies',
              desc: 'Common electrical infrastructure, panels, pumps, backup power and shared services.'
            },
            {
              emoji: '🖥️',
              title: 'Data Centres & Critical',
              desc: 'Power distribution, backup supplies and reliability for critical infrastructure.'
            }
          ].map((fac, idx) => (
            <div
              key={idx}
              className={`esa-facility-card${idx === 6 ? ' esa-facility-hidden-mobile' : ''}`}
            >
              <div className="esa-facility-logo">{fac.emoji}</div>
              <div className="esa-facility-info">
                <h3 className="esa-facility-title">{fac.title}</h3>
                <p className="esa-facility-desc">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <button onClick={scrollToEnquiryForm} className="esa-btn-primary">
            <span>Request an Audit for Your Facility</span>
            <ChevronDown size={18} />
          </button>
        </div>
      </section>

      {/* OUR AUDIT PROCESS */}
      <section className="esa-section esa-section-light esa-process-section">
        <div className="esa-section-header">
          <span className="esa-section-tag">Our Audit Process</span>
          <h2 className="esa-section-title">A Clear and Structured Electrical Audit Process</h2>
        </div>

        <div className="esa-process-grid">
          {[
            {
              step: '1',
              title: 'Requirement & Scope Review',
              desc: 'We discuss your facility type, location, electrical systems, operating conditions and reason for requesting the audit.'
            },
            {
              step: '2',
              title: 'Document Review',
              desc: 'Available drawings, records, previous reports, maintenance information and electrical documentation are reviewed where relevant.'
            },
            {
              step: '3',
              title: 'On-Site Electrical Inspection',
              desc: 'Our inspection team examines the accessible electrical infrastructure and identifies visible safety, maintenance and operational concerns.'
            },
            {
              step: '4',
              title: 'Testing & Measurements',
              desc: 'Relevant measurements and tests are conducted according to the agreed audit scope and site conditions.'
            },
            {
              step: '5',
              title: 'Risk Evaluation',
              desc: 'Findings are assessed and prioritised according to their potential safety and operational impact.'
            },
            {
              step: '6',
              title: 'Audit Report',
              desc: 'You receive a structured electrical safety audit report containing observations, supporting evidence and recommended corrective actions.'
            },
            {
              step: '7',
              title: 'Follow-Up Support',
              desc: 'Where requested, our team can discuss the findings and support verification after corrective actions have been completed.'
            }
          ].map((proc, idx) => (
            <div key={idx} className="esa-process-card">
              <div className="esa-process-num">{proc.step}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '0.75rem' }}>{proc.title}</h3>
              <p style={{ fontSize: '0.96rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY AUDIT MATTERS SECTION */}
      <section className="esa-section esa-section-white esa-why-section">
        <div className="esa-why-body">
          <div className="esa-why-head">
            <span className="esa-section-tag">Why an Electrical Safety Audit Matters</span>
            <h2 className="esa-why-title">Is Your Electrical System as Safe as It Appears?</h2>
            <p className="esa-why-desc">
              Electrical risks are not always visible. Loose connections, overloaded circuits and ineffective earthing can remain unnoticed until an incident occurs. A structured audit helps your organisation:
            </p>
          </div>

          <div className="esa-why-checks">
            {[
              'Identify fire & shock hazards',
              'Detect overheating components',
              'Evaluate installation condition',
              'Review earthing & protection',
              'Find maintenance gaps',
              'Prioritise corrective actions',
              'Strengthen workplace safety',
              'Improve system reliability',
              'Support compliance requirements'
            ].map((point, idx) => (
              <div
                key={idx}
                className={`esa-why-check-item${idx === 8 ? ' esa-why-check-hidden-mobile' : ''}`}
              >
                <Check size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button onClick={scrollToEnquiryForm} className="esa-btn-primary">
              <span>Schedule an Assessment</span>
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="esa-section esa-section-white esa-deliverables-section">
        <div className="esa-section-header">
          <span className="esa-section-tag">Deliverables</span>
          <h2 className="esa-section-title">Practical Findings Your Team Can Act On</h2>
          <p className="esa-section-subtitle">Your electrical safety audit report may include comprehensive, actionable insight:</p>
        </div>

        <div className="esa-deliverables-grid">
          {[
            'Executive summary',
            'Audit scope and methodology',
            'Areas and systems inspected',
            'Electrical safety observations',
            'Photographic evidence',
            'Test and measurement results',
            'Risk classification of findings',
            'Immediate safety concerns',
            'Recommended corrective actions',
            'Suggested priority and timeline',
            'Opportunities for preventive maintenance',
            'Conclusion and next steps'
          ].map((deliv, idx) => (
            <div key={idx} className="esa-deliverable-item">
              <CheckCircle size={20} className="esa-deliverable-icon" />
              <span>{deliv}</span>
            </div>
          ))}
        </div>

        <p className="esa-deliverables-note">
          * The exact report contents depend on the facility, agreed scope and tests performed.
        </p>
      </section>

      {/* THIRD-PARTY SAFETY AUDIT */}
      <section className="esa-section esa-section-light esa-third-party-section">
        <div className="esa-why-grid">
          <div>
            <span className="esa-section-tag">Third-Party Electrical Safety Audit</span>
            <h2 className="esa-section-title">Independent Electrical Safety Inspection</h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              A third-party electrical safety audit provides an objective review of your electrical installations by an external inspection team. It can be useful when:
            </p>

            <div className="esa-checklist">
              {[
                'Management requires an independent assessment',
                'A customer requests evidence of electrical safety',
                'The organisation is reviewing workplace risks',
                'A facility has experienced repeated electrical faults',
                'Electrical infrastructure has been expanded or modified',
                'Internal teams require specialist inspection support',
                'The organisation is preparing for another compliance or safety assessment',
                'Periodic electrical inspection is due'
              ].map((item, idx) => (
                <div key={idx} className="esa-checklist-item">
                  <CheckCircle size={18} style={{ color: 'var(--secondary-color)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

<button onClick={scrollToEnquiryForm} className="esa-btn-primary esa-arrange-desktop-only">
                <span>Arrange a Third-Party Electrical Audit</span>
                <ChevronDown size={18} />
              </button>

              <button
                onClick={() => setShowStandardsCompliance(v => !v)}
                className="esa-btn-primary esa-view-standards-mobile-only"
              >
                <span>{showStandardsCompliance ? 'Hide Standards and Compliance' : 'View Standards and Compliance'}</span>
                <ChevronDown size={18} />
              </button>
          </div>

          {/* Standards & Compliance Box */}
          <div
            className={`esa-standards-box${showStandardsCompliance ? ' esa-standards-box-open' : ''}`}
            style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}
          >
            <span className="esa-section-tag">Standards and Compliance</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Audits Aligned with Applicable Requirements
            </h3>
            <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The audit criteria are selected according to the facility, electrical installation, contractual requirements and agreed purpose of the inspection. Where applicable, the audit may consider:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                'Relevant statutory electrical safety requirements',
                'Applicable electrical and building-safety requirements',
                'Recognised electrical safety standards',
                'Manufacturer recommendations',
                'Client procedures and engineering specifications',
                'Accepted electrical inspection and maintenance practices'
              ].map((req, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#334155', fontWeight: 600 }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--secondary-color)', flexShrink: 0 }} />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '1.5rem', fontStyle: 'italic' }}>
              * The applicable criteria and limitations will be confirmed before the audit begins.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ITC INDIA */}
      <section className="esa-section esa-section-white esa-why-choose-section">
        <div className="esa-section-header">
          <span className="esa-section-tag">Why Choose ITC India?</span>
          <h2 className="esa-section-title">Professional Electrical Inspection Support</h2>
        </div>

        <div className="esa-cards-grid">
          {[
            {
              icon: <Award size={24} />,
              title: 'Experienced Inspection Team',
              desc: 'Audits are conducted by professionals with experience in electrical inspection, safety assessment and compliance-related services.'
            },
            {
              icon: <Building2 size={24} />,
              title: 'Facility-Specific Scope',
              desc: 'The audit scope is developed according to the property type, electrical infrastructure, operational risks and client requirements.'
            },
            {
              icon: <BarChart3 size={24} />,
              title: 'Risk-Based Reporting',
              desc: 'Findings are prioritised to help your team distinguish urgent safety concerns from planned maintenance improvements.'
            },
            {
              icon: <Camera size={24} />,
              title: 'Clear Supporting Evidence',
              desc: 'Reports can include photographs, test results, observations and practical recommendations.'
            },
            {
              icon: <ShieldCheck size={24} />,
              title: 'Independent Assessment',
              desc: 'Our third-party audit approach provides an objective evaluation of the electrical installation.'
            },
            {
              icon: <Globe size={24} />,
              title: 'Nationwide Service',
              desc: 'Electrical safety audit services can be arranged for facilities across India, subject to location and project requirements.'
            }
          ].map((why, idx) => (
            <div key={idx} className="esa-card">
              <div className="esa-card-icon">{why.icon}</div>
              <h3 className="esa-card-title">{why.title}</h3>
              <p className="esa-card-desc">{why.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ELECTRICAL SAFETY AUDIT COST */}
      <section className="esa-section esa-section-light esa-pricing-section">
        <div className="esa-section-header">
          <span className="esa-section-tag">Audit Pricing</span>
          <h2 className="esa-section-title">How Much Does an Electrical Safety Audit Cost?</h2>
          <p className="esa-section-subtitle">
            The cost of an electrical safety audit depends on several factors, including site location, connected load, and facility complexity.
          </p>
        </div>

        <div className="esa-pricing-body">
          <h3 className="esa-pricing-card-title">Key Factors Influencing Audit Quotations:</h3>

          <div className="esa-pricing-factors">
            {[
              'Building or facility size',
              'Site location',
              'Type of electrical installation',
              'Number of panels and distribution boards',
              'Connected electrical load',
              'Number of buildings or operational areas',
              'Testing and thermal-imaging requirements',
              'Availability of drawings and records',
              'Reporting requirements'
            ].map((factor, idx) => (
              <div
                key={idx}
                className={`esa-pricing-factor${idx === 8 ? ' esa-pricing-factor-hidden-mobile' : ''}`}
              >
                <div className="esa-pricing-factor-icon">
                  <CheckCircle size={18} />
                </div>
                <span>{factor}</span>
              </div>
            ))}
          </div>

          <div className="esa-pricing-cta">
            <p className="esa-pricing-cta-text">
              Share your site details with our team to receive a quotation based on the required inspection scope.
            </p>

            <button onClick={scrollToEnquiryForm} className="esa-btn-primary">
              <span>Request a Cost Estimate</span>
              <ChevronDown size={18} />
            </button>

            <p className="esa-pricing-note">
              💡 Provide the site location, facility type, approximate area and audit requirement for a faster response.
            </p>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="esa-section esa-section-white esa-faq-section">
        <div className="esa-section-header">
          <span className="esa-section-tag">Got Questions?</span>
          <h2 className="esa-section-title">Electrical Safety Audit FAQs</h2>
        </div>

        <div className="esa-faq-container">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`esa-faq-item${idx >= 3 ? (showAllFaqs ? ' esa-faq-item-shown' : ' esa-faq-item-collapsed') : ''}`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="esa-faq-question"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  style={{ 
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'var(--secondary-color)',
                    flexShrink: 0
                  }} 
                />
              </button>
              {openFaq === idx && (
                <div className="esa-faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="esa-view-all-faqs">
          <button
            onClick={() => setShowAllFaqs(prev => !prev)}
            className="esa-view-all-faqs-btn"
          >
            {showAllFaqs ? 'Show Less' : 'View All FAQs'}
            <ChevronDown
              size={18}
              style={{
                transform: showAllFaqs ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                flexShrink: 0
              }}
            />
          </button>
        </div>
      </section>
      <section className="esa-final-cta">
        <div className="esa-final-cta-inner">
          <h2 className="esa-final-cta-title">Protect Your People, Property and<br />Operations</h2>
          <p className="esa-final-cta-desc">
            Do not wait for overheating, equipment failure or an electrical incident to reveal weaknesses in your electrical system.
            <br />
            Arrange a professional electrical safety audit and receive a clear, risk-based assessment of your facility.
          </p>
            {/* Mobile Form inside Final CTA */}
            <div id="enquiry-form-mobile" className="esa-form-card esa-cta-form">
              <h3 className="esa-form-title">Request an Electrical Safety Audit</h3>
              <p className="esa-form-subtitle">
                Tell us about your site, and our team will contact you to discuss the audit scope and quotation.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', background: '#dcfce7', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <CheckCircle size={32} />
                  </div>
                  <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Quotation Request Received!</h4>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    Thank you for reaching out. Our electrical safety engineering team will review your site requirements and contact you promptly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--secondary-color)', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="esa-form-grid-2">
                    <div className="esa-form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName" 
                        required 
                        value={formData.fullName} 
                        onChange={handleFormChange}
                        placeholder="e.g. Rahul Sharma" 
                        className="esa-form-input" 
                      />
                    </div>
                    <div className="esa-form-group">
                      <label>Company / Organisation</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleFormChange}
                        placeholder="e.g. Acme Industries Ltd" 
                        className="esa-form-input" 
                      />
                    </div>
                  </div>

                  <div className="esa-form-grid-2">
                    <div className="esa-form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        value={formData.phone} 
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210" 
                        className="esa-form-input" 
                      />
                    </div>
                    <div className="esa-form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleFormChange}
                        placeholder="name@company.com" 
                        className="esa-form-input" 
                      />
                    </div>
                  </div>

                  <div className="esa-form-grid-2">
                    <div className="esa-form-group">
                      <label>Site Location (City/State) *</label>
                      <input 
                        type="text" 
                        name="siteLocation" 
                        required 
                        value={formData.siteLocation} 
                        onChange={handleFormChange}
                        placeholder="e.g. Mumbai, Maharashtra" 
                        className="esa-form-input" 
                      />
                    </div>
                    <div className="esa-form-group">
                      <label>Facility Type</label>
                      <input 
                        type="text" 
                        name="facilityType" 
                        value={formData.facilityType} 
                        onChange={handleFormChange}
                        placeholder="e.g. Manufacturing Plant" 
                        className="esa-form-input" 
                      />
                    </div>
                  </div>

                  <div className="esa-form-group">
                    <label>Message / Additional Details</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleFormChange}
                      placeholder="Any specific concerns or requirements..."
                      rows={4}
                      className="esa-form-input"
                    />
                  </div>

                  <button type="submit" className="esa-btn-primary" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>

          <div className="esa-final-cta-btns">

            <a href="tel:+919316012883" onClick={() => trackClickEvent('phone', 'ESA Final CTA Call')} className="esa-btn-secondary">
              <Phone size={18} />
              <span>Call +91 93160 12883</span>
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackClickEvent('whatsapp', 'ESA Final CTA WhatsApp')} className="esa-btn-whatsapp">
              <WhatsAppIcon />
              <span>WhatsApp +91 90565 44487</span>
            </a>
          </div>

          <p className="esa-final-cta-email">
            <Mail size={16} />
            <span>Email: </span>
            <a href="mailto:info@itcindia.org">info@itcindia.org</a>
          </p>

          <p className="esa-final-cta-note">
            Share your facility type, site location and audit requirement to receive a customised quotation.
          </p>
        </div>
      </section>
    </div>
  );
};
