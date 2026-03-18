/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://urbansparklecleaners.ca',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://urbansparklecleaners.ca/sitemap.xml',
    ],
  },
  exclude: ['/api/*'],
};
