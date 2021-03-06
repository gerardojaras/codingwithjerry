import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  const page = data.allWordpressPage.edges[0].node
  return (
    <Layout>
      <SEO title="About Me" />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  )
}

export default Index

export const query = graphql`
  {
    allWordpressPage(
      filter: { id: { eq: "429075ba-92e8-5196-8a48-bfc0aca43625" } }
    ) {
      edges {
        node {
          id
          content
          excerpt
          date
          id
          author {
            name
          }
        }
      }
    }
  }
`
