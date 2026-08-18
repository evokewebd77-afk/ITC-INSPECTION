'use client';

import React from 'react';
import './Stats.css';

const stats = [
  { number: '50', suffix: '+', label: 'Inspection Categories' },
  { number: '1000', suffix: '+', label: 'Projects Completed' },
  { number: '500', suffix: '+', label: 'Happy Clients' },
  { number: '98', suffix: '%', label: 'Satisfaction Rate' }
];


export const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-number">
                {stat.number}<span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
