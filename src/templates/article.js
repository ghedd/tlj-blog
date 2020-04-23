import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const articleQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD")
      }
      excerpt
    }
  }
`
export default ({ data }) => {
  const article = data.markdownRemark
  const { title, date } = article.frontmatter
  const content = article.html
  return (
    <Layout>
      <div className="blog-article">
        <SEO title={title} />
        <div
          className="article-heading"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1565858660321-08eaa0470c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
          }}
        >
          <h1 className="article-hd-title">{title}</h1>
          <span className="article-hd-timestmp">{date}</span>

          <figcaption>photo caption</figcaption>
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <div className="article-topics">
          <span>Topics</span>
        </div>
      </div>
    </Layout>
  )
}
