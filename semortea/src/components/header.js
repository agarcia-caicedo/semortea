import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import image from "../images/teatwit.png"
import icon from "../../public/icons/sm.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundImage:  `url(${image})`,
      backgroundSize: `contain`,
      backgroundPosition: `relative`,
      backgroundRepeat: `no-repeat`,
      overflow: `hidden`,
      backgroundAttachment: `fixed`,
      margin: `0 auto`,
      maxWidth: 960,
      backgroundColor: `black`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        minHeight: `35vh`,
        textAlign: `center`,
        padding: `1.5rem 0rem 0rem 0rem`,
        backgroundColor: `#00000087`,

        borderStyle: `solid`,
        borderWidth: `0.01rem`,
        borderColor: `black`,
      }}
    >
      <h1
      style={{
        margin: 0,
        }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: `Amatic SC`,
            fontSize:`4rem`,
            padding: `0.25rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <img src={icon} style={{
        margin: 0,
        borderRadius:`50%`,
        borderStyle: `solid`,
        borderWidth: `0.20rem`,
        borderColor: `white`,
        width: `12%`,
        height: `auto`,
        backgroundColor: `black`,
      }} alt="avatar"/>
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
