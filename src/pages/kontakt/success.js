import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

const Success = () => {
    const successQuote = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "kontakt-fb.png" }) {
        publicURL
      }
    }
  `)

    return(
    <Layout>
        <SEO
            title="Wiadomość wysłana!"
            description="Twoja wiadomość została wysłana"
            shareImage={successQuote.file.publicURL}
        />

        <section className="container page success">
            <h1>Dziękuję za wiadomość</h1>

            <p>Twoja wiadomość już jest u mnie na skrzynce, zapoznam się z nią i odpiszę lub oddzwonię.</p>

            <Link to="/" className="btn primary">Powrót na stronę główną</Link>
        </section>
    </Layout>
);

export default Success;