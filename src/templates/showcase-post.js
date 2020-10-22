import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import PageHero from "../components/pageHero"
import QuickContact from "../components/quickContact"

export default ({ data }) => {
  const post = data.datoCmsShowcase
  console.log(post)
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <article className="article">
        <div className="container flex">
          <PageHero
            hero={post.title}
            articleInfo={post.meta.createdAt}
            slug={post.slug}
            type={post.internal.type}
          />
          <section className="article-content">
            {post.image.fluid && (
              <div className="article-image">
                <Img fluid={post.image.fluid} />
              </div>
            )}

            <div
              dangerouslySetInnerHTML={{
                __html: post.contentNode.childMarkdownRemark.html,
              }}
            />

            <div className="project-url">
              <a href={post.projectUrl}>Zobacz online</a>
            </div>
          </section>
          <QuickContact />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsShowcase(slug: { eq: $slug }) {
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      title
      projectUrl
      slug
      meta {
        createdAt(formatString: "D MMMM YYYY")
      }
      seo {
        description
        image {
          sizes {
            src
          }
        }
      }
      image {
        fluid(maxWidth: 860) {
          ...GatsbyDatoCmsFluid
          src
        }
      }
      internal {
        type
      }
    }
  }
`
