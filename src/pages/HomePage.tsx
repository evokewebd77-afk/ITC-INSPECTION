import React from 'react';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { Stats } from '../sections/Stats';
import { Testimonials } from '../sections/Testimonials';
import { Newsletter } from '../sections/Newsletter';
import { ContactCTA } from '../sections/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <Newsletter />
      <ContactCTA />
    </main>
  );
};
