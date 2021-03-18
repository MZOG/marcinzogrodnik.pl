/* eslint-disable */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Prywatnosc = () => {
  const ppQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "polityka-prywatnosci-fb.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        lang="pl"
        title="Polityka prywatności"
        description="Polityka prywatności strony marcinzogrodnik.pl"
        shareImage={ppQuote.file.publicURL}
      />
      <section className="page">
        <div className="container">
          <h1>Polityka prywatności</h1>
          <p>W przygotowaniu</p>
        </div>
      </section>
    </Layout>
  )
}

export default Prywatnosc
