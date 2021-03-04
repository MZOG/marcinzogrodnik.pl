import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Hero() {
  return(
    <section className="hero">
      <div className="container">
        <h1>
          Tworzę nowoczesne <span>strony</span> i sklepy <span>internetowe</span>
        </h1>
        <p className="hero_lead">
          Od 5 lat pomagam zagranicznym firmom rozwijać się w internecie. {" "}
          <span>Pomogę również Twojej firmie zaistnieć w sieci!</span>
        </p>

        <div className="hero_more">
          <AnchorLink to="/#portfolio" stripHash>
            Realizacje
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default Hero;
