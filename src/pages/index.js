import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql} from "gatsby"

// homepage components
import Hero from "../components/homepage_sections/hero"
import Offer from "../components/homepage_sections/offer"
import OfferMore from "../components/homepage_sections/more-offer"
import Process from "../components/homepage_sections/process"
import CallMe from "../components/homepage_sections/call-me"
import Blog from "../components/homepage_sections/blog"
import Portfolio from "../components/homepage_sections/portfolio"
import Testimonials from "../components/homepage_sections/testimonials"
import Brief from "../components/homepage_sections/wycena-strony"

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      allDatoCmsShowcase(
        sort: { fields: meta___createdAt, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            id
            title
            slug
            projectUrl
            image {
              fluid(
                maxWidth: 800
                imgixParams: { auto: "compress", lossless: true }
              ) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
            seo {
              description
            }
          }
        }
      }

      allDatoCmsPost(
        sort: { order: DESC, fields: meta___createdAt }
        limit: 4
      ) {
        edges {
          node {
            title
            slug
            id
            meta {
              createdAt(formatString: "D MMMM YYYY")
            }
            seo {
              description
            }
            image {
              fluid(
                maxWidth: 800
                imgixParams: { auto: "compress", lossless: true }
              ) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
          }
        }
      }
    }
  `)

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

  let metaInfo = {
    title: "Strona Główna",
    description: "Nowoczesne rozwiązania, które przynoszą rezultaty. Strony internetowe WordPress, JAMstack. Sklepy internetowe Katowice. Strony internetowe dostosowane do Twoich potrzeb."
  }

  return (
    <Layout path={props.location.pathname}>
      <SEO title={metaInfo.title} description={metaInfo.description} schemaMarkup={schema} />
      <Hero />
      <Portfolio data={data.allDatoCmsShowcase} />
      <Testimonials />
      <Offer />
      <Brief />
      <OfferMore />
      <Process />
      <CallMe />
      <Blog data={data.allDatoCmsPost}/>
    </Layout>
  )
}

export default IndexPage
