import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const BlogPage: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const posts = [
    { title: 'The Importance of ATEX Certification in 2026', date: 'August 10, 2026', category: 'Safety' },
    { title: 'How Drone Inspections Are Changing Solar Maintenance', date: 'July 24, 2026', category: 'Technology' },
    { title: 'Understanding New IECEx Regulations for Manufacturing', date: 'July 15, 2026', category: 'Compliance' }
  ];

  return (
    <main style={{ paddingTop: '80px', backgroundColor: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--primary-color)', padding: '6rem 0', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(5, 158, 246, 0.2)', filter: 'blur(100px)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem', fontWeight: 800 }}>Insights & News</h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255,255,255,0.8)', maxWidth: '600px' }}>
            Latest industry updates, safety guidelines, and compliance news from our experts.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section" ref={ref as any}>
        <div className="container">
          <div className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {posts.map((post, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '24px', padding: '2.5rem', border: '1px solid rgba(4, 55, 129, 0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <span style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(5, 158, 246, 0.1)', color: 'var(--secondary-color)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>{post.category}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '1rem', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Published on {post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
