import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
                ...GatsbyDatoCmsFluid
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
    }
  `)

  const projects = data.allDatoCmsShowcase.edges
  const posts = data.allDatoCmsPost.edges

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marcin Zogrodnik - Strony internetowe",
    "alternateName": "Marcin Zogrodnik - Strony internetowe",
    "url": "https://marcinzogrodnik.pl",
    "logo": "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "739907919",
      "contactType": "customer service",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    },
    "sameAs": [
      "https://www.facebook.com/frontendmarcin",
      "https://instagram.com/marcinzogrodnik.pl"
    ]
  }

  // Format time for blog posts
  let formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  } );

  return (
    <Layout>
      <SEO
        title="Marcin Zogrodnik"
        description="Marcin Zogrodnik - Nowoczesne, szybkie oraz bezpieczne strony internetowe JAMstack oraz WordPress. Zapoznaj się z ofertą."
        schemaMarkup={schema}
      />

      <section className="homepage">
        <div className="container">
          <div className="homepage_hero">
            <h1>
              Szybkie oraz bezpieczne <span>strony internetowe</span>
            </h1>
            <div className="homepage_hero_image">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 633">
                <defs>
                  <clipPath id="clip-Artboard_3">
                    <rect width="940" height="633" />
                  </clipPath>
                </defs>
                <g
                  id="Artboard_3"
                  data-name="Artboard – 3"
                  clipPath="url(#clip-Artboard_3)"
                >
                  <rect width="940" height="633" fill="#fff" />
                  <g
                    id="Group_15"
                    data-name="Group 15"
                    transform="translate(26 12)"
                  >
                    <path
                      id="Path_281"
                      data-name="Path 281"
                      d="M1039.8,146.935h-607a8.727,8.727,0,0,0-8.72,8.72v219.41h146.9a15.018,15.018,0,0,1,15,15V575.7H1039.8a8.712,8.712,0,0,0,6.631-3.06,2.027,2.027,0,0,0,.19-.24,8.167,8.167,0,0,0,1.25-2.11,8.507,8.507,0,0,0,.66-3.31V155.655a8.729,8.729,0,0,0-8.73-8.72Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#f2f2f2"
                    />
                    <rect
                      id="Rectangle_26"
                      data-name="Rectangle 26"
                      width="621.957"
                      height="2.493"
                      transform="translate(273.85 34.951)"
                      fill="#ccc"
                    />
                    <circle
                      id="Ellipse_1247"
                      data-name="Ellipse 1247"
                      cx="7.478"
                      cy="7.478"
                      r="7.478"
                      transform="translate(287.56 11.22)"
                      fill="#ccc"
                    />
                    <circle
                      id="Ellipse_1248"
                      data-name="Ellipse 1248"
                      cx="7.478"
                      cy="7.478"
                      r="7.478"
                      transform="translate(309.061 11.22)"
                      fill="#ccc"
                    />
                    <circle
                      id="Ellipse_1249"
                      data-name="Ellipse 1249"
                      cx="7.478"
                      cy="7.478"
                      r="7.478"
                      transform="translate(330.561 11.22)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_282"
                      data-name="Path 282"
                      d="M892.3,236.315h-312a13,13,0,0,0,0,26h312a13,13,0,1,0,0-26Zm0,24h-312a11,11,0,0,1,0-22h312a11,11,0,1,1,0,22Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_283"
                      data-name="Path 283"
                      d="M987.77,339.885h-312a13,13,0,0,0,0,26h312a13,13,0,1,0,0-26Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#fff"
                    />
                    <path
                      id="Path_284"
                      data-name="Path 284"
                      d="M987.77,387.885h-312a13,13,0,0,0,0,26h312a13,13,0,1,0,0-26Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#fff"
                    />
                    <path
                      id="Path_285"
                      data-name="Path 285"
                      d="M987.77,435.885h-312a13,13,0,0,0,0,26h312a13,13,0,1,0,0-26Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#fff"
                    />
                    <path
                      id="Path_286"
                      data-name="Path 286"
                      d="M625.35,318.385H483.33a11.5,11.5,0,0,0-11.49,11.49v45.19h2v-45.19a9.5,9.5,0,0,1,9.49-9.49H625.35a9.5,9.5,0,0,1,9.49,9.49V471.9a9.5,9.5,0,0,1-9.49,9.49H585.98v2h39.37a11.5,11.5,0,0,0,11.49-11.49V329.875a11.5,11.5,0,0,0-11.49-11.49Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_287"
                      data-name="Path 287"
                      d="M257.094,464.5c-.5.02-21.91-1.464-22.457-1.482l1.923-19.2,12.193-.367,23.3-43.155c-3.232-6.162.745-14.338,7.6-15.6,13.814-3.14,18.559,18.593,4.7,21.485l-19.272,52.733A8.55,8.55,0,0,1,257.094,464.5Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ffb8b8"
                    />
                    <path
                      id="Path_288"
                      data-name="Path 288"
                      d="M200.655,474.39c-20.372.05-22.16-30.738-1.743-32.907,53.988-3.262,47.156-16.822,51.256,23.175a4.5,4.5,0,0,1-3.995,4.954l-43.75,4.684a16.64,16.64,0,0,1-1.768.095Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#00304d"
                    />
                    <path
                      id="Path_289"
                      data-name="Path 289"
                      d="M196.006,377.05c28.065,15.97,5.025,58.106-23.563,43.1C144.379,404.182,167.419,362.046,196.006,377.05Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ffb8b8"
                    />
                    <path
                      id="Path_290"
                      data-name="Path 290"
                      d="M70.049,592.823H82.308l5.833-47.288H70.047Z"
                      fill="#ffb8b8"
                    />
                    <path
                      id="Path_291"
                      data-name="Path 291"
                      d="M218.893,751.142l38.531,0c-.147-19.881-25.918-14.152-38.531-14.885Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#2f2e41"
                    />
                    <path
                      id="Path_292"
                      data-name="Path 292"
                      d="M17.049,592.823H29.308l5.833-47.288H17.047Z"
                      fill="#ffb8b8"
                    />
                    <path
                      id="Path_293"
                      data-name="Path 293"
                      d="M165.893,751.142l38.531,0c-.147-19.881-25.918-14.152-38.531-14.885Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#2f2e41"
                    />
                    <path
                      id="Path_294"
                      data-name="Path 294"
                      d="M182.452,723.243c-2.963-.813-19.064,1.646-20.964-1.582-6.636-66.511-5.161-131.6,9.57-167.37l50.648-3.1c11.326,20.675,37.36,157.875,21.656,166.216l-20.194.72a5.018,5.018,0,0,1-5.039-3.826l-16.895-96.117c-4.207-5.881-12.477,101.224-13.843,100.824a4.978,4.978,0,0,1-4.938,4.236Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#2f2e41"
                    />
                    <path
                      id="Path_295"
                      data-name="Path 295"
                      d="M169.45,562.7c-25.572-26.753-9.26-98.479-10.086-96.953.07-1.757,5.862-28.816,20.844-33.257,11.887-3.923,25.043,7.812,26.666,19.681l17.806,105.153a3.7,3.7,0,0,1-1.014,3.18C224.542,563.228,170.7,562.152,169.45,562.7Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#00304d"
                    />
                    <path
                      id="Path_296"
                      data-name="Path 296"
                      d="M177.749,395.868c2.246-1.42,3.353-3.854,4.66-6.073,6.885-3.924,14.8,5.569,22.083,2.026,20.593-19.769-.574-25.6-19.54-26.644-4.48-.552-8.292,1.037-11.679,3.662-37.886-2.893-19.716,47.483,4.194,54.136,4.222,1.849,7.388-1.893,3.666-5.3C175.981,412.281,169.6,401.411,177.749,395.868Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#2f2e41"
                    />
                    <path
                      id="Path_297"
                      data-name="Path 297"
                      d="M570.98,373.065h-274a17.024,17.024,0,0,0-17,17v346a17.024,17.024,0,0,0,17,17h274a17.024,17.024,0,0,0,17-17v-346a17.024,17.024,0,0,0-17-17Zm15,363a15.018,15.018,0,0,1-15,15h-274a15.018,15.018,0,0,1-15-15v-346a15.018,15.018,0,0,1,15-15h274a15.018,15.018,0,0,1,15,15Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#3f3d56"
                    />
                    <path
                      id="Path_298"
                      data-name="Path 298"
                      d="M219.777,518.663c-9.031,1.023-13-19.992-16.448-25.347l17.985-6.983,5.852,10.7,49.028,1.219a10.674,10.674,0,0,1,.952-1.12h0c9.723-10.181,25.557,5.073,15.871,15.232a11.036,11.036,0,0,1-16.5-.477C275.31,511.976,220.961,518.695,219.777,518.663Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ffb8b8"
                    />
                    <path
                      id="Path_299"
                      data-name="Path 299"
                      d="M206.458,508.632c-3.007,2.9-26.091-37.773-27.777-38.923-11.664-18.13,15.8-36.03,27.661-18l24,36.879a4.5,4.5,0,0,1-1.317,6.226C227.928,495.327,207.23,509.733,206.458,508.632Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#00304d"
                    />
                    <path
                      id="Path_300"
                      data-name="Path 300"
                      d="M516.98,612.565h-166c-16.957-.082-17.027-25.911,0-26h166C533.925,586.644,534.017,612.476,516.98,612.565Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_301"
                      data-name="Path 301"
                      d="M516.98,660.565h-166c-16.957-.082-17.027-25.911,0-26h166C533.925,634.644,534.017,660.476,516.98,660.565Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_302"
                      data-name="Path 302"
                      d="M516.98,708.565h-166c-16.957-.082-17.027-25.911,0-26h166C533.925,682.644,534.017,708.476,516.98,708.565Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#ccc"
                    />
                    <path
                      id="Path_303"
                      data-name="Path 303"
                      d="M578.98,405.065a26,26,0,1,1,26-26A26,26,0,0,1,578.98,405.065Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#00304d"
                    />
                    <path
                      id="Path_304"
                      data-name="Path 304"
                      d="M590.98,378.065h-11v-12.5a1,1,0,0,0-2,0v12.5h-11a1,1,0,0,0,0,2h11v12.5a1,1,0,1,0,2,0v-12.5h11a1,1,0,0,0,0-2Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#fff"
                    />
                    <path
                      id="Path_305"
                      data-name="Path 305"
                      d="M513.98,555.365h-160a16.519,16.519,0,0,1-16.5-16.5v-89.6a16.519,16.519,0,0,1,16.5-16.5h160a16.519,16.519,0,0,1,16.5,16.5v89.6A16.519,16.519,0,0,1,513.98,555.365Z"
                      transform="translate(-151.471 -146.935)"
                      fill="#00304d"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <div className="homepage_hero_cta">
              <Link to="/oferta">Sprawdź ofertę</Link>
              <Link to="/realizacje">Zobacz realizacje</Link>
            </div>
          </div>
        </div>

        <div className="homepage_offer">
          <div className="container">
            <h2>Strony internetowe</h2>

            <div className="homepage_offer_items">
              <div className="item">
                <h3>WordPress</h3>
                <p>
                  Najpopularniejszy system zarządzania treścią WordPress, który
                  jest wykorzystywany przez największe firmy na świecie. Poznaj
                  ofertę stron oraz sklepów Wordpress.
                </p>
                <div className="item-more">
                  <Link to="/oferta/strony-internetowe-wordpress/">
                    Więcej →
                  </Link>
                </div>
              </div>

              <div className="item">
                <h3>JAMstack</h3>
                <p>
                  Statyczna strona internetowa to przede wszystkim szybkość,
                  która zostawi w tle konkurencję. Zobacz jakie korzyści oferuje
                  strona wykonana za pomocą Gatsby.
                </p>
                <div className="item-more">
                  <Link to="/oferta/strony-internetowe-jamstack/">
                    Więcej →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homepage_portfolio">
          <div className="container">
            <h2>Ostatnie realizacje</h2>

            <div className="homepage_portfolio_items">
              {projects.map(project => {
                let tags = project.node.tags.split(",")
                return (
                  <article className="item" key={project.node.id}>
                    <Img fluid={project.node.image.fluid} />
                    <h3>
                      <Link to={`/realizacje/${project.node.slug}`}>
                        {project.node.title}
                      </Link>
                    </h3>
                    <div className="item-description">
                      <p>{project.node.seo.description}</p>
                    </div>
                    <div className="item-info">
                      <ul>
                        {tags.map(tag => (
                          <li key={`${tag}-${Math.floor(Math.random() * 10)}`}>{tag}</li>
                        ))}
                      </ul>
                      <div className="more">
                        <Link to={`/realizacje/${project.node.slug}`}>
                          Więcej →
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="homepage_portfolio_more">
              <Link to="/realizacje">Zobacz więcej →</Link>
            </div>
          </div>
        </div>

        <div className="homepage_blog">
          <div className="container">
            <h2>Ostatnio na blogu</h2>

            {posts.map(post => (
              <article key={post.node.id} className="homepage_blog_post">
                <h3>
                  <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
                </h3>
                <div className="time">
                <p>{formatter.format( new Date(post.node.meta.createdAt) )}</p>
                </div>
                <div className="exerpt">
                  <p>{post.node.seo.description}</p>
                </div>
                <div className="more">
                  <Link to={`/blog/${post.node.slug}`}>Czytaj dalej →</Link>
                </div>
              </article>
            ))}

            <div className="homepage_blog_more">
            <Link to="/blog">Zobacz więcej →</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
