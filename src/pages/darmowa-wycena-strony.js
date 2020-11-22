import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHero from '../components/pageHero'

const DarmowaWycenaStrony = () => {
  return(
    <Layout>
      <SEO
        title="Darmowa wycena strony"
        description="Darmowa wycena strony internetowej. Zadzwoń lub napisz: 739 907 919 / kontakt@marcinzogrodnik.pl"
      />

      <div className="container">
        <PageHero title="Darmowa wycena strony" />
      </div>
    </Layout>
  )
}

export default DarmowaWycenaStrony