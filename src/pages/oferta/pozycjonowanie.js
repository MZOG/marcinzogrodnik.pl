import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const Pozycjonowanie = () => (
    <Layout>
        <SEO title="Pozycjonowanie" />
        <div className="container offer-page">
            <PageHero
                title="Pozycjonowanie"
                lead="Zapraszam do zapoznania się z ofertą pozycjonowania"
            />
            <div className="content">
            <p>Pozycjonowanie</p>
            </div>
        </div>
    </Layout>
);

export default Pozycjonowanie;
