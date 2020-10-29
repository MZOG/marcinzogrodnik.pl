import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import Article from "../../components/article"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const blogPosts = data.allDatoCmsPost.edges
  const author = data.author

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Marcin Zogrodnik - Artykuły dotyczące świata Front-End."
      />
      <section>
        <div className="container">
          <PageHero
            hero="Blog"
            lead="Ciekawe artykuły na temat stron internetowych oraz Front End."
          />

          <div className="posts-container">
            <div className="posts">
              {blogPosts.map(post => {
                return (
                  <Article
                    author={author.childImageSharp.fluid}
                    key={post.node.id}
                    slug={post.node.slug}
                    title={post.node.title}
                    date={post.node.meta.createdAt}
                    description={post.node.seo.description}
                    image={post.node.image.fluid}
                  />
                )
              })}
            </div>
            <aside className="sidebar">
              <p>hello, this is sidebar</p>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query AllPosts {
    allDatoCmsPost: allDatoCmsPost(sort: { order: DESC, fields: meta___createdAt }) {
      edges {
        node {
          image {
            fluid(maxWidth: 540, imgixParams: { auto: "compress", lossless: true }) {
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
    author: file(relativePath: {eq: "marcin_profilowe.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
