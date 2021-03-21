import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsPost(
        limit: 3
        sort: { order: DESC, fields: meta___publishedAt }
      ) {
        nodes {
          id
          title
          slug
        }
      }
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { eq: "post" }, published: { eq: true } }
        }
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
          id
        }
      }
      allDatoCmsShowcase(sort: { order: DESC, fields: meta___publishedAt }) {
        nodes {
          id
          slug
          title
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-item">
            <p className="footer-top-item-title">Oferta</p>
            <ul>
              <li>
                <Link to="/oferta/strony-internetowe-wordpress">
                  Strony internetowe WordPress
                </Link>
              </li>
              <li>
                <Link to="/oferta/strony-internetowe-jamstack">
                  Strony internetowe JAMstack
                </Link>
              </li>
              <li>
                <Link to="/oferta/sklepy-internetowe">Sklepy internetowe</Link>
              </li>
              <li>
                <Link to="/oferta/optymalizacja-strony-internetowej">
                  Optymalizacja stron internetowych
                </Link>
              </li>
              <li>
                <Link to="/oferta/pozycjonowanie-seo">Pozycjonowanie</Link>
              </li>
              <li>
                <Link to="/oferta/opieka-nad-strona">Opieka nad stroną</Link>
              </li>
            </ul>
          </div>
          <div className="footer-top-item">
            <p className="footer-top-item-title">Blog</p>
            <ul>
              {data.allDatoCmsPost.nodes.map(blog => (
                <li key={blog.id}>
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </li>
              ))}
            </ul>

            <p className="footer-top-item-title second">Front End</p>
            <ul>
              {data.allMarkdownRemark.nodes.map(frontend => (
                <li key={frontend.id}>
                  <Link to={`/blog/${frontend.frontmatter.slug}`}>
                    {frontend.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-top-item">
            <p className="footer-top-item-title">Realizacje</p>
            <ul>
              {data.allDatoCmsShowcase.nodes.map(showcase => (
                <li key={showcase.id}>
                  <Link to={`/realizacje/${showcase.slug}`}>
                    {showcase.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2021 Marcin Zogrodnik</p>

            <ul>
              <li>
                <Link to="/o-mnie">O mnie</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
              <li>
                <Link to="/prywatnosc">Polityka prywatności</Link>
              </li>
              <li>
                <Link to="/regulamin">Regulamin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
