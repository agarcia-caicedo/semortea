import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ menuLinks }) => (
    <nav>
      <ul
      style={{ display: "flex",
      flex: 1,
      backgroundColor: `rgb(237, 0, 24)`,
      listStyleType: `none`,
      margin: `0 auto`,
      maxWidth: 960,
      padding: 0,
      }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `0.7rem 1rem 0.7rem 1rem`,
              borderRight: `2px solid rgb(8, 6, 6)`,
              textAlign: `center`,
            }}
          >
            <Link
            style={{
                color: `rgb(8, 6, 6)`,
                textDecoration: `none`,
                fontFamily: `Amatic SC`,
                fontWeight: `bold`,
                fontSize: `2rem`,
                display: `block`,
            }}
            activeStyle={{
                color: `white`,
            }}
            to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
)

  Navbar.propTypes = {
    menuLinks: PropTypes.array,
  }

  Navbar.defaultProps = {
    menuLinks: ``,
  }

  export default Navbar