import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql} from "gatsby"

// COMPONENTS
import Hero from "../components/homepage/Hero"

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query homepageQuery {
  //     allDatoCmsShowcase(
  //       sort: { fields: meta___createdAt, order: DESC }
  //       limit: 2
  //     ) {
  //       edges {
  //         node {
  //           id
  //           title
  //           slug
  //           image {
  //             fluid(
  //               maxWidth: 800
  //               imgixParams: { auto: "compress", lossless: true }
  //             ) {
  //               ...GatsbyDatoCmsFluid
  //               src
  //             }
  //           }
  //         }
  //       }
  //     }

  //     allDatoCmsPost(
  //       sort: { order: DESC, fields: meta___createdAt }
  //       limit: 2
  //     ) {
  //       edges {
  //         node {
  //           title
  //           slug
  //           id
  //           meta {
  //             createdAt(formatString: "D MMMM YYYY")
  //           }
  //           seo {
  //             description
  //           }
  //           image {
  //             fluid(
  //               maxWidth: 800
  //               imgixParams: { auto: "compress", lossless: true }
  //             ) {
  //               ...GatsbyDatoCmsFluid
  //               src
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marcin Zogrodnik - Strony internetowe",
    alternateName: "Marcin Zogrodnik - Strony internetowe",
    url: "https://marcinzogrodnik.pl",
    logo: "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karolina Wawrzyniak"
      },
      "reviewBody": "Współpraca z Marcinem była wspaniała. W błyskawicznym tempie odpowiadał na wszystkie moje zapytania i zamieszczał kolejne elementy na stronie. W cierpliwy sposób tłumaczył na czym polega budowanie strony internetowej i na czym jako przedsiębiorca powinnam się skupić najbardziej. W stu procentach spełnił moje oczekiwania, zatem mogę go polecić jako świetnego fachowca!"
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

  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Tworzę strony i sklepy internetowe WordPress. Nowoczesne, statyczne witryny JAMstack. Wysokiej jakości kod to klucz do sukcesu Twojej firmy w sieci."
        schemaMarkup={schema}
      />

      <Hero />
    </Layout>
  )
}

export default IndexPage
