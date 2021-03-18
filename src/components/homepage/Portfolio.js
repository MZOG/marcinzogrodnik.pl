import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

function Portfolio() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsShowcase(
        limit: 2
        sort: { order: DESC, fields: meta___publishedAt }
      ) {
        nodes {
          id
          slug
          title
          image {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          seo {
            description
          }
        }
      }
    }
  `)

  return (
    <section className="home_portfolio">
      <div className="container">
        <h2>
          Wybrane <span>realizacje</span>
        </h2>
        <p>
          Wybrane realizacje stron internetowych <span>WordPress</span> &{" "}
          <span>JAMstack</span>.
        </p>

        <div className="home_portfolio-content">
          {data.allDatoCmsShowcase.nodes.map(item => (
            <article className="home_portfolio-content-item" key={item.id}>
              <header className="home_portfolio-content-item-header">
                <h3>{item.title}</h3>
                <Link to={`/realizacje/${item.slug}`}>Więcej →</Link>
              </header>
              <Img fluid={item.image.fluid} />
            </article>
          ))}
        </div>

        <div className="home_portfolio-more">
          <Link to={`/realizacje/`}>Wszystkie realizacje →</Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
