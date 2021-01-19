import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutMePage {
      datoCmsAboutMe {
        contentNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid(maxWidth: 768) {
            ...GatsbyDatoCmsFluid
            src
          }
          alt
        }
        seo {
          description
        }
      }
    }
  `)
  const aboutContent = data.datoCmsAboutMe

  return (
    <Layout>
      <SEO
        title="O mnie"
        description="Nazywam się Marcin Zogrodnik i tworzę strony internetowe. Posiadam wieloletnie doświadczenie zdobtyte w Wielkiej Brytanii, które wykorzystuję w Polsce."
      />

      <section className="about page">
        <div className="container">
          <h1>O mnie</h1>

          <Img
            fluid={aboutContent.image.fluid}
            alt={aboutContent.image.alt}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: aboutContent.contentNode.childMarkdownRemark.html,
            }}
          />
        </div>
      </section>
    </Layout>
  )
}

export default About
