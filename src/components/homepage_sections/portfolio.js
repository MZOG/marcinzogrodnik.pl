import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"

function Portfolio(data) {
  let portfolio = data.data.edges

  return(
    <section className="homepage homepage_portfolio">
      <div className="container">
        <h2>Wybrane realizacje</h2>

        <div className="homepage_portfolio_items">
          {portfolio.map(project => (
            <div className="homepage_portfolio_item" key={project.node.id}>
              <div className="homepage_portfolio_item-image">
                <Img fluid={project.node.image.fluid} alt={project.node.title} />
              </div>
              <div className="homepage_portfolio_item-content">
                <h3>
                  <Link to={`/realizacje/${project.node.slug}`}>
                    {project.node.title}
                  </Link>
                </h3>
                <p>
                  {project.node.seo.description}
                </p>
                <div className="cta">
                  <Link to={`/realizacje/${project.node.slug}`}>
                    Czytaj więcej
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio