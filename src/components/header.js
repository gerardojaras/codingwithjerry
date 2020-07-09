import { graphql, Link, useStaticQuery, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import Logo from "./../images/logo.png"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import SEO from "./seo"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(
        sort: { fields: [date] }
        filter: { categories: { elemMatch: { name: { ne: "Uncategorized" } } } }
      ) {
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

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const gotoPage = page => {
    navigate(page)
  }

  return (
    <header className={Styles.header}>
      <SEO title="Coding With Jerry" />
      <div className={Styles.logo_wrap}>
        <Link to="/">
          <img src={Logo} alt="Coding With Jerry" className={Styles.logo} />
        </Link>
      </div>
      <nav className={Styles.menu}>
        <ul>
          <li>
            <Button onClick={() => gotoPage("/")}>About Me</Button>
          </li>
          <li>
            <Button onClick={() => gotoPage("/uses")}>Uses</Button>
          </li>
          <li>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Coding Recipes
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {data.allWordpressPost.edges.map(({ node }, i) => (
                <MenuItem key={i}>
                  <Link to={node.categories[0].slug}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: node.categories[0].name,
                      }}
                    ></span>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </li>
        </ul>
      </nav>
    </head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
