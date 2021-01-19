/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTA from "../../components/cta"
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
        title="Mentoring"
        description="Uczysz się HTML, CSS, JavaScript? A może masz problem z WordPress'em lub Gatsby? Napisz do mnie, na pewno pomogę Ci rozwiązać problem."
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <h1>Mentoring</h1>
          <p>Oferta w przygotowaniu</p>

        </div>
        <CTA line1="Pomogę Ci z JavaScript, React czy Gatsby." />
      </section>
    </Layout>
  )
}

export default Mentoring
