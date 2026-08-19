import type { Metadata } from 'next';
import { ServiceDetailPage } from '../../../views/ServiceDetailPage';
import { seoMetadataMap } from '../../../data/seoMetadata';
import { servicesData } from '../../../data/services';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);
  const formattedTitle = id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  const seo = seoMetadataMap[id] || {
    title: `${formattedTitle} | ITC Inspection Services & Compliance`,
    description: `Comprehensive ${formattedTitle} inspection and safety compliance services by ITC India. Expert audits, testing, and certification.`,
  };

  const pageUrl = `https://itc-inspection.vercel.app/services/${id}`;
  const imageUrl = service?.img
    ? (service.img.startsWith('http') ? service.img : `https://itc-inspection.vercel.app${service.img}`)
    : 'https://res.cloudinary.com/didtfhfme/image/upload/v1779180782/itc_mhm3ld.webp';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pageUrl,
      siteName: 'ITC Inspection Services',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${formattedTitle} Inspection`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);
  const formattedTitle = id.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const title = service?.title || formattedTitle;
  const desc = service?.desc || `Comprehensive ${formattedTitle} inspection services.`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': title,
    'description': desc,
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'ITC India Inspection Services',
      'url': 'https://itc-inspection.vercel.app',
    },
    'areaServed': 'India',
    'url': `https://itc-inspection.vercel.app/services/${id}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://itc-inspection.vercel.app',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Inspection Services',
        'item': 'https://itc-inspection.vercel.app/services',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': title,
        'item': `https://itc-inspection.vercel.app/services/${id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceDetailPage />
    </>
  );
}
