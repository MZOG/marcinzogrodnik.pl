import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

// COMPONENTS
import Hero from "../components/homepage/Hero"
import Companies from "../components/homepage/Companies"
import Offer from "../components/homepage/Offer"
import GetQuote from "../components/homepage/GetQuote"
import Portfolio from "../components/homepage/Portfolio"
import Blog from "../components/homepage/Blog"
import Testimonials from "../components/homepage/Testimonials"
const IndexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marcin Zogrodnik - Strony internetowe",
    alternateName: "Marcin Zogrodnik - Strony internetowe",
    url: "https://marcinzogrodnik.pl",
    logo: "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Karolina Wawrzyniak",
      },
      reviewBody:
        "Współpraca z Marcinem była wspaniała. W błyskawicznym tempie odpowiadał na wszystkie moje zapytania i zamieszczał kolejne elementy na stronie. W cierpliwy sposób tłumaczył na czym polega budowanie strony internetowej i na czym jako przedsiębiorca powinnam się skupić najbardziej. W stu procentach spełnił moje oczekiwania, zatem mogę go polecić jako świetnego fachowca!",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "739907919",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
    sameAs: [
      "https://www.facebook.com/frontendmarcin",
      "https://instagram.com/marcinzogrodnik_www",
    ],
  }

  const indexQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "marcin-zogrodnik-facebook.png" }) {
        publicURL
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Tworzę strony i sklepy internetowe WordPress. Nowoczesne, statyczne witryny JAMstack. Wysokiej jakości kod to klucz do sukcesu Twojej firmy w sieci."
        schemaMarkup={schema}
        shareImage={indexQuote.file.publicURL}
      />

      <Hero />
      <Companies />
      <Offer />
      <GetQuote />
      <Portfolio />
      <Testimonials />
      <Blog />
    </Layout>
  )
}

export default IndexPage
