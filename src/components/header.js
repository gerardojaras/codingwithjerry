import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./header.module.scss"
import Logo from "./../images/logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className={Styles.header}>
      <Link to="/"><img src={Logo} alt="Coding With Jerry" className={Styles.logo}/></Link>
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