import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const ShowcaseRoll = ({ data: { allMarkdownRemark: { edges: items } } }) => {
  return (
    <div>
      {items.map(({ node: item }) => (
        <div key={item.id}>{item.frontmatter.title}</div>
      ))}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query ShowcaseRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "showcase" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
              }
            }
          }
        }
      }
      `}
    render={(data, count) => <ShowcaseRoll data={data} count={count} />}
  />
)
