import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageHero from "../components/pageHero"

const About = () => {
  return (
    <Layout>
      <SEO />

      <div className="container">
        <PageHero hero="O mnie" lead="Kim jestem? Jak pracuję oraz co lubię." />
      </div>
    </Layout>
  )
}

export default About;