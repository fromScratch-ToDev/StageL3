// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://peinturesetdessinsdefrancoismalespine.vercel.app',
    generateRobotsTxt: true,
    autoLastmod: true,
    sitemapSize: 7000,
    trailingSlash: false,
    generateIndexSitemap: true,
    exclude: ['/admin/*'], // si tu veux exclure des routes
    // active le crawler pour découvrir les routes App Router
    transform: async (config, path) => {
      return {
        loc: path,
        lastmod: new Date().toISOString(),
      }
    },
  }
  