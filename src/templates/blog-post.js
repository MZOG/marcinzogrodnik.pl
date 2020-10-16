/* disable eslint */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import PageHero from "../components/pageHero"

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

export default ({ data }) => {
  const post = data.datoCmsPost

  return (
    <Layout>
      <SEO
        title={data.datoCmsPost.title}
        description={post.seo.description}
        shareImage={post.seo.image.sizes.src}
      />

      <article className="article">
        <div className="container flex">
          <PageHero hero={post.title} articleInfo={post.meta.createdAt} slug={post.slug} type={post.internal.type}/>
          <section className="article-content">

            {post.image.fluid &&
              <div className="article-image">
                <Img fluid={post.image.fluid} />
              </div>
            }

            <div
              dangerouslySetInnerHTML={{
                __html: post.contentNode.childMarkdownRemark.html,
              }}
            />
          </section>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      title
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
        fluid(maxWidth: 1120) {
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
