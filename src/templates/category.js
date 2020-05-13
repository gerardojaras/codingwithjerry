import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import parse from 'html-react-parser'
import Styles from './category.module.scss'

export default ({ data }) =>{
  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) return;
      if (attribs.class === 'link-more') {
        return (
          <div></div>
        );
      }
    }
  };
  return(
    <Layout>
      <section className={Styles.content} id="main">
        {data.allWordpressPost.edges.map(({node}, i) => (
              <div key={i}>
                <Link to={node.slug}>
                <h2 dangerouslySetInnerHTML={{__html: node.title}}/>
                <div>
                  {parse(node.excerpt, options)}
                </div>
                </Link>
                <Link to={node.slug} className={Styles.btn}>Continue Reading</Link>
              </div>
          )
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!){
  allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
      edges {
        node {
          id
          title
          date
          excerpt
          slug
        }
      }
    }
  }
`
