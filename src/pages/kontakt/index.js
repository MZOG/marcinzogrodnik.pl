/* eslint-disable */

import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Kontakt = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Masz pomysł na nową stronę internetową? A może chciałbyś lekko zmodyfikować swoją obecną stronę?
        Zadzwoń lub wyślij wiadomość."
      />
      <section className="page page_contact">
        <div className="container">
          <h1>Kontakt</h1>
          <p className="lead">
            Pracuję zdalnie, obecnie mieszkam w Lędzinach (woj. Śląskie). Masz pytanie? Zadzwoń lub napisz wiadomość.
          </p>

          <div className="page_contact-wrapper">
            <div className="page_contact-info">
              <div className="item">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>

                <a href="tel:739907919">739 907 919</a>
              </div>

              <div className="item">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>

                <a href="mailto:kontakt@marcinzogrodnik.pl">kontakt@marcinzogrodnik.pl</a>
              </div>
            </div>

            <div className="page_contact__content">
              <form
                className="page_contact-form"
                name="Marcin_Zogrodnik_Kontakt"
                method="POST"
                data-netlify="true"
                action="/kontakt/success"
                >
                <input type="hidden" name="form-name" value="Marcin_Zogrodnik_Kontakt" />

                <div className="page_contact-form-header">
                  <div className="page_contact-form-item">
                    <label htmlFor="name">Imię</label>
                    <input type="text" name="name" placeholder="Marcin " />
                  </div>

                  <div className="page_contact-form-item">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="adres.email@gmail.com"
                    />
                  </div>
                </div>

                <div className="page_contact-form-item message">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea name="message"></textarea>
                </div>

                <div className="page_contact-form-submit">
                  <input type="submit" value="Wyślij"/>
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
