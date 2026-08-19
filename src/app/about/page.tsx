import type { Metadata } from 'next';
import { AboutPage } from '../../views/AboutPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/about'].title,
  description: seoMetadataMap['/about'].description,
  alternates: {
    canonical: 'https://itc-inspection.vercel.app/about',
  },
  openGraph: {
    title: seoMetadataMap['/about'].title,
    description: seoMetadataMap['/about'].description,
    url: 'https://itc-inspection.vercel.app/about',
    siteName: 'ITC Inspection Services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadataMap['/about'].title,
    description: seoMetadataMap['/about'].description,
  },
};

export default function Page() {
  return <AboutPage />;
}
