import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1><Sav's Thoughts/h1>
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          excerpt
        }
      }
    }
  }

`