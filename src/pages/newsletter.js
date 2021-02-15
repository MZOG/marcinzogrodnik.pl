import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Newsletter = () => {
  return(
    <Layout>
      <SEO
        title="Zapisz się do newslettera"
        description="Zapisz się do newslettera i otrzymuj informacje na temat darmowych Webinarów czy postów!"
      />

      <section className="newsletter">
        <div className="container page">
          <h1>Darmowy Webinar WordPress</h1>
          <div className="lead">Opowiem Ci co to jest WordPress</div>
        </div>
      </section>
    </Layout>
  )
}

export default Newsletter;