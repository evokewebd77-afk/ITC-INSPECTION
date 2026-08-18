import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import '../index.css';
import '../App.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'ITCINDIA-inspection, SAFETY & COMPLIANCE EXPERTS',
  description: 'Comprehensive safety inspections for lithium-ion batteries, EMC/EMI compliance, data center infrastructure, industrial control systems, and dust explosion prevention across India.',
  icons: {
    icon: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body>
        <div className="app">
          <Navbar />
          {children}
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}
