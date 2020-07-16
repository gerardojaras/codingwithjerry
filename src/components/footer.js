import React from "react"
import Styles from "./footer.module.scss"

const Footer = () =>(
  <div className={Styles.footer}>
    Coder since 1996
    <footer>
      © Gerardo Jaramillo {new Date().getFullYear()}
    </footer>
  </div>
)

export default Footer
