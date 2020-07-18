const path = require(`path`)

const page = require.resolve(`./src/templates/page.js`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      markDowns: allMarkdownRemark {
        nodes {
          html
          id
          frontmatter {
            author
            date
            description
            keywords
            slug
          }
          excerpt
        }
      }
    }
  `).then(result => {
    //console.log(result.data.markDowns.nodes[0].html)
    result.data.markDowns.nodes.forEach((node) => {
      createPage({
        path: node.frontmatter.slug,
        component: page,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug
        }
      })
    })
  })
}
