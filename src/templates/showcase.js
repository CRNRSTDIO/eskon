import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Img from 'gatsby-image'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Section from '../components/styled/Section'
import Heading from '../components/styled/Heading'
import Columns from '../components/styled/Columns'
import Paragraph from '../components/styled/Paragraph'
import * as styled from '../components/styled/Showcase'

export const ShowcaseTemplate = ({
  title,
  tags,
  showcaseSection01,
  showcaseSection02,
  showcaseSection03,
  showcaseSection04,
  showcaseSection05,
  showcaseSection06,
  showcaseSection07,
  showcaseSection08,
  showcaseSection09
}) => (
  <Theme>
    <Layout>
      <Section>
        <styled.Section01>
          <Container>
            <Row>
              <Col xs={4} sm={5} offset={{ sm: 1, md: 1 }} md={4}>
                <Heading regular as='h3' dark>
                  {showcaseSection01.heading}
                </Heading>
              </Col>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={6}>
                <Columns>
                  <Paragraph dark>
                    {showcaseSection01.body}
                  </Paragraph>
                </Columns>
              </Col>
            </Row>
          </Container>
        </styled.Section01>
      </Section>
      <Section>
        <styled.Section02>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>
                <styled.Section02Text>
                  <Row>
                    <Col xs={4}>
                      <Heading regular as='h3'>
                        {showcaseSection02.heading}
                      </Heading>
                    </Col>
                    <Col xs={4}>
                      <Paragraph>
                        {showcaseSection02.body}
                      </Paragraph>
                    </Col>
                  </Row>
                </styled.Section02Text>
              </Col>
            </Row>
          </Container>
          <styled.Section02Image>
            <Img fluid={showcaseSection02.image.childImageSharp.fluid} />
          </styled.Section02Image>
        </styled.Section02>
      </Section>
      <Section>
        <styled.Section03>
          <Container>
            <Row>
              {showcaseSection03.map(({ heading, body }, index) => (
                <Col key={index} xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>
                  <Heading small dark as='h4'>
                    {heading}
                  </Heading>
                  <Paragraph dark>
                    {body}
                  </Paragraph>
                </Col>
              ))}
            </Row>
          </Container>
        </styled.Section03>
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
