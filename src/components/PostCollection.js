import React from "react"
import Post from "./Post"
import { StaticQuery, graphql } from "gatsby"

const fullListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { ne: "page" } } }
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
  const author = ""
  return (
    <section id="recent-posts">
      {childOfBlogPage === true ? null : (
        <div className="section-name">
          <span>RECENT POSTS</span>
        </div>
      )}
      {author === "demo" ? (
        <div style={{ minHeight: "40vh", padding: "2rem" }}>
          <h3>
            Oops! Looks like the author hasn't put any thoughts here yet...
          </h3>
        </div>
      ) : (
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
      )}
    </section>
  )
}
export default PostCollection
