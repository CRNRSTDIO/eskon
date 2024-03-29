import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { LogoCombW } from '../components/SVG'
import * as styled from './styled/Footer'

const FooterNav = ({ data: { allMarkdownRemark: { edges: pages }, globalJson: { footer: { columns } } } }) => {
  return (
    <styled.FooterWrapper>
      <Container>
        <Row>
          <Col xs={4} sm={6} md={11} offset={{ sm: 1, md: 1 }}>
            <div>
              {pages && pages.map(({ node: page }) => (
                <styled.FooterLink key={page.id} to={page.fields.slug}>
                  {page.frontmatter.title}
                </styled.FooterLink>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={12}>
            <styled.FooterHr />
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={12}>
            <Row>
              {columns.map(({ body }, index) => (
                <Col key={index} xs={4} md={2} offset={{ md: 1 }}>
                  <styled.FooterColumnInside>
                    {body.split('\n').map((line, index) => (
                      <styled.FooterColumnLine key={index}>{line}</styled.FooterColumnLine>
                    ))}
                  </styled.FooterColumnInside>
                </Col>
              ))}
              <Col xs={4} md={2} offset={{ md: 3 }}>
                <styled.FooterLogo>
                  <LogoCombW />
                </styled.FooterLogo>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={12}>
            <Row>
              <Col xs={4} sm={8} offset={{ md: 1 }} md={5}>
                <styled.FooterCopy>
                  <styled.FooterCopyItem>
                    Polityka prywatności
                  </styled.FooterCopyItem>
                  <styled.FooterCopyItem>
                    Wszystkie prawa zastrzeżone  &copy; Eskon {new Date().getFullYear()}
                  </styled.FooterCopyItem>
                </styled.FooterCopy>
              </Col>
              <Col xs={4} sm={8} offset={{ md: 3 }} md={2}>
                <styled.FooterCopyItem>
                  Website by CRNR
                </styled.FooterCopyItem>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </styled.FooterWrapper>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterNavQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: {ne: "showcase"} } },
          sort: {order: ASC, fields: frontmatter___sortOrder}
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
