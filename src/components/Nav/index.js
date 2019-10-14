import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import * as styled from '../styled/Nav'

const listVariants = {
  open: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  },
  closed: {
    staggerDirection: -1
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}

const navVariants = {
  open: {
    x: 0
  },
  closed: {
    x: '-100%'
  }
}

export const NavBar = ({ show, toggleOpen }) => (
  <styled.NavBar animate={show ? 'open' : 'closed'} style={{ originX: 0 }} variants={navVariants} onClick={() => toggleOpen()}>
    Menu
    <styled.NavBarText>
      Eskon Przedsiębiorstwo budowlane &copy; Eskon {new Date().getFullYear()}
    </styled.NavBarText>
  </styled.NavBar>
)

export const Nav = () => (
  <styled.Nav />
)

const NavList = ({ data: { allMarkdownRemark: { edges: pages } } }) => (
  <styled.NavListWrapper>
    <styled.NavList variants={listVariants}>
      {pages && pages.map(({ node: page }) => (
        <styled.NavItem key={page.id} variants={itemVariants}>
          <styled.NavLink to={page.fields.slug}>
            {page.frontmatter.title || 'Strona głowna'}
          </styled.NavLink>
        </styled.NavItem>
      ))}
    </styled.NavList>
    <styled.NavFootNote>
      &copy; Eskon {new Date().getFullYear()}
    </styled.NavFootNote>
  </styled.NavListWrapper>
)

export default () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
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
      }
    `}
    render={data => <NavList data={data} />}
  />
)
