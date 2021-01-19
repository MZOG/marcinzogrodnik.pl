import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShowcaseItem = ({title, image, slug, description, url}) => {
  return (
    <article className="showcase__item">
      <div className="showcase__item-image">
        <Img fluid={image} />
      </div>
      <div className="showcase__item-content">
        <h2>
          <Link to={slug}>{title}</Link>
        </h2>
        <p>{description}</p>
        <div className="more">
          <Link to={`/realizacje/${slug}`}>
            Więcej
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ShowcaseItem;