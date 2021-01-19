import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Hero() {
  return(
    <section className="homepage_hero">
      <div className="container">
        <h1>
          Nowoczesne rozwiązania, {" "}
          <span>które przynoszą rezultaty.</span>
        </h1>

        <p className="homepage_hero_lead">
        Nie wiesz co to WordPress czy JAMstack? Nie musisz.
          <span>
            Wybieram technologie dopasowane do Twojego biznesu.
          </span>
        </p>

        <div className="homepage_hero_cta">
          <AnchorLink to="/#offer" stripHash>
            Dowiedz się więcej
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default Hero;