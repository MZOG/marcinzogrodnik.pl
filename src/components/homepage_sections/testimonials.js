import React from "react"
import { useStaticQuery, graphql} from "gatsby"

function Testimonials() {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsTestimonial {
      edges {
        node {
          id
          content
          name
          url
          company
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


  return (
    <section className="home_testimonials">
      <div className="container">
          <h2>Opinie klientów</h2>

          <p className="lead">Poznaj opinię klientów</p>

          <div className="home_testimonials-items">
            {data.allDatoCmsTestimonial.edges.map(testimonial => (
              <article key={testimonial.node.id} className="home_testimonials-item">
                <p className="content">{testimonial.node.content}</p>
                <p className="author">
                  {testimonial.node.name} - {testimonial.node.company}
                </p>
                <a href={`https://${testimonial.node.url}`}>{testimonial.node.url}</a>
              </article>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Testimonials;