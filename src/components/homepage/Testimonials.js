import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
  const testimonialQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "testimonial-image.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      allDatoCmsTestimonial {
        nodes {
          content
          company
          name
          id
        }
      }
    }
  `)

  return (
    <section className="home_testimonials">
      <div className="container">
        <h2>Opinie klientów</h2>
        <div className="content">
          {testimonialQuote.allDatoCmsTestimonial.nodes.map(testimonial => (
            <article key={testimonial.id} className="content-item">
              <p>{testimonial.content}</p>
              <p className="author">
                {testimonial.name} - {testimonial.company}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
