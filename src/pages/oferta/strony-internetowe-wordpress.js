/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const StronyInternetoweWordPress = () => {
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
        title="Strony internetowe WordPress"
        description="Poznaj nieograniczone możliwości systemu zarządzania treścią WordPress. Posiadam bogate doświadczenie w tworzeniu stron oraz sklepów internetowych WordPress."
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <h1>Strony internetowe WordPress</h1>

          <div className="content">
            <p>
              <strong>WordPress</strong> to jeden z najpopularniejszych systemów
              zarządzania treścią, korzystają z niego nie tylko duże światowe
              firmy, ale również artyści czy osoby publiczne.
            </p>

            <h2>Sklep WooCommerce</h2>

            <p>
              <strong>WordPress</strong> wykorzystuje wtyczkę{" "}
              <strong>WooCommerce</strong> do zarządzania sklepem internetowym.
              WooCommerce jest bardzo prosty w obsłudze, więc osoby mniej
              techniczne nie będą mieć problemu z dodawaniem czy edycją
              produktów.
            </p>

            <h2>Wtyczki</h2>

            <p>
              <strong>WordPress</strong> jest na rynku od wielu lat, programiści
              stworzyli już wtyczkę do wszystkiego. Prowadzisz usługi
              kosmetyczne? Zainstaluj wtyczkę rezerwacji online. Chcesz aby
              klient mógł wysłać wiadomość w skomplikowanym formularzu? Na to
              też jest wtyczka!
            </p>

            <h2>Wygląd</h2>

            <p>
              <strong>WordPress</strong>, oferuje tysiące darmowych skórek,
              które możesz wykorzystać na swojej stronie internetowej. Niestety
              darmowe wtyczki bardzo często posiadają błędy, przez co strona nie
              wygląda atrakcyjnie dla klienta.
            </p>
            <p>
              Płatne wersje skórek (gotowce) w 90% zadowolą każdego klienta,
              problem z płatnymi skórkami jest taki, że często tych funkcji jest
              po prostu za dużo i znaczna część nie jest w ogóle wykorzystywana
              na stronie internetowej, wiec płacisz za coś czego nie używasz.
            </p>

            <p>
              Moi klienci dostają skórkę tworzoną specjalnie pod klienta, więc
              nie ma tam ani jednej niepotrzebnej linijki kodu.
            </p>

            <h2>SEO</h2>

            <p>
              <strong>WordPress</strong> z odpowiednio skonfigurowaną wtyczką
              potrafi się bardzo dobrze pozycjonować w <strong>Google</strong>.
              Jest to bardzo ważne w kontekście widoczności Twojej strony przez
              potencjalnych klientów.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StronyInternetoweWordPress
