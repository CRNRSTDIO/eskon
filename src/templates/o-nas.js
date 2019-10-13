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
import Cards from '../components/Cards'
import ImageAnimated from '../components/ImageAnimated'

export const ONasTemplate = ({
  oSection01,
  oSection02,
  oSection03
}) => (
  <Theme>
    <Layout darktop>
      <Landing
        medium
        dark
        {...oSection01}
      />
      <Section>
        <Container>
          <Row>
            <Col xs={3} sm={4} offset={{ sm: 1, md: 1 }} md={4}>
              <ImageAnimated>
                <Img fluid={oSection02.image.childImageSharp.fluid} />
              </ImageAnimated>
            </Col>
            <Col xs={4} sm={4} offset={{ sm: 1, md: 1 }} md={3}>
              <Row>
                <Col xs={4}>
                  <Heading dark regular as='h3'>{oSection02.heading}</Heading>
                </Col>
                <Col xs={4}>
                  <Paragraph dark>{oSection02.body}</Paragraph>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Cards {...oSection03} />
      </Section>
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <ONasTemplate {...markdownRemark.frontmatter} />
  )
}

export const oNasQuery = graphql`
  query ONas {
    markdownRemark(frontmatter: { templateKey: { eq: "o-nas" } }) {
      frontmatter {
        oSection01 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        oSection02 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        oSection03 {
          heading
          cards {
            image {
              childImageSharp {
                fluid(maxWidth: 260) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            descr
          }
        }
      }
    }
  }
`
