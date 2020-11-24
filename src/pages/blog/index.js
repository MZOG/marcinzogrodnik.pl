import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import Article from "../../components/article"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
            title="Blog"
          />

          <div className="posts-container">
            <div className="posts">
              {blogPosts.map(post => {
                return (
                  <Article
                    author={author.childImageSharp.fluid || 'https://www.datocms-assets.com/34585/1602078621-marcinprofilowe.jpg'}
                    key={post.node.id}
                    slug={post.node.slug}
                    title={post.node.title}
                    date={post.node.meta.createdAt}
                    description={post.node.seo.description}
                    image={post.node.image.fluid || 'elo'}
                  />
                )
              })}
            </div>
            <aside className="sidebar">
              <h2>HTML, CSS, JS</h2>

              <ul>
                <li><Link to="/">JS: split()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
                <li><Link to="/">SCSS: min(), max()</Link></li>
              </ul>

              {/* <h2>Ostatnie realizacje</h2>

              {showcase.map(item => (
                <div key={item.node.id} className="sidebar-showcase-item">
                  <Link to={`/realizacje/${item.node.slug}`}>
                    <Img fluid={item.node.image.fluid} alt={item.node.title} />
                  </Link>
                </div>
              ))} */}
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
    allDatoCmsPost(sort: {order: DESC, fields: meta___firstPublishedAt}) {
      edges {
        node {
          image {
            fluid(maxWidth: 800, imgixParams: { auto: "compress", lossless: true }) {
              ...GatsbyDatoCmsFluid
              src
            }
          }
          tags
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
