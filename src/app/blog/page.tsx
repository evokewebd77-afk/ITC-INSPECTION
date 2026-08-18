import type { Metadata } from 'next';
import { BlogPage } from '../../views/BlogPage';
import { seoMetadataMap } from '../../data/seoMetadata';

export const metadata: Metadata = {
  title: seoMetadataMap['/blog'].title,
  description: seoMetadataMap['/blog'].description,
};

export default function Page() {
  return <BlogPage />;
}
