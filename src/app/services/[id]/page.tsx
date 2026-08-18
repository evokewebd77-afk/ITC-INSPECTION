import type { Metadata } from 'next';
import { ServiceDetailPage } from '../../../views/ServiceDetailPage';
import { seoMetadataMap } from '../../../data/seoMetadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const seo = seoMetadataMap[id] || {
    title: `${id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} | ITC Inspection Services & Compliance`,
    description: `Explore ${id.replace(/-/g, ' ')} inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.`,
  };

  return {
    title: seo.title,
    description: seo.description,
  };
}

export default function Page() {
  return <ServiceDetailPage />;
}
