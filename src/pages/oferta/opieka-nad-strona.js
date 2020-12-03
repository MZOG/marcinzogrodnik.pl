/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const OpiekaNadStrona = () => {
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
        title="Opieka nad stroną"
        description="Nie masz czasu aktualizować strony internetowej? Od teraz nie musisz się o to martwić! Oferuję opiekę nad stroną, abyś Ty mógł zająć się swoim biznesem!"
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <h1>Opieka nad stroną</h1>
          <p>Oferta w przygotowaniu</p>

        </div>
      </section>
    </Layout>
  )
}

export default OpiekaNadStrona
