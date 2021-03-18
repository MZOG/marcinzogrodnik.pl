/* disable eslint */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import SidebarPostInfo from "../components/sidebarPostInfo"
import SidebarBlogPosts from "../components/sidebarBlogPosts"
import SidebarQuote from "../components/sidebarQuote"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import SidebarShowcase from "../components/sidebarShowcase"
deckDeckGoHighlightElement()

export default ({ data }) => {
  let post, seoDescription, title, seoImage, date, html, slug, image

  if (data.markdownRemark) {
    post = data.markdownRemark

    seoDescription = post.frontmatter.description
    slug = post.frontmatter.slug
    title = post.frontmatter.title
    date = post.frontmatter.date
    seoImage = post.frontmatter.seoImage.childImageSharp.fluid.src
    html = post.html
    image = post.frontmatter.image.childImageSharp.fluid
  } else {
    post = data.datoCmsPost

    seoDescription = post.seo.description
    slug = post.slug
    title = post.title
    date = post.meta.createdAt
    seoImage = post.seo.image.sizes.src
    html = post.contentNode.childMarkdownRemark.html
    image = post.image.fluid
  }

  let formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://marcinzogrodnik.pl/blog/${slug}`,
    },
    headline: title,
    image: seoImage,
    author: {
      "@type": "Person",
      name: "Marcin Zogrodnik",
    },
    publisher: {
      "@type": "Organization",
      name: "Marcin Zogrodnik - Strony internetowe",
      logo: {
        "@type": "ImageObject",
        url: "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png",
      },
    },
    datePublished: date,
    dateModified: date,
  }

  return (
    <Layout article={true}>
      <SEO
        title={title}
        description={seoDescription}
        shareImage={seoImage}
        slug={slug}
        schemaMarkup={schema}
      />

      <article className="article">
        <div className="article_breadcrumbs">
          <div className="container">
            <ul>
              <li>
                <a href="/">Strona główna</a>
              </li>
              {data.markdownRemark ? (
                <li>
                  <a href="/blog/frontend">Front End</a>
                </li>
              ) : (
                <li>
                  <a href="/blog">Blog</a>
                </li>
              )}
              <li>{title}</li>
            </ul>
          </div>
        </div>

        <div className="container article_flex">
          <section className="article__content">
            <header className="article__content_header">
              <h1>{title}</h1>
              <p className="article__content-lead">{seoDescription}</p>
            </header>

            <Img fluid={image} />

            <div
              className="article__content_text"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </section>

          <aside className="article__sidebar">
            <div className="article__content-info">
              <SidebarPostInfo date={formatter.format(new Date(date))} />
              <SidebarBlogPosts />
              <SidebarShowcase />
              <SidebarQuote />
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    datoCmsPost: datoCmsPost(slug: { eq: $slug }) {
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      title
      slug
      meta {
        createdAt(formatString: "D MMMM YYYY")
        publishedAt(formatString: "D MMMM YYYY")
      }
      seo {
        description
        image {
          sizes {
            src
          }
        }
      }
      pointers {
        id
        text
      }
      image {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
          src
        }
      }
      internal {
        type
      }
    }

    markdownRemark: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        seoImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    file(relativePath: { eq: "marcin_profilowe.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
