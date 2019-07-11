const path = require(`path`)
const utils = require(`./src/scripts/functions/utils`)

const metadata = {
  site: utils.readyaml(`./data/meta/site.yaml`),
  interface: utils.readyaml(`./data/meta/interface.yaml`),
}

module.exports = {
  siteMetadata: {
    ...metadata,
  },
  plugins: [
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgo: false,
        svgoConfig: {
          removeViewBox: false,
        },
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,

    /*
      ======================================

        gatsby-source-filesystem

        creates File nodes from files. 
        
     -> The various “transformer” plugins can 
        transform File nodes into various other 
        types of data e.g. 

        1. `gatsby-transformer-json` transforms 
        JSON files into JSON data nodes.

        2. `gatsby-transformer-remark` transforms 
        markdown files into MarkdownRemark nodes 
        from which you can query an HTML 
        representation of the markdown.

     -> Regex provided to ignore will ignore
        all files starting with a dot.

      ======================================
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
        ignore: [`**/\.*`],
      },
    },

    /*
      ======================================
        
        gatsby-plugin-catch-links

        This plugin intercepts all local links 
        that have not been created in React 
        using gatsby-link, and replaces their 
        behavior with that of the gatsby-link 
        navigate. This avoids the browser having 
        to refresh the whole page when navigating 
        between local pages, preserving the Single 
        Page Application (SPA) feel.

      ======================================
    */

    `gatsby-plugin-catch-links`,

    /*
      ======================================
        
        gatsby-plugin-sitemap

        Create a sitemap for your Gatsby site.
        This plugin only generates output when run 
        in production mode! To test your sitemap, run: 

        gatsby build && gatsby serve

      ======================================
    */

    `gatsby-plugin-sitemap`,

    /*
      ======================================
      
        gatsby-plugin-manifest 

        The web app manifest (part of the PWA 
        specification) enabled by this plugin 
        allows users to add your site to their 
        home screen on most mobile browsers. 
        The manifest provides configs 
        and icons to the phone.

        This plugin provides several features beyond 
        manifest configs to make your life easier, 
        they are:

        1. Generates multiple icon sizes from a single source.
        2. Favicon support
        3. Legacy icon support (iOS)
        4. Cache busting

      ======================================
    */

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metadata.site.title,
        short_name: metadata.site.title,
        start_url: `/`,
        display: `minimal-ui`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        icon: metadata.site.favicon,
      },
    },

    /*
      ======================================
         
         gatsby-plugin-google-analytics

         Adds google analytics to the website.

      ======================================
    */

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: metadata.site.analytics,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
