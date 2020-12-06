import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Article from "../../components/article"
import { graphql, Link } from "gatsby"

const Blog = ({ data }) => {
  const blogPosts = data.allDatoCmsPost.edges

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Piszę głównie o rzeczach związanych ze stronami internetowymi WordPress oraz JAMstack. Świat Front End to moja pasja, którą chciałbym się podzielić."
      />
      <section>
        <div className="container page">
          <h1>Blog</h1>

          <Link to="/blog/frontend/" className="btn primary">
            Programowanie / Front End
          </Link>

          <div className="blog__container">
            {blogPosts.map(post => {
              return (
                <Article
                  key={post.node.id}
                  slug={post.node.slug}
                  title={post.node.title}
                  date={post.node.meta.createdAt}
                  description={post.node.seo.description}
                  image={post.node.image.fluid || "elo"}
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
  query AllPosts {
    allDatoCmsPost(sort: { order: DESC, fields: meta___firstPublishedAt }) {
      edges {
        node {
          image {
            fluid(
              maxWidth: 800
              imgixParams: { auto: "compress", lossless: true }
            ) {
              ...GatsbyDatoCmsFluid
              src
            }
          }
          title
          slug
          id
          meta {
            createdAt(formatString: "D MMMM YYYY")
          }
          seo {
            description
          }
        }
      }
    }
  }
`
