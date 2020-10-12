import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"

const Oferta = () => (
  <Layout>
    <SEO
      title="Oferta"
      description="Pogadajmy o nowym projekcie! Zadzwoń 739 907 919 lub napisz kontakt@marcinzogrodnik.pl"
    />
    <section>
      <div className="container">
        <PageHero
          hero="Oferta"
          lead="Opowiedz o swoim projekcie i otrzymaj darmową wycenę oraz plan realizacji."
        />
      </div>
    </section>
  </Layout>
)

export default Oferta
