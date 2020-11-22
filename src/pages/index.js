import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query homepageQuery {
      allDatoCmsShowcase(
        sort: { fields: meta___createdAt, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            id
            title
            tags
            slug
            projectUrl
            image {
              fluid(maxWidth: 735) {
                ...GatsbyDatoCmsFluid_tracedSVG
              }
            }
            seo {
              description
            }
          }
        }
      }

      allDatoCmsPost(
        sort: { order: DESC, fields: meta___createdAt }
        limit: 3
      ) {
        edges {
          node {
            title
            slug
            id
            meta {
              createdAt(formatString: "D MMMM YYYY")
            }
            seo {
              description
            }
          }
        }
      }
      iphone: file(relativePath: { eq: "iphone.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      macbook: file(relativePath: { eq: "macbook.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      iphoneImage: file(
        relativePath: { eq: "portfolio/doradcajezykowy-mobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      macbookImage: file(
        relativePath: { eq: "portfolio/doradcajezykowy.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      heroImage: file(relativePath: { eq: "macbook.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const heroImage = data.heroImage.childImageSharp.fluid
  console.log(heroImage)

  const projects = data.allDatoCmsShowcase.edges
  const posts = data.allDatoCmsPost.edges
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marcin Zogrodnik - Strony internetowe",
    alternateName: "Marcin Zogrodnik - Strony internetowe",
    url: "https://marcinzogrodnik.pl",
    logo: "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "739907919",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
    sameAs: [
      "https://www.facebook.com/frontendmarcin",
      "https://instagram.com/marcinzogrodnik.pl",
    ],
  }

  let formatter = new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
        schemaMarkup={schema}
      />

      <section className="homepage">
        <div className="homepage__hero">
          <div className="container">
            <div className="homepage__hero-text">
              <p className="homepage__hero-text-top">Szybkie i nowoczesne</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.951"
                height="21.099"
                viewBox="0 0 20.951 21.099"
              >
                <g
                  id="Component_1_54"
                  data-name="Component 1 – 54"
                  transform="translate(20.773 4.998) rotate(105)"
                  opacity="0.295"
                >
                  <g
                    id="Path_23"
                    data-name="Path 23"
                    transform="matrix(0.914, 0.407, -0.407, 0.914, 4.883, 1.346)"
                    fill="rgba(255,255,255,0)"
                    stroke-linecap="round"
                  >
                    <path
                      d="M 10.44311428070068 11.49104595184326 L 10.42785453796387 11.49098587036133 L 1.152254343032837 11.42481517791748 C 0.4054043292999268 11.41949558258057 -0.2664956748485565 11.02772521972656 -0.6450756788253784 10.37685585021973 C -1.025105714797974 9.723485946655273 -1.033095717430115 8.942095756530762 -0.6664456725120544 8.286655426025391 L 3.91344428062439 0.09932561218738556 C 4.284214496612549 -0.5634843707084656 4.958064556121826 -0.9591943621635437 5.716004371643066 -0.9591943621635437 C 6.477494239807129 -0.9591943621635437 7.158764362335205 -0.5608243942260742 7.53840446472168 0.1064456105232239 L 12.23411464691162 8.359965324401855 C 12.61091423034668 9.022255897521973 12.60860443115234 9.808435440063477 12.22794437408447 10.46297550201416 C 11.85355472564697 11.10671520233154 11.18632411956787 11.49104595184326 10.44311428070068 11.49104595184326 Z"
                      stroke="none"
                    />
                    <path
                      d="M 5.716003894805908 0.04080677032470703 C 5.351981639862061 0.04080677032470703 4.990243911743164 0.22271728515625 4.786174297332764 0.5875253677368164 L 0.2062845230102539 8.774855613708496 C -0.2016658782958984 9.504125595092773 0.3267545700073242 10.41889572143555 1.159384727478027 10.42484569549561 L 10.43498420715332 10.49101543426514 C 10.43772888183594 10.49103546142578 10.44037628173828 10.49104499816895 10.44311332702637 10.49104499816895 C 11.27090930938721 10.49104499816895 11.78181552886963 9.587203025817871 11.36493396759033 8.854465484619141 L 6.669234275817871 0.6009559631347656 C 6.456966400146484 0.2278680801391602 6.085307598114014 0.04080677032470703 5.716003894805908 0.04080677032470703 M 5.716004371643066 -1.959194183349609 C 6.824854373931885 -1.959194183349609 7.856204032897949 -1.357173919677734 8.407574653625488 -0.3880739212036133 L 13.10328483581543 7.865455627441406 C 13.64992427825928 8.826275825500488 13.64574432373047 10.01422595977783 13.09237480163574 10.9657154083252 C 12.53689384460449 11.92082595825195 11.54652404785156 12.49104595184326 10.44311428070068 12.49104595184326 L 10.42038440704346 12.49096584320068 L 1.145113945007324 12.42479515075684 C 0.04104423522949219 12.41690540313721 -0.9513254165649414 11.83926582336426 -1.509495735168457 10.87961578369141 C -2.06911563873291 9.917475700378418 -2.080215454101562 8.76563549041748 -1.539175987243652 7.798455715179443 L 3.040704727172852 -0.3888645172119141 C 3.582534313201904 -1.357484817504883 4.607654094696045 -1.959194183349609 5.716004371643066 -1.959194183349609 Z"
                      stroke="none"
                      fill="#00304d"
                    />
                  </g>
                </g>
              </svg>
              <h1>
                <span>Strony internetowe</span>
                <span className="highlight">WordPress</span> &{" "}
                <span className="highlight">JAMstack</span>
              </h1>
              <p className="homepage__hero-text-lead">
                Poznaj szybkość statycznych stron <strong>JAMstack</strong>,
                oraz nieograniczone możliwości systemu{" "}
                <strong>WordPress</strong>.
              </p>
              <svg className="red" xmlns="http://www.w3.org/2000/svg" width="20.033" height="19.665" viewBox="0 0 20.033 19.665">
                <g id="Component_1_55" data-name="Component 1 – 55" transform="matrix(0.966, -0.259, 0.259, 0.966, 0, 4.262)" opacity="0.5">
                  <g id="Path_23" data-name="Path 23" transform="matrix(0.914, 0.407, -0.407, 0.914, 4.883, 1.346)" fill="rgba(255,255,255,0)" stroke-linecap="round">
                    <path d="M 10.44311428070068 11.49104595184326 L 10.42785453796387 11.49098587036133 L 1.152254343032837 11.42481517791748 C 0.4054043292999268 11.41949558258057 -0.2664956748485565 11.02772521972656 -0.6450756788253784 10.37685585021973 C -1.025105714797974 9.723485946655273 -1.033095717430115 8.942095756530762 -0.6664456725120544 8.286655426025391 L 3.91344428062439 0.09932561218738556 C 4.284214496612549 -0.5634843707084656 4.958064556121826 -0.9591943621635437 5.716004371643066 -0.9591943621635437 C 6.477494239807129 -0.9591943621635437 7.158764362335205 -0.5608243942260742 7.53840446472168 0.1064456105232239 L 12.23411464691162 8.359965324401855 C 12.61091423034668 9.022255897521973 12.60860443115234 9.808435440063477 12.22794437408447 10.46297550201416 C 11.85355472564697 11.10671520233154 11.18632411956787 11.49104595184326 10.44311428070068 11.49104595184326 Z" stroke="none"/>
                    <path d="M 5.716003894805908 0.04080677032470703 C 5.351981639862061 0.04080677032470703 4.990243911743164 0.22271728515625 4.786174297332764 0.5875253677368164 L 0.2062845230102539 8.774855613708496 C -0.2016658782958984 9.504125595092773 0.3267545700073242 10.41889572143555 1.159384727478027 10.42484569549561 L 10.43498420715332 10.49101543426514 C 10.43772888183594 10.49103546142578 10.44037628173828 10.49104499816895 10.44311332702637 10.49104499816895 C 11.27090930938721 10.49104499816895 11.78181552886963 9.587203025817871 11.36493396759033 8.854465484619141 L 6.669234275817871 0.6009559631347656 C 6.456966400146484 0.2278680801391602 6.085307598114014 0.04080677032470703 5.716003894805908 0.04080677032470703 M 5.716004371643066 -1.959194183349609 C 6.824854373931885 -1.959194183349609 7.856204032897949 -1.357173919677734 8.407574653625488 -0.3880739212036133 L 13.10328483581543 7.865455627441406 C 13.64992427825928 8.826275825500488 13.64574432373047 10.01422595977783 13.09237480163574 10.9657154083252 C 12.53689384460449 11.92082595825195 11.54652404785156 12.49104595184326 10.44311428070068 12.49104595184326 L 10.42038440704346 12.49096584320068 L 1.145113945007324 12.42479515075684 C 0.04104423522949219 12.41690540313721 -0.9513254165649414 11.83926582336426 -1.509495735168457 10.87961578369141 C -2.06911563873291 9.917475700378418 -2.080215454101562 8.76563549041748 -1.539175987243652 7.798455715179443 L 3.040704727172852 -0.3888645172119141 C 3.582534313201904 -1.357484817504883 4.607654094696045 -1.959194183349609 5.716004371643066 -1.959194183349609 Z" stroke="none" fill="#fb3c54"/>
                  </g>
                </g>
              </svg>

              <div className="homepage__hero-text-cta">
                <AnchorLink to="/#oferta" className="btn primary">
                  Sprawdź ofertę
                </AnchorLink>

                <AnchorLink
                  to="/#faq"
                  title="FAQ"
                  stripHash
                />
              </div>
            </div>
            <div className="homepage__hero-image">
              <Img fluid={heroImage} />
            </div>
          </div>
        </div>

        <div className="homepage__offer" id="oferta">
          <div className="container">
            <div className="homepage__offer-item">
              <h2>WordPress</h2>
              <p>Pełna kontrola nad treścią na stronie internetowej dzięki łatwemu w obsłudze systemowi zarządzania treścią WordPress.</p>
              <Link to="/oferta/wordpress" className="btn secondary">
                Więcej
              </Link>
            </div>
            <div className="homepage__offer-item">
              <h2>JAMstack</h2>
              <p>Szybkość, to główna zaleta statycznych stron internetowych JAMstack. Sprawdź czy JAMstack jest dla Ciebie.</p>
              <Link to="/oferta/jamstack" className="btn secondary">
                Więcej
              </Link>
            </div>

            <div className="homepage__offer-steps">
              <h2>Realizacja strony internetowej</h2>
              <div className="homepage__offer-steps-item">
                <div className="homepage__offer-steps-item-header">
                  <svg id="chat" xmlns="http://www.w3.org/2000/svg" width="60.217" height="60.217" viewBox="0 0 60.217 60.217">
                    <g id="Layer_4" data-name="Layer 4" transform="translate(17.463 17.463)">
                      <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="15.5" cy="15" rx="15.5" ry="15" transform="translate(-0.463 -0.246)" fill="#fb3c54"/>
                    </g>
                    <g id="Layer_2" data-name="Layer 2">
                      <path id="Path_29" data-name="Path 29" d="M50.181,2.509a7.536,7.536,0,0,1,7.527,7.527V50.181a7.536,7.536,0,0,1-7.527,7.527H10.036a7.536,7.536,0,0,1-7.527-7.527V10.036a7.536,7.536,0,0,1,7.527-7.527Zm0-2.509H10.036A10.036,10.036,0,0,0,0,10.036V50.181A10.036,10.036,0,0,0,10.036,60.217H50.181A10.036,10.036,0,0,0,60.217,50.181V10.036A10.036,10.036,0,0,0,50.181,0Z" fill="#fff"/>
                    </g>
                    <g id="Layer_3" data-name="Layer 3" transform="translate(13.8 13.8)">
                      <path id="Path_30" data-name="Path 30" d="M36.863,38.117a1.236,1.236,0,0,1-.3-.038L29.243,36.25a15.97,15.97,0,0,1-7.434,1.867A16.309,16.309,0,1,1,38.117,21.809a15.983,15.983,0,0,1-3.3,9.729l3.088,4.629a1.255,1.255,0,0,1-1.043,1.95ZM21.809,8.009a13.8,13.8,0,1,0,0,27.6,13.593,13.593,0,0,0,6.657-1.789,1.255,1.255,0,0,1,.914-.12l4.638,1.159-1.8-2.694a1.257,1.257,0,0,1,.086-1.505,13.588,13.588,0,0,0,3.3-8.85,13.816,13.816,0,0,0-13.8-13.8Z" transform="translate(-5.5 -5.5)" fill="#fff"/>
                      <path id="Path_31" data-name="Path 31" d="M14.764,14.009H12.255a1.255,1.255,0,1,1,0-2.509h2.509a1.255,1.255,0,1,1,0,2.509Z" transform="translate(2.8 3.554)" fill="#fff"/>
                      <path id="Path_32" data-name="Path 32" d="M17.264,14.009H14.755a1.255,1.255,0,1,1,0-2.509h2.509a1.255,1.255,0,1,1,0,2.509Z" transform="translate(6.572 3.554)" fill="#fff"/>
                      <path id="Path_33" data-name="Path 33" d="M12.264,14.009H9.755a1.255,1.255,0,1,1,0-2.509h2.509a1.255,1.255,0,1,1,0,2.509Z" transform="translate(-0.973 3.554)" fill="#fff"/>
                    </g>
                  </svg>
                  <h3>Kontakt i wycena</h3>
                </div>
                <p>
                Opowiedz o swoim pomyśle, jakie masz wymagania, oraz co jest dla Ciebie najważniejsze. Razem dobierzemy odpowiednie technologie, aby Twoja strona była idealna i w rozsądnej cenie.
                </p>
              </div>
              <div className="homepage__offer-steps-item">
                <div className="homepage__offer-steps-item-header">
                <svg id="menu" xmlns="http://www.w3.org/2000/svg" width="60.138" height="60.138" viewBox="0 0 60.138 60.138">
                  <g id="Layer_4" data-name="Layer 4" transform="translate(18.242 18.242)">
                    <circle id="Ellipse_9" data-name="Ellipse 9" cx="14.433" cy="14.433" r="14.433" fill="#fb3c54"/>
                  </g>
                  <g id="Layer_2" data-name="Layer 2">
                    <path id="Path_37" data-name="Path 37" d="M50.115,2.506a7.526,7.526,0,0,1,7.517,7.517V50.115a7.526,7.526,0,0,1-7.517,7.517H10.023a7.526,7.526,0,0,1-7.517-7.517V10.023a7.526,7.526,0,0,1,7.517-7.517Zm0-2.506H10.023A10.023,10.023,0,0,0,0,10.023V50.115A10.023,10.023,0,0,0,10.023,60.138H50.115A10.023,10.023,0,0,0,60.138,50.115V10.023A10.023,10.023,0,0,0,50.115,0Z" fill="#fff"/>
                  </g>
                  <g id="Layer_3" data-name="Layer 3" transform="translate(14.433 14.433)">
                    <path id="Path_38" data-name="Path 38" d="M17.528,27.15H7.906A2.409,2.409,0,0,1,5.5,24.744V7.906A2.409,2.409,0,0,1,7.906,5.5h9.622a2.409,2.409,0,0,1,2.406,2.406V24.744a2.409,2.409,0,0,1-2.406,2.406Zm0-2.406v1.2l0-1.2ZM7.906,7.906V24.744h9.622V7.906Z" transform="translate(-5.5 -5.5)" fill="#fff"/>
                    <path id="Path_39" data-name="Path 39" d="M17.528,22.717H7.906A2.409,2.409,0,0,1,5.5,20.311V17.906A2.409,2.409,0,0,1,7.906,15.5h9.622a2.409,2.409,0,0,1,2.406,2.406v2.406A2.409,2.409,0,0,1,17.528,22.717Zm0-2.406v1.2l0-1.2ZM7.906,17.906v2.406h9.622V17.906Z" transform="translate(-5.5 8.555)" fill="#fff"/>
                    <path id="Path_40" data-name="Path 40" d="M24.528,26.933H14.906A2.409,2.409,0,0,1,12.5,24.528V14.906A2.409,2.409,0,0,1,14.906,12.5h9.622a2.409,2.409,0,0,1,2.406,2.406v9.622A2.409,2.409,0,0,1,24.528,26.933Zm0-2.406v1.2l0-1.2Zm-9.622-9.622v9.622h9.622V14.906Z" transform="translate(4.339 4.339)" fill="#fff"/>
                    <path id="Path_41" data-name="Path 41" d="M24.528,19.933H14.906A2.409,2.409,0,0,1,12.5,17.528V7.906A2.409,2.409,0,0,1,14.906,5.5h9.622a2.409,2.409,0,0,1,2.406,2.406v9.622a2.409,2.409,0,0,1-2.406,2.406Zm0-2.406v1.2l0-1.2ZM14.906,7.906v9.622h9.622V7.906Z" transform="translate(4.339 -5.5)" fill="#fff"/>
                  </g>
                </svg>
                  <h3>Kontakt i wycena</h3>
                </div>
                <p>
                Tworzę wstępny projekt nowej strony internetowej,
                po akceptacji zabieram się do pracy nad stroną.
                Dostaniesz link do wersji dev, w celu sprawdzania
                postępów oraz ewentualnych zmian.
                </p>
              </div>

              <div className="homepage__offer-steps-item">
                <div className="homepage__offer-steps-item-header">
                <svg id="search" xmlns="http://www.w3.org/2000/svg" width="62.722" height="62.722" viewBox="0 0 62.722 62.722">
                  <g id="Layer_4" data-name="Layer 4" transform="translate(17.9 17.9)">
                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="15.994" cy="15.994" r="15.994" fill="#fb3c54"/>
                  </g>
                  <g id="Layer_2" data-name="Layer 2">
                    <path id="Path_34" data-name="Path 34" d="M52.268,2.613a7.849,7.849,0,0,1,7.84,7.84V52.268a7.849,7.849,0,0,1-7.84,7.84H10.454a7.849,7.849,0,0,1-7.84-7.84V10.454a7.849,7.849,0,0,1,7.84-7.84Zm0-2.613H10.454A10.454,10.454,0,0,0,0,10.454V52.268A10.454,10.454,0,0,0,10.454,62.722H52.268A10.454,10.454,0,0,0,62.722,52.268V10.454A10.454,10.454,0,0,0,52.268,0Z" fill="#fff"/>
                  </g>
                  <g id="Layer_3" data-name="Layer 3" transform="translate(14.239 14.239)">
                    <path id="Path_35" data-name="Path 35" d="M18.67,31.841a13.17,13.17,0,1,1,13.17-13.17A13.17,13.17,0,0,1,18.67,31.841Zm0-23.707A10.536,10.536,0,1,0,29.207,18.67,10.536,10.536,0,0,0,18.67,8.134Z" transform="translate(-5.5 -5.5)" fill="#fff"/>
                    <path id="Path_36" data-name="Path 36" d="M23.719,25.036a1.312,1.312,0,0,1-.931-.386l-7.9-7.9a1.317,1.317,0,1,1,1.862-1.862l7.9,7.9a1.317,1.317,0,0,1-.931,2.248Z" transform="translate(9.207 9.207)" fill="#fff"/>
                  </g>
                </svg>
                  <h3>Optymalizacja i SEO</h3>
                </div>
                <p>
                Każda strona od samego początku jest tworzona pod SEO, oraz wydajność. Przed oddaniem zakończeniem projektu sprawdzam jakość strony, oraz przedstawiam końcowy raport.
                </p>
              </div>

              <div className="homepage__offer-steps-item">
                <div className="homepage__offer-steps-item-header">
                <svg id="link" xmlns="http://www.w3.org/2000/svg" width="62.311" height="62.311" viewBox="0 0 62.311 62.311">
                  <g id="Layer_4" data-name="Layer 4" transform="translate(17.279 17.223)">
                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="16.201" cy="16.201" r="16.201" fill="#fb3c54"/>
                  </g>
                  <g id="Layer_2" data-name="Layer 2">
                    <path id="Path_25" data-name="Path 25" d="M51.926,2.6a7.8,7.8,0,0,1,7.789,7.789V51.926a7.8,7.8,0,0,1-7.789,7.789H10.385A7.8,7.8,0,0,1,2.6,51.926V10.385A7.8,7.8,0,0,1,10.385,2.6Zm0-2.6H10.385A10.385,10.385,0,0,0,0,10.385V51.926A10.385,10.385,0,0,0,10.385,62.311H51.926A10.385,10.385,0,0,0,62.311,51.926V10.385A10.385,10.385,0,0,0,51.926,0Z" fill="#fff"/>
                  </g>
                  <g id="Layer_3" data-name="Layer 3" transform="translate(14.847 14.843)">
                    <path id="Path_26" data-name="Path 26" d="M12.717,28.754A6.755,6.755,0,0,1,7.94,17.221l3.505-3.5A6.756,6.756,0,1,1,21,23.274l-3.5,3.5a6.74,6.74,0,0,1-4.78,1.977ZM9.85,24.866a4.063,4.063,0,0,0,5.735,0l3.5-3.5a4.054,4.054,0,1,0-5.733-5.733l-3.5,3.5A4.064,4.064,0,0,0,9.85,24.866Z" transform="translate(-5.966 3.869)" fill="#fff"/>
                    <path id="Path_27" data-name="Path 27" d="M18.5,22.978a6.753,6.753,0,0,1-4.777-11.53l3.5-3.5A6.757,6.757,0,0,1,26.778,17.5L23.273,21A6.737,6.737,0,0,1,18.5,22.978ZM22,8.668a4.047,4.047,0,0,0-2.869,1.186l-3.5,3.5a4.054,4.054,0,1,0,5.733,5.733l3.505-3.5A4.054,4.054,0,0,0,22,8.668Z" transform="translate(3.864 -5.964)" fill="#fff"/>
                    <path id="Path_28" data-name="Path 28" d="M10.789,23.289a1.351,1.351,0,0,1-.955-2.307L20.982,9.833a1.351,1.351,0,1,1,1.911,1.911L11.744,22.893a1.346,1.346,0,0,1-.955.4Z" transform="translate(-0.055 -0.051)" fill="#fff"/>
                  </g>
                </svg>
                  <h3>Rozwój i opieka nad stroną</h3>
                </div>
                <p>
                Jestem do Twojej dyspozycji w razie ewentualnych zmian na stronie internetowej. Pomogę w każdej sytuacji, aby Twoja strona była zawsze dostępna
                dla klientów.
                </p>
              </div>
            </div>
          </div>

          <svg className="offer-after" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
        </div>


        <div id="faq" className="homepage__faq">
          <div className="container">
            <h2>Najczęściej zadawane pytania</h2>

            <h3>1. <span>Ile kosztuje</span> strona internetowa?</h3>
            <p>Niestety nie ma stałego cennika stron internetowych. Oczywiście poinformuję Cię o stawce godzinowej oraz przewidywaną liczbę godzin, będzie to wstępna kwota.</p>

            <h3>2. Jakie są różnice pomiędzy <span>WordPress</span> a <span>JAMstack</span>?</h3>
            <p>
            JAMstack to statyczna strona internetowa, idealna pod strony wizytówkim, oraz strony, które nie wymagają częstego aktualizowania (np. bez systemu blogowego).
WordPress to system zarządzania treścią, bardziej zaawansowany system, który wymaga dodatkowego serwera PHP, oraz bazy danych.
Używając WordPress'a dostaniesz dostęp do panelu administratora, w którym możesz samodzielnie dodawać oraz edytować treść.
            </p>

            <h3>3. Która <span>oferta</span> będzie lepsza dla mojej firmy?</h3>
            <p>
            To zależy od tego, czy masz zamiar regularnie dodawać nowe treści na swoją stronę internetową. Jeżeli tak, to WordPress będzie dobrym rozwiązaniem, jeżeli nie - JAMstack.
            </p>

            <h3>4. Czy można połączyć <span>WordPress</span> i <span>JAMstack</span>?</h3>
            <p>
            TAK! Fachowa nazwa to Headless CMS. Cena takiej konfiguracji jest nieco wyższa,
z racji dodatkowych ustawień serwera, API itp, jednak jest to możliwe.
Jeżeli posiadasz już stronę wykorzystującą WordPress, to z łatwością można ją przerobić na bardziej nowoczesną oraz szybszą!
Dalej będziesz mógł używać panelu administratora i zarządzać treścią.
            </p>

            <h3>5. Ile trwa <span>realizacja</span> projektu?</h3>
            <p>
            Po raz kolejny ciężkie pytanie, na które nie ma stałej odpowiedzi. Do każdego klienta podchodzę indywidualnie, nie korzystam z gotowych szablonów, jak większość agencji marketingowych. Każdą grafikę wykonuję samodzielnie, aby projekt był unikalny. W przypadku prostej strony wizytówki z wykorzystaniem JAMstack, czas realizacji to około 30 godzin roboczych.
            </p>
          </div>
        </div>


      </section>
    </Layout>
  )
}

export default IndexPage
