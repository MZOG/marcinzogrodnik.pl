/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import { useStaticQuery, graphql } from "gatsby"
import QuickContact from "../../components/quickContact"

const StronyInternetoweWordPress = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "strony-internetowe-jamstack.jpg"}) {
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
          <PageHero
            hero="Strony internetowe WordPress"
            lead="Strony oraz sklepy internetowe WordPress"
          />

          <div className="content">
            <p>
              <strong>WordPress</strong> to jeden z najpopularniejszych systemów
              zarządzania treścią, korzystają z niego nie tylko duże światowe
              firmy, ale również artyści czy osoby publiczne.
            </p>

            <div className="split">
              <h2>Sklep WooCommerce</h2>
              <div className="image">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text">
                <p>
                  <strong>WordPress</strong> wykorzystuje wtyczkę{" "}
                  <strong>WooCommerce</strong> do zarządzania sklepem
                  internetowym. WooCommerce jest bardzo prosty w obsłudze, więc
                  osoby mniej techniczne nie będą mieć problemu z dodawaniem czy
                  edycją produktów.
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Wtyczki</h2>
              <div className="image">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="text">
                <p>
                  <strong>WordPress</strong> jest na rynku od wielu lat,
                  programiści stworzyli już wtyczkę do wszystkiego. Prowadzisz
                  usługi kosmetyczne? Zainstaluj wtyczkę rezerwacji online.
                  Chcesz aby klient mógł wysłać wiadomość w skomplikowanym
                  formularzu? Na to też jest wtyczka!
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Wygląd</h2>
              <div className="image">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <div className="text">
                <p>
                  <strong>WordPress</strong>, oferuje tysiące darmowych skórek,
                  które możesz wykorzystać na swojej stronie internetowej.
                  Niestety darmowe wtyczki bardzo często posiadają błędy, przez
                  co strona nie wygląda atrakcyjnie dla klienta.
                </p>
                <p>
                  Płatne wersje skórek (gotowce) w 90% zadowolą każdego klienta,
                  problem z płatnymi skórkami jest taki, że często tych funkcji
                  jest po prostu za dużo i znaczna część nie jest w ogóle
                  wykorzystywana na stronie internetowej, wiec płacisz za coś
                  czego nie używasz.
                </p>

                <p>
                  Moi klienci dostają skórkę tworzoną specjalnie pod klienta,
                  więc nie ma tam ani jednej niepotrzebnej linijki kodu.
                </p>
              </div>
            </div>

            <div className="split">
              <h2>SEO</h2>
              <div className="image">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="text">
                <p>
                  <strong>WordPress</strong> z odpowiednio skonfigurowaną
                  wtyczką potrafi się bardzo dobrze pozycjonować w{" "}
                  <strong>Google</strong>. Jest to bardzo ważne w kontekście
                  widoczności Twojej strony przez potencjalnych klientów.
                </p>
              </div>
            </div>
          </div>
          <QuickContact />
        </div>
      </section>
    </Layout>
  )
}

export default StronyInternetoweWordPress
