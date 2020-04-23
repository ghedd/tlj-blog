import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="homepage">
      <SEO title="About" />
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)

export default IndexPage
