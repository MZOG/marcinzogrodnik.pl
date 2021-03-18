import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PageTitle = ({ title, lead, link, linkTxt, image }) => {
  return (
    <div className="page_title">
      <div className="content">
        {image && (
          <div className="content_left">
            <Img fluid={image.fluid} />
          </div>
        )}
        <div className="content_right">
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
          {link && <Link to={link}>{linkTxt}</Link>}
        </div>
      </div>
    </div>
  )
}

export default PageTitle
