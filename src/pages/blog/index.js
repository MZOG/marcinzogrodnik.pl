import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import { graphql } from "gatsby"
import Article from "../../components/article"

const Blog = ({ data }) => {
  const blogPosts = data.allDatoCmsPost.edges
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
            {blogPosts.map(post => {
              return (
                <Article
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
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query AllPosts {
    allDatoCmsPost(sort: {order: DESC, fields: meta___firstPublishedAt}) {
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
  }
`
