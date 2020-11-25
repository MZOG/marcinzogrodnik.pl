import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShowcaseItem = ({title, image, slug, description, url}) => {
  return (
    <article className="showcase__item">
      <div className="showcase__item-image">
      <Img fluid={image} />
      </div>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <p>{description}</p>
      <div className="more">
        <Link className="btn primary sm" to={`/realizacje/${slug}`}>Więcej</Link>
      </div>
    </article>
  )
}

export default ShowcaseItem;