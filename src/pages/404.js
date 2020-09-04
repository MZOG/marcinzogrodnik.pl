import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import PageHero from "../components/pageHero.component";

const NotFoundPage = () => (
    <Layout>
        <SEO title="Ups.." description="Wygląda na to, że wyszukiwana strona nie istnieje.." />
            <section className="not-found">
                <div className="container page">
                    <div className="content">
                    <PageHero
                    title="Nie ma takiej strony.."
                    lead="Wygląda na to, że wyszukiwana strona nie istnieje"
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

export default NotFoundPage;
