import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {Link} from "gatsby"

const Oferta = () => (
  <Layout>
    <SEO
      title="Oferta"
      description="Pogadajmy o nowym projekcie! Zadzwoń 739 907 919 lub napisz kontakt@marcinzogrodnik.pl"
    />
    <section className="offer page">
      <div className="container">
        <h1>Oferta</h1>

        <div className="page__container">
          <article className="page__container-item">
            <h2>Strona internetowa WordPress</h2>
            <p>Najpopularniejszy system zarządzania treścią WordPress, który jest wykorzystywany przez największe firmy na świecie. Poznaj ofertę stron oraz sklepów Wordpress.</p>

            <div className="page__container-item-cta">
              <Link className="btn secondary" to="/oferta/strony-internetowe-wordpress/">Dowiedz się więcej</Link>
            </div>
          </article>

          <article className="page__container-item">
            <h2>Strona internetowa JAMstack</h2>
            <p>Statyczna strona internetowa to przede wszystkim szybkość, która zostawi w tle konkurencję. Zobacz jakie korzyści oferuje strona wykonana za pomocą Gatsby.</p>

            <div className="page__container-item-cta">
              <Link className="btn secondary" to="/oferta/strony-internetowe-jamstack/">Dowiedz się więcej</Link>
            </div>
          </article>

          <article className="page__container-item">
            <h2>Opieka nad stroną</h2>
            <p>Statyczna strona internetowa to przede wszystkim szybkość, która zostawi w tle konkurencję. Zobacz jakie korzyści oferuje strona wykonana za pomocą Gatsby.</p>

            <div className="page__container-item-cta">
              <Link className="btn secondary" to="/oferta/strony-internetowe-jamstack/">Dowiedz się więcej</Link>
            </div>
          </article>

          <article className="page__container-item">
            <h2>Mentoring</h2>
            <p>
              Uczysz się tworzyć strony internetowe, lub prowadzisz stronę firmową / blog?
              Chętnie odpowiem na każde pytanie związane z <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>WordPress</strong>, <strong>JAMstack</strong> oraz <strong>React</strong>.
            </p>

            <div className="page__container-item-cta">
              <Link className="btn secondary" to="/oferta/strony-internetowe-jamstack/">Dowiedz się więcej</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
)

export default Oferta
