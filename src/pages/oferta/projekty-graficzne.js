import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const ProjektyGraficzne = () => (
    <Layout>
        <SEO title="Projekty graficzne" />
        <div className="container page">
            <PageHero
                title="Projekty graficzne"
                lead="Zapraszam do zapoznania się z ofertą projektów graficznych"
            />
            <div className="content">
            <p>Projekty Graficzne</p>
            </div>

            <QuickContact />
        </div>
    </Layout>
);

export default ProjektyGraficzne;
