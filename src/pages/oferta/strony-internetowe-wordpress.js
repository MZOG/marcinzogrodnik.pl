/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PageTitle from "../../components/PageTitle"

const StronyInternetoweWordPress = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "offer-wordpress-fb.png" }) {
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
        title="Strony internetowe WordPress"
        description="Łatwa w obsłudze strona internetowa WordPress z panelem administracyjnym do samodzielnego zarządzania stroną. "
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <PageTitle
            title="Strony internetowe WordPress"
            lead="WordPress to najpopularniejszy system zarządzania treścią na
              świecie, nie dziwi więc, że sporo firm decyduje się na to
              rozwiązanie."
          />
          <div className="page_offer-content content">
            <div className="page_grid">
              <div className="page_grid-item">
                <h2>Zarządzanie</h2>
                <p>
                  Największą zaletą WordPress'a jest możliwość samodzielnego
                  zadządzania treścią na stronie internetowej. Panel
                  administracyjny jest prosty w obsłudze, dodawanie nowych
                  wtyczek również nie powinno być problemem.
                </p>
              </div>

              <div className="page_grid-item">
                <h2>Bezpieczeństwo</h2>
                <p>
                  W tym temacie zdania są podzielone, jedni uważają, że
                  WordPress nie jest bezpieczny, inni wręcz odwrotnie. System
                  sam w sobie jest bezpieczny, ewentualne zagrożenia możesz
                  spotkać instalując nieodpowiednie wtyczki z mało popularnych
                  źródeł.
                </p>
              </div>

              <div className="page_grid-item">
                <h2>Elastyczność</h2>
                <p>
                  Strona internetowa WordPress może być wykorzystana na bardzo
                  wiele sposobów. Możesz stworzyć prostą stronę wizytówkę,
                  rozbudowany serwis informacyjny czy sklep internetowy. Ogromna
                  ilość wtyczek pozwoli na dowolną rozbudowę strony
                  internetowej.
                </p>
              </div>

              <div className="page_grid-item">
                <h2>Darmowy</h2>
                <p>
                  WordPress to otwarty system, który jest darmowy. Możesz
                  samodzielnie postawić stronę lub sklep, nie wydając złotówki
                  (nie licząc hostingu, domeny, certyfikatu SSL). Płatne są
                  rozszerzenia (wtyczki) oraz motywy premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StronyInternetoweWordPress
