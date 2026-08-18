import type { Metadata } from 'next';
import { ServicesPage } from '../../views/ServicesPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/services'].title,
  description: seoMetadataMap['/services'].description,
};

export default function Page() {
  return <ServicesPage />;
}
