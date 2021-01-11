import React from "react"
import Hosting from "../../images/hosting.svg"
import Optymalizacja from "../../images/optymalizacja.svg"
import Grafika from "../../images/grafika.svg"
import Pozycjonowanie from "../../images/seo.svg"

function OfferMore() {
  return(
    <section className="homepage homepage_offer_more">
      <div className="container">
        <h2>Szukasz czegoś innego?</h2>
        <p className="lead">
          Nie każdy szuka nowych rozwiązań, doskonale zdaję sobię z tego sprawę.
          <span>
          Pomogę Ci w wyborze odpowiedniego hostingu, optymalizacji strony czy implementacji nowych funkcjonalności.
          </span>
        </p>

        <div className="offer-boxes">
          <div className="offer-box">
            <div className="offer-box-image">
              <img src={Hosting} alt="Hosting stron internetowych WordPress & JAMstack"/>
            </div>
            <div className="offer-box-content">
              <h3>Hosting stron internetowych</h3>
              <p>
                Oferuję pomoc w wyborze odpowiedniego hostingu
                dla Twojej strony internetowej. Sprawdzam ruch strony
                ilość miesięcznego transferu danych, oraz dobieram
                odpowiednie rozwiązanie.
              </p>
            </div>
          </div>

          <div className="offer-box">
            <div className="offer-box-image">
            <img src={Optymalizacja} alt="Optymalizacja stron internetowych WordPress & JAMstack"/>
            </div>
            <div className="offer-box-content">
              <h3>Optymalizacja stron internetowych</h3>
              <p>
                Sprawdzam kondycję strony internetowej, wykonuję
                odpowiednie testy oraz audyty, aby sprawdzić, gdzie
                leży problem. Optymalizuję kod, aby strona internetowa
                ładowała się szybciej niż dotychczas.
              </p>
            </div>
          </div>

          <div className="offer-box">
            <div className="offer-box-image">
            <img src={Grafika} alt="Projekty graficzne stron internetowych WordPress & JAMstack"/>
            </div>
            <div className="offer-box-content">
              <h3>Projekty graficzne stron internetowych</h3>
              <p>
                Twoja strona internetowa odbiega od dzisiejszych norm?
                Stworzę nowy, modernistyczny projekt graficzny Twojej
                nowej strony internetowej według Twoich wskazówek.
                Wyróżnij się nowoczesnym wyglądem strony, zagramy
                Va Banque i to Twoja strona wygra.
              </p>
            </div>
          </div>

          <div className="offer-box">
            <div className="offer-box-image">
            <img src={Pozycjonowanie} alt="Pozycjonowanie stron internetowych WordPress & JAMstack"/>
            </div>
            <div className="offer-box-content">
              <h3>Pozycjonowanie stron internetowych</h3>
              <p>
                Częstym błędem braku wysokiej pozycji w Google
                jest nieodpowiednia struktura strony internetowej.
                Modernizacja kodu strony, zadbanie o odpowiednie
                nagłówki czy opisy stron pomogą zdobyć lepsze
                wyniki pozycjonowania.
              </p>
            </div>
          </div>
        </div>

        <div className="homepage_offer_more_cta">
          <a href="#">
            Zobacz więcej
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OfferMore