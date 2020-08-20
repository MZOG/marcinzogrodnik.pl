import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// components
import Hero from "../components/hero.component"
import HomepageOffer from "../components/offer.component"
import HomepageRecentProjects from "../components/recentProjects.component"

const IndexPage = ({ data }) => {
  const recentProjects = data.allDatoCmsShowcase
  return (
    <Layout>
      <SEO title="Marcin Zogrodnik" />
      <Hero />
      <HomepageOffer />
      <HomepageRecentProjects projects={recentProjects} />
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allDatoCmsShowcase(
      sort: { fields: meta___createdAt, order: DESC }
      limit: 4
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

    allDatoCmsBlog(sort: { order: DESC, fields: meta___createdAt }) {
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
