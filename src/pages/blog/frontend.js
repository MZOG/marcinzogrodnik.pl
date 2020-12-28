import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Article from "../../components/article"
import { graphql, Link } from "gatsby"

const Blog = ({ data }) => {
  let blogPosts = data.allMarkdownRemark.edges

  blogPosts = blogPosts.filter(post => {
    if (post.node.frontmatter.title !== "" && post.node.frontmatter.published) {
      return post
    }
  })

  return (
    <Layout>
      <SEO
        title="Programowanie / Front End"
        description="Programowanie / Front End to dział, w którym dzielę się wiedzą na temat tworzenia stron internetowych oraz HTML, CSS, JavaScript."
      />
      <section>
        <div className="container page">
          <h1>Programowanie / Front End</h1>

          <Link to="/blog/" className="btn primary">
            Tematy ogólne
          </Link>

          <div className="blog__container">
            {blogPosts.map(post => {
              return (
                <Article
                  key={post.node.id}
                  slug={post.node.frontmatter.slug}
                  title={post.node.frontmatter.title}
                  date={post.node.frontmatter.date}
                  description={post.node.frontmatter.description}
                  image={post.node.frontmatter.image.childImageSharp.fluid || "elo"}
                />
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query frontend {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
            description
            slug
            title
            published
          }
          html
        }
      }
    }
  }
`
