import type { Metadata } from 'next';
import { HomePage } from '../views/HomePage';
import { seoMetadataMap } from '../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/'].title,
  description: seoMetadataMap['/'].description,
};

export default function Page() {
  return <HomePage />;
}
