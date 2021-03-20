/* disable eslint */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import SidebarPostInfo from "../components/sidebarPostInfo"
import SidebarBlogPosts from "../components/sidebarBlogPosts"
import SidebarQuote from "../components/sidebarQuote"
import SidebarShowcase from "../components/sidebarShowcase"

export default ({ data }) => {
  const post = data.datoCmsShowcase

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
      "@id": `https://marcinzogrodnik.pl/realizacje/${post.slug}`,
    },
    headline: post.title,
    image: post.seo.image.sizes.src,
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
    datePublished: post.meta.createdAt,
    dateModified: post.meta.updatedAt,
  }

  const path = window.location.href

  return (
    <Layout article={true}>
      <SEO
        title={post.title}
        description={post.seo.description}
        shareImage={post.seo.image.sizes.src}
        schemaMarkup={schema}
        path={path}
      />

      <article className="article">
        <div className="article_breadcrumbs">
          <div className="container">
            <ul>
              <li>
                <a href="/">Strona główna</a>
              </li>
              <li>
                <a href="/realizacje">Realizacje</a>
              </li>
              <li>{post.title}</li>
            </ul>
          </div>
        </div>

        <div className="container article_flex">
          <section className="article__content">
            <header className="article__content_header">
              <h1>{post.title}</h1>
              <p className="article__content-lead">{post.seo.description}</p>
            </header>

            <Img fluid={post.image.fluid} />

            <div
              className="article__content_text"
              dangerouslySetInnerHTML={{
                __html: post.contentNode.childMarkdownRemark.html,
              }}
            />
          </section>

          <aside className="article__sidebar">
            <div className="article__content-info">
              <SidebarPostInfo
                date={formatter.format(new Date(post.meta.createdAt))}
              />
              <SidebarShowcase />
              <SidebarBlogPosts />
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
    datoCmsShowcase(slug: { eq: $slug }) {
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      title
      meta {
        publishedAt
      }
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
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
          src
        }
      }
    }

    file(relativePath: { eq: "marcin_profilowe.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
