/* eslint-disable */

import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"

const Kontakt = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Pogadajmy o nowym projekcie! Zadzwoń 739 907 919 lub napisz kontakt@marcinzogrodnik.pl"
      />
      <section>
        <div className="container">
          <PageHero
            hero="Porozmawiajmy"
            lead="Opowiedz o swoim projekcie i otrzymaj darmową wycenę oraz plan realizacji."
          />
        </div>
      </section>
    </Layout>
  )
}

export default Kontakt
