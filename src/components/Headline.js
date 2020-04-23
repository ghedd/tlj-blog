import React from "react"
import { Link } from "gatsby"

const Headline = ({ path, title, date, body, author, readingTime }) => {
  return (
    <Link to={path}>
      <section id="featured-post">
        <div className="featured-post-photo shrink">
          <img
            src="https://images.unsplash.com/photo-1565858660321-08eaa0470c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="featured post"
          />
        </div>
        <div className="featured-post-content">
          <h1 className="feat-title">{title}</h1>
          <p className="featured-pgh">{body}</p>
          <span className="feat-author">{author}</span>
          <br />
          <span className="feat-timestmp">{date}</span>
          <span className="feat-reading-time">{readingTime}</span>
        </div>
      </section>
    </Link>
  )
}

export default Headline
