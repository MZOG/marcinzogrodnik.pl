import React from "react"
import {Link} from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-info-item">
            <ul>
              <li><Link to="/oferta">Oferta</Link></li>
              <li><Link to="/realizacje">Realizacje</Link></li>
              <li><Link to="/o-mnie">O mnie</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
              <li><Link to="/darmowa-wycena-strony">Wycena strony internetowej</Link></li>
            </ul>
          </div>
          <div className="footer-info-item">
            <p><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> <a href="tel:+48739907919">739 907 919</a></p>
            <p><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><a href="mailto:kontakt@marcinzogrodnik.pl">kontakt@marcinzogrodnik.pl</a></p>

          </div>
          <div className="footer-info-item">
            <ul className="links">
              <li><Link to="/regulamin">Regulamin</Link></li>
              <li><Link to="/prywatnosc">Polityka Prywatności</Link></li>
            </ul>

          </div>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()}&nbsp;<Link to="/">marcinzogrodnik.pl</Link></p>
      </div>
    </footer>
  )
}

export default Footer
