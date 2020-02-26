import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Index = ({data}) => {
  const page = data.allWordpressPage.edges[0].node;
  console.log(page);
  return(
    <Layout>
    <SEO title="Gerardo Jaramillo Uses" />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
  </Layout>)
}

export default Index

export const query = graphql`
  {
  allWordpressPage(filter: {id: {eq: "fc6cd7b4-1ed2-5367-bbc0-7c879713c099"}}) {
    edges{
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