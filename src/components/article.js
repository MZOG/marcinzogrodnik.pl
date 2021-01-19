import React from "react"
import { Link } from "gatsby"

const Article = ({ title, slug, description, image, date }) => {

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  return (
    <article className="blog__container-post">
      <div className="container">
        <div className="blog__container-post-content">
          <h2>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p className="date">{formatter.format( new Date(date))} / Marcin Zogrodnik</p>
          <div className="excerpt">
            <p>{description}</p>
          </div>
          <div className="more">
            <Link to={`/blog/${slug}`}>Więcej →</Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article
