import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link} from "gatsby"

function Blog () {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsPost(limit: 2, sort: {order: DESC, fields: meta___publishedAt}) {
      nodes {
        id
        title
        slug
        seo {
          description
        }
        image {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`)



  return (
    <section className="home_blog">
      <div className="container">
        <h2><span>Blog</span></h2>
        <p>
          Artykuły na temat WordPressa, optymalizacji, pozycjonowania, oraz Front End.
        </p>

        <div className="home_blog-content">
          {data.allDatoCmsPost.nodes.map(item => (
            <article className="home_blog-content-item" key={item.id}>
              <Img fluid={item.image.fluid} />
              <h3>{item.title}</h3>
              <p>{item.seo.description}</p>
              <Link to={`/blog/${item.slug}`}>
                Więcej →
              </Link>

            </article>
          ))}
        </div>

        <div className="home_blog-more">
          <Link to={`/blog/`}>
            Więcej postów →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog;