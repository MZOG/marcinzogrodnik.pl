import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
const NotFoundPage = () => {
  const notfound = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "marcin-zogrodnik-facebook.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Ups.."
        description="Wygląda na to, że wyszukiwana strona nie istnieje.."
        shareImage={notfound.file.publicURL}
      />
      <section className="not-found">
        <div className="container page">
          <p>Przykro mi, link którego szukasz nie istnieje.</p>

          <div className="not-found-btn">
            <Link to="/" className="btn primary">
              Strona główna
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
