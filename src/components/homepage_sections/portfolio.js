import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"

function Portfolio(data) {
  let portfolio = data.data.edges

  return(
    <section className="home_portfolio" id="portfolio">
      <div className="container">
        <h2>Wybrane realizacje</h2>

        <p className="lead">Realizacje</p>

        <div className="portfolio_items">

          {portfolio.map(project => (

            <div className="portfolio_item" key={project.node.id}>
              <div className="portfolio_item-image">
                <Img fluid={project.node.image.fluid} alt={project.node.title} />
              </div>
              <div className="portfolio_item-content">
                <h3>
                  <Link to={`/realizacje/${project.node.slug}`}>
                    {project.node.title}
                  </Link>
                </h3>
                <p>
                  {project.node.seo.description}
                </p>
                <div className="portfolio_item-cta">
                  <Link to={`/realizacje/${project.node.slug}`}>
                    Więcej
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                  <a href={`https://${project.node.projectUrl}`}>
                    Sprawdź
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </a>
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