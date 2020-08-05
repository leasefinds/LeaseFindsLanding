module.exports = {
  siteMetadata: {
    siteUrl: `https://leasefinds.netlify.app`,
    title: `LeaseFinds`,
    description: `LeaseFinds`,
    image: `/icons/icon.png`,
    siteName: "LeaseFinds",
    siteLanguage: "",
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
        url: `https://leasefinds.wptestprev.icu/graphql`,
        refetchInterval: 30,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-anchor-links`
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["SFProDisplay"],
    //       urls: ["/fonts/fonts.css"],
    //     },
    //   },
    // },
    // `gatsby-plugin-preact`,
  ],
}
