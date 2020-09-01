import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const OpiekaNadStrona = () => (
    <Layout>
        <SEO title="Opieka nad stroną" />
        <div className="container page">
            <PageHero
                title="Opieka nad stroną"
                lead="Zapraszam do zapoznania się z ofertą opieki nad stroną"
            />
            <div className="content">
            <p>Opieka nad stroną</p>
            </div>
        </div>
    </Layout>
);

export default OpiekaNadStrona;
