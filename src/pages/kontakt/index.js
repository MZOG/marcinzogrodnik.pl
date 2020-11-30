/* eslint-disable */

import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Kontakt = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Pogadajmy o nowym projekcie! Zadzwoń 739 907 919 lub napisz kontakt@marcinzogrodnik.pl"
      />
      <section className="contact">
        <div className="container page">
          <h1>Kontakt</h1>

          <div className="contact__content">
            <div className="contact__content-text">
              <p>
                Jesteś zainteresowany ofertą, lub masz inny ciekawy pomysł?
                Zadzwoń lub napisz.
              </p>

              <div className="contact__content-text-info">
                <p>Zadzwoń</p>
                <p>
                  <a href="tel:+48793907919">793 907 919</a>
                </p>

                <p>Wyślij E-mail</p>
                <p>
                  <a href="mailto:kontakt@marcinzogrodnik.pl">
                    kontakt@marcinzogrodnik.pl
                  </a>
                </p>
              </div>
            </div>

            <form
              name="Marcin_Zogrodnik_Kontakt"
              method="POST"
              data-netlify="true"
              action="/kontakt/success"
            >
              <input
                type="hidden"
                name="form-name"
                value="Marcin_Zogrodnik_Kontakt"
              />
              <div className="contact-form-item">
                <label htmlFor="name">Imię</label>
                <input type="text" name="name" placeholder="Marcin " />
              </div>

              <div className="contact-form-item">
                <label htmlFor="email">E-mail lub numer telefonu</label>
                <input
                  type="text"
                  name="email"
                  placeholder="marcin@zogrodnik.pl lub 739907919"
                />
              </div>

              <div className="contact-form-item">
                <label htmlFor="message">Wiadomość</label>
                <textarea name="message"></textarea>
              </div>

              <button className="btn secondary">Wyślij</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Kontakt
