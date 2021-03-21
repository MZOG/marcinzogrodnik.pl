/* eslint-disable */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Regulamin = () => {
  const regulaminQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "regulamin-fb.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        lang="pl"
        title="Regulamin"
        description="Regulamin strony marcinzogrodnik.pl"
        shareImage={regulaminQuote.file.publicURL}
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
