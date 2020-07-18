import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import  "./page.module.scss"

const Page = ({data}) => {
  console.log()
  return(
    <Layout>
      <div className="title">
        {data.markdownRemark.frontmatter.title}
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} />
    </Layout>
  )
}

export default Page


export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            excerpt
            frontmatter {
                author
                date
                description
                keywords
                slug
                title
            }
        }
    }
`
