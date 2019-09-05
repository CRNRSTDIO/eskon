import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'

export const UslugiInzynieryjneTemplate = ({
  landing,
  section01
}) => (
  <Theme>
    <Layout>
      <Landing
        background={landing.image.childImageSharp.fluid}
        {...landing}
        image={null}
      />
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={9}>
              <Heading regular dark as='h3' noline>{section01.heading}</Heading>
            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={9}>
              accordions
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <UslugiInzynieryjneTemplate {...markdownRemark.frontmatter} />
  )
}

export const uslugiInzynieryjneQuery = graphql`
  query UslugiInzynieryjne {
    markdownRemark(frontmatter: { templateKey: { eq: "uslugi-inzynieryjne" } }) {
      frontmatter {
        landing {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 2048) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
