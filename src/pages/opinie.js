import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import TestimonialItem from '../components/testimonialItem'
import { graphql } from 'gatsby'

const Opinie = ({data}) => {
  const testimonials = data.allDatoCmsTestimonial.edges
  return (
    <Layout>
      <SEO title="Opinie" />
      <section className="container">
        <PageHero hero="Opinie" lead="Sprawdź co mówią o mnie moi klienci." />

        <div className="testimonials">
          {testimonials.map(testimonial => (
            <TestimonialItem
              key={testimonial.node.id}
              image={testimonial.node.avatar.fixed.src}
              roundedImage={testimonial.node.roundedImage}
              content={testimonial.node.testimonial}
              author={testimonial.node.author}
              www={testimonial.node.website} />
          ))}
        </div>
      </section>
    </Layout>
  )

}

export default Opinie;

export const query = graphql`
query Testimonials {
  allDatoCmsTestimonial(sort: {order: DESC, fields: meta___createdAt}) {
    edges {
      node {
        id
        author
        testimonial
        website
        roundedImage
        avatar {
          fixed {
            src
          }
        }
      }
    }
  }
}`