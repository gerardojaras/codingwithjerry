import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import Logo from "./../images/logo.png"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
  allWordpressPost(sort: {fields: [date]}, filter: {categories: {elemMatch: {name: {ne: "Uncategorized"}}}}) {
    edges {
      node {
        categories {
          name
          slug
          id
        }
      }
    }
  }
}

  `)

  return (
    <div className={Styles.header}>
      <div className={Styles.logo_wrap}>
        <Link to="/">
          <img src={Logo} alt="Coding With Jerry" className={Styles.logo}/>
        </Link>
      </div>
      <nav className={Styles.menu}>
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/uses">Uses</Link>
          </li>
          <li >
            <div className={Styles.dropdown}>
              Coding Recipies
              <div className={Styles.dropdownContent}>
                {data.allWordpressPost.edges.map(({ node }, i) => (
                  <div key={i}>
                    <Link to={node.categories[0].slug}>
                      <span dangerouslySetInnerHTML={{ __html: node.categories[0].name }}></span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


