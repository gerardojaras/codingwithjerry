import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import Logo from "./../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={Styles.header}>
      <Link to="/">
        <img src={Logo} alt="Coding With Jerry" className={Styles.logo} />
      </Link>
    </div>
    <div className={Styles.menu}>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
