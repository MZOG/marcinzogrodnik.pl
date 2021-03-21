const React = require("react")
const config = require("./gatsby-config")

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  setHeadComponents([
    <meta
      property="og:url"
      content={`${config.siteMetadata.siteURL}${pathname}`}
    />,
  ])
}
