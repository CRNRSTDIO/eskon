import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Section from '../components/styled/Section'

export const ShowcaseTemplate = ({

}) => (
  <Theme>
    <Layout>
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={5} offset={{ sm: 1, md: 1 }} md={4}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1 }} md={6}>

            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>
              <Row>
                <Col xs={4}>

                </Col>
                <Col xs={4}>

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>

            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col sm={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>

            </Col>
            <Col sm={4} sm={6} offset={{ sm: 1, md: 2 }} md={6}>

            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col sm={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>

            </Col>
            <Col sm={4} sm={6} offset={{ sm: 1, md: 2}} md={6}>

            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <Row>
            <Col xs={4} sm={4} md={6}>

            </Col>
            <Col xs={4} sm={4} md={6}>

            </Col>
            <Col xs={4} sm={4} md={6}>

            </Col>
            <Col xs={4} sm={4} md={6}>

            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={8} md={3} offset={{ md: 1 }}>
              <Row>
                <Col xs={4} sm={3} offset={{ sm: 1, md: 0 }} md={12}>

                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={8} md={3} offset={{ md: 1 }}>
              <Row>
                <Col xs={4} sm={3} offset={{ sm: 1, md: 0 }} md={12}>

                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={8} md={3} offset={{ md: 1 }}>
              <Row>
                <Col xs={4} sm={3} offset={{ sm: 1, md: 0 }} md={12}>

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={10}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>
              s
            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>

            </Col>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>

            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container fluid>
          <Row>
            <Col xs={4} sm={4} md={6}>

            </Col>
            <Col xs={4} sm={4} md={6}>

            </Col>
            <Col xs={4} sm={4} md={6}>

            </Col>
            <Col xs={4} sm={4} md={6}>

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
    <ShowcaseTemplate {...markdownRemark.frontmatter} />
  )
}

export const showcaseQuery = graphql`
  query ShowcaseById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        tags {
          tag
        }
        showcaseSection01 {
          heading
          body
        }
        showcaseSection02 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showcaseSection03 {
          heading
          body
        }
        showcaseSection04 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showcaseSection05 {
          heading
          body
          accordions {
            heading
            body
          }
        }
        showcaseSection06 {
          image {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showcaseSection07 {
          value
          addition
          description
        }
        showcaseSection08 {
          heading
          items {
            icon {
              childImageSharp {
                fixed(height: 52) {
                  ...GatsbyImageSharpFixed
                }
              }
              publicURL
            }
            heading
            descr
          }
        }
        showcaseSection09 {
          image {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
