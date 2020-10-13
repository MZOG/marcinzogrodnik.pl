import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"

const WycenaProjektu = () => {
  return (
    <Layout>
      <SEO
        title="Wycena Strony internetowej"
        description="Zobacz moje ostatnie realizacje dla klientów, strony internetowe oraz sklepy. WordPress i JAMstack."
      />
      <section>
        <div className="container">
          <PageHero
            hero="Wycena strony internetowej"
            lead="Zadzwoń lub napisz do mnie w sprawie nowej strony internetowej"
          />
        </div>
      </section>
    </Layout>
  )
}

export default WycenaProjektu
