import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import * as styled from '../components/styled/IndexPage'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Counters from '../components/Counters'
import Solutions from '../components/IndexSolutions'
import Landing from '../components/Landing'

export const IndexTemplate = ({
  landing,
  counters,
  section01,
  image,
  section02,
  section03
}) => (
  <Theme>
    <Layout>
      <Landing
        huge
        {...landing}
      />
      <styled.Section box>
        <Container className='container'>
          <Row className='row' reverse={['sm', 'md', 'lg', 'xl']}>
            <Col xs={3} offset={{ xs: 1, sm: 1, md: 1 }} sm={2} md={3} className='col'>
              <Img fluid={section01.image.childImageSharp.fluid} />
            </Col>
            <Col xs={4} sm={4} md={7}>
              <Row>
                <Col xs={4} className='col'>
                  <Row>
                    <Col xs={4} md={6}>
                      <Heading dark regular as='h3'>{section01.heading}</Heading>
                    </Col>
                    <Col xs={4} md={6}>
                      <Paragraph dark>{section01.body}</Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </styled.Section>
      <styled.ImageContainer>
        <Container>
          <Row>
            <Col xs={4} sm={6} md={6}>
              <Img fluid={image.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </styled.ImageContainer>
      <styled.Section>
        <Container>
          <Row>
            <Col xs={4} sm={4} offset={{ sm: 1, md: 1 }} md={4}>
              <Row>
                <Col xs={4}>
                  <Heading dark regular as='h3'>{section02.heading}</Heading>
                </Col>
                <Col xs={4}>
                  <Paragraph dark>{section02.body}</Paragraph>
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={8} md={4} offset={{ md: 3 }}>
              Counters
            </Col>
          </Row>
        </Container>
      </styled.Section>
      <styled.Section>
        <Container>
          <Row>
            <Col xs={4} sm={5} offset={{ sm: 1, md: 1}} md={4}>
              <Row>
                <Col xs={4}>
                  <Heading dark regular noline as='h3'>{section03.heading}</Heading>
                </Col>
                <Col xs={4}>
                  <Paragraph dark>{section03.body}</Paragraph>
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={8} offset={{ sm: 0, md: 1 }} md={8}>
              <Solutions {...section03} />
            </Col>
          </Row>
        </Container>
      </styled.Section>
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <IndexTemplate {...markdownRemark.frontmatter}/>
  )
}

export const indexPageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        landing {
          heading
          box01 {
            heading
            body
            cta
          }
          box02 {
            heading
            body
            cta
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 538) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        section01 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        section02 {
          heading
          body
        }
        counters {
          desc
          value
          special
        }
        section03 {
          heading
          body
          items {
            heading
            body
            icon {
              childImageSharp {
                fixed(height: 52) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
