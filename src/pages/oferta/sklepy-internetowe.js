import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const SklepyInternetowe = () => (
    <Layout>
        <SEO title="Sklep internetowy" />
        <div className="container offer-page">
            <PageHero
                title="Sklepy internetowe Katowice"
                lead="Zapraszam do zapoznania się z ofertą sklepów internetowych"
            />
            <div className="content">Elson</div>
        </div>
    </Layout>
);

export default SklepyInternetowe;
