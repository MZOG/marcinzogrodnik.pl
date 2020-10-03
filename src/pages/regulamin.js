import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Regulamin = () => (
  <Layout>
    <SEO title="Regulamin" description="Regulamin strony marcinzogrodnik.pl" />
    <section className="not-found">
      <div className="container page">
        <div className="content">
          <div className="not-found-btn">
            <Link to="/" className="btn btn-primary">
              Strona główna
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Regulamin
