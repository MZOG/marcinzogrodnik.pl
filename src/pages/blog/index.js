import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import SinglePost from "../../components/singlePost";

const Blog = ({ data }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Marcin Zogrodnik",
        "description": "Marcin Zogrodnik - Artykuły dotyczące świata Front-End.",
        "image": "https://www.datocms-assets.com/30080/1599225992-marcinzogrodnik-default-image.jpg",
        "url": "https://marcinzogrodnik.pl",
        "telephone": "739907919",
        "priceRange": "2000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ułańska 66",
          "addressLocality": "Lędziny",
          "postalCode": "43-143",
          "addressCountry": "PL"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://facebook.com/frontendmarcin",
          "https://github.com/MZOG",
          "https://marcinzogrodnik.pl"
        ]
      }

    return (
        <Layout>
            <SEO
                title="Blog"
                description="Marcin Zogrodnik - Artykuły dotyczące świata Front-End."
                schemaMarkup={schema}
             />
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
