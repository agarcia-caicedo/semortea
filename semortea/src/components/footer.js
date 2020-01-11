import React from "react"

function Footer() {
  return (
    <div
    style={{
        margin: `0 auto`,
        maxWidth: 960,
        bottom: 0,
        backgroundColor: `black`,
        padding: `0.6rem 1rem 0.6rem`,
      }}>
        <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
    </div>
  )
}

export default Footer
