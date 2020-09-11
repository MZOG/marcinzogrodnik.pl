import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PageHero from "../components/pageHero.component";
import QuickContact from "../components/quickContact";


export default ({ data }) => {
    const showcase = data.datoCmsShowcase;
    const convertDate = (date) => {
        date = new Date(date);
        const args = [
            "pl",
            { day: "numeric", month: "long", year: "numeric" },
        ].filter(Boolean);

        return date.toLocaleDateString(...args);
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": showcase.title,
        "description": showcase.excerpt,
        "image": showcase.projectImage.fluid.src,
        "author": {
          "@type": "Person",
          "name": "Marcin Zogrodnik"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Marcin Zogrodnik",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.datocms-assets.com/30080/1599225992-marcinzogrodnik-default-image.jpg"
          }
        },
        "datePublished": showcase.meta.createdAt
      }

    return (
        <Layout>
            <SEO
                title={showcase.projectName}
                description={showcase.excerpt}
                shareImage={showcase.projectImage.fluid.src}
                schemaMarkup={schema}
            />
            <article className="container page blog-post">

            <div className="post-info">
                <div className="breadcrumbs">
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/realizacje`}>Realizacje</Link>
                        </li>
                        <li>
                            <Link to={`/blog/${showcase.slug}`}>
                                {showcase.projectName}
                            </Link>
                        </li>
                    </ul>
                </div>

                <p className="posted">
                    {convertDate(showcase.meta.createdAt)}
                </p>
            </div>

                <div className="blog-post-image">
                    <Img
                        fluid={showcase.projectImage.fluid}
                        className="main-image"
                    />
                </div>

                <PageHero
                    title={showcase.projectName}
                    lead={showcase.excerpt}
                />

                <div className="blog-post-content">

                    <div className="project-url">
                        <Link to={showcase.projectUrl} className="btn btn-primary">
                            Zobacz online
                        </Link>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                showcase.projectDescriptionNode
                                    .childMarkdownRemark.html,
                        }}
                    />

                    <div className="project-url">
                        <Link to={showcase.projectUrl} className="btn btn-primary">
                            Zobacz online
                        </Link>
                    </div>


                </div>
            </article>
            <QuickContact />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        datoCmsShowcase(slug: { eq: $slug }) {
            projectName
            projectDescriptionNode {
                childMarkdownRemark {
                    html
                }
            }
            id
            slug
            projectUrl
            excerpt
            meta {
                createdAt
            }
            projectImage {
                fluid(maxWidth: 870, imgixParams: { auto: "compress" }) {
                    ...GatsbyDatoCmsFluid
                    src
                }
            }
        }
    }
`;
