import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import homepage components
import HomepageHero from "../components/homepage/homepageHero"
import HomepageSteps from "../components/homepage/homepageSteps"
import HomepageOffer from "../components/homepage/HomepageOffer"
import HomepageProjects from "../components/homepage/HomepageProjects"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
      />
      <HomepageHero />
      <HomepageSteps />
      <HomepageOffer />
      <HomepageProjects />
    </Layout>
  )
}

export default IndexPage
