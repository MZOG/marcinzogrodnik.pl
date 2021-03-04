/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTA from "../../components/cta"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const StronyInternetoweJAMstack = () => {
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
          <h1>Strona internetowa JAMstack</h1>
          <p className="lead">Wyprzedź konkurencję o lata świetlne z nowoczesnymi rozwiązaniami JAMstack!</p>

          <div className="content">
            <h2>Strona statyczna</h2>
            <p>
              Czasem bardzo ciężko jest odróżnić <strong>statyczną</strong>{" "}
              stronę internetową od <strong>dynamicznej</strong>. Jeżeli Twoja
              firma nie wymaga sklepu internetowego, lub rozbudowanego portalu,
              wtedy na 90% jest to strona statyczna. Nie zawsze jednak tak jest,
              sporo programistów do bardzo prostych stron informacyjnych używa{" "}
              <strong>WordPress'a</strong>, co moim zdaniem jest niepotrzebne.
            </p>
            <p>
              Oczywiście strony statyczne również mogą być rozbudowane,
              coraz więcej firm decyduje się na statyczne sklepy internetowe!
            </p>
            <p>
              W większości przypadków zwykła strona informacyjna wykorzystująca{" "}
              <strong>Gatsby</strong> jest wystarczająca, aby zapokoić potrzeby
              strony firmowej. Strona <strong>marcinzogrodnik.pl</strong>{" "}
              wykorzystuje właśnie <strong>JAMstack</strong> oraz{" "}
              <strong>Gatsby</strong>. Do zarządzania treścią, tak samo jak w
              przypadku WordPress'a używam <strong>DatoCMS</strong>, który jest
              świetnym narzędziem.
            </p>

            <h3>Strona statyczna vs. dynamiczna</h3>

            <p>
              <strong>WordPress</strong> to idealny przykład strony dynamicznej.
              Strona internetowa wykorzystująca WordPress musi być połączona z
              bazą danych, która jest zainstalowana na serwerze. Każde
              zalogowanie się do panelu administratora, każda odsłona strony
              wymaga wysłania zapytania do serwera oraz do bazy danych. W tym
              zapytaniu są różne informacje wcześniej zdefiniowane przez
              twórcę strony.
            </p>

            <p>
              Dynamiczna strona internetowa tworzona jest "w locie", czyli każde
              zapytanie generuje nowy <strong>HTML</strong> i wyświetla go
              użytkownikowi, gdy tylko dostanie wszystkie informacje. Jak każdy
              system, strona dynamiczna ma swoje wady i zalety, ważne jest
              odpowiednie dobranie technologii do oczekiwań klienta.
            </p>

            <p>
              Dynamiczne strony, najczęściej wykorzystujące{" "}
              <strong>WordPress</strong> potrafią być bardzo dobrze
              zoptymalizowane. Odpowiednie techniki użyte w tworzeniu strony
              pomagają uniknąć późniejszego spowolnienia strony internetowej.
            </p>

            <p>
              Więcej o WordPress przeczytasz w{" "}
              <Link to="/oferta/strony-internetowe-wordpress/">
                ofercie strony internetowej WordPress
              </Link>
              .
            </p>

            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#fb3c54",
                  fontSize: "1rem",
                  fontWeight: "700"
                }}
              >
                vs.
              </p>
            </div>

            <p>
              <strong>Statyczna strona internetowa</strong> różni się tym, że
              jest generowana raz, i wszystkie strony czy pliki są już gotowe na
              serwerze do wyświetlenia. Jest to niewątpliwie główna zaleta stron
              statycznych, ponieważ strony te są mniej narażone na potencjalne
              ataki hakerów.
            </p>

            <p>
              Poruszanie się po stronie statycznej jest dużo szybsze, niż w
              przypadku stron dynamicznych, ponieważ cała zawartość już tam
              jest. Daje to wspaniałe efekty w postaci bardzo szybkiej strony
              internetowej.
            </p>
            <p>
              W przypadku gdy wymagany jest system blogowy / aktualności,
              korzysta się z zewnętrznych narzędzi takich jak{" "}
              <a href="https://datocms.com">DatoCMS</a> do zarządzania treścią
              na blogu / aktualnościach. DatoCMS to nie jest jedyny wybór, pod
              hasłem <strong>Headless CMS</strong> znajdziesz pełną listę
              serwisów oferujących te właśnie usługi.
            </p>
            <p>
              Aby wyświetlić posty z <strong>DatoCMS</strong> wymagane jest
              zintegrowanie{" "}
              <strong>API</strong> DatoCMS z naszą stroną internetową.
            </p>
            <p>
              Podczas generowania nowej wersji strony tworzona jest cała
              zawartość. Zapytania te np. o posty, obrazki są wykonwywane przed
              dodaniem strony na serwer.
            </p>

            <h2>Dlaczego wybrać JAMstack?</h2>
            <p>
              Jeżeli Twoja strona nie będzie aktualizowana 30 razy w ciągu dnia,
              to statyczna strona <strong>JAMstack</strong> jest dla Ciebie idealnym
              rozwiązaniem. Strona będzie lekka, oraz każda podstrona będzie
              dostępna natychmiast po kliknięciu w link! Szybkość strony
              internetowej bardzo wpływa na pozycjoniwanie, więc warto się nad
              tym zastanowić.
            </p>

            <p>JAMstack to nie tylko szybkość, poznaj więcej zalet statycznych stron internetowych.</p>

            <h3>Koszt</h3>
            <p>
              Strona internetowa JAMstack jest tańsza w utrzymaniu oraz wykonaniu.
              Darmowy hosting od <a href="https://netlify.com">Netlify</a> w zupełności
              wystarczy dla małych, a nawet średnich firm.
              Strona <Link to="/">marcinzogrodnik.pl</Link> korzysta z usług <strong>Netlify</strong>,
              i nigdy nie było żadnych problemów z wyświetlaniem strony.
            </p>

            <p>Koszt statycznej strony internetowej typu wizytówka, bez żadnych integracji
              z zewnętrznymi usługami typu <strong>DatoCMS</strong> jest o wiele tańszy,
              niż opcja z ww. usługami.
            </p>

            <p>
              Czas realizacji również jest krótszy, niż w przypadku dynamicznych stron
              internetowych.
            </p>

            <h3>Bezpieczeństwo</h3>
            <p>
              Twoja strona internetowa jest bezpieczniejsza i bardziej odporna
              na ataki hakerów, ponieważ nie wysyłane są żadne zapytania do
              serwera.
            </p>

            <h3>Wydajność</h3>
            <p>
              Strony internetowe <strong>JAMstack</strong> są o wiele szybsze od dynamicznych stron,
              właśnie przez to, że są generowane podczas wysyłania na serwer, a nie
              za każdym razem gdy klikniesz w link.
            </p>

            <p>Szybkość strony internetowej jest bardzo ważna dla pozycjonowania, oraz wyników w Google.
              Wolniejsze strony są mniej promowane, przez co spada liczba potencjalnych klientów oraz zysków.
            </p>

          </div>
        </div>

        <CTA line1="Zależy Ci na szybkości strony internetowej?" line2="JAMstack jest właśnie dla Ciebie!" />
      </section>
    </Layout>
  )
}

export default StronyInternetoweJAMstack
