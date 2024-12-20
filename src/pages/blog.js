import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const BlogPage = function ({ data }) {
  const { posts } = data.blog;

  return (
    <Layout>
      <h1>Blog</h1>

      {posts.map(post => (
        <article class={styles.blogListContainer} key={post.id}>
          <small>{post.frontmatter.date}</small>
          <Link to={'./posts' + post.fields.slug}>
            <h2 class={styles.blog}>{post.frontmatter.title}</h2>
          </Link>
          <p class={styles.tag}>{post.frontmatter.tags.map(tag => (
            <span class={styles.tag}>{tag}</span>
          ))}</p>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage

export const pageQuery = graphql` 
 query BlogPosts {
  blog: allMarkdownRemark(
    sort: [{ frontmatter: { date: DESC } }]
    ) {
    posts: nodes {
      frontmatter {
        date(fromNow: true)
        title
        tags
      }
      fields {
        slug
      }
      id
    }
  }
 }
`