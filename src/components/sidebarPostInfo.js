import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SidebarPostInfo = ({ date }) => {
  const sidebarQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "marcin_profilowe.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <div className="article__sidebar_box">
      <div className="author">
        <Img fluid={sidebarQuote.file.childImageSharp.fluid} />
        <p>Marcin Zogrodnik</p>
      </div>
      <p className="small">Dodano:</p>
      <p className="date">{date}</p>
    </div>
  )
}

export default SidebarPostInfo
