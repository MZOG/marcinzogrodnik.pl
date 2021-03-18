import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../components/PageTitle"

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
      file(relativePath: { eq: "o-mnie-fb.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
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
        shareImage={data.file.childImageSharp.fluid.src}
      />

      <section className="page page_about">
        <div className="container">
          <PageTitle
            title="O mnie"
            lead="Poznaj kim jestem, jak zaczęła się moja przygoda z programowaniem"
          />

          <div className="page_content">
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
        </div>
      </section>
    </Layout>
  )
}

export default About
