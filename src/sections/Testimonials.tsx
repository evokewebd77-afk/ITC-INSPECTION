import React from 'react';
import { Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Testimonials.css';

const testimonials = [
  {
    initials: 'RK', name: 'Rajesh Kumar', role: 'CEO, Industrial Solutions Ltd.',
    text: 'ITC India provided exceptional inspection services for our manufacturing facility. Their attention to detail and compliance expertise helped us achieve international standards certification.'
  },
  {
    initials: 'PS', name: 'Priya Sharma', role: 'Operations Director, Green Energy Corp',
    text: 'The drone-based inspection technology used by ITC India saved us significant time and resources. Their comprehensive reports and recommendations were invaluable for our safety compliance.'
  },
  {
    initials: 'AM', name: 'Amit Mehta', role: 'Project Manager, Infrastructure Group',
    text: 'Professional, efficient, and thorough. ITC India\'s team of certified inspectors delivered beyond our expectations. Highly recommend their inspection services for any critical infrastructure project.'
  },
  {
    initials: 'SN', name: 'Sanjay Nanda', role: 'Director of Safety, TechPark',
    text: 'The level of professionalism and the depth of knowledge they bring to the table is unmatched. They found critical issues we had completely missed.'
  }
];

export const Testimonials: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="section testimonials">
      <div className="container text-center">
        <div ref={ref as any} className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="section-title">Client Success Stories</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from the industry leaders who trust our inspection and compliance services.
          </p>
        </div>
      </div>
      
      <div className="marquee-container">
        {marqueeItems.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <Quote className="quote-icon" size={64} />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.initials}</div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
