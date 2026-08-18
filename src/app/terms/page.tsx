import type { Metadata } from 'next';
import { TermsPage } from '../../views/TermsPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/terms'].title,
  description: seoMetadataMap['/terms'].description,
};

export default function Page() {
  return <TermsPage />;
}
