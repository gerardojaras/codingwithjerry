import React from "react"
import Styles from "./footer.module.scss"

const Footer = () =>(
  <div className={Styles.footer}>
    Coder since 1996
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

export default Footer