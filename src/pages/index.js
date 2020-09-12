import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image";

// components
import Hero from "../components/hero";
import About from "../components/about";
import HomepageOffer from "../components/offer.component"
import HomepageRecentProjects from "../components/recentProjects.component"
import QuickContact from "../components/quickContact";

const IndexPage = ({ data }) => {
  const recentProjects = data.allDatoCmsShowcase
  const recentPosts = data.allDatoCmsBlog

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Marcin Zogrodnik",
    "description": "Marcin Zogrodnik - Tworzę szybkie oraz przyciągające klientów strony internetowe wykorzystując najnowsze technologie tj. JAMstack, React czy Gatsby.",
    "image": "https://www.datocms-assets.com/30080/1599225992-marcinzogrodnik-default-image.jpg",
    "url": "https://marcinzogrodnik.pl",
    "telephone": "739907919",
    "priceRange": "2000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ułańska 66",
      "addressLocality": "Lędziny",
      "postalCode": "43-143",
      "addressCountry": "PL"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/frontendmarcin",
      "https://github.com/MZOG",
      "https://marcinzogrodnik.pl"
    ]
  }

  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
        schemaMarkup={schema}
      />
      <Hero />
      <About />
      <HomepageOffer />
      <HomepageRecentProjects projects={recentProjects} />
      <QuickContact />


      <section className="home-recent-posts">
        <div className="container">
          <h2>Ostatnio na blogu</h2>

          <div className="posts-wrapper">
            {
              recentPosts.edges.map((post) => {
                return(
                  <article>
                    <div className="image">
                      <Img fluid={post.node.postImage.fluid} className="main-image" />
                    </div>
                    <div className="content">
                    <h3><Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link></h3>
                    <p>{post.node.excerpt}</p>
                    <Link to={`/blog/${post.node.slug}`} className="btn btn-primary">Czytaj</Link>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allDatoCmsShowcase(
      sort: { fields: meta___createdAt, order: DESC }
      limit: 2
    ) {
      edges {
        node {
          id
          slug
          excerpt
          projectName
          projectUrl
          projectDescription
          projectImage {
            fluid(maxWidth: 700, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }

    allDatoCmsBlog(
      sort: { order: DESC, fields: meta___createdAt }
      limit: 3
    ) {
      edges {
        node {
          id
          content
          excerpt
          title
          slug
          meta {
            createdAt(formatString: "DD/MM/YYYY")
          }
          postImage {
            fluid(maxWidth: 700, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
