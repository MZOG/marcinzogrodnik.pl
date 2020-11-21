const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Strony internetowe Katowice`,
    description: `Marcin Zogrodnik - Tworzę szybkie oraz przyciągające klientów strony internetowe wykorzystując najnowsze technologie tj. JAMstack, React czy Gatsby.`,
    author: `@zogrodnik_m`,
    homepage: {
      heroHeading: 'Marcin Zogrodnik',
      heroSlug: 'Szybkie, bezpieczne oraz nowoczesne strony internetowe dostosowane do Twoich potrzeb.',
      heroBtn: 'Realizacje'
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "olaXHcEtqU7OOslxo53CUkMsL",
          consumer_secret: "qU5oB4iNDdEwobT52hJW2ZWDZTt2rdNxiZ6ZZIgh939K3q8DOM",
          bearer_token: "AAAAAAAAAAAAAAAAAAAAAMWOJgEAAAAA260vgooJGEoQ%2Bi6SyT%2BGnIUUwHk%3DYnUR1XwBQPzqkaLPxfDtWyD9bZe7xSqwo5xDOyOgkpu12VAXhs",
        },
        queries: {
          nameofthequery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "zogrodnik_m",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`900`, `900i`, `800`],
            subsets: [`latin-ext`]
          },
        ],
      },
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
        preview: false,
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
