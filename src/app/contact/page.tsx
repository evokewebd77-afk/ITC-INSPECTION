import type { Metadata } from 'next';
import { ContactPage } from '../../views/ContactPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/contact'].title,
  description: seoMetadataMap['/contact'].description,
};

export default function Page() {
  return <ContactPage />;
}
