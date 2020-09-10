/* eslint-disable */
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const ProjektyGraficzne = (query) => {
    const shareImageName = "oferta-projekty_graficzne";
    let shareImage;

    query.data.allFile.edges.map(image => {
        if (image.node.name === shareImageName) {
            shareImage = image.node.publicURL
        }
    })

    return (
    <Layout>
        <SEO title="Projekty graficzne"
        description="Potrzebujesz odświeżyć swoją stronę internetową, lub zaprojektować nową funkcjonalność? Dobrze trafiłeś."
        shareImage={shareImage} />
        <div className="container page">
            <PageHero
                title="Projekty graficzne"
                lead="Zapraszam do zapoznania się z ofertą projektów graficznych"
            />
            <div className="content">
            <p>Oferta w przygotowaniu</p>
            </div>

            <QuickContact />
        </div>
    </Layout>
);

}

export const query = graphql`
  query projektyGraficzne {
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

export default ProjektyGraficzne;
