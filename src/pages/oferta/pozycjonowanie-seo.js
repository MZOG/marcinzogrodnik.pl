/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PageTitle from "../../components/PageTitle"

const Pozycjonowanie = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "offer-pozycjonowanie-fb.png" }) {
        publicURL
      }
    }
  `)

  const path = window.location.href

  return (
    <Layout>
      <SEO
        lang="pl"
        title="Pozycjonowanie stron internetowych"
        description="Twoja strona nie wyświetla się w wynikach wyszukiwania Google? Pozycjonuję strony internetowe od kilku lat, znam techniki, które pomogą Twojej stronie być wyżej niż konkurencja."
        shareImage={data.file.publicURL}
        path={path}
      />
      <section className="page ">
        <div className="container">
          <PageTitle
            title="Pozycjonowanie stron internetowych"
            lead="Twoja strona nie wyświetla się w wynikach wyszukiwania? Zadbaj o pozycjonowanie."
          />

          <div className="page_offer-content">
            <p>Oferta w przygotowaniu.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Pozycjonowanie
