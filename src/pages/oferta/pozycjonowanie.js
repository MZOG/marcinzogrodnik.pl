import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const Pozycjonowanie = (query) => {
    const shareImageName = "oferta-pozycjonowanie";
    let shareImage;

    query.data.allFile.edges.map(image => {
        if (image.node.name === shareImageName) {
            shareImage = image.node.publicURL
        }
    })

    return (
    <Layout>
        <SEO title="Pozycjonowanie" description="Twoja strona jest daleko w tyle za konkurencją? Pozycjonowanie strony to jedna z najważniejszych rzeczy na stronie internetowej."
        shareImage={shareImageName} />
        <div className="container page">
            <PageHero
                title="Pozycjonowanie"
                lead="Zapraszam do zapoznania się z ofertą pozycjonowania"
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
  query pozycjonowanie {
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

export default Pozycjonowanie;
