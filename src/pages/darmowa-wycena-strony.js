import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DarmowaWycenaStrony = () => {
  return (
    <Layout>
      <SEO
        title="Darmowa wycena strony"
        description="Darmowa wycena strony internetowej? Ile kosztuje strona internetowa? Wypełnij formularz i dowiedz się wszystkiego już następnego dnia!"
      />

      <section className="page page_brief">
        <div className="container">
          <h1>Darmowa wycena strony internetowej</h1>
          <p className="lead">
            Jesteś ciekaw jaki jest koszt strony internetowej? Wypełnij formularz i dowiedz się wszystkiego już następnego dnia
          </p>

          {/* <p>
            Aby dobrze wycenić stronę internetową potrzebne są informacje. Poniżej znajdziesz formularz, wypełnij go podając możliwie jak najwięcej informacji.
          </p> */}

          <form
              className="page_brief-form"
              name="Wycena Strony Internetowej"
              method="POST"
              data-netlify="true"
              action="/kontakt/success"
              >
              <input type="hidden" name="form-name" value="Wycena Strony Internetowej" />

              {/* <div className="page_brief-form-item">
                <label>Czym jesteś zainteresowany?</label>

                <div className="checkbox">
                  <input className="inp-cbx" id="strona-internetowa" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="strona-internetowa">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Strona internetowa</span>
                  </label>
                </div>

                <div className="checkbox">
                  <input className="inp-cbx" id="sklep-internetowy" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="sklep-internetowy">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Sklep internetowy</span>
                  </label>
                </div>

                <div className="checkbox">
                  <input className="inp-cbx" id="optymalizacja" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="optymalizacja">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Optymalizacja istniejącej strony</span>
                  </label>
                </div>
              </div>

              <div className="page_brief-form-item">
                <label>System CMS?</label>
                <p>
                  Panel administracyjny do zarządzania treścią na stronie internetowej
                </p>

                <div className="checkbox">
                  <input className="inp-cbx" id="cms-tak" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="cms-tak">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Tak</span>
                  </label>
                </div>

                <div className="checkbox">
                  <input className="inp-cbx" id="cms-nie" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="cms-nie">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Nie</span>
                  </label>
                </div>
              </div>

              <div className="page_brief-form-item">
                <label>Orientacyjna liczba zakładek</label>

                <div className="checkbox">
                  <input className="inp-cbx" id="zakladki-0-5" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="zakladki-0-5">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>0 - 5</span>
                  </label>
                </div>

                <div className="checkbox">
                  <input className="inp-cbx" id="zakladki-5-10" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="zakladki-5-10">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>5 - 10</span>
                  </label>
                </div>

                <div className="checkbox">
                  <input className="inp-cbx" id="zakladki-10-more" type="checkbox" style={{display: "none"}}/>
                  <label className="cbx" htmlFor="zakladki-10-more">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>+ 10</span>
                  </label>
                </div>
              </div> */}

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

              <div className="page_contact-form-item">
                <label htmlFor="message">Wiadomość</label>
                <textarea name="message"></textarea>
              </div>

              <div className="page_contact-form-submit">
                <input type="submit" value="Wyślij"/>
              </div>
            </form>

        </div>
      </section>
    </Layout>
  )
}

export default DarmowaWycenaStrony
