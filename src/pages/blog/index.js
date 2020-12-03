import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Article from "../../components/article"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const blogPosts = data.allDatoCmsPost.edges
  const author = data.author

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Piszę głównie o rzeczach związanych ze stronami internetowymi WordPress oraz JAMstack. Świat Front End to moja pasja, którą chciałbym się podzielić."
      />
      <section>
        <div className="container page">
          <h1>Blog</h1>
          <div className="blog__container">
            {blogPosts.map(post => {
              return (
                <Article
                  author={
                    author.childImageSharp.fluid ||
                    "https://www.datocms-assets.com/34585/1602078621-marcinprofilowe.jpg"
                  }
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
    author: file(relativePath: { eq: "marcin_profilowe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase: allDatoCmsShowcase(
      sort: { fields: meta___createdAt, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          id
          slug
          image {
            fluid(maxWidth: 778) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
