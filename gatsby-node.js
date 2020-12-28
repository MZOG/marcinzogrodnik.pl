exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDatoCmsPost: allDatoCmsPost {
        edges {
          node {
            slug
          }
        }
      }
      markdown: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {frontmatter: {slug: {ne: null}}}
      ) {
        edges {
          node {
            frontmatter {
              slug
              published
            }
          }
        }
      }
    }
  `)

  if (data.markdown.edges) {
    data.markdown.edges.forEach(edge => {
      if (edge.node.frontmatter.published) {
        const slug = edge.node.frontmatter.slug

        actions.createPage({
          path: `blog/${slug}`,
          component: require.resolve(`./src/templates/blog-post.js`),
          context: { slug: slug },
        })
      }

    })
  }

  data.allDatoCmsPost.edges.forEach(edge => {
    const slug = edge.node.slug

    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: slug },
    })
  })

  const showcase = await graphql(`
    query {
      data: allDatoCmsShowcase {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(res => res.data)

  showcase.data.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `realizacje/${slug}`,
      component: require.resolve(`./src/templates/showcase-post.js`),
      context: { slug: slug },
    })
  })
}