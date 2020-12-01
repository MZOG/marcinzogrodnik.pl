import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {Link} from 'gatsby'

const Success = () => (
    <Layout>
        <SEO title="Wiadomość wysłana!" description="Twoja wiadomość została wysłana" />
        <section className="container page success">
            <h1>Dziękuję za wiadomość</h1>

            <p>Twoja wiadomość już jest u mnie na skrzynce, zapoznam się z nią i odpiszę lub oddzwonię.</p>

            <Link to="/" className="btn primary">Powrót na stronę główną</Link>
        </section>
    </Layout>
);

export default Success;