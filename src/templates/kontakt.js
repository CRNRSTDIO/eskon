import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import * as styled from '../components/styled/Kontakt'

export const Kontakt = ({
  kontaktSection01,
  kontaktSection02
}) => (
  <Theme>
    <Layout>
      {}
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <Kontakt {...markdownRemark.frontmatter} />
  )
}

export const kontaktQuery = graphql`
  query KontaktQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "kontakt" } }) {
      frontmatter {
        kontaktSection01 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        kontaktSection02 {
          heading
          body
          options {
            option
          }
        }
      }
    }
  }
`
