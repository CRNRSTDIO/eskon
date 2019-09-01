import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Grid from './styled/Grid'
import * as styled from './styled/Footer'

const FooterNav = ({ data: { allMarkdownRemark: { edges: pages }, globalJson: { footer: { columns } } } }) => {
  return (
    <styled.FooterWrapper>
      <Grid>
        <styled.FooterNav>
          {pages && pages.map(({ node: page }) => (
            <styled.FooterLink key={page.id} to={page.fields.slug}>
              {page.frontmatter.title}
            </styled.FooterLink>
          ))}
        </styled.FooterNav>
      </Grid>
      <Grid>
        <styled.FooterHr />
      </Grid>
      <Grid>
        {columns.map(({ body }, index) => (
          <styled.FooterColumn key={index}>
            <styled.FooterColumnInside>
              {body.split('\n').map((line, index) => (
                <styled.FooterColumnLine key={index}>{line}</styled.FooterColumnLine>
              ))}
            </styled.FooterColumnInside>
          </styled.FooterColumn>
        ))}
      </Grid>
    </styled.FooterWrapper>
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
      `}
    render={data => <FooterNav data={data} />}
  />
)
