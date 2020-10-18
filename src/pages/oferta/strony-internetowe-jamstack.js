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

            <h2>Szybkość</h2>
            <p>
              To, co wyróżnia statyczne strony <strong>JAMstack</strong>, to
              przede wszystkim szybkość działania strony. Strona{" "}
              <Link to="/">marcinzogrodnik.pl</Link> została wykonana właśnie tą
              metodą, co można stwierdzić właśnie po szybkości oraz wydajności.
            </p>

            <p>
              Dzieje się tak z kilku powodów, po pierwsze nie wysyłane są żadne
              zapytania do bazy danych, zapytania te mogą znacznie spowolnić
              czas ładowania strony. Zauważysz to w 80% przypadków stron
              internetowych.
            </p>

            <p>
              Optymalizacja kodu również przyczynia się do szybkości strony.
              Użytkownik dostaje tylko pliki{" "}
              <strong>HTML, CSS oraz JavaScript.</strong>
            </p>

            <h2>Bazy danych</h2>

            <p>
              Zaraz, zaraz.. ale co z danymi, co w przypadku, gdy chcę prowadzić
              firmowego bloga, lub dodać realizacje projektów? Tutaj do gry
              wchodzi <strong>API</strong>, które jest odpowiedzialne za
              pobieranie danych. W zależności jak skonfigurowana jest strona,
              dane mogą pochodzić z bazy danych lub np. GitHub'a.
            </p>

            <p>
              Przewagą używania API jest to, że wszystkie dane pobierane są w
              tle, przez co statyczne elementy takie jak nagłówki czy szkielet
              HTML zawsze ładuje się w pierwszej kolejności, tak, aby użytkownik
              zobaczył, że od razu coś się dzieje na naszej stronie
              internetowej.
            </p>

            <p>
              Zobacz stronę <Link to="/blog/">blog</Link>, przyjżyj się obrazkom
              dla każdego posta. Obrazki jak i tekst są pobierane właśnie dzięki
              API. Tekst jest dużo lżejszy od obrazka, więc widzisz go
              natychmiast, obrazki mają lekkie opóźnienie, dzieje się tak
              dlatego, że potrzebują troszkę więcej czasu, aby się załadować.
            </p>

            <p>
              <strong>Uwaga!</strong> dalej mówimy o statycznej stronie
              internetowej, z tą różnicą, że teraz jesteśmy w stanie w bardzo
              łatwy sposób zarządzać treścią na naszej stronie, poprzez rozmaite
              panele zarządzania treścią, które są bardzo łatwe w obsłudze.
            </p>

            <h2>Koszt utrzymania</h2>
            <p>
              Statyczna strona nie potrzebuje dedykowanego serwera lub hostingu.
              Dla prywatnych jak i biznesowych celów używam darmowego
              rozwiązania jakim jest <a href="https://netlify.com">Netlify</a>,
              lub <a href="https://vercel.com">Vercel</a>. Hostingi czy VPS'y to
              dodatkowy koszt, który w przypadku statycznej strony internetowej
              można wydać na coś innego.
            </p>

            <h2>Szybka realizacja</h2>
            <p>
              Strony JAMstack wykonuje się szybciej niż "normalne" strony
              internetowe przez gotowe frameworki (szkielety stron), do których
              wystarczy jedynie dopasować grafikę.
            </p>

            <h2>Bezpieczeństwo</h2>
            <p>
              Statyczne strony są mniej narażone na ataki hakerów, ponieważ
              nie wykonujemy żadnych operacji po stronie serwera, do których
              potencjalny haker mógłby się włamać.
            </p>

            <h2>Dla kogo?</h2>
            <p>
              Polecam JAMstack dla małych oraz średnich firm, które potrzebują
              stabilnej, bezpiecznej oraz szybkiej strony internetowej.
              Idealnym rozwiązaniem jest strona typu <strong>wizytówka</strong>,
              z opcją "aktualności / bloga".
            </p>
          </div>

          <QuickContact />
        </div>
      </section>
    </Layout>
  )
}

export default StronyInternetoweJAMstack
