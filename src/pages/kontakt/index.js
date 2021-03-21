/* eslint-disable */

import React from "react"
import Layout from "../../components/layout"
import PageTitle from "../../components/PageTitle"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const Kontakt = () => {
  const contactQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "kontakt-fb.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Masz pomysł na nową stronę internetową? A może chciałbyś lekko zmodyfikować swoją obecną stronę?
        Zadzwoń lub wyślij wiadomość."
        shareImage={contactQuote.file.publicURL}
      />

      <section className="page page_contact">
        <div className="container">
          <PageTitle
            title="Kontakt"
            lead="Pracuję zdalnie, obecnie mieszkam w Lędzinach (woj. Śląskie). Masz
            pytanie? Zadzwoń lub napisz wiadomość."
          />

          <div className="page_contact-wrapper">
            <h2>Marcin Zogrodnik - Strony internetowe</h2>
            <div className="page_contact-info">
              <div className="item">
                <p>Marcin Zogrodnik</p>
                <p>Ul. Ułańska 66</p>
                <p>43-143 Lędziny</p>
              </div>

              <div className="item">
                <a href="tel:739907919">
                  Telefon: <span>+48 739 907 919</span>
                </a>
                <a href="mailto:kontakt@marcinzogrodnik.pl">
                  E-mail: <span>kontakt@marcinzogrodnik.pl</span>
                </a>
                <a href="https://marcinzogrodnik.pl">
                  WWW: <span>marcinzogrodnik.pl</span>
                </a>

                <p>NIP: 6462985329</p>
              </div>
            </div>

            <h2>Wyślij wiadomość</h2>
            <div className="page_contact__content">
              <form
                className="page_contact-form"
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

                <div className="page_contact-form-row">
                  <div className="page_contact-form-row-item">
                    <label htmlFor="name">Imię i nazwisko *</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="page_contact-form-row-item">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" />
                  </div>
                </div>

                <div className="page_contact-form-row">
                  <div className="page_contact-form-row-item">
                    <label htmlFor="company">Nazwa firmy</label>
                    <input type="text" name="company" />
                  </div>

                  <div className="page_contact-form-row-item">
                    <label htmlFor="phone">Numer telefonu</label>
                    <input type="text" name="phone" />
                  </div>
                </div>

                <div className="page_contact-form-row-item message">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea name="message"></textarea>
                </div>

                <div className="page_contact-form-submit">
                  <input type="submit" value="Wyślij" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Kontakt
