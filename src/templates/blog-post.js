/* disable eslint */
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PageHero from "../components/pageHero.component";
import QuickContact from "../components/quickContact";

export default ({ data }) => {
    const post = data.datoCmsBlog;

    const timeToRead = (time) => {
        switch (time) {
            case 1:
                return `${time} minuta czytania`;
            case time > 1:
                return `${time} minuty czytania`;
            case time > 4:
                return `${time} minut czytania`;
            default:
                break;
        }
    };

    const convertDate = (date) => {
        date = new Date(date);
        const args = [
            "pl",
            { day: "numeric", month: "long", year: "numeric" },
        ].filter(Boolean);

        return date.toLocaleDateString(...args);
    };

    return (
        <Layout>
            <SEO
                title={post.title}
                description={post.excerpt}
                shareImage={post.postImage.fluid.src}
            />

            <article className="container page blog-post">

            <div className="post-info">
                        <div className="breadcrumbs">
                            <ul>
                                <li>
                                    <Link to={`/`}>Home</Link>
                                </li>
                                <li>
                                    <Link to={`/blog`}>Blog</Link>
                                </li>
                                <li>
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <p className="posted">
                            {convertDate(post.meta.createdAt)} /{" "}
                            {timeToRead(
                                post.contentNode.childMarkdownRemark.timeToRead,
                            )}
                        </p>
                    </div>

                <div className="blog-post-image">
                    <Img fluid={post.postImage.fluid} className="main-image" />
                </div>
                <PageHero title={post.title} lead={post.excerpt} />
                <div className="blog-post-content">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.contentNode.childMarkdownRemark.html,
                        }}
                    />
                </div>
            </article>
            <QuickContact />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        datoCmsBlog(slug: { eq: $slug }) {
            contentNode {
                childMarkdownRemark {
                    html
                    wordCount {
                        words
                    }
                    timeToRead
                }
            }
            excerpt
            title
            slug
            meta {
                createdAt
            }
            postImage {
                fluid(maxWidth: 1150, imgixParams: { auto: "compress" }) {
                    ...GatsbyDatoCmsFluid
                    src
                }
            }
        }
    }
`;
