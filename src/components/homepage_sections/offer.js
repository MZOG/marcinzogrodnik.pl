import React from "react"
import { Link } from "gatsby"

function Offer() {
  return (
    <section id="offer" className="home_offer">
      <div className="container">
        <h2>Oferta</h2>
        <p className="lead">Sprawdź w jakich obszarach możesz na mnie liczyć</p>

        <div className="home_offer-boxes">
          <div className="home_offer_box">
            <h3>Strony internetowe WordPress</h3>
            <p>
              WordPress to popularny system zarządzania treścią. Jeżeli cenisz
              sobie niezależność oraz kontrolę nad stroną, to WordPress jest dla
              Ciebie. Ponad to WordPress świetnie współpracuje z eCommerce
              poprzez wtyczkę WooCommerce.
            </p>
            <div className="home_offer_box-cta">
              <Link to="/oferta/strony-internetowe-wordpress/">
                Więcej informacji
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="home_offer_box">
            <h3>Strony internetowe JAMstack</h3>
            <p>
              JAMstack to sposób tworzenia statycznych stron internetowych.
              Strony JAMstack są szybsze, ponieważ są to zwykłe pliki HTML, CSS
              oraz JS, jak za starych dobrych czasów. Idealne dla stron typu
              wizytówka bez częstych zmian w treści.
            </p>
            <div className="home_offer_box-cta">
              <Link to="/oferta/strony-internetowe-jamstack/">
                Więcej informacji
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="home_offer_box">
            <h3>Sklepy internetowe</h3>
            <p>
              JAMstack to sposób tworzenia statycznych stron internetowych.
              Strony JAMstack są szybsze, ponieważ są to zwykłe pliki HTML, CSS
              oraz JS, jak za starych dobrych czasów. Idealne dla stron typu
              wizytówka bez częstych zmian w treści.
            </p>
            <div className="home_offer_box-cta">
              <Link to="/oferta/strony-internetowe-jamstack/">
                Więcej informacji
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
