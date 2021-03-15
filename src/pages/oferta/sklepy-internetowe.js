/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const SklepyInternetowe = () => {
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
        title="JAMstack"
        description="Statyczna strona internetowa JAMstack może być o 10 razy szybsza niż standardowa strona oparta na innym systemie. Strony JAMstack tworzę wykorzystując Gatsby."
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page">
        <div className="container">
          <h1>Sklepy internetowe</h1>

          <div className="content">
            <p>
              Pomagam w stworzeniu oraz konfiguracji sklepów internetowych dla małych
              i średnich firm. Specjalizuję się w tworzeniu sklepów opartych na <strong>WooCommerce</strong>, {" "}
              <strong>Shopify</strong> czy <strong>BigCommerce</strong>.
            </p>

            <h2>WooCommerce</h2>
            <p>
              <strong>WooCommerce</strong> to wtyczka / dodatek do stystemu zarządzania treścią <strong>WordPress</strong>. Zaletą WooCommerce jest <strong>darmowe</strong> oprogramowanie, brak abonamentu czy opłaty licencyjnej. Zarówno WordPress jak i WooCommerce to zwolnione z opłat systemy. Idealne rozwiązanie dla młodych firm, które nie chcą przeznaczyć fortuny na dedykowany system sklepu internetowego.
            </p>
            <p>
              WordPress + WooCommerce to świetne narzędzie do pozycjonowania, wybierając sklep WooCommerce
              możesz mieć pewność wysokich wzrostów w Google Search Console, co z pewnością przeniesie się
              na zysk firmy.
            </p>

            <h2>BigCommerce</h2>
            <p>
              <strong>BigCommerce</strong> to bardzo ciekawa propozycja, która różni się od wyżej wymienionego WooCommerce. BigCommerce to platforma typu <strong>SaaS</strong> (Software as a Service), jest to płatna usługa. <a href="https://www.bigcommerce.com/essentials/pricing/">Ceny</a> są różne,
              zaczynając od <strong>29.95</strong>. BigCommerce oferuje tylko 15 dniowy darmowy okres próbny, później trzeba zapłacić.
            </p>
            <p>
              Warto się zastanowić nad BigCommerce z kilku powodów. Po pierwsze w cenie 29.95 dostaniemy
              hosting naszego sklepu, podstawową wersję strony, która jest responsywna, mobilną aplikację,
              integrację z Apple Pay, Google Pay, kupony, zniżki, karty rabatowe, oceny produktów, nielimitowaną ilość produktów oraz pracowników czy integrację z eBay czy Amazon.
            </p>

            <p>
              W odróżnieniu od WooCommerce, BigCommerce oferuje pomoc techniczną o każdej porze dnia i nocy. To duży plus (niestety pomoc tylko w języku angielskim).
              Sklep internetowy BigCommerce posiada sporo dodatków, za które musimy oczywiście zapłacić.
            </p>

            <p>Przykładowe sklepy BigCommerce: {" "}
              <a href="https://techna.co.uk">Techna.co.uk</a>, <a href="https://www.stormykromer.com/">Stormy Kromer</a>, <a href="https://cutleryshoppe.com/">Cutlery Shoppe</a>
            </p>

            <h2>Shopify</h2>
            <p>
              <strong>Shopify</strong> jest bardziej popularny w Polsce, jest to również platforma typu <strong>SaaS</strong>, za którą trzeba płacić abonament co miesiąc. Ceny podobne do BigCommerce, czyli $29.00 w wersji Basic. W Shopify możemy wybrać z około 100 gotowych szablonów graficznych na start. Możemy również zlecić stworzenie <a href="/oferta/projekty-graficzne">dedykowanego wyglądu sklepu internetowego</a>.
            </p>

            <h2>Podsumowanie</h2>
            <p>
              WooCommerce to darmowy system, polecany na start, musisz jednak pamiętać o tym, że WooCommerce potrzebuje hostingu, odpowiedniej konfiguracji, mówiąc krótko potrzebujesz odpowiednią osobę do zarządzania całą strukturą. Z BigCommerce czy Shopify nie musisz się martwić o hosting, konfigurację itp, ponieważ kupujesz to w cenie pakietu.
            </p>

            <p>Wszystkie propozycje świetnie współpracują z <strong>Gatsby</strong> czy <strong>Next.js</strong>, czyli backend będzie niezależny od warstwy wyświetlającej sklep, co sprawi, że czas ładowania strony będzie dużo szybszy.
            </p>
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default SklepyInternetowe
