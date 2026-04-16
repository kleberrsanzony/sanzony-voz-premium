import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sanzonyvoz.com.br';
  
  const routes = [
    '',
    '/en',
    '/faq',
    '/locucao-profissional',
    '/locucao-premium',
    '/locucao-para-propaganda',
    '/branding-vocal',
    '/brazilian-portuguese-voice-over',
    '/locucao-institucional',
    '/voice-over-brazil',
    '/en/voice-over-for-brands',
    '/en/brazilian-portuguese-commercial-voice-over',
    '/en/voice-over-with-home-studio',
    '/home-studio-voice-over',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1 : (route.startsWith('/en/') ? 0.9 : 0.8),
  }));

  return routes;
}
