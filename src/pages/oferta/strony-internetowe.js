/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import { Link } from "gatsby"

const StronyInternetowe = () => {
  return (
    <Layout>
      <SEO
        lang="pl"
        title="Strony internetowe"
        description="Do stworzenia szybkiej oraz nowoczesnej strony internetowej wykorzystuję JAMstack oraz WordPress."
      />
      <section className="page">
        <div className="container">
          <PageHero
            hero="Strony internetowe"
            lead="Szybkie i bezpieczne strony internetowe WordPress & Gatsby"
          />

          <div className="content">
            <p>
              Dobra <strong>strona internetowa</strong>, to nie tylko wygląd.
              Klienci często nie zdają sobie sprawy ile pracy wymaga stworzenie
              idealnej strony internetowej, która spełnia wszystkie wymagania.
            </p>

            <p>
              Strony wykonane przez <strong>marcinzogrodnik.pl</strong> są
              przede wszystkim szybkie, oraz bezpieczne.
            </p>

            <p>
              Specjalizuję się w tworzeniu stron internetowych opartych o
              popularny system zarządzania treścią <strong>WordPress</strong>,
              oraz bardziej nowoczesne - <strong>Gatsby</strong>.
            </p>

            <h2>Strona internetowa WordPress</h2>

            <p>
              <strong>WordPress</strong> to dobry system zarządzania treścią
              (CMS), który może zostać wykorzystany na wiele różnych sposobów.
              Jest to najpopularniejszy system dla blogerów, ponieważ pozwala on
              na szybkie zarządzanie stronami oraz artykułami.
            </p>

            <p>
              Jednak nie tylko blogerzy wykorzystują ten system, wiele znanych
              marek oraz osób korzysta z WordPress'a i są to strony bardzo
              popularne. Przykłady: <a href="https://www.vogue.com/">Vogue</a>,{" "}
              <a href="https://snoopdogg.com/">Snoop Dogg</a>,{" "}
              <a href="https://www.katyperry.com/">Katy Perry</a> czy{" "}
              <a href="https://techcrunch.com/">Tech Crunch</a>.
            </p>

            <p>
              WordPress może zostać skonfigurowany na milion sposobów, ogranicza
              nas tylko wyobraźnia, oraz umiejętności programisty, który
              wykonuje projekt, a o to w tym przypadku nie musisz się martwić.
            </p>

            <p>
              Ostatni projekt, który wykonałem właśnie z wykorzystaniem{" "}
              <strong>WordPress</strong> to{" "}
              <a href="https://doradcajezykowy.com">Doradca Językowy</a>.
            </p>

            <p>
              Stronę WordPress polecam dla osób / firm, które często aktualizują
              treść na swojej stronie internetowej, oraz cenią sobie łatwość w
              zarządzaniu nią. Praca z dobrze skonfigurowaną stroną to
              przyjemność, i tak powinno być zawsze.
            </p>

            <h2>Strona internetowa JAMstack</h2>

            <p>
              Do stworzenia strony internetowej <strong>JAMstack</strong>{" "}
              wykorzystuję <strong>React'a</strong>, a raczej framework o nazwie{" "}
              <strong>Gatsby</strong>. Więcej o <strong>Gatsby</strong>, możesz
              przeczytać{" "}
              <Link to="blog/statyczna-strona-internetowa-gatsby">tutaj</Link>.
            </p>

            <p>
              <strong>Gatsby</strong>, to generator statycznych stron
              internetowych, który jest idealny dla stron typu{" "}
              <strong>one page</strong>, lub <strong>wizytówka</strong>. Strona{" "}
              <Link to="/">marcinzogrodnik.pl</Link> została wykonana właśnie z
              pomocą Gatsby. Zauważ jak szybko strona reaguje na każde
              kliknięcie! Twoja strona internetowa może róznież być tak szybka!
            </p>

            <p>
              Stronę JAMstack polecam w przypadku, gdy treść na stronie nie musi
              się zmieniać zbyt często (strona jest statyczna), lub gdy
              właściciel strony nie ma czasu na zarządznie nią. Dla programisty
              zarządznie stroną wykonaną w Gatsby to bułka z masłem.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StronyInternetowe
