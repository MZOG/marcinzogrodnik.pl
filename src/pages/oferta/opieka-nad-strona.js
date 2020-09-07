import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import PageHero from "../../components/pageHero.component";
import QuickContact from "../../components/quickContact";

const OpiekaNadStrona = (query) => {
    const shareImageName = "oferta-opieka_nad_strona";
    let shareImage;

    query.data.allFile.edges.map(image => {
        if (image.node.name === shareImageName) {
            shareImage = image.node.publicURL
        }
    })

    return (
    <Layout>
        <SEO title="Opieka nad stroną"
        description="Nie masz czasu zajmować się swoją stroną internetową? Dla mnie to nie problem! Zajmę się każdą drobnostką na Twojej stronie internetowej."
        shareImage={shareImage} />
        <div className="container page">
            <PageHero
                title="Opieka nad stroną"
                lead="Zapraszam do zapoznania się z ofertą opieki nad stroną"
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
  query opieka {
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


export default OpiekaNadStrona;
