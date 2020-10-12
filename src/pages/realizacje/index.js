import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import PageHero from "../../components/pageHero"

const Realizacje = () => {
    return (
        <Layout>
            <SEO title="Realizacje" description="Zobacz moje ostatnie realizacje dla klientów, strony internetowe oraz sklepy. WordPress i JAMstack." />
            <section>
                <div className="container">
                    <PageHero hero="Realizacje" lead="Sprawdź ostatnie realizacje wykonane dla firm oraz klientów indywidualnych." />
                </div>
            </section>
        </Layout>
    );
};

export default Realizacje;
