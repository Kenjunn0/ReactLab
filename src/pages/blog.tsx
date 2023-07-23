import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function Blog() {

    return (
        <Layout title="Blog">
            <h4>Hello welcome to my blog!</h4>
        </Layout>
    )

}

export const Head = () => <Seo title="Blog" />
export default Blog;