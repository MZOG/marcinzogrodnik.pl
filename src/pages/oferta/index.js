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
    <section className="offer page">
      <div className="container">
        <h1>Oferta</h1>

        <div className="offer_boxes">
          <article className="offer_boxes-item">
            <h2>Strona internetowa WordPress</h2>
            <p>Najpopularniejszy system zarządzania treścią WordPress, który jest wykorzystywany przez największe firmy na świecie. Poznaj ofertę stron oraz sklepów Wordpress.</p>

            <div className="offer_boxes-item-cta">
              <Link className="btn secondary" to="/oferta/strony-internetowe-wordpress">
                Dowiedz się więcej
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="offer_boxes-item">
            <h2>Strona internetowa JAMstack</h2>
            <p>Statyczna strona internetowa to przede wszystkim szybkość, która zostawi w tle konkurencję. Zobacz jakie korzyści oferuje strona wykonana za pomocą Gatsby.</p>

            <div className="offer_boxes-item-cta">
              <Link className="btn secondary" to="/oferta/strony-internetowe-jamstack">
                Dowiedz się więcej
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="offer_boxes-item">
            <h2>Sklepy internetowe</h2>
            <p>
              Pomagam w stworzeniu oraz ustawieniu sklepów internetowych dla Twoich potrzeb.
              Korzystam z gotowych rozwiązań, czyli WooCommerce dla WordPress'a, jak i również
              BigCommerce czy Shopify.
            </p>

            <div className="offer_boxes-item-cta">
              <Link className="btn secondary" to="/oferta/sklepy-internetowe">
                Dowiedz się więcej
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="offer_boxes-item">
            <h2>Opieka nad stroną</h2>
            <p>Statyczna strona internetowa to przede wszystkim szybkość, która zostawi w tle konkurencję. Zobacz jakie korzyści oferuje strona wykonana za pomocą Gatsby.</p>

            <div className="offer_boxes-item-cta">
              <Link className="btn secondary" to="/oferta/opieka-nad-strona">
                Dowiedz się więcej
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </article>

          <article className="offer_boxes-item">
            <h2>Mentoring</h2>
            <p>
              Uczysz się tworzyć strony internetowe, lub prowadzisz stronę firmową / blog?
              Chętnie odpowiem na każde pytanie związane z <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>WordPress</strong>, <strong>JAMstack</strong> oraz <strong>React</strong>.
            </p>

            <div className="offer_boxes-item-cta">
              <Link className="btn secondary" to="/oferta/mentoring">
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
