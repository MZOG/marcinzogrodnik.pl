const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Marcin Zogrodnik - Strony internetowe`,
    description: `Marcin Zogrodnik - Tworzę szybkie oraz przyciągające klientów strony internetowe wykorzystując najnowsze technologie tj. JAMstack, React czy Gatsby.`,
    author: `@zogrodnik_m`,
    homepage: {
      heroHeading: 'Marcin Zogrodnik',
      heroSlug: 'Szybkie, bezpieczne oraz nowoczesne strony internetowe dostosowane do Twoich potrzeb.',
      heroBtn: 'Zobacz realizacje'
    }
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              apiToken: "21bd12eb1ba5483810768d04fb6417",
              maxWidth: 1150,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'blackboard'
            }
          },
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-remark-images",
      options: {
        maxWidth: 850,
      },
    },
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
        name: `images`,
        path: `${__dirname}/src/images`,
        // path: path.join(__dirname, `src`, `images`)
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
    // {
    //   resolve: `gatsby-source-datocms`,
    //   options: {
    //     apiToken: `996463ca0503552024c98da27d4337`,
    //     preview: false,
    //     disableLiveReload: false,
    //   },
    // },
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
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-145426129-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },

    {
      resolve: `gatsby-plugin-posthog-analytics`,
      options: {
        // Specify the API key for your Posthog Project (required)
        apiKey: "7sL-VMAGk-6Qzk1WoGMB-SBT1saSuokdgqA_anQ8Hp8",
        // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
        appHost: "https://app.posthog.com",
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        isEnabledDevMode: true
      },
    },
  ],
}
