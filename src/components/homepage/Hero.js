import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

function Hero() {
  const heroQuery = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-macbook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <section className="home_hero">
      <div className="container">
        <div className="content">
          <div className="content_left">
            <h1>
              Tworzę nowoczesne <span>strony</span> i sklepy{" "}
              <span>internetowe</span>
            </h1>
            <p className="content_left-lead">
              Od 5 lat pomagam zagranicznym firmom rozwijać się w internecie.
              Pomogę również Twojej firmie zaistnieć w sieci!
            </p>
            <Link to={`/realizacje`}>Realizacje →</Link>
          </div>
          <div className="content_right">
            <Img fluid={heroQuery.file.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
