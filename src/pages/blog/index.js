import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import SinglePost from "../../components/singlePost";

const Blog = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" description="Marcin Zogrodnik - Artykuły dotyczące świata Front-End." />
            <section className="container page blog-page">
                <PageHero
                    title="Blog"
                    lead="Artykuły na temat stron internetowych oraz Front End"
                />
                <div className="blog-articles">
                    {data.allDatoCmsBlog.edges.map((post) => {
                            console.log(post)
                            return(
                                <SinglePost post={post} key={post.id} />
                        )
                    })}
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query BlogQuery {
        allDatoCmsBlog(sort: { order: DESC, fields: meta___createdAt }) {
            edges {
                node {
                    id
                    content
                    excerpt
                    title
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

export default Blog;
