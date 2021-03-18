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
            fluid(maxWidth: 619) {
              ...GatsbyDatoCmsFluid
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
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Artykuły na temat JAMstack, WordPress, optymalizacji, pozycjonowania. Zapraszam dównież do działu Front End, gdzie dzielę się wiedzą na temat Gatsby, czy Reacta."
        shareImage={blogQuote.file.childImageSharp.fluid.src}
      />
      <section className="page page_offer">
        <div className="container">
          <PageTitle
            title="Blog"
            lead="Artykuły na temat JAMstack, WordPress, optymalizacji, pozycjonowania. Zapraszam dównież do działu Front End, gdzie dzielę się wiedzą na temat Gatsby, czy Reacta."
            link="/blog/frontend"
            linkTxt="Front End"
          />

          <div className="page_offer_boxes">
            {blogQuote.allDatoCmsPost.nodes.map(item => (
              <article className="page_offer_item" key={item.id}>
                <Link to={`/blog/${item.slug}`}>
                  <Img fluid={item.image.fluid} alt={item.title} />
                </Link>
                <h2>
                  <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.seo.description}</p>

                <div className="page_offer_item-cta">
                  <Link to={`/blog/${item.slug}`}>Czytaj dalej →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
