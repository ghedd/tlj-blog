import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const aboutContent = data.markdownRemark
  const title = aboutContent.frontmatter.title
  const content = aboutContent.html
  const hero = data.hero.childImageSharp.fluid
  const profileImg = data.profileImg.childImageSharp.fixed
  console.log(hero)

  return (
    <Layout>
      <SEO title={title} />
      <section id="about-page">
        {/* <div > */}
        <Img fluid={hero} className="about-page-hero" alt="Dalat pine trees" />
        {/* </div> */}

        <Img
          fixed={profileImg}
          className="about-page-profile-img"
          alt="It's me"
        />

        <div className="about-page-greeting title">
          <p>Hi! Nice to meet you!</p>
        </div>
        <div
          className="about-page-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Link to="/">Home</Link>
      </section>
    </Layout>
  )
}

export const abouPageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "dalat_bgr.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profileImg: file(relativePath: { eq: "Thao_profile_cropped.jpg" }) {
      childImageSharp {
        fixed(height: 200, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default AboutPage
