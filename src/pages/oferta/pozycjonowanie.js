import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const Pozycjonowanie = () => (
    <Layout>
        <SEO title="Pozycjonowanie" description="Twoja strona jest daleko w tyle za konkurencją? Pozycjonowanie strony to jedna z najważniejszych rzeczy na stronie internetowej." />
        <div className="container page">
            <PageHero
                title="Pozycjonowanie"
                lead="Zapraszam do zapoznania się z ofertą pozycjonowania"
            />
            <div className="content">
            <p>Oferta w przygotowaniu</p>
            </div>

            <QuickContact />
        </div>
    </Layout>
);

export default Pozycjonowanie;
