import React from 'react'
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
const Tag = (data) => {
    return(
        <Layout>
            <SEO title="Blog" description="Marcin Zogrodnik - Artykuły dotyczące świata Front-End." />
            <section className="container page blog-page">
                tags
            </section>
        </Layout>
    )
}

export const query = graphql`
    query TagQuery {
        allDatoCmsBlog(sort: { order: DESC, fields: meta___createdAt }) {
            edges {
                node {
                    id
                    content
                    excerpt
                    title
                    tags
                    slug
                    meta {
                        createdAt
                    }
                    postImage {
                        fluid(
                            maxWidth: 700
                            imgixParams: { auto: "compress" }
                        ) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    }
`;

export default Tag;