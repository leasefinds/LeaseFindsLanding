import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1 style={{textAlign: "center"}}>NOT FOUND</h1>
    <p style={{textAlign: "center"}}>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
