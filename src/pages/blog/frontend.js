import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../../components/PageTitle"

const Frontend = () => {
  const frontendQuote = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              date
              description
              slug
              title
              published
            }
            html
          }
        }
      }

      file(relativePath: { eq: "front-end-fb.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Front End"
        description="Więcej na temat tworzenia stron internetowych, JavaScript, React'a, CSS"
        shareImage={frontendQuote.file.publicURL}
      />
      <section className="page page_offer">
        <div className="container">
          <PageTitle
            title="Front End"
            lead="Artykuły na temat JAMstack, WordPress, optymalizacji, pozycjonowania. Zapraszam dównież do działu Front End, gdzie dzielę się wiedzą na temat Gatsby, czy Reacta."
            link="/blog"
            linkTxt="Blog"
          />

          <div className="page_offer_boxes">
            {frontendQuote.allMarkdownRemark.edges.map(item => (
              <article className="page_offer_item" key={item.node.id}>
                <Link to={`/blog/${item.node.frontmatter.slug}`}>
                  <Img
                    fluid={item.node.frontmatter.image.childImageSharp.fluid}
                    alt={item.title}
                  />
                </Link>
                <h2>
                  <Link to={`/blog/${item.node.frontmatter.slug}`}>
                    {item.node.frontmatter.title}
                  </Link>
                </h2>
                <p>{item.node.frontmatter.description}</p>

                <div className="page_offer_item-cta">
                  <Link to={`/blog/${item.node.frontmatter.slug}`}>
                    Czytaj dalej →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Frontend
