import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"

const GetQuote = () => {
  const getQuote = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "get-quote.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return(
    <section className="home_quote">
      <div className="container">
        <div className="content">
          <div className="content_left">
            <Img fluid={getQuote.file.childImageSharp.fluid} />
          </div>
          <div className="content_right">
            <h2>Darmowa wycena strony internetowej</h2>
            <p>
              Wypełnij krótki formularz i dowiedz się ile kosztuje strona internetowa WordPress
              lub JAMstack. <span>Odpowiedź w ciągu 24 godzin!</span>
            </p>
            <Link to="/darmowa-wycena-strony">
              Wypełnij formularz →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetQuote