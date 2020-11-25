import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Article = ({ title, slug, description, image, author, date }) => {

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  return (
    <article className="blog__container-post">
      <div className="blog__container-post-image">
        <Img fluid={image} alt={title} />
      </div>
      <div className="blog__container-post-content">
        <h2>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <div className="post-excerpt">
          <p>{description}</p>
        </div>
        <div className="more">
          <Link className="btn primary sm" to={`/blog/${slug}`}>Więcej →</Link>
          <p className="date">{formatter.format( new Date(date))}</p>
        </div>
      </div>
    </article>
  )
}

export default Article
