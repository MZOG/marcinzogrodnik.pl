import React from "react"
import { Link } from "gatsby"

const CTA = ({line1, line2}) => {
  return(
    <aside className="page_cta">
      <div className="container">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>

        <h2>Zainteresowany?</h2>
        <p>
          { line1 }
          {line2 && <span>{ line2 }</span> }
        </p>

        <div className="page_cta-more">
          <Link to="/kontakt">Zróbmy to!</Link>
        </div>
      </div>
    </aside>
  )
}

export default CTA