import type { Metadata } from 'next';
import { PrivacyPage } from '../../views/PrivacyPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/privacy'].title,
  description: seoMetadataMap['/privacy'].description,
};

export default function Page() {
  return <PrivacyPage />;
}
