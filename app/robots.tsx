import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/profile', '/quotes','/random-quote', '/create-quote'],
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  };
}
