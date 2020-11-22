import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHero from "../../components/pageHero"
import { graphql } from "gatsby"
import ShowcaseItem from "../../components/showcaseItem"

const Realizacje = ({data}) => {
    const allShowcase = data.allDatoCmsShowcase.edges
    return (
        <Layout>
          <SEO
            title="Realizacje"
            description="Sprawdź ostatnie realizacje stron internetowych WordPress oraz Gatsby."
          />
          <section>
            <div className="container">
              <PageHero title="Realizacje" />

              <div className="showcase">
                {allShowcase.map(showcase => {
                  return (
                    <ShowcaseItem
                        key={showcase.node.id}
                        title={showcase.node.title}
                        image={showcase.node.image.fluid}
                        slug={showcase.node.slug}
                        description={showcase.node.seo.description}
                        url={showcase.node.projectUrl}
                    />
                  )
                })}
              </div>
            </div>
          </section>
        </Layout>
      )
};

export default Realizacje;

export const query = graphql`
query allShowcase {
    allDatoCmsShowcase(sort: {order: DESC, fields: meta___createdAt}) {
      edges {
        node {
          id
          contentNode {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(maxWidth: 540, imgixParams: { auto: "compress", lossless: true }) {
            ...GatsbyDatoCmsFluid
              src
            }
          }
          projectUrl
          meta {
            createdAt
          }
          slug
          title
          seo {
            description
            image {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
`