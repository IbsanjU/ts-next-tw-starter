/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // !STARTERCONF Change the siteUrl
  /** Without additional '/' on the end, e.g. https://revanab.com */
  siteUrl: 'https://tsnext-tw.revab.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [ { userAgent: '*', allow: '/' } ],
  },
};
