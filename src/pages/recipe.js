import React from "react"
import styles from "./recipe.module.scss"
import Layout from "../components/layout"
import { graphql } from "gatsby"


const Recipe = ({data}) => {
  console.log(data)
  return(
    <Layout>
      {data.allMarkdownRemark.nodes.map((item, i) => (
        <div key={i}>{item.html}</div>
      ))}
    </Layout>
  )
}

export default Recipe

export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                excerpt
                html
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
    }
`
