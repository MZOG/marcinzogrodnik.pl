import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const Blog = () => {


    return (
        <Layout>
            <SEO
                title="Blog"
                description="Marcin Zogrodnik - Artykuły dotyczące świata Front-End."
             />
            <section className="container page blog-page">

            </section>
        </Layout>
    );
};

export default Blog;
