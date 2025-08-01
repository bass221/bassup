const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://bassup.vercel.app' });

  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemapStream.pipe(writeStream);

  sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemapStream.write({ url: '/wavybeat', changefreq: 'weekly', priority: 0.8 });
  sitemapStream.write({ url: '/portfolio-builder', changefreq: 'weekly', priority: 0.8 });
  // Add more URLs as needed

  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('✅ Sitemap generated!');
})();
