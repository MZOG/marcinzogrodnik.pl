import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
const DarmowaWycenaStrony = () => {
  const indexQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wycena-strony-fb.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Darmowa wycena strony"
        description="Darmowa wycena strony internetowej? Ile kosztuje strona internetowa? Wypełnij formularz i dowiedz się wszystkiego już następnego dnia!"
        shareImage={indexQuote.file.publicURL}
      />

      <section className="page page_contact">
        <div className="container">
          <PageTitle
            title="Darmowa wycena strony internetowej"
            lead="Jesteś ciekaw jaki jest koszt strony internetowej? Wypełnij formularz i dowiedz się wszystkiego już następnego dnia"
          />

          <div className="page_contact-wrapper">
            <form
              className="page_contact-form"
              name="Wycena Strony Internetowej"
              method="POST"
              data-netlify="true"
              action="/kontakt/success"
            >
              <input
                type="hidden"
                name="form-name"
                value="Wycena Strony Internetowej"
              />

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="name">Imię i nazwisko *</label>
                  <input type="text" name="name" />
                </div>
                <div className="page_contact-form-row-item">
                  <label htmlFor="email">E-mail *</label>
                  <input type="text" name="email" />
                </div>
              </div>

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="company">Nazwa firmy (Jeśli posiadasz)</label>
                  <input type="text" name="company" />
                </div>

                <div className="page_contact-form-row-item">
                  <label htmlFor="phone">Numer telefonu *</label>
                  <input type="text" name="phone" />
                </div>
              </div>

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="company">Typ strony</label>
                  <div className="toggle">
                    <input
                      type="radio"
                      name="website"
                      value="STRONA INTERNETOWA"
                      id="website_www"
                      defaultChecked
                    />
                    <label htmlFor="website_www">Strona internetowa</label>
                    <input
                      type="radio"
                      name="website"
                      value="SKLEP"
                      id="website_shop"
                    />
                    <label htmlFor="website_shop">Sklep internetowy</label>
                  </div>
                </div>

                <div className="page_contact-form-row-item">
                  <label htmlFor="phone">
                    Ilość zakładek (o nas, blog, usługi, kontakt)
                  </label>
                  <input type="text" name="phone" />
                </div>
              </div>

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="company">CMS?</label>
                  <small>
                    System zarządzania treścią (WordPress, Headless CMS)
                  </small>
                  <div className="toggle">
                    <input
                      type="radio"
                      name="cms"
                      value="TAK"
                      id="cms_yes"
                      defaultChecked
                    />
                    <label htmlFor="cms_yes">Tak</label>
                    <input type="radio" name="cms" value="NIE" id="cms_no" />
                    <label htmlFor="cms_no">Nie</label>
                  </div>
                </div>

                <div className="page_contact-form-row-item">
                  <label htmlFor="current_website">Aktualny adres strony</label>
                  <input type="text" name="current_website" />
                </div>
              </div>

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="company">Dodatkowe wersje językowe</label>
                  <div className="toggle">
                    <input
                      type="radio"
                      name="languages"
                      value="languages_yes"
                      id="languages_yes"
                      defaultChecked
                    />
                    <label htmlFor="languages_yes">Tak</label>
                    <input
                      type="radio"
                      name="languages"
                      value="languages_no"
                      id="languages_no"
                    />
                    <label htmlFor="languages_no">Nie</label>
                  </div>
                </div>
                <div className="page_contact-form-row-item">
                  <label htmlFor="links">
                    Linki do stron, które Ci się podobają
                  </label>
                  <input type="text" name="links1" />
                  <input type="text" name="links2" />
                </div>
              </div>

              <div className="page_contact-form-row"></div>

              <div className="page_contact-form-row-item message">
                <label htmlFor="message">
                  Dodatkowe informacje (podaj możliwie jak najwięcej informacji)
                </label>
                <textarea name="message"></textarea>
              </div>

              <div className="page_contact-form-submit">
                <input type="submit" value="Wyślij" />
              </div>
            </form>

            <p className="small-print">Pola oznaczone * są obowiązkowe.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DarmowaWycenaStrony
