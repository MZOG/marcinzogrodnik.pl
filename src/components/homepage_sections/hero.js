import React from "react"

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
      </div>
    </section>
  )
}

export default Hero;