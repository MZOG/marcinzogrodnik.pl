import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import ShowcasePost from "../../components/showcasePost";

const Blog = ({ data }) => {
    return (
        <Layout>
            <SEO title="Realizacje" />
            <section className="container page blog-page">
                <PageHero
                    title="Realizacje"
                    lead="Projekty stron internetowych"
                />
                <div className="blog-articles">
                    {data.allDatoCmsShowcase.edges.map((post) => (
                        <ShowcasePost project={post} key={post.id} />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query RealizacjeQuery {
        allDatoCmsShowcase(
            sort: { fields: meta___createdAt, order: DESC }
            limit: 4
        ) {
            edges {
                node {
                    id
                    slug
                    excerpt
                    projectName
                    projectUrl
                    projectDescription
                    projectImage {
                        fluid(
                            maxWidth: 700
                            imgixParams: { auto: "compress" }
                        ) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                    meta {
                        createdAt
                    }
                }
            }
        }
    }
`;

export default Blog;
