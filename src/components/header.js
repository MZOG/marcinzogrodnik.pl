/* eslint-disable */
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function Header() {
  const [active, setActive] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", headerScroll)
    document.body.classList.toggle("overflow", active)

    return () => {
      document.removeEventListener("scroll", headerScroll)
    }
  }, [scroll, setScroll, active])

  // functions

  const toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger")
    hamburger.classList.contains("is-active")
      ? setActive(false)
      : setActive(true)
  }

  const headerScroll = () => {
    const scrollCheck = window.scrollY < 50
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck)
    }
  }

  return (
    <>
      <header className={`header ${scroll === false ? "scroll" : ""}`}>
        <div className="container">
          <div className="logo">
            <Link to="/" tabIndex="1">
              marcinzogrodnik.pl
              <span>WordPress & JAMstack</span>
            </Link>
          </div>

          <nav className={`navigation ${active ? "is-active" : ""}`}>
            <ul>
              <li>
                <Link to="/oferta" activeClassName="active">
                  Oferta
                </Link>
              </li>
              <li>
                <Link
                  to="/realizacje"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Realizacje
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="active">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/kontakt" activeClassName="active">
                  Kontakt
                </Link>
              </li>

              <li className="call">
                <a href="tel:+48739907919">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  739 907 919
                </a>
              </li>
            </ul>
          </nav>

          <div className="navigation_quote">
            <Link to="/darmowa-wycena-strony" activeClassName="active">
              Wycena strony
            </Link>
          </div>

          <div className={`quote ${active ? "is-active" : ""}`}>
            <Link to="/darmowa-wycena-strony" activeClassName="active">
              Wycena strony
            </Link>
          </div>

          <div
            className={`hamburger ${active ? "is-active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
