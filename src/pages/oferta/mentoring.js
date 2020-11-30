/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Mentoring = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "strony-internetowe-jamstack.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        lang="pl"
        title="Strony internetowe WordPress"
        description="Strony oraz sklepy internetowe WordPress"
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <h1>Mentoring</h1>
          <p>Oferta w przygotowaniu</p>

        </div>
      </section>
    </Layout>
  )
}

export default Mentoring
