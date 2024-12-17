import React from "react"
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import * as styles from "../components/index.module.css"

export default function BlogPost({data}) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <small>{post.frontmatter.date}</small>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.tags.map(tag => (
          <span class={styles.tag}>{tag}</span>
        ))}</p>
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
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`