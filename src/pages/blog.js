import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import PostCollection from "../components/PostCollection"

const BlogPage = () => (
  <Layout>
    <div>
      <SEO title="Blog" />
      <PostCollection childOfBlogPage={true} />
    </div>
  </Layout>
)

export default BlogPage
