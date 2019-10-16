import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import Columns from '../components/styled/Columns'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'
import Img from 'gatsby-image'
import Accordions from '../components/Accordions'

export const DomyPodKluczTemplate = ({
  landing,
  domySection01,
  image,
  domySection02
}) => (
  <Theme>
    <Layout>
      <Landing
        medium
        background={landing.image.childImageSharp.fluid}
        {...landing}
        image={null}
      />
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={6} md={3} offset={{ sm: 1, md: 1 }}>
              <Row>
                <Col xs={4}>
                  <Heading dark regular as='h3'>{domySection01.heading}</Heading>
                </Col>
                <Col xs={4}>
                  <Paragraph dark>{domySection01.body}</Paragraph>
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={6} md={6} offset={{ sm: 1, md: 1}}>
              <Accordions cols={2} accordions={domySection01.accordions} />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col xs={4}>
              <Img fluid={image.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={4} offset={{ sm: 1, md: 1 }} md={4}>
              <Heading dark regular as='h3'>{domySection02.heading}</Heading>
            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={6}>
              <Columns noline>
                <Paragraph dark>{domySection02.body}</Paragraph>
              </Columns>
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
    <DomyPodKluczTemplate {...markdownRemark.frontmatter} />
  )
}

export const domyPodKluczQuery = graphql`
  query DomyPodKlucz {
    markdownRemark(frontmatter: { templateKey: { eq: "domy-pod-klucz" } }) {
      frontmatter {
        landing {
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
        domySection01 {
          heading
          body
          accordions {
            heading
            body
            isOpen
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        domySection02 {
          heading
          body
        }
        domySection03 {
          header {
            lhs {
              image
              text
              small
            }
            rhs {
              image
              text
              small
            }
          }
          row {
            heading
            lhs {
              item {
                image
                big
                text
              }
            }
            rhs {
              item {
                image
                big
                text
              }
            }
          }
        }
      }
    }
  }
`
