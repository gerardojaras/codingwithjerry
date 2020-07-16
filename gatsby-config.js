module.exports = {
  siteMetadata: {
    title: `Coding With Jerry`,
    description: `I am a developer with over 20 years of experience, trying to make sense of the development world.`,
    author: `Gerardo Jaramillo (Jerry)`,
    siteUrl: `https://codingwithjerry.com/`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`300`, `400`, `500`, `700`, `900`],
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wordpress.projects.codingwithjerry.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PXPCS79",
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
}
