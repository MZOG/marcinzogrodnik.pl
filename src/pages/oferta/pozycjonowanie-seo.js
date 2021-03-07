/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTA from "../../components/cta"
import { useStaticQuery, graphql } from "gatsby"

const Pozycjonowanie = () => {
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
        title="Pozycjonowanie stron internetowych"
        description="Twoja strona nie wyświetla się w wynikach wyszukiwania Google? Pozycjonuję strony internetowe od kilku lat, znam techniki, które pomogą Twojej stronie być wyżej niż konkurencja."
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page ">
        <div className="container">
          <h1>Pozycjonowanie stron internetowych</h1>
          <p className="lead">Twoja strona nie wyświetla się w wynikach wyszukiwania? Zadbaj o pozycjonowanie.</p>

          <div className="content">
            <p>Oferta w przygotowaniu.</p>
          </div>
        </div>

        <CTA
          line1="Strona internetowa WordPress to system, w którym Ty rządzisz."
        />
      </section>
    </Layout>
  )
}

export default Pozycjonowanie
