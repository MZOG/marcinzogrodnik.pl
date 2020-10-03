/* disable eslint */
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { Link } from "gatsby";
import PageHero from "../components/pageHero.component";
import QuickContact from "../components/quickContact";
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

export default ( ) => {


    return (
        <Layout>
            <SEO title="elo"/>

            <article className="container page blog-post">

            </article>
        </Layout>
    );
};
