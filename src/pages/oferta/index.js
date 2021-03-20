import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PageTitle from "../../components/PageTitle"

const Oferta = () => {
  const offerQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "get-quote.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      allFile(
        filter: {
          name: {
            in: [
              "offer-wordpress"
              "offer-jamstack"
              "offer-sklepy"
              "offer-optymalizacja"
              "offer-pozycjonowanie"
              "offer-opieka"
              "offer-share"
            ]
          }
        }
        sort: { fields: modifiedTime, order: ASC }
      ) {
        nodes {
          publicURL
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  `)

  const offerItems = [
    {
      id: 1,
      title: "Strona internetowa WordPress",
      desc:
        "Łatwa w zarządzaniu strona internetowa WordPress dla Twojej firmy.",
      image: offerQuote.allFile.nodes[0].childImageSharp.fluid,
      url: "/oferta/strony-internetowe-wordpress",
    },
    {
      id: 2,
      title: "Strona internetowa JAMstack",
      desc:
        "Statyczne strony internetowe to przede wszystkim szybkość, która zostawi w tle konkurencję.",
      image: offerQuote.allFile.nodes[1].childImageSharp.fluid,
      url: "/oferta/strony-internetowe-jamstack",
    },
    {
      id: 3,
      title: "Sklepy internetowe",
      desc: "Tworzę sklepy internetowe WooCommerce, BigCommerce oraz Shopify.",
      image: offerQuote.allFile.nodes[2].childImageSharp.fluid,
      url: "/oferta/sklepy-internetowe",
    },
    {
      id: 4,
      title: "Optymalizacja",
      desc:
        "Statyczna strona internetowa Gatsby lub Next.js z panelem administracyjnym, oraz darmowym hostingiem Netlify.",
      image: offerQuote.allFile.nodes[3].childImageSharp.fluid,
      url: "/oferta/optymalizacja-strony-internetowej",
    },
    {
      id: 5,
      title: "Pozycjonowanie",
      desc:
        "Twoja strona jest nisko w wynikach wyszukiwania? Poprawmy SEO na Twojej stronie.",
      image: offerQuote.allFile.nodes[4].childImageSharp.fluid,
      url: "/oferta/pozycjonowanie-seo",
    },
    {
      id: 6,
      title: "Opieka nad stroną",
      desc:
        "Nie masz czasu zajmować się swoją stroną internetową? Zapewniam opiekę nad stroną pod względem technicznym oraz wizualnym.",
      image: offerQuote.allFile.nodes[5].childImageSharp.fluid,
      url: "/oferta/opieka-nad-strona",
    },
  ]

  const path = window.location.href

  return (
    <Layout>
      <SEO
        title="Oferta"
        description="Poznaj ofertę stron internetowych WordPress oraz JAMstack. Uczysz się programować i masz problem? Napisz do mnie! Na pewno rozwiążemy Twój problem."
        path={path}
        shareImage={offerQuote.allFile.nodes[6].publicURL}
      />
      <section className="page page_offer">
        <div className="container">
          <PageTitle
            title="Oferta"
            lead="Poznaj ofertę stron internetowych WordPress oraz JAMstack. Uczysz się programować i masz problem? Napisz do mnie! Na pewno rozwiążemy Twój problem."
          />

          <div className="page_offer_boxes">
            {offerItems.map(item => (
              <article className="page_offer_item" key={item.id}>
                <Link to={item.url}>
                  <Img fluid={item.image} alt={item.title} />
                </Link>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="page_offer_item-cta">
                  <Link to={item.url}>Dowiedz się więcej →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Oferta
