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
      <section className="page page_blog">
        <div className="container">
          <h1>Blog</h1>
          <p className="lead">
            Staram się pisać ciekawie na temat stron internetowych, WordPress'a,
            pozycjonowania czy optymalizacji stron internetowych.
          </p>

          <div className="page_blog-category">
            <Link to="/blog/frontend/">Front End</Link>
          </div>

          <div className="page_blog__container">
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
