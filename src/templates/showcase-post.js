import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import PageHero from "../components/pageHero"
import QuickContact from "../components/quickContact"

export default ({ data }) => {
  const post = data.datoCmsShowcase

  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

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
    "datePublished": formatter.format( new Date(post.meta.createdAt) )
  }

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description}
        shareImage={post.seo.image.sizes.src}
        schemaMarkup={schema}
      />
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
