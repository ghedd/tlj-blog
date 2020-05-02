import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import Post from "../components/Post"
import PostCollection from "../components/PostCollection"
import Headline from "../components/Headline"

const topPostQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { ne: "page" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt(pruneLength: 178)
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Thao Le - Julie" />
      {
        <StaticQuery
          query={topPostQuery}
          render={data => {
            return (
              <>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Headline
                    key={node.id}
                    path={node.fields.slug}
                    featuredImage={
                      node.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    readingTime={node.fields.readingTime.text}
                  />
                ))}
              </>
            )
          }}
        />
      }
      <PostCollection />
    </div>
  </Layout>
)

export default IndexPage
