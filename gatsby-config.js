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
    `gatsby-plugin-sitemap`
  ],
}
