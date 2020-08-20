import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";

const StronyInternetowe = () => (
    <Layout>
        <SEO title="Strona internetowa" />
        <div className="container offer-page">
            <PageHero
                title="Strony internetowe Katowice"
                lead="Zapraszam do zapoznania się z ofertą stron internetowych"
            />

            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Cursus turpis massa tincidunt dui. Eget nunc
                    lobortis mattis aliquam faucibus purus in. Fusce id velit ut
                    tortor pretium. Eget lorem dolor sed viverra ipsum nunc.
                    Varius sit amet mattis vulputate enim nulla aliquet
                    porttitor lacus. Amet commodo nulla facilisi nullam
                    vehicula. Ac ut consequat semper viverra nam libero justo
                    laoreet sit. Faucibus vitae aliquet nec ullamcorper sit amet
                    risus nullam. Faucibus nisl tincidunt eget nullam non.
                    Volutpat odio facilisis mauris sit amet massa vitae tortor
                    condimentum.
                </p>
            </div>
        </div>
    </Layout>
);

export default StronyInternetowe;
