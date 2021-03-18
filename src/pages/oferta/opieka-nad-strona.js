/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import PageTitle from "../../components/PageTitle"

const OpiekaNadStrona = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "offer-opieka-fb.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
          <PageTitle
            title="Opieka nad stroną"
            lead="Nie masz czasu zajmować się stroną internetową?"
          />
          <div className="page_offer-content">
            <p>
              Posiadam duże doświadczenie w zarządzaniu stronami klientów.
              Wykonuję{" "}
              <Link to="/oferta/optymalizacja-strony-internetowej">
                optymalizację
              </Link>{" "}
              stron, oraz na bieżąco monitoruję ich stan.
            </p>

            <div className="page_grid">
              <div className="page_grid-item">
                <h2>Zarządzanie</h2>
                <p>
                  Zarządzanie stroną internetową to: dbanie o bezpieczeństwo
                  poprzez aktualizacje, instalacja, integracja, oraz
                  konfiguracja wtyczek. Co kilka dni sprawdzam stronę pod
                  względem technicznym np. szybkość ładowania strony oraz
                  optymalizacja obrazków.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default OpiekaNadStrona
