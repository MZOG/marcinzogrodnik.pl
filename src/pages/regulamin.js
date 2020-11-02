/* eslint-disable */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Regulamin = () => {

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
        title="Strony internetowe JAMstack"
        description="Strony internetowe JAMstack, czyli statyczne strony internetowe z Gatsby oraz Next.js."
        // shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <PageHero
            hero="Regulamin"
          />

          <div className="content">

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Regulamin
