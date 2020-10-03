import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PageHero from "../components/pageHero.component";
import QuickContact from "../components/quickContact";


export default ({ data }) => {
    return (
        <Layout>
            <SEO

            />
            <article className="container page blog-post">


            </article>
            <QuickContact />
        </Layout>
    );
};
