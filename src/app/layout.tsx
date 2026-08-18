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
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
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
