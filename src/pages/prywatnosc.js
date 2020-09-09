import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import PageHero from "../components/pageHero.component";

const Prywatnosc = () => (
    <Layout>
        <SEO title="Polityka Prywatności" description="Polityka prywatności storny marcinzogrodnik.pl" />
            <section className="not-found">
                <div className="container page">
                    <div className="content">
                    <PageHero
                    title="Polityka Prywatności"
                />

                    <div className="not-found-btn">
                        <Link to="/" className="btn btn-primary">
                            Strona główna
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default Prywatnosc;