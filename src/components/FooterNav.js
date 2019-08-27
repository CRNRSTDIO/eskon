import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const FooterNav = ({ data: { allMarkdownRemark: { edges: pages }, globalJson: { footer: { columns } } } }) => {
  return (
    <>
      {pages && pages.map(({ node: page }) => (
        <div key={page.id}>
          <Link to={page.fields.slug}>
            {page.frontmatter.title}
          </Link>
        </div>
      ))}
      {console.log(columns.map(({ body }) => body))}
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterNavQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: {ne: "showcase"} } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
        globalJson {
          footer {
            columns {
              body
              }
            }
          }
        }
      }
      `}
    render={data => <FooterNav data={data} />}
  />
)
