module.exports = {
  siteMetadata: {
    siteUrl: `https://leasefinds-landing.netlify.app`,
    title: `LeaseFinds`,
    description: ``,
    image: `/icons/icon.png`,
    siteName: "LeaseFinds",
    siteLanguage: "en",
    ogLanguage: "en_US",
    icon: `/icons/icon.png`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LeaseFinds`,
        short_name: `LeaseFinds`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `https://api-landing.leasefinds.com/graphql`,
        refetchInterval: 30,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MDV7KNF",
        includeInDevelopment: false,
      },
    },
    // `gatsby-plugin-preact`,
  ],
}
