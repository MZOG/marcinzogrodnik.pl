import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../../components/PageTitle"

const Showcase = () => {
  const showcaseQuote = useStaticQuery(graphql`
    {
      allDatoCmsShowcase(sort: { order: DESC, fields: meta___publishedAt }) {
        nodes {
          id
          slug
          title
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
      file(relativePath: { eq: "realizacje-fb.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Realizacje"
        description="Wszystkie realizacje stron internetowych WordPress oraz JAMstack."
        shareImage={showcaseQuote.file.publicURL}
      />
      <section className="page page_offer">
        <div className="container">
          <PageTitle
            title="Realizacje"
            lead="Sprawdź projekty stron internetowych WordPress oraz JAMstack."
          />
          <div className="page_offer_boxes">
            {showcaseQuote.allDatoCmsShowcase.nodes.map(item => (
              <article className="page_offer_item" key={item.id}>
                <div className="page_offer_item-header">
                  <h2>{item.title}</h2>
                  <Link to={`/realizacje/${item.slug}`}>Więcej →</Link>
                </div>
                <Link to={`/realizacje/${item.slug}`}>
                  <Img fluid={item.image.fluid} alt={item.title} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Showcase
