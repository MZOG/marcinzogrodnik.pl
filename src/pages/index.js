import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Article from "../components/article"

// homepage components
import Hero from "../components/homepage_sections/hero"
import Offer from "../components/homepage_sections/offer"
import OfferMore from "../components/homepage_sections/more-offer"
import Process from "../components/homepage_sections/process"
import CallMe from "../components/homepage_sections/call-me"
import Blog from "../components/homepage_sections/blog"

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
            slug
            projectUrl
            image {
              fluid(
                maxWidth: 800
                imgixParams: { auto: "compress", lossless: true }
              ) {
                ...GatsbyDatoCmsFluid
                src
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
            image {
              fluid(
                maxWidth: 800
                imgixParams: { auto: "compress", lossless: true }
              ) {
                ...GatsbyDatoCmsFluid
                src
              }
            }
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
  const projects = data.allDatoCmsShowcase.edges
  const posts = data.allDatoCmsPost.edges
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marcin Zogrodnik - Strony internetowe",
    alternateName: "Marcin Zogrodnik - Strony internetowe",
    url: "https://marcinzogrodnik.pl",
    logo: "https://www.datocms-assets.com/34585/1603980502-invoice-logo.png",
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Karolina Wawrzyniak"
      },
      "reviewBody": "Współpraca z Marcinem była wspaniała. W błyskawicznym tempie odpowiadał na wszystkie moje zapytania i zamieszczał kolejne elementy na stronie. W cierpliwy sposób tłumaczył na czym polega budowanie strony internetowej i na czym jako przedsiębiorca powinnam się skupić najbardziej. W stu procentach spełnił moje oczekiwania, zatem mogę go polecić jako świetnego fachowca!"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "739907919",
      contactType: "customer service",
      areaServed: "PL",
      availableLanguage: "Polish",
    },
    sameAs: [
      "https://www.facebook.com/frontendmarcin",
      "https://instagram.com/marcinzogrodnik_www",
    ],
  }

  const [faqData, setFaqData] = useState({ telefon: "", email: "" })
  const [faqDisabled, setFaqDisabled] = useState(true)
  const handleFaqForm = e => {
    setFaqData({ [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const validateFaq = () => {
      if (faqData.telefon === "" || faqData.email === "") {
        setFaqDisabled(true)
      } else {
        setFaqDisabled(false)
      }
    }
    validateFaq();
  }, [faqData])


  return (
    <Layout>
      <SEO
        title="Home"
        description="Szybkie i nowoczesne strony internetowe WordPress & JAMstack. Strony internetowe Katowice i okolice. Tylko indywidualne podejście, solidne strony www."
        schemaMarkup={schema}
      />

      <Hero />
      <Offer />
      <OfferMore />
      <Process />
      <CallMe />
      <Blog data={data.allDatoCmsPost}/>

        {/* <div className="homepage__portfolio">
          <div className="container">
            <h2>Wybrane realizacje</h2>

            <div className="homepage__portfolio-items">
              {projects.map(project => {
                return (
                  <div
                    className="homepage__portfolio-item"
                    key={project.node.id}
                  >
                    <div className="homepage__portfolio-item-text">
                      <h3>{project.node.title}</h3>
                      <p>{project.node.seo.description}</p>
                      <a
                        href={`https://${project.node.projectUrl}`}
                        className="homepage__portfolio-item-link"
                      >
                        {project.node.projectUrl}
                      </a>
                      <Link
                        to={`/realizacje/${project.node.slug}`}
                        className="btn primary"
                      >
                        Więcej o projekcie
                      </Link>
                    </div>
                    <div className="homepage__portfolio-item-img">
                      <Img
                        className="homepage__portfolio-item-image"
                        fluid={project.node.image.fluid}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div> */}

        {/* <div id="faq" className="homepage__faq">
          <div className="container">
            <h2>Najczęściej zadawane pytania</h2>

            <div className="homepage__faq-questions">
              <h3>
                1. <span>Ile kosztuje</span> strona internetowa?
              </h3>
              <p>
                Niestety nie ma stałego cennika stron internetowych. Oczywiście
                poinformuję Cię o stawce godzinowej oraz przewidywaną liczbę
                godzin, będzie to wstępna kwota.
              </p>

              <h3>
                2. Jakie są różnice pomiędzy <span>WordPress</span> a{" "}
                <span>JAMstack</span>?
              </h3>
              <p>
                JAMstack to statyczna strona internetowa, idealna pod strony
                wizytówkim, oraz strony, które nie wymagają częstego
                aktualizowania (np. bez systemu blogowego). WordPress to system
                zarządzania treścią, bardziej zaawansowany system, który wymaga
                dodatkowego serwera PHP, oraz bazy danych. Używając WordPress'a
                dostaniesz dostęp do panelu administratora, w którym możesz
                samodzielnie dodawać oraz edytować treść.
              </p>

              <h3>
                3. Która <span>oferta</span> będzie lepsza dla mojej firmy?
              </h3>
              <p>
                To zależy od tego, czy masz zamiar regularnie dodawać nowe
                treści na swoją stronę internetową. Jeżeli tak, to WordPress
                będzie dobrym rozwiązaniem, jeżeli nie - JAMstack.
              </p>

              <h3>
                4. Czy można połączyć <span>WordPress</span> i{" "}
                <span>JAMstack</span>?
              </h3>
              <p>
                TAK! Fachowa nazwa to Headless CMS. Cena takiej konfiguracji
                jest nieco wyższa, z racji dodatkowych ustawień serwera, API
                itp, jednak jest to możliwe. Jeżeli posiadasz już stronę
                wykorzystującą WordPress, to z łatwością można ją przerobić na
                bardziej nowoczesną oraz szybszą! Dalej będziesz mógł używać
                panelu administratora i zarządzać treścią.
              </p>

              <h3>
                5. Ile trwa <span>realizacja</span> projektu?
              </h3>
              <p>
                Po raz kolejny ciężkie pytanie, na które nie ma stałej
                odpowiedzi. Do każdego klienta podchodzę indywidualnie, nie
                korzystam z gotowych szablonów, jak większość agencji
                marketingowych. Każdą grafikę wykonuję samodzielnie, aby projekt
                był unikalny. W przypadku prostej strony wizytówki z
                wykorzystaniem JAMstack, czas realizacji to około 30 godzin
                roboczych.
              </p>
            </div>

            <div className="homepage__faq-quote">
              <h2>Darmowa wycena strony</h2>
              <p>
                Zostaw swój numer telefonu, lub mejla, Oddzwonię, lub napiszę do
                Ciebie w ciągu 24 godzin, na spokojnie porozmawiamy o Twojej
                nowej stronie internetowej.
              </p>

              <form
                name="QuickContact"
                method="POST"
                data-netlify="true"
                action="/kontakt/success"
               >
                <input type="hidden" name="form-name" value="QuickContact" />
                <div className="homepage__faq-quote-item">
                  <label htmlFor="telefon">Telefon</label>
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="np. 739907919"
                    onChange={handleFaqForm}
                  />
                </div>
                <p className="divider">lub</p>
                <div className="homepage__faq-quote-item">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="np. jan.kowalski@gmail.com"
                    onChange={handleFaqForm}
                  />
                </div>
                <p>
                  Dane kontaktowe nie są wykorzystywane w celach marketingowych.
                </p>
                <input type="submit" className="btn secondary" value="Wyślij" disabled={faqDisabled === true ? true : false} />
              </form>
            </div>
          </div>
        </div> */}

        {/* <div className="homepage__blog">
          <div className="container">
            <h2>Blog</h2>

            <div className="homepage__blog-items">
              {posts.map(post => {
                return (
                  <Article
                    key={post.node.id}
                    slug={post.node.slug}
                    title={post.node.title}
                    date={post.node.meta.createdAt}
                    description={post.node.seo.description}
                    image={post.node.image.fluid || "elo"}
                  />
                )
              })}
            </div>
          </div>
        </div> */}
      {/* </section> */}
    </Layout>
  )
}

export default IndexPage
