import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HeroImage from "../../images/heroimage.svg"
import reactlogo from "../../images/react.svg"
import jamstack from "../../images/jamstack.svg"
import gatsby from "../../images/gatsby.svg"
import netlify from "../../images/netlify.svg"

const HomepageHero = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          homepage {
            heroBtn
            heroSlug
            heroHeading
          }
        }
      }
    }
  `)

  const homepageHeading = data.site.siteMetadata.homepage.heroHeading
  const homepageSlug = data.site.siteMetadata.homepage.heroSlug
  const homepageBtn = data.site.siteMetadata.homepage.heroBtn

  return (
    <section className="homepage-hero">
      <div className="container">
        <div className="hero-lead">
          <h1>{homepageHeading}</h1>
          <p>{homepageSlug}</p>
          <div className="cta">
            <button>
              {homepageBtn}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                ></path>
              </svg>
            </button>
          </div>
          <p className="tech">WYKORZYSTYWANE TECHNOLOGIE</p>
          <div className="logos">
            <img src={reactlogo} alt="Marcin Zogrodnik - React" />
            <img src={jamstack} alt="Marcin Zogrodnik - JAMstack" />
            <img src={gatsby} alt="Marcin Zogrodnik - Gatsby" />
            <img src={netlify} alt="Marcin Zogrodnik - Netlify" />
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Marcin Zogrodnik - Strony internetowe" />
        </div>
      </div>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </section>
  )
}

export default HomepageHero
