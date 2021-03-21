import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SidebarBlogPosts = () => {
  const sidebarBlogQuote = useStaticQuery(graphql`
    {
      allDatoCmsPost(
        limit: 3
        sort: { order: DESC, fields: meta___publishedAt }
      ) {
        nodes {
          id
          title
          slug
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { eq: "post" }, published: { eq: true } }
        }
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
          id
        }
      }
    }
  `)

  return (
    <div className="article__sidebar_box">
      <div className="article__sidebar_box-item">
        <p className="article__sidebar_box-item-title">Blog</p>
        <ul>
          {sidebarBlogQuote.allDatoCmsPost.nodes.map(blog => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="article__sidebar_box-item">
        <p className="article__sidebar_box-item-title">Front End</p>
        <ul>
          {sidebarBlogQuote.allMarkdownRemark.nodes.map(frontend => (
            <li key={frontend.id}>
              <Link to={`/blog/${frontend.frontmatter.slug}`}>
                {frontend.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarBlogPosts
