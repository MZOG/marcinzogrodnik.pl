import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const Success = () => (
    <Layout>
        <SEO title="Wiadomość wysłana!" description="Twoja wiadomość została wysłana" />
        <section className="container page">

            <p>Twoja wiadomość została wysłana!</p>
        </section>
    </Layout>
);

export default Success;