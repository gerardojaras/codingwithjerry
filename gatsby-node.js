const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      posts: allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
      categories: allWordpressCategory {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
    result.data.categories.edges.forEach(({node}) =>{
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/category.js`),
        context:{
          name: node.name,
          slug: node.slug,
          category: node.name
        }
      })
    })
  })
}
