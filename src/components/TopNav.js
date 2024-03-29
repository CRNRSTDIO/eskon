import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { LogotypeB, LogotypeW, PhoneB, PhoneW, LogoB, LogoW } from '../components/SVG'
import * as styled from '../components/styled/TopNav'

const TopNav = ({ data: { allMarkdownRemark: { edges: pages = [] }, globalJson: { topNavTel } }, dark, show, isOpen, toggleOpen }) => (
  <styled.TopNav dark={dark} show={show} isOpen={isOpen}>
    <Container>
      <Row>
        <Col xs={1} sm={1} md={1}>
          <styled.TopNavHamburgerWrapper>
            <styled.TopNavHamburger dark={dark} isOpen={isOpen} onClick={toggleOpen}>
              <span dark={dark} />
            </styled.TopNavHamburger>
          </styled.TopNavHamburgerWrapper>
        </Col>
        <Col xs={2} sm={1} md={1}>
          <styled.TopNavLogotype>
            <styled.TopNavLogoLink to='/'>
              {dark
                ? isOpen ? <LogotypeW /> : <LogotypeB />
                : <LogotypeW />
              }
            </styled.TopNavLogoLink>
          </styled.TopNavLogotype>
        </Col>
        <Col xs={0} md={7} offset={{ md: 1 }}>
          <styled.TopNavList isOpen={isOpen}>
            {console.log(pages)}
            {pages.filter(({ node: { frontmatter: { templateKey } } }) => templateKey !== 'index-page').map(({ node: page }) => (
              <styled.TopNavItem key={page.id}>
                <styled.TopNavLink dark={dark} to={page.fields.slug}>
                  {page.frontmatter.title}
                </styled.TopNavLink>
              </styled.TopNavItem>
            ))}
          </styled.TopNavList>
          <styled.TopNavLogo isOpen={isOpen}>
            {dark ? <LogoB /> : <LogoW />}
          </styled.TopNavLogo>
        </Col>
        <Col xs={4} sm={8} md={2}>
          <styled.TopNavPhone href={`tel:${topNavTel}}`} dark={dark} isOpen={isOpen}>
            {dark ? <PhoneB /> : <PhoneW />}
            {topNavTel}
          </styled.TopNavPhone>
        </Col>
      </Row>
    </Container>
  </styled.TopNav>
)

export default props => (
  <StaticQuery
    query={graphql`
      query TopNavQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { ne: "showcase" } } },
          sort: {order: ASC, fields: frontmatter___sortOrder}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                templateKey
                sortOrder
              }
              fields {
                slug
              }
            }
          }
        }
        globalJson {
          topNavTel
        }
      }
    `}
    render={(data) => <TopNav data={data} {...props} />}
  />
)
