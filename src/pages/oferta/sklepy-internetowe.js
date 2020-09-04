import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const SklepyInternetowe = () => (
    <Layout>
        <SEO title="Sklep internetowy" description="Specjalizuję się w sklepach internetowych opartych o WooCommerce. Sprzedawaj więcej w sieci!"/>
        <div className="container page">
            <PageHero
                title="Sklepy internetowe"
                lead="Zapraszam do zapoznania się z ofertą sklepów internetowych"
            />
            <div className="content">
            <p>Oferta w przygotowaniu</p>

            <QuickContact />
            </div>
        </div>
    </Layout>
);

export default SklepyInternetowe;
