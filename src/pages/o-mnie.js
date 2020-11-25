import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PageHero from "../components/pageHero"
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
          fluid(maxWidth: 500) {
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
      <SEO title="O mnie" />

      <section className="container">
       <h1>O mnie</h1>

        <div className="about">
          <div className="about__image">
            <Img fluid={aboutContent.image.fluid} alt={aboutContent.image.alt} />
          </div>

          <div className="about__content"
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
