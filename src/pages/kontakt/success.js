import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {Link} from 'gatsby'

const Success = () => (
    <Layout>
        <SEO title="Wiadomość wysłana!" description="Twoja wiadomość została wysłana" />
        <section className="container page">

            <Link to="/" className="btn">Powrót na stronę główną</Link>
        </section>
    </Layout>
);

export default Success;