import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const Hosting = () => (
    <Layout>
        <SEO title="Hosting" />
        <div className="container offer-page">
            <PageHero
                title="Hosting"
                lead="Zapraszam do zapoznania się z ofertą hostingu"
            />

            <div className="content">
            <p>Hosting stron internetowych</p>
            </div>
        </div>
    </Layout>
);

export default Hosting;
