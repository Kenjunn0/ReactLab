import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import {graphql, Link, PageProps} from "gatsby";

function Blog( {data} : PageProps<Queries.BlogPostsQuery>) {

    return (
        <Layout title="Blog">
            <section>
                {data.allMdx.nodes.map((file, index) => (
                    <article key={index}>
                        <Link to={`/blog/${file.frontmatter?.slug}`}>
                            <h3>{file.frontmatter?.title}</h3>
                        </Link>
                        <h5>{file.frontmatter?.author} in: {file.frontmatter?.category}</h5>
                        <h6>{file.frontmatter?.date}</h6>
                        <hr/>
                        <p>{file.excerpt}</p>
                    </article>
                ))}
            </section>
        </Layout>
    )

}

export const query = graphql`
    query BlogPosts {
        allMdx {
            nodes {
                frontmatter {
                    author
                    category
                    date(formatString: "YYYY.MM.DD")
                    title
                    slug
                }
                excerpt(pruneLength: 50)
            }
        }
    }
`

export const Head = () => <Seo title="Blog" />
export default Blog;