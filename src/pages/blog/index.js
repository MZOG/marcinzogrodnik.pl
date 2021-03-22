import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../../components/PageTitle"

const Blog = () => {
  const blogQuote = useStaticQuery(graphql`
    {
      allDatoCmsPost(sort: { order: DESC, fields: meta___publishedAt }) {
        nodes {
          id
          image {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
              src
            }
          }
          seo {
            description
          }
          slug
          title
        }
      }
      file(relativePath: { eq: "blog-fb.png" }) {
        publicURL
      }
    }
  `)

  const blogArticles = blogQuote.allDatoCmsPost.nodes

  const loopArticles = () =>
    blogArticles.map(article => {
      const { id, slug, title, image, seo } = article
      return (
        <article className="page_offer_item" key={id}>
          <Link to={`/blog/${slug}`}>
            <Img fluid={image.fluid} alt={title} />
          </Link>
          <h2>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h2>
          <p>{seo.description}</p>

          <div className="page_offer_item-cta">
            <Link to={`/blog/${slug}`}>Czytaj dalej →</Link>
          </div>
        </article>
      )
    })

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Artykuły na temat JAMstack, WordPress, optymalizacji, pozycjonowania. Zapraszam dównież do działu Front End, gdzie dzielę się wiedzą na temat Gatsby, czy Reacta."
        shareImage={blogQuote.file.publicURL}
      />
      <section className="page page_offer">
        <div className="container">
          <PageTitle
            title="Blog"
            lead="Artykuły na temat JAMstack, WordPress, optymalizacji, pozycjonowania. Zapraszam dównież do działu Front End, gdzie dzielę się wiedzą na temat Gatsby, czy Reacta."
            link="/blog/frontend"
            linkTxt="Front End"
          />

          <div className="page_offer_boxes">{loopArticles()}</div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
