/* eslint-disable */
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function Header() {
  const data = useStaticQuery(graphql`
  query BlogPost {
    allDatoCmsPost(sort: {fields: meta___createdAt, order: DESC}, limit: 1) {
      edges {
        node {
          title
          slug
          content
        }
      }
    }
  }
`)

  const [active, setActive] = useState(false)
  const [scroll, setScroll] = useState(0)
  const asidePanel = true

  useEffect(() => {
    document.addEventListener("scroll", headerScroll)
    document.body.classList.toggle('overflow', active);

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
    <aside className={asidePanel ? 'active' : ''}>
      <div className="container">
        <Link to={`/blog/${data.allDatoCmsPost.edges[0].node.slug}`}>
        <span>Nowy post! &nbsp;</span> {data.allDatoCmsPost.edges[0].node.title}
          <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </Link>
      </div>
    </aside>
    <header className={`header ${scroll === false ? "scroll" : ""}`}>
      <div className="container">
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

        <nav className={`navigation ${active ? "is-active" : ""}`}>
          <ul>
            <li>
              <Link to="/" activeClassName="active">Strona Główna</Link>
            </li>
            <li>
              <Link to="/o-mnie" activeClassName="active">O mnie</Link>
            </li>
            <li>
              <Link to="/oferta" className="offer">
                Oferta
                <svg
                    className="h-4 fill-current lg:ml-1 lg:mr-2"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
              </Link>
            </li>
            {/* <li className="subnav">
              <span>
                Usługi
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
            </li> */}
            <li>
              <Link to="/realizacje" activeClassName="active">Realizacje</Link>
            </li>
            <li>
              <Link to="/opinie" activeClassName="active">Opinie</Link>
            </li>
            <li>
              <Link to="/blog" activeClassName="active" partiallyActive={true}>Blog</Link>
            </li>
            <li className="mobile-only">
              <Link to="/kontakt" activeClassName="active">
                Kontakt
              </Link>
            </li>
            <li className="mobile-only">
              <a href="tel:+48739907919">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                739 907 919
              </a>
            </li>
            <li className="mobile-only">
              <a href="mailto:kontakt@marcinzogrodnik.pl">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                kontakt@marcinzogrodnik.pl
              </a>
            </li>
          </ul>
        </nav>

        <div className="mobile-wrapper">
          <div className="header-contact">
            <Link to="/kontakt" activeClassName="active">
              Kontakt
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
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
            </Link>
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
    </>
  )
}

export default Header;