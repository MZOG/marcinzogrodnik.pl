import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Article = ({ title, slug, description, image, date }) => {

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  return (
    <article className="post">
        <div className="post-image">
        <Img fluid={image} />
        </div>
        <div className="post-content">
          <h2>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p className="post-date">{formatter.format( new Date(date))} / Marcin Zogrodnik</p>
          <div className="excerpt">
            <p>{description}</p>
          </div>
          <div className="post-more">
            <Link to={`/blog/${slug}`}>Więcej →</Link>
          </div>
      </div>
    </article>
  )
}

export default Article
