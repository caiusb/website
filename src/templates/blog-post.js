import React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/layout'

export default function BlogPost({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <small>{post.frontmatter.date}</small>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
      }
    }
  }
`