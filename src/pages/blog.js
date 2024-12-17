import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

const BlogPage = function ({ data }) {
  const { posts } = data.blog;

  return (
    <Layout>
      <h1>Blog</h1>

      {posts.map(post => (
        <article key={post.id}>
          <small>{post.frontmatter.date}</small>
          <Link to={'.' + post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <p>Tags: {post.frontmatter.tags.join(', ')}</p>
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