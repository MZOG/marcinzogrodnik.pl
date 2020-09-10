/* eslint-disable */
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [active, setActive] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", headerScroll)

    return () => {
      document.removeEventListener("scroll", headerScroll)
    }
  }, [scroll, setScroll])

  // functions
  const toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger")
    hamburger.classList.contains("is-active")
      ? setActive(false)
      : setActive(true)
  }

  const headerScroll = () => {
    const scrollCheck = window.scrollY < 30
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck)
    }
  }

  return (
    <header className={`header ${scroll === false ? "scroll" : ""}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            marcin<span>zogrodnik</span>
          </Link>
        </div>

        <nav className={`navigation ${active ? "is-active" : ""}`}>
          <ul>
            <li className="subnav">
              <span>
                Oferta
                <div className="icon">
                  <svg
                    className="h-4 fill-current lg:ml-1 lg:mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </div>
              </span>

              <div className="sub">
                <ul>
                  <li>
                    <Link to="/oferta/strony-internetowe">
                      <div className="icon">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      Strony internetowe
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta/sklepy-internetowe">
                      <div className="icon">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      Sklepy internetowe
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta/projekty-graficzne">
                      <div className="icon">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
                        </svg>
                      </div>
                      Projekty gaficzne
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta/hosting">
                      <div className="icon">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                        </svg>
                      </div>
                      Hosting
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta/pozycjonowanie">
                      <div className="icon">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                      Pozycjonowanie
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta/opieka-nad-strona">
                      <div className="icon">
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                      </div>
                      Opieka nad stroną
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/realizacje">Realizacje</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li className="mobile-only">
              <span>739 907 919</span>
            </li>
            <li className="mobile-only">
              <span>hello@marcinzogrodnik.pl</span>
            </li>
          </ul>
        </nav>

        <div className="mobile-wrapper">
          <div className="header-contact">
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <button
            className={`hamburger hamburger--collapse ${
              active ? "is-active" : ""
            }`}
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
