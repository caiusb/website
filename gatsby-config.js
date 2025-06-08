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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "dracula",
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500
            }
          },
          `gatsby-remark-gifs`
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`
  ],
}
