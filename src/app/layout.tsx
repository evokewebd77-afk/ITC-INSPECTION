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
  metadataBase: new URL('https://itc-inspection.vercel.app'),
  title: {
    default: 'ITC India Inspection | Safety & Compliance Experts',
    template: '%s | ITC India Inspection',
  },
  description: 'Comprehensive industrial safety inspections, IECEx/ATEX compliance, lithium-ion battery testing, EMC/EMI audits, data center infrastructure verification, and dust explosion prevention across India.',
  keywords: [
    'industrial inspection India',
    'IECEx certification',
    'ATEX safety audit',
    'lithium ion battery safety',
    'EMC EMI testing India',
    'data center audit',
    'explosion proof equipment inspection',
    'hazardous area classification',
    'ITC India inspection',
    'safety compliance India'
  ],
  authors: [{ name: 'ITC (India) Pvt. Ltd.' }],
  creator: 'ITC (India) Pvt. Ltd.',
  publisher: 'ITC (India) Pvt. Ltd.',
  icons: {
    icon: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp',
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'ITC India Inspection | Industrial Safety & Compliance Experts',
    description: 'Comprehensive safety inspections for lithium-ion batteries, EMC/EMI compliance, data center infrastructure, industrial control systems, and dust explosion prevention across India.',
    url: 'https://itc-inspection.vercel.app',
    siteName: 'ITC Inspection Services',
    images: [
      {
        url: 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp',
        width: 1200,
        height: 630,
        alt: 'ITC India Inspection Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITC India Inspection | Industrial Safety & Compliance Experts',
    description: 'Comprehensive safety inspections for industrial equipment, EMC/EMI, lithium-ion batteries, and hazardous areas across India.',
    images: ['https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'ITC India Inspection Services',
  'url': 'https://itc-inspection.vercel.app',
  'logo': 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp',
  'image': 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp',
  'description': 'Comprehensive safety inspections for industrial equipment, lithium-ion batteries, EMC/EMI compliance, data centers, explosion-proof systems, and hazardous areas across India.',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'IN'
  },
  'areaServed': 'India',
  'priceRange': '$$'
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
