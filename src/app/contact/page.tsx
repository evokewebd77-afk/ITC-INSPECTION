import type { Metadata } from 'next';
import { ContactPage } from '../../views/ContactPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/contact'].title,
  description: seoMetadataMap['/contact'].description,
  alternates: {
    canonical: 'https://itc-inspection.vercel.app/contact',
  },
  openGraph: {
    title: seoMetadataMap['/contact'].title,
    description: seoMetadataMap['/contact'].description,
    url: 'https://itc-inspection.vercel.app/contact',
    siteName: 'ITC Inspection Services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadataMap['/contact'].title,
    description: seoMetadataMap['/contact'].description,
  },
};

export default function Page() {
  return <ContactPage />;
}
