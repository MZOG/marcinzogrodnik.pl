import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// components
import Hero from "../components/hero"
import HomepageOffer from "../components/offer.component"
import HomepageRecentProjects from "../components/recentProjects.component"
import Testimonials from '../components/testimonials';

const IndexPage = ({ data }) => {
  const recentProjects = data.allDatoCmsShowcase
  const recentPosts = data.allDatoCmsBlog

  console.log(recentPosts)
  return (
    <Layout>
      <SEO title="Marcin Zogrodnik" />
      <Hero />
      <HomepageRecentProjects projects={recentProjects} />
      <HomepageOffer />
      <Testimonials />

      {/* Recent Posts */}
      <section className="home-recent-posts">
        <div className="container">
          <h2>Ostatnio na blogu</h2>

          <div className="posts-wrapper">
            {
              recentPosts.edges.map((post) => {
                return(
                  <article>
                    <h3><Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link></h3>
                    <p>{post.node.excerpt}</p>
                  </article>
                )
              })
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allDatoCmsShowcase(
      sort: { fields: meta___createdAt, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          slug
          excerpt
          projectName
          projectUrl
          projectDescription
          projectImage {
            fluid(maxWidth: 700, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }

    allDatoCmsBlog(sort: { order: DESC, fields: meta___createdAt }) {
      edges {
        node {
          id
          content
          excerpt
          title
          slug
          meta {
            createdAt(formatString: "DD/MM/YYYY")
          }
          postImage {
            fluid(maxWidth: 700, imgixParams: { auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
