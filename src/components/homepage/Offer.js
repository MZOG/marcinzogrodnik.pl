import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

function Offer() {
  const offerQuery = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          name: { in: ["home-wordpress", "home-jamstack", "home-ecommerce"] }
        }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  let offer = [
    {
      id: offerQuery.allFile.nodes[0].id,
      title: "WordPress",
      lead:
        "Najpopularniejszy i intuicyjny system zarządzania treścią WordPress",
      url: "/oferta/strony-internetowe-wordpress",
      btnText: "Więcej",
      image: offerQuery.allFile.nodes[0].childImageSharp.fluid,
    },
    {
      id: offerQuery.allFile.nodes[1].id,
      title: "JAMstack",
      lead:
        "Nowoczesne rozwiązania statycznych stron internetowych + Headless CMS",
      url: "/oferta/strony-internetowe-jamstack",
      btnText: "Więcej",
      image: offerQuery.allFile.nodes[1].childImageSharp.fluid,
    },
    {
      id: offerQuery.allFile.nodes[2].id,
      title: "eCommerce",
      lead:
        "Sprzedawaj w internecie swoje produkty w łatwym w obsłudze sklepie internetowym",
      url: "/oferta/sklepy-internetowe",
      btnText: "Więcej",
      image: offerQuery.allFile.nodes[2].childImageSharp.fluid,
    },
  ]

  return (
    <section className="home_offer">
      <div className="container">
        <h2>
          <span>Strona internetowa</span>, która przynosi zysk
        </h2>
        <p>
          Masz firmę bez <span>strony internetowej</span>? Nie trać klientów,
          nie polegaj tylko na social mediach. Nawet prosta strona wizytówka, to{" "}
          <span>duży plus dla Twojej firmy</span>.
        </p>

        <div className="home_offer-content">
          {offer.map(item => (
            <article className="home_offer-content-item" key={item.id}>
              <Link to={item.url}>
                <Img fluid={item.image} />
              </Link>
              <h3>{item.title}</h3>
              <p>{item.lead}</p>
              <Link to={item.url}>{item.btnText} →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offer
