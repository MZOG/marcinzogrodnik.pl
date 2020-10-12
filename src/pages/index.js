import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
      />

      <div className="container">
      <p>Nie wiem dlaczego nie działa mi position: sticky. Dziwne bardzo.</p>
      </div>

    </Layout>
  )
}

export default IndexPage
