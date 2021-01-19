import React from "react"
import WordPress from "../../images/wp.svg"
import JAMstack from "../../images/jam.svg"
import { Link } from "gatsby";

function Offer() {
  return(
    <section id="offer" className="homepage homepage_offer">
      <div className="container">
        <h2>WordPress czy JAMstack?</h2>
        <p className="lead">
          Dobrze dobrana technologia strony internetowej to klucz do sukcesu.
          <span>Pomogę Ci w wyborze odpowiedniego oprogramowania.</span>
        </p>
        <div className="homepage_offer_box wp">
          <img src={WordPress} alt="Strony internetowe WordPress"/>
          <p>
            WordPress to popularny system zarządzania treścią.
            Jeżeli cenisz sobie niezależność oraz kontrolę
            nad stroną, to WordPress jest dla Ciebie.
            Ponad to WordPress świetnie współpracuje z
            eCommerce poprzez wtyczkę WooCommerce.
          </p>
          <div className="homepage_offer_box_cta">
            <Link to="/oferta/strony-internetowe-wordpress/">
              Więcej o WordPress
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>

        <div className="homepage_offer_box jam">
          <img src={JAMstack} alt="Strony internetowe JAMstack"/>
          <p>
            JAMstack to sposób tworzenia statycznych stron
            internetowych. Strony JAMstack są szybsze,
            ponieważ są to zwykłe pliki HTML, CSS oraz JS,
            jak za starych dobrych czasów. Idealne dla stron
            typu wizytówka bez częstych zmian w treści.
          </p>
          <div className="homepage_offer_box_cta">
          <Link to="/oferta/strony-internetowe-jamstack/">
              Więcej o JAMstack
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer;