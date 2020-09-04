import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const Success = () => (
    <Layout>
        <SEO title="Wiadomość wysłana!" description="Twoja wiadomość została wysłana" />
        <section className="container page">
            <PageHero title="Dziękuję za wiadomość" />
            <p>Twoja wiadomość została wysłana!</p>
        </section>
    </Layout>
);

export default Success;