import React from "react"
import { Link } from "gatsby"

const Article = ({ title, slug, description }) => {
  return (
    <article className="post">
      <div className="post-content">
        <h2>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>

        <div className="post-excerpt">
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
