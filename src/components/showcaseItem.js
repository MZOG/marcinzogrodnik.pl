import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ShowcaseItem = ({title, image, slug, description, url}) => {
  return (
    <article className="post">
      <div className="post-image">
        <Img fluid={image} />
      </div>
      <div className="post-content">
        <h2>
          <Link to={slug}>{title}</Link>
        </h2>
        <p>{description}</p>
        <div className="post-more">
          <Link to={`/realizacje/${slug}`}>
            Więcej
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <a href={`https://${url}`}>
            Sprawdź
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default ShowcaseItem;