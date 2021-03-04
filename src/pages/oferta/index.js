import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {Link} from "gatsby"

const Oferta = () => (
  <Layout>
    <SEO
      title="Oferta"
      description="Poznaj ofertę stron internetowych WordPress oraz JAMstack. Uczysz się programować i masz problem? Napisz do mnie! Na pewno rozwiążemy Twój problem."
    />
    <section className="page page_offer">
      <div className="container">

        <h1>Oferta</h1>
        <p className="lead">
          Tworzę strony oraz sklepy internetowe WordPress & JAMstack. Poniżej znajdziesz całą listę wraz z opisem.
        </p>

        <div className="page_offer_boxes">
          <article className="page_offer_item">
            <h2>Strony internetowe WordPress</h2>
            <p>Łatwa w zarządzaniu strona internetowa WordPress dla Twojej firmy.</p>

            <div className="page_offer_item-cta">
              <Link to="/oferta/strony-internetowe-wordpress">
                Więcej informacji
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="page_offer_item">
            <h2>Strony internetowe JAMstack</h2>
            <p>Statyczne strony internetowe to przede wszystkim szybkość, która zostawi w tle konkurencję.</p>

            <div className="page_offer_item-cta">
              <Link to="/oferta/strony-internetowe-jamstack">
                Więcej informacji
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="page_offer_item">
            <h2>Sklepy internetowe</h2>
            <p>
              Tworzę sklepy internetowe WooCommerce, BigCommerce oraz Shopify.
            </p>

            <div className="page_offer_item-cta">
              <Link to="/oferta/sklepy-internetowe">
                Więcej informacji
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="page_offer_item">
            <h2>Optymalizacja</h2>
            <p>Statyczna strona internetowa Gatsby lub Next.js z panelem administracyjnym, oraz darmowym hostingiem Netlify.</p>

            <div className="page_offer_item-cta">
              <Link to="/oferta/optymalizacja-strony-internetowej">
                Więcej informacji
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="page_offer_item">
            <h2>Pozycjonowanie</h2>
            <p>Statyczna strona internetowa Gatsby lub Next.js z panelem administracyjnym, oraz darmowym hostingiem Netlify.</p>

            <div className="page_offer_item-cta">
              <Link to="/oferta/pozycjonowanie-seo">
                Więcej informacji
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="page_offer_item">
            <h2>Opieka nad stroną</h2>
            <p>Nie masz czasu zajmować się swoją stroną internetową? Zapewniam opiekę nad stroną pod względem technicznym oraz wizualnym.</p>

            <div className="page_offer_item-cta">
              <Link to="/oferta/opieka-nad-strona">
                Dowiedz się więcej
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>
        </div>


      </div>
    </section>
  </Layout>
)

export default Oferta
