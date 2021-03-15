/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"

const Optymalizacja = () => {
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
        title="Optymalizacja stron internetowych"
        description="Optymalizuję strony internetowe, aby ładowały się szybko i przyciągały użytkowników."
        shareImage={data.file.childImageSharp.fluid.src}
      />
      <section className="page ">
        <div className="container">
          <h1>Optymalizacja stron internetowych</h1>

          <div className="content">
            <p className="lead">
              Optymalizacja polega na dostosowaniu strony internetowej do konkretnych potrzeb. Jeżeli chcesz, aby Twoja strona była wyżej w wynikach wyszukiwania, to Twoja strona musi być zoptymalizowana.
            </p>

            <p>Optymalizacja składa się z wielu elementów, nie jest to jednorazowe działanie, oraz 10 minut pracy programisty. Jeżeli Twoja strona nie przynosi zysków, użytkownicy szybko opuszczają Twoją stronę, lub po prostu nie masz organicznych wejść, to prawdopodobnie Twoja strona internetowa jest słabo zoptymalizowana.</p>

            <p>Optymalizację warto podzielić na dwie cześci, pierwsza to optymalizacja techniczna, druga to treść na stronie.</p>

            <h2>Co to jest optymalizacja?</h2>
            <p>
              Optymalizacja to poprawa (istniejącej już) strony internetowej poprzez wprowadzanie poprawek w kodzie, lub w treści. Strona internetowa jest jak samochód, o który trzeba dbać, aby dalej sprawnie jeździł.
            </p>
            <p>
              Często zdarza się, że strona ma już kilka lat, pewne linki (z niewiadomych przyczyn) przestały działać, użytkownicy szukając informacji trafiają na stronę 404, lub strona bardzo długo się wczytuje. Wszystkie te rzeczy sprawdzam, oraz naprawiam, aby Twoja strona internetowa była dostępna dla każdego, od razu.
            </p>

            <p>
              Darmowe generatory stron internetowych typu Wix tworzą bardzo dużo niepotrzebnego kodu, który nie jest zbyt mile widziany. W większości przypadków element, który może zostać napisany w 1 linijce, zajmuje ich 10, przy czym pobiera cenne milisekundy czasu ładowania naszej strony.
            </p>

            <p>
              Wymieniłem tylko kilka ważnych rzeczy, które zwracam szczególną uwagę podczas optymalizacji.
              Jeżeli uważasz, że Twoja strona internetowa jest wolna, nie przynosi zysków, to <Link to="/kontakt">zadzwoń lub napisz wiadomość</Link>, wykonam darmowy audyt Twojej strony internetowej.
            </p>
          </div>
        </div>


      </section>
    </Layout>
  )
}

export default Optymalizacja
