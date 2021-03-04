import React from "react"
import { Link } from "gatsby";

function Brief() {
  return (
    <section className="home_brief">
      <div className="container">
        <div className="home_brief-item">
          <h2>Wycena strony internetowej</h2>
          <p>Wypełnij formularz, a ja wycenię Twoją nową stronę internetową w ciągu 24 godzin.</p>
          <div className="home_brief-item-cta">
            <Link to="/darmowa-wycena-strony">
              Wypełnij formularz
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brief;