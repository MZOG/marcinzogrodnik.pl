import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, shareImage, schemaMarkup }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const image = shareImage.includes("https")
    ? shareImage
    : `https://marcinzogrodnik.pl${shareImage}` ||
      "https://www.datocms-assets.com/34585/1603983032-jamstack-wordpress-fb-post.jpg"

  console.log(metaDescription)

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
    >
      <link rel="stylesheet" href="https://use.typekit.net/qlx1pib.css"></link>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />

      <meta property="fb:pages" content="112142883474554" />
      <meta
        property="og:title"
        content={`${title} - ${site.siteMetadata.title}`}
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content="228993968376957" />
      <meta property="og:type" content="website" />

      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
