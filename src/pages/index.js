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
      iphoneImage: file(relativePath: {eq: "portfolio/doradcajezykowy-mobile.png"}) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      macbookImage: file(relativePath: {eq: "portfolio/doradcajezykowy.png"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      twitterPosts: allTwitterStatusesUserTimelineNameofthequery(sort: {order: DESC, fields: created_at}) {
        edges {
          node {
            entities {
              urls {
                url
              }
            }
            created_at
            full_text
            id
            id_str
          }
        }
      }
    }
  `)
  const tweets = data.twitterPosts.edges
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
        <div className="container">
          <div className="homepage_hero">
            <div className="lead">
              <p>Nowe. Lepsze. Szybsze.</p>
            </div>
            <h1>
              <span className="block">Strony internetowe</span>
              <span>WordPress</span> & <span>JAMstack</span>
            </h1>
            <div className="homepage_hero_image">
              <div className="macbook-image">
                <Img
                  fluid={data.macbook.childImageSharp.fluid}
                  className="macbook"
                />
                <div className="macbook-image_overlay">
                  <Img
                    fluid={data.macbookImage.childImageSharp.fluid}
                    style={{position: "static"}}
                  />
                </div>
              </div>
              <div className="iphone-image">
                <Img
                  fluid={data.iphone.childImageSharp.fluid}
                  className="iphone" style={{position: "absolute"}}
                />
                <div className="iphone-image_overlay">
                <Img
                    fluid={data.iphoneImage.childImageSharp.fluid}
                    style={{position: "static"}}
                  />
                </div>
              </div>
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
                          <li key={`${tag}-${Math.floor(Math.random() * 10)}`}>
                            {tag}
                          </li>
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

        <div className="homepage_tweets">
          <div className="container">
            <div className="tweets-container">
            {tweets.map(tweet => {
              return(
                <div className="tweet" key={tweet.node.id}>
                  <div className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </div>
                  <p>{tweet.node.full_text}</p>
                  <div className="reply">
                    <a href={`https://twitter.com/zogrodnik_m/status/${tweet.node.id_str}`} rel="noreferrer" target="_blank">Odpowiedz</a>
                  </div>
                </div>
              )
            })}
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
                  <p>{formatter.format(new Date(post.node.meta.createdAt))}</p>
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
