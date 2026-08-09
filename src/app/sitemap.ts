import { MetadataRoute } from 'next'
import { projects, insightPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tenlabs.online'

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const insightRoutes = insightPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Static routes
  const staticPaths = [
    '',
    '/about',
    '/work',
    '/solutions/growth-systems',
    '/solutions/commerce-systems',
    '/solutions/brand-systems',
    '/insights',
    '/contact'
  ];

  const staticRoutes = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    // Homepage gets checked more often than standard static pages
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...insightRoutes,
  ]
}
