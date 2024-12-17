module.exports = {
  siteMetadata: {
    title: `Caius Brindescu's website`,
    siteUrl: `https://caius.brindescu.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
      trackingIds: [
        "G-VKV828NFP9", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
  ],
}
