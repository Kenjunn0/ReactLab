import * as React from "react"
import Seo from "./components/Seo";
import Layout from "./components/Layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <div>
      <Layout title="Welcome to DevStickers">
          <StaticImage src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80" alt="stickers on the wall" />
      </Layout>
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
