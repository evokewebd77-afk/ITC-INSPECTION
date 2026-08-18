import type { Metadata } from 'next';
import { AboutPage } from '../../views/AboutPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/about'].title,
  description: seoMetadataMap['/about'].description,
};

export default function Page() {
  return <AboutPage />;
}
