import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'

export const UslugiInzynieryjneTemplate = ({

}) => (
  <Theme>
    <Layout>
      <Landing />
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <UslugiInzynieryjneTemplate {...markdownRemark.frontmatter} />
  )
}

export const uslugiInzynieryjneQUery = graphql`
  query UslugiInzynieryjne {
    markdownRemark(frontmatter: { templateKey: { eq: "uslugi-inzynieryjne" } }) {
      frontmatter {
        landing {
          heading
          image
          body
          cta
        }
        section01 {
          heading
          accordions {
            heading
            body
            isOpen
          }
        }
      }
    }
  }
`
