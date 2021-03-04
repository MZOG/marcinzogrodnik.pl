import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.datoCmsShowcase

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://marcinzogrodnik.pl/blog/${post.slug}`
    },
    "headline": post.title,
    "image": post.seo.image.sizes.src,
    "author": {
      "@type": "Person",
      "name": "Marcin Zogrodnik"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marcin Zogrodnik - Strony internetowe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png"
      }
    },
    "datePublished": post.meta.createdAt
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.seo.description}
        shareImage={post.seo.image.sizes.src}
        schemaMarkup={schema}
      />
      <article className="article">
        <div className="container">
          <section className="article__content">
            <header className="article__content-header">
              <div className="article__content-image">
                <Img fluid={post.image.fluid} />
              </div>
              <h1>{post.title}</h1>
            </header>
            <div className="article__content-text"
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
        fluid(maxWidth: 992) {
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
