import React from "react"
import Post from "./Post"
import { StaticQuery, graphql } from "gatsby"

const fullListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { title: { ne: "About" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD")
            title
          }
          excerpt
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

const PostCollection = ({ childOfBlogPage }) => {
  return (
    <section id="recent-posts">
      {childOfBlogPage === true ? null : (
        <div className="section-name">
          <span>RECENT POSTS</span>
        </div>
      )}
      <div className="post-collection">
        <StaticQuery
          query={fullListQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    path={node.fields.slug}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    readingTime={node.fields.readingTime.text}
                  />
                ))}
              </div>
            )
          }}
        />
      </div>
    </section>
  )
}
export default PostCollection
