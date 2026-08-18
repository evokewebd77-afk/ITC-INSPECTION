import { MetadataRoute } from 'next';
import { servicesData } from '../data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://itc-inspection.vercel.app';
  const currentDate = new Date();

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
  }));

  // Dynamic service & sub-service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: service.isMain ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
