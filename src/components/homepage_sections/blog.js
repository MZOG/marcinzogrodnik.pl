import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"

function HomepageBlog(data) {
  let posts = data.data.edges

  return(
    <section className="home home_blog">
      <div className="container">
        <h2>Blog</h2>
        <p className="lead">
          Piszę na temat stron internetowych, JAMstack, optymalizacji.
        </p>

        <div className="home_blog_posts">
          {posts.map(post => (
            <article key={post.node.id} className="home_blog_posts-item">
              <div className="image">
                <Img fluid={post.node.image.fluid} />
              </div>
              <p className="post-date">
                {post.node.meta.createdAt}
              </p>
              <h3>
                <Link to={`/blog/${post.node.slug}/`}>
                  {post.node.title}
                </Link>
              </h3>
              <Link to={`/blog/${post.node.slug}/`} className="more">
                Czytaj
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomepageBlog