import React from "react"

const Footer = () =>(
  <div className="footer">
    Coder since 1996
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

export default Footer