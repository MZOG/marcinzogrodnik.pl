/* eslint-disable */
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function Header() {
  const data = useStaticQuery(graphql`
    query BlogPost {
      allDatoCmsPost(
        sort: { fields: meta___createdAt, order: DESC }
        limit: 1
      ) {
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
      <aside className={`top-new-post ${asidePanel ? "active" : ""}`}>
        <div className="container">
          <Link to={`/blog/${data.allDatoCmsPost.edges[0].node.slug}`}>
            <span>Nowy post! &nbsp;</span>{" "}
            {data.allDatoCmsPost.edges[0].node.title}
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
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
                <Link to="/" activeClassName="active">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link to="/o-mnie" activeClassName="active">
                  O mnie
                </Link>
              </li>
              <li className="subnav">
                <Link
                  to="/oferta"
                  className="offer"
                  activeClassName="active"
                  partiallyActive={true}
                >
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

                <div className="sub">
                  <ul>
                    <li>
                      <Link to="/oferta/strony-internetowe-wordpress">
                        <div className="icon">
                          <svg
                            viewBox="0 0 256 255"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#464342">
                              <path d="M18.1239675,127.500488 C18.1239675,170.795707 43.284813,208.211252 79.7700163,225.941854 L27.5938862,82.985626 C21.524813,96.5890081 18.1239675,111.643057 18.1239675,127.500488 L18.1239675,127.500488 Z M201.345041,121.980878 C201.345041,108.462829 196.489366,99.1011382 192.324683,91.8145041 C186.780098,82.8045528 181.583089,75.1745041 181.583089,66.1645528 C181.583089,56.1097886 189.208976,46.7501789 199.950569,46.7501789 C200.435512,46.7501789 200.89548,46.8105366 201.367935,46.8375935 C181.907772,29.0091707 155.981008,18.1239675 127.50465,18.1239675 C89.2919675,18.1239675 55.6727154,37.7298211 36.1147317,67.4258211 C38.6809756,67.5028293 41.0994472,67.5569431 43.1536911,67.5569431 C54.5946016,67.5569431 72.3043902,66.1687154 72.3043902,66.1687154 C78.2007154,65.8211382 78.8958699,74.4814309 73.0057886,75.1786667 C73.0057886,75.1786667 67.0803252,75.8759024 60.4867642,76.2213984 L100.318699,194.699447 L124.25574,122.909138 L107.214049,76.2172358 C101.323967,75.8717398 95.744,75.1745041 95.744,75.1745041 C89.8497561,74.8290081 90.540748,65.8169756 96.4349919,66.1645528 C96.4349919,66.1645528 114.498602,67.5527805 125.246439,67.5527805 C136.685268,67.5527805 154.397138,66.1645528 154.397138,66.1645528 C160.297626,65.8169756 160.990699,74.4772683 155.098537,75.1745041 C155.098537,75.1745041 149.160585,75.8717398 142.579512,76.2172358 L182.107577,193.798244 L193.017756,157.340098 C197.746472,142.211122 201.345041,131.34465 201.345041,121.980878 L201.345041,121.980878 Z M129.42361,137.068228 L96.6056585,232.43135 C106.404423,235.31187 116.76722,236.887415 127.50465,236.887415 C140.242211,236.887415 152.457366,234.685398 163.827512,230.68722 C163.534049,230.218927 163.267642,229.721496 163.049106,229.180358 L129.42361,137.068228 L129.42361,137.068228 Z M223.481756,75.0225691 C223.95213,78.5066667 224.218537,82.2467642 224.218537,86.2699187 C224.218537,97.3694959 222.145561,109.846894 215.901659,125.448325 L182.490537,222.04774 C215.00878,203.085008 236.881171,167.854829 236.881171,127.502569 C236.883252,108.485724 232.025496,90.603187 223.481756,75.0225691 L223.481756,75.0225691 Z M127.50465,0 C57.2003902,0 0,57.1962276 0,127.500488 C0,197.813073 57.2003902,255.00722 127.50465,255.00722 C197.806829,255.00722 255.015545,197.813073 255.015545,127.500488 C255.013463,57.1962276 197.806829,0 127.50465,0 L127.50465,0 Z M127.50465,249.162927 C60.4243252,249.162927 5.84637398,194.584976 5.84637398,127.500488 C5.84637398,60.4201626 60.4222439,5.84637398 127.50465,5.84637398 C194.582894,5.84637398 249.156683,60.4201626 249.156683,127.500488 C249.156683,194.584976 194.582894,249.162927 127.50465,249.162927 L127.50465,249.162927 Z"></path>
                            </g>
                          </svg>
                        </div>
                        Strony internetowe WordPress
                      </Link>
                    </li>
                    <li>
                      <Link to="/oferta/strony-internetowe-jamstack">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 96.94 96.94"
                          >
                            <g
                              id="Group_1"
                              data-name="Group 1"
                              transform="translate(-185.23 -239.23)"
                            >
                              <path
                                id="Path_1"
                                data-name="Path 1"
                                d="M63.7,25.23A48.47,48.47,0,1,0,112.17,73.7V25.23Z"
                                transform="translate(170 214)"
                                fill="#f0047f"
                              />
                              <path
                                id="Path_2"
                                data-name="Path 2"
                                d="M62.133,75.2v33.985A35.578,35.578,0,0,1,28.149,75.2Z"
                                transform="translate(170 214)"
                                fill="#fff"
                                stroke="#f0047f"
                                strokeWidth="1"
                              />
                              <path
                                id="Path_3"
                                data-name="Path 3"
                                d="M65.2,75.267H99.185A35.578,35.578,0,0,1,65.2,109.251Z"
                                transform="translate(170 214)"
                                fill="#fff"
                                stroke="#f0047f"
                                strokeWidth="1"
                              />
                              <path
                                id="Path_4"
                                data-name="Path 4"
                                d="M65.2,72.133v-34h34v34Z"
                                transform="translate(170 214)"
                                fill="#fff"
                                stroke="#f0047f"
                                strokeWidth="1"
                              />
                            </g>
                          </svg>
                        </div>
                        Strony internetowe JAMstack
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/realizacje" activeClassName="active" partiallyActive={true}>
                  Realizacje
                </Link>
              </li>
              <li>
                <Link to="/opinie" activeClassName="active">
                  Opinie
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  activeClassName="active"
                  partiallyActive={true}
                >
                  Blog
                </Link>
              </li>
              <li className="mobile-only">
                <Link to="/wycena-projektu" activeClassName="active">
                  Wycena strony internetowej
                </Link>
              </li>
              <li className="mobile-only">
                <Link to="/kontakt/" activeClassName="active">
                  Kontakt
                </Link>
              </li>
              <li className="mobile-only">
                <a href="tel:+48739907919">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  739 907 919
                </a>
              </li>
              <li className="mobile-only">
                <a href="mailto:kontakt@marcinzogrodnik.pl">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  kontakt@marcinzogrodnik.pl
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-wrapper">
            <div className="header-contact">
              <Link to="/kontakt/" activeClassName="active">
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

export default Header
