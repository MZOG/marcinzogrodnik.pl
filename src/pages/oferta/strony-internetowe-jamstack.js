/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import { Link } from "gatsby"
import QuickContact from "../../components/quickContact"

const StronyInternetoweJAMstack = () => {
  return (
    <Layout>
      <SEO
        lang="pl"
        title="Strony internetowe JAMstack"
        description="Strony internetowe JAMstack, czyli statyczne strony internetowe z Gatsby oraz Next.js."
      />
      <section className="page">
        <div className="container">
          <PageHero
            hero="Strony internetowe JAMstack"
            lead="Statyczne strony internetowe wykonane za pomocą frameworka Gatsby"
          />

          <div className="content">
            <p>
              <strong>JAMstack</strong> to skrót od{" "}
              <strong>Javascript, API, Markup</strong>, jest to nowoczesny
              sposób tworzenia stron internetowych. Przed pojawieniem się PHP,
              każda strona w internecie była statyczna, nie pobierała ona
              żadnych danych z serwera, dlatego też ładowały się bardzo szybko.
            </p>
            <p>
              Poprzednia generacja statycznych stron miała jedną wadę, była
              czasochłonna w utrzymaniu, szczególnie w przypadku, gdy
              treść zmieniała się często. Każda zmiana wymagała bezpośredniej
              edycji plików <strong>HTML</strong>, przez co osoby mniej
              techniczne nie były w stanie samodzielnie zarządzać stroną.
            </p>

            <div className="split">
              <h2>Szybkość</h2>
              <div className="image">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div className="text">
                <p>
                  To, co wyróżnia statyczne strony <strong>JAMstack</strong>, to
                  przede wszystkim szybkość działania strony. Strona{" "}
                  <Link to="/">marcinzogrodnik.pl</Link> została wykonana
                  właśnie tą metodą, co można stwierdzić właśnie po szybkości
                  oraz wydajności.
                </p>

                <p>
                  Dzieje się tak z kilku powodów, po pierwsze nie wysyłane
                  są żadne zapytania do bazy danych, zapytania te mogą znacznie
                  spowolnić czas ładowania strony. Zauważysz to w 80% przypadków
                  stron internetowych.
                </p>

                <p>
                  Optymalizacja kodu również przyczynia się do szybkości strony.
                  Użytkownik dostaje tylko pliki{" "}
                  <strong>HTML, CSS oraz JavaScript.</strong>
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Bazy danych</h2>

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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <div className="text">
                <p>
                  Zaraz, zaraz.. ale co z danymi, co w przypadku, gdy chcę
                  prowadzić firmowego bloga, lub dodać realizacje projektów?
                  Tutaj do gry wchodzi <strong>API</strong>, które jest
                  odpowiedzialne za pobieranie danych. W zależności jak
                  skonfigurowana jest strona, dane mogą pochodzić z bazy danych
                  lub np. GitHub'a.
                </p>

                <p>
                  Przewagą używania API jest to, że wszystkie dane pobierane są
                  w tle, przez co statyczne elementy takie jak nagłówki czy
                  szkielet HTML zawsze ładuje się w pierwszej kolejności, tak,
                  aby użytkownik zobaczył, że od razu coś się dzieje na naszej
                  stronie internetowej.
                </p>

                <p>
                  Zobacz stronę <Link to="/blog/">blog</Link>, przyjżyj się
                  obrazkom dla każdego posta. Obrazki jak i tekst są pobierane
                  właśnie dzięki API. Tekst jest dużo lżejszy od obrazka, więc
                  widzisz go natychmiast, obrazki mają lekkie opóźnienie, dzieje
                  się tak dlatego, że potrzebują troszkę więcej czasu, aby się
                  załadować.
                </p>

                <p>
                  <strong>Uwaga!</strong> dalej mówimy o statycznej stronie
                  internetowej, z tą różnicą, że teraz jesteśmy w stanie w
                  bardzo łatwy sposób zarządzać treścią na naszej stronie,
                  poprzez rozmaite panele zarządzania treścią, które są bardzo
                  łatwe w obsłudze.
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Koszt utrzymania</h2>

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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="text">
                <p>
                  Statyczna strona nie potrzebuje dedykowanego serwera lub
                  hostingu. Dla prywatnych jak i biznesowych celów używam
                  darmowego rozwiązania jakim jest{" "}
                  <a href="https://netlify.com">Netlify</a>, lub{" "}
                  <a href="https://vercel.com">Vercel</a>. Hostingi czy VPS'y to
                  dodatkowy koszt, który w przypadku statycznej strony
                  internetowej można wydać na coś innego.
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Szybka realizacja</h2>

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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="text">
                <p>
                  Strony JAMstack wykonuje się szybciej niż "normalne" strony
                  internetowe przez gotowe frameworki (szkielety stron), do
                  których wystarczy jedynie dopasować grafikę.
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Bezpieczeństwo</h2>

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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div className="text">
                <p>
                  Statyczne strony są mniej narażone na ataki hakerów, ponieważ
                  nie wykonujemy żadnych operacji po stronie serwera, do których
                  potencjalny haker mógłby się włamać.
                </p>
              </div>
            </div>

            <div className="split">
              <h2>Dla kogo?</h2>
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text">
                <p>
                  Polecam JAMstack dla małych oraz średnich firm, które
                  potrzebują stabilnej, bezpiecznej oraz szybkiej strony
                  internetowej. Idealnym rozwiązaniem jest strona typu{" "}
                  <strong>wizytówka</strong>, z opcją "aktualności / bloga".
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

export default StronyInternetoweJAMstack
