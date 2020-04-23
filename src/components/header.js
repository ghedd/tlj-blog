import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import logo from "../images/tlj.png"
import { FaSearch } from "react-icons/fa"

const Header = () => (
  <header>
    <div className="header-logo">
      <Link to="/">
        <img id="logo" src={logo} alt="my logo" />
      </Link>
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/blog" activeClassName="item-active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="item-active">
            About
          </Link>
        </li>
      </ul>
    </nav>
    <div className="search">
      <button name="search btn" className="search-btn">
        <span>
          <FaSearch />
        </span>
      </button>
    </div>
    {/* <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
