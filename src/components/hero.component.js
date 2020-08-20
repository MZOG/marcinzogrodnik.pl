import React from "react"
import HeroImage from "../images/marcin_profilowe.jpg"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-image">
          <img src={HeroImage} alt="Marcin Zogrodnik - Strony Internetowe"/>
        </div>
        <h1>
          Marcin Zogrodnik
          <span className="small">Nowoczesna strona internetowa? Jesteś w dobrym miejscu.</span>
          <span className="small">Tworzę unikalne strony www.</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero
