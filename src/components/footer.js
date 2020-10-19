import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="logo">
            <div className="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 393">
                <g transform="translate(-4 -4)">
                  <rect
                    width="393"
                    height="393"
                    rx="50"
                    transform="translate(4 4)"
                    fill="#fb3c54"
                  />
                  <path
                    d="M278.95,2.1c11.2,0,24.15-3.15,28.7-15.05v-7.7c-10.15,4.2-14.7-3.5-14.7-15.05V-97.3c0-54.95-25.55-65.1-49.35-65.1-17.15,0-30.8,3.85-46.9,21.7-3.5,3.85-10.5,2.1-14.35-3.85-10.15-15.4-28-17.85-39.9-17.85-23.1,0-37.1,11.2-46.9,21.7-4.2,5.25-12.25,3.5-12.25-8.4,0-7.7-5.6-12.95-17.5-11.2L8.75-150.85v13.3c12.95-1.05,22.05,1.75,22.05,18.2v80.5c0,18.9-5.95,24.15-22.4,25.2V0h95.2V-13.65c-14.35-1.05-20.3-6.3-20.3-25.2V-93.1c0-21.35,9.45-38.15,27.3-38.15,16.45,0,25.2,16.8,25.2,38.15v54.25c0,18.9-5.95,24.15-21,25.2V0h96.25V-13.65c-16.8-1.05-22.75-6.3-22.75-25.2V-93.1c0-21.35,9.1-38.15,26.95-38.15,16.8,0,25.2,16.8,25.2,38.15v56.7C240.45-10.5,256.9,2.1,278.95,2.1Z"
                    transform="translate(47 283)"
                    fill="#fafafa"
                  />
                </g>
              </svg>
            </div>
            <Link to="/">
              marcin<span>zogrodnik</span>
            </Link>
          </div>
          <p className="lead">Tworzę szybkie i bezpieczne strony internetowe.</p>
        </div>
        <div className="footer-box">
          <p className="bold">Zobacz również</p>
          <ul>
            <li>
              <Link to="/o-mnie">O mnie</Link>
            </li>
            <li>
              <Link to="/oferta">Oferta</Link>
            </li>
            <li>
              <Link to="/realizacje">Realizacje</Link>
            </li>
            <li>
              <Link to="/opinie">Opinie</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>

        <div className="footer-box">
        <p className="bold">Oferta</p>
          <ul>
            <li>
              <Link to="/oferta/strony-internetowe-wordpress">Strony internetowe WordPress</Link>
            </li>
            <li>
              <Link to="/oferta/strony-internetowe-jamstack">Strony internetowe JAMstack</Link>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <p className="bold">Inne</p>

          <ul>
            <li><Link to="/regulamin">Regulamin</Link></li>
            <li><Link to="/prywatnosc">Polityka prywatności</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
