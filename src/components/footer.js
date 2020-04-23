import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer id="contact">
    <div className="contact">
      <div className="contact-details">
        <span>contact</span>
        <ul>
          <li>
            <Link to="/">email_address</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="social-media">
      <div className="social-m-details">
        <span>social media</span>
        <ul>
          <li>
            <Link to="/">linkedin</Link>
          </li>
          <li>
            <Link to="/">facebook</Link>
          </li>
        </ul>
      </div>
    </div>
    <ul className="copyr">
      <li>
        © {new Date().getFullYear()}, <strong>Thao Le's</strong> site, built
        with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </li>
    </ul>
  </footer>
)

export default Footer
