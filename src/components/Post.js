import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
// import _ from "lodash"

const Post = ({
  title,
  date,
  body,
  readingTime,
  path,
  featuredImage,
  defaultImage,
}) => {
  return (
    <>
      <div className="post-preview">
        <Link to={path}>
          {/* <img
              src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="something here"
            /> */}
          <Img className="preview-img" fluid={featuredImage} />
        </Link>

        <div className="preview-cont">
          <Link to={path}>
            <span className="preview-title link-focus">{title}</span>
          </Link>
          <p className="preview-pgh">{body}</p>

          <Link className="read-link link-focus" to={path}>
            <span className="read-more">Read more</span>
          </Link>
          <span className="preview-timestmp">{date}</span>
          {` `}
          <span className="preview-reading-time">{readingTime}</span>
        </div>
      </div>
      <hr className="hr-post-preview" />
    </>
    //{" "}
  )
}

export default Post
