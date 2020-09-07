import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const SklepyInternetowe = (query) => {
    const shareImageName = "oferta-sklepy-internetowe";
    let shareImage;

    query.data.allFile.edges.map(image => {
        if (image.node.name === shareImageName) {
            shareImage = image.node.publicURL
        }
    })

    return (
    <Layout>
        <SEO title="Sklepy internetowe"
        description="Specjalizuję się w sklepach internetowych opartych o WooCommerce. Sprzedawaj więcej w sieci!"
        shareImage={shareImage}
    />
        <div className="container page">
            <PageHero
                title="Sklepy internetowe"
                lead="Zapraszam do zapoznania się z ofertą sklepów internetowych"
            />
            <div className="content">
            <p>Oferta w przygotowaniu</p>

            <QuickContact />
            </div>
        </div>
    </Layout>
    );
}

export const query = graphql`
  query sklepyInternetowe {
    allFile(filter: {extension: {eq: "jpg"}}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
  }
`

export default SklepyInternetowe;
