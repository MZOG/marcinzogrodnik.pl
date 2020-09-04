import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const Hosting = () => (
    <Layout>
        <SEO title="Hosting" description="Hosting dla Twojej strony internetowej, szybki hosting VPS oraz kopie zapasowe." />
        <div className="container page">
            <PageHero
                title="Hosting"
                lead="Zapraszam do zapoznania się z ofertą hostingu"
            />

            <div className="content">
            <p>Oferta w przygotowaniu</p>
            </div>

            <QuickContact />
        </div>
    </Layout>
);

export default Hosting;
