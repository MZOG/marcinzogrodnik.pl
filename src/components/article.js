import React from "react"
import { Link } from "gatsby"

const Article = ({ title, slug, date, description }) => {

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  return (
    <article className="post">
        <h2>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>

        <div className="post-excerpt">
          <p>{description}</p>
        </div>

        <div className="post-more">
          <Link to={`/blog/${slug}`}>Więcej →</Link>
      </div>
    </article>
  )
}

export default Article
