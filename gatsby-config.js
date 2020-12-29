const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Strony internetowe WordPress & JAMstack`,
    description: `Marcin Zogrodnik - Tworzę szybkie oraz przyciągające klientów strony internetowe wykorzystując najnowsze technologie tj. JAMstack, React czy Gatsby.`,
    author: `@zogrodnik_m`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://marcinzogrodnik.pl`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: "996463ca0503552024c98da27d4337",
              maxWidth: 1120,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              // theme: 'blackboard'
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
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
        name: `marcinzogrodnik_pl`,
        short_name: `marcinzogrodnik`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `996463ca0503552024c98da27d4337`,
        preview: true,
        disableLiveReload: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145426129-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        defer: true,
      },
    },
  ],
}
