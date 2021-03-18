import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function Companies() {
  const companiesQuery = useStaticQuery(graphql`
    {
      allFile(
        filter: { name: { in: ["sal-met", "doradca-jezykowy", "atexo"] } }
      ) {
        nodes {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  `)

  return (
    <section className="home_companies">
      <div className="container">
        <ul className="home_companies-logos">
          {companiesQuery.allFile.nodes.map(logo => (
            <li key={logo.id}>
              <Img
                fluid={logo.childImageSharp.fluid}
                objectFit="contain"
                loading="eager"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Companies
