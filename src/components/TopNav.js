import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { Container, Row, Col, Visible, Hidden } from 'react-awesome-styled-grid'
import * as styled from '../components/styled/TopNav'

const variants = {
  show: {
    transition: {
      staggerChildren: 0.25
    }
  },
  hide: {
    staggerDirection: -1
  }
}

const listVariants = {
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  },
  hide: {
    staggerDirection: -1
  }
}

const itemVariants = {
  show: {
    y: 0,
    opacity: 1
  },
  hide: {
    y: -50,
    opacity: 0
  }
}

const TopNav = ({ data: { allMarkdownRemark: { edges: pages = [] }, globalJson: { logo } }, dark, open }) => (
  <styled.TopNav variants={variants}>
    <Container>
      <Row>
        <Visible xs>
          <Col xs={1}>
            Menu
          </Col>
        </Visible>
        <Col xs={2} sm={1} offset={{ sm: 1, md: 1 }} md={1}>
          <styled.TopNavLogo variants={itemVariants}>
            {!open
              ? (
                <img src={dark ? logo[0].variant : logo[1].variant} height={14} />
              )
              : (
                <img src={logo[1].variant} height={14} />
              )}
          </styled.TopNavLogo>
        </Col>
        {!open && (
          <Hidden xs sm>
            <Col md={7} offset={{ md: 1 }}>
              <styled.TopNavList variants={listVariants}>
                {pages.filter(({ node: { frontmatter: { templateKey } } }) => templateKey !== 'index-page').map(({ node: page }) => (
                  <styled.TopNavItem key={page.id} variants={itemVariants}>
                    <styled.TopNavLink dark={dark} to={page.fields.slug}>
                      {page.frontmatter.title}
                    </styled.TopNavLink>
                  </styled.TopNavItem>
                ))}
              </styled.TopNavList>
            </Col>
          </Hidden>
        )}
        <Visible xs sm>
          <Col xs={1} offset={{ sm: 5 }} sm={1}>
            <styled.TopNavLogo variants={itemVariants}>
              <img src={dark ? logo[4].variant : logo[5].variant} height={30} />
            </styled.TopNavLogo>
          </Col>
        </Visible>
        {!open && (
          <Hidden xs sm>
            <Col md={2}>
              <styled.TopNavPhone dark={dark} variants={itemVariants}>
                Telefon
              </styled.TopNavPhone>
            </Col>
          </Hidden>
        )}
      </Row>
    </Container>
  </styled.TopNav>
)

export default ({ dark, open }) => (
  <StaticQuery
    query={graphql`
      query TopNavQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { ne: "showcase" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                templateKey
              }
              fields {
                slug
              }
            }
          }
        }
        globalJson {
          logo {
            variant
          }
        }
      }
    `}
    render={(data) => <TopNav data={data} dark={dark} open={open} />}
  />
)
