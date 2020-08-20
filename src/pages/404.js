import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <SEO title="WAT?" />
        <section className="not-found">
            <div className="container">
                <div className="content">
                    <h1>NOT FOUND</h1>
                    <p>
                        You just hit a route that doesn&#39;t exist... the
                        sadness.
                    </p>

                    <Link to="/" className="btn">
                        Back home
                    </Link>
                </div>
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
