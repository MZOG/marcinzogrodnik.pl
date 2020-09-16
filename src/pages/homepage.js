import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Homepage = () => {
    return(
        <Layout>
            <SEO
                title="Marcin Zogrodnik"
                description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
                // schemaMarkup={schema}
            />

            <div className="container">
                <p>elson</p>
            </div>


            <div className="bg">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>

                <div class="lines-vert">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </Layout>

    )
}

export default Homepage