import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const OpiekaNadStrona = () => (
    <Layout>
        <SEO title="Opieka nad stroną" />
        <div className="container page">
            <PageHero
                title="Opieka nad stroną"
                lead="Zapraszam do zapoznania się z ofertą opieki nad stroną"
            />
            <div className="content">
            <p>Oferta w przygotowaniu</p>
            </div>

            <QuickContact />
        </div>
    </Layout>
);

export default OpiekaNadStrona;
