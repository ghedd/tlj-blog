import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const aboutContent = data.markdownRemark
  const title = aboutContent.frontmatter.title
  const content = aboutContent.html
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export const abouPageQuery = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default AboutPage
