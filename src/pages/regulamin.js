/* eslint-disable */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Regulamin = () => {
  const regulaminQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "regulamin-fb.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        lang="pl"
        title="Regulamin"
        description="Regulamin strony marcinzogrodnik.pl"
        shareImage={regulaminQuote.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <h1>Regulamin</h1>
          <p>W przygotowaniu</p>
        </div>
      </section>
    </Layout>
  )
}

export default Regulamin
