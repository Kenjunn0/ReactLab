import * as React from "react"
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <div>
      <Layout title="Welcome to DevStickers">
          <div></div>
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
