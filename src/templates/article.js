import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const articleQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM DD")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2048, maxHeight: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => {
  const article = data.markdownRemark
  const { title, date } = article.frontmatter
  const content = article.html
  const bgrImage = article.frontmatter.featuredImage.childImageSharp.fluid
  const readingTime = article.fields.readingTime.text
  return (
    <Layout>
      <SEO title={title} />
      <div className="blog-article">
        <div className="article-heading">
          <Img className="article-hd-bgr-image" fluid={bgrImage} />
          <div className="article-hd-text">
            <h1 className="hd-text-title">{title}</h1>
            <span className="hd-text-timestmp">{date}</span>
            <span className="hd-text-reading-time">{` · ${readingTime}`}</span>
            <figcaption>photo caption</figcaption>
          </div>
        </div>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        {/* <div className="article-topics">
          <span>Topics</span>
        </div> */}
      </div>
    </Layout>
  )
}
