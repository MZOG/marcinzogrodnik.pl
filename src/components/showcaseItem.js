import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShowcaseItem = ({title, image, slug, description, url}) => {
  return (
    <article className="showcase-item">
      <div className="showcase-item_image">
      <Img fluid={image} />
      </div>
      <div className="showcase-item_title">
        <h2>{title}</h2>
      </div>
      <div className="showcase-item_description">
        <p>{description}</p>
      </div>
      <div className="showcase-item_more">
        <Link to={`/realizacje/${slug}`}>Więcej</Link>
        <a href={url} target="_blank" rel="noreferrer">Zobacz online</a>
      </div>
    </article>
  )
}

export default ShowcaseItem;