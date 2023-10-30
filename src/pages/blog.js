import React from 'react'
import Layout from "../components/layout"

const BlogPage = () => (
  <Layout>
    <h1>Blog</h1>

    <h2>External Blog Posts</h2>

    November 2022, AWS Big Data Blog: <a href="https://aws.amazon.com/blogs/big-data/how-etleap-and-amazon-redshift-serverless-optimize-costs-for-etl/">How Etleap and Amazon Redshift Serverless optimize costs for ETL</a>
    <br />
    November 2021, AWS Big Data Blog: <a href="https://aws.amazon.com/blogs/big-data/integrate-etleap-with-amazon-redshift-streaming-ingestion-preview-to-make-data-available-in-seconds/">Integrate Etleap with Amazon Redshift Streaming Ingestion (preview) to make data available in seconds</a>
    <br />
    December 2020, AWS Partner Network (APN): <a href="https://aws.amazon.com/blogs/apn/how-etleap-integrates-with-amazon-redshift-data-sharing-to-provide-isolation-of-etl-and-bi-workloads/">How Etleap Integrates with Amazon Redshift Data Sharing to Provide Isolation of ETL and BI Workloads</a>

  </Layout>
)

export default BlogPage
