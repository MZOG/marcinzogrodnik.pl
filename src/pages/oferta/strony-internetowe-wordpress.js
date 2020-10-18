/* eslint-disable */
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import { Link } from "gatsby"
import QuickContact from "../../components/quickContact"

const StronyInternetoweWordPress = () => {
  return (
    <Layout>
      <SEO
        lang="pl"
        title="Strony internetowe WordPress"
        description="Strony oraz sklepy internetowe WordPress"
      />
      <section className="page">
        <div className="container">
          <PageHero
            hero="Strony internetowe WordPress"
            lead="Strony oraz sklepy internetowe WordPress"
          />

          <div className="content">
            <p>
              Jednak nie tylko blogerzy wykorzystują ten system, wiele znanych
              marek oraz osób korzysta z WordPress'a i są to strony bardzo
              popularne. Przykłady: <a href="https://www.vogue.com/">Vogue</a>,{" "}
              <a href="https://snoopdogg.com/">Snoop Dogg</a>,{" "}
              <a href="https://www.katyperry.com/">Katy Perry</a> czy{" "}
              <a href="https://techcrunch.com/">Tech Crunch</a>.
            </p>
          </div>
          <QuickContact />
        </div>
      </section>
    </Layout>
  )
}

export default StronyInternetoweWordPress
