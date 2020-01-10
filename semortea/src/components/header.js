import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import image from "../images/teatwit.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage:  `url(${image})`,
      marginBottom: `1.45rem`,
      backgroundSize: `contain`,
      backgroundPosition: `center`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        minHeight: 300,
        padding: `1.45rem 1.0875rem`,
        borderRadius: `0 0 85% 85%`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: `Amatic SC`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
