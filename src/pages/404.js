import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => {
  let pathname = window.location.pathname
  return (
    <Layout>
      <SEO
        title="Ups.."
        description="Wygląda na to, że wyszukiwana strona nie istnieje.."
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
