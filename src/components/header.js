import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import Logo from "./../images/logo.png"

const Header = ({ siteTitle }) => (
  <div className={Styles.header}>
    <div className={Styles.logo_wrap}>
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
          <Link to="/uses">Uses</Link>
        </li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
