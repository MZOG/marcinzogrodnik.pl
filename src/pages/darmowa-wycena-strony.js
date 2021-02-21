import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DarmowaWycenaStrony = () => {
  return (
    <Layout>
      <SEO
        title="Darmowa wycena strony"
        description="Chciałbyś dowiedzieć się ile kosztuje strona internetowa? Która opcja będzie lepsza - WordPress czy JAMstack? Napisz do mnie, porozmawiamy i doradzę Ci najlepszą opcję."
      />

      <section className="container page">
        <h1>Darmowa wycena strony</h1>

        <p>Tworzę strony internetowe <strong>WordPress</strong> oraz <strong>JAMstack</strong>. Jeżeli jesteś zainteresowany moimi usługami, lub chciałbyś dowiedzieć się ile mniej więcej kosztuje wykonanie strony internetowej według Twoich wytycznych, to napisz do mnie.</p>

        <p>Chciałbym uzyskać jak najwięcej informacji o Twojej stronie np. <strong>branża</strong>, <strong>funkcjonalność</strong>, <strong>strony, które podobają Ci się wizualnie</strong>. Taki punkt zaczepny, abym mógł oszacować czas wykonania projektu.</p>
      </section>
    </Layout>
  )
}

export default DarmowaWycenaStrony
