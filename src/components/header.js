import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import Logo from "./../images/logo.png"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <li>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              Open Menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
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


