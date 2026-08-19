import type { Metadata } from 'next';
import { ServicesPage } from '../../views/ServicesPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/services'].title,
  description: seoMetadataMap['/services'].description,
  alternates: {
    canonical: 'https://itc-inspection.vercel.app/services',
  },
  openGraph: {
    title: seoMetadataMap['/services'].title,
    description: seoMetadataMap['/services'].description,
    url: 'https://itc-inspection.vercel.app/services',
    siteName: 'ITC Inspection Services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoMetadataMap['/services'].title,
    description: seoMetadataMap['/services'].description,
  },
};

export default function Page() {
  return <ServicesPage />;
}
