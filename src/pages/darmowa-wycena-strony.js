import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/PageTitle"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
const DarmowaWycenaStrony = () => {
  const indexQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wycena-strony-fb.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Darmowa wycena strony"
        description="Darmowa wycena strony internetowej? Ile kosztuje strona internetowa? Wypełnij formularz i dowiedz się wszystkiego już następnego dnia!"
        shareImage={indexQuote.file.childImageSharp.fluid.src}
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
                  <label htmlFor="email">E-mail</label>
                  <input type="text" name="email" />
                </div>
              </div>

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="company">Nazwa firmy *</label>
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
                      value="website_www"
                      id="website_www"
                      checked="checked"
                    />
                    <label for="website_www">Strona internetowa</label>
                    <input
                      type="radio"
                      name="website"
                      value="website_shop"
                      id="website_shop"
                    />
                    <label for="website_shop">Sklep internetowy</label>
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
                  <div className="toggle">
                    <input
                      type="radio"
                      name="cms"
                      value="cms_yes"
                      id="cms_yes"
                      checked="checked"
                    />
                    <label for="cms_yes">Tak</label>
                    <input type="radio" name="cms" value="cms_no" id="cms_no" />
                    <label for="cms_no">Nie</label>
                  </div>
                </div>

                <div className="page_contact-form-row-item">
                  <label htmlFor="phone">Chcę określić budżet</label>
                  <input type="text" name="phone" />
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
                      checked="checked"
                    />
                    <label for="languages_yes">Tak</label>
                    <input
                      type="radio"
                      name="languages"
                      value="languages_no"
                      id="languages_no"
                    />
                    <label for="languages_no">Nie</label>
                  </div>
                </div>

                <div className="page_contact-form-row-item">
                  <label htmlFor="current_website">Aktualny adres strony</label>
                  <input type="text" name="current_website" />
                </div>
              </div>

              <div className="page_contact-form-row">
                <div className="page_contact-form-row-item">
                  <label htmlFor="links">
                    Linki do stron, które Ci się podobają
                  </label>
                  <input type="text" name="links1" />
                  <input type="text" name="links2" />
                </div>
              </div>

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
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DarmowaWycenaStrony
