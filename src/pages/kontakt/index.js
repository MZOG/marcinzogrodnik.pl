/* eslint-disable */

import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"

const Kontakt = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Pogadajmy o nowym projekcie! Zadzwoń 739 907 919 lub napisz kontakt@marcinzogrodnik.pl"
      />
      <section className="contact">
        <div className="container">
          <PageHero
            hero="Kontakt"
            lead="Jesteś zainteresowany ofertą, lub masz inny ciekawy pomysł? Zadzwoń lub napisz."
          />
          <div className="contact-content">
            <div className="contact-text">
              <p className="lead">
                Telefon:
              </p>
              <a href="tel:739907919">739 907 919</a>

              <p className="lead">E-mail:</p>
              <a href="mailto:kontakt@marcinzogrodnik.pl">kontakt@marcinzogrodnik.pl</a>

              <p className="lead">Wyślij wiadomość na facebooku:</p>
              <a href="https://www.facebook.com/messages/t/marcinzogrodnik1993" target="_blank">Otwórz messanger</a>

            </div>
            <div className="contact-form">
              <form name="Marcin_Zogrodnik_Kontakt" method="POST" data-netlify="true" action="/kontakt/success">
               <input type="hidden" name="form-name" value="Marcin_Zogrodnik_Kontakt" />
                <div className="contact-form-item">
                  <label htmlFor="name">Imię</label>
                  <input type="text" name="name" placeholder="Marcin "/>
                </div>

                <div className="contact-form-item">
                  <label htmlFor="email">E-mail lub numer telefonu</label>
                  <input type="text" name="email" placeholder="marcin@zogrodnik.pl lub 739907919"/>
                </div>

                <div className="contact-form-item">
                  <label htmlFor="message">Wiadomość</label>
                  <textarea name="message"></textarea>
                </div>

                <button>Wyślij</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Kontakt
