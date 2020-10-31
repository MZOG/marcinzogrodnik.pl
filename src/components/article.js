import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Article = ({ title, slug, description, image, author, date, tags }) => {
  let postTags = tags.split(",")

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  return (
    <article className="post">
      <div className="post-image">
        <Img fluid={image} alt={title} />
      </div>
      <div className="post-content">
        <div className="post-header">
          <div className="author">
            <Img fluid={author} alt="Marcin Zogrodnik" />

            <div className="author-info">
              <p>Marcin Zogrodnik</p>
              <p>{formatter.format( new Date(date))}</p>
            </div>
          </div>
        </div>
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
