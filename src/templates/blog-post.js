/* disable eslint */
import { Disqus } from 'gatsby-plugin-disqus';
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

export default ({ data }) => {

  console.log(data)

  let post, seoDescription, title, seoImage, date, html, slug

  if (data.markdownRemark) {
    post = data.markdownRemark

    seoDescription = post.frontmatter.description
    slug = post.frontmatter.slug
    title = post.frontmatter.title
    date = post.frontmatter.date
    seoImage = post.frontmatter.seoImage.childImageSharp.fluid.src
    html = post.html
  } else {
    post = data.datoCmsPost

    seoDescription = post.seo.description
    slug = post.slug
    title = post.title
    date = post.meta.createdAt
    seoImage = post.seo.image.sizes.src
    html = post.contentNode.childMarkdownRemark.html
  }

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
      "@id": `https://marcinzogrodnik.pl/blog/${slug}`,
    },
    "headline": title,
    "image": seoImage,
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
    "datePublished": date,
    "dateModified": date
  }

  let disqusConfig = {
    url: `https://marcinzogrodnik.pl/blog/${slug}`,
    identifier: `${title}`,
    title: `${title}`,
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
        <div className="container">

          <section className="article__content">
            <h1>{title}</h1>
            <div className="article__content-info">
              <p>{formatter.format( new Date(date) )} / Marcin Zogrodnik</p>
              <ul class="breadcrumb">
                <li><a href="/">Strona główna</a></li>
                <li><a href="/blog">Blog</a></li>
                {data.markdownRemark ?
                  <li><a href="/blog/frontend">Front End</a></li> : ""
                }
                <li>{title}</li>
              </ul>
            </div>

            <div className="article__content-text"
              dangerouslySetInnerHTML={{
                __html: html
              }}
            />

            <Disqus config={disqusConfig}/>
          </section>
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
      image {
        fluid(maxWidth: 768) {
          ...GatsbyDatoCmsFluid
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
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
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
  }
`
