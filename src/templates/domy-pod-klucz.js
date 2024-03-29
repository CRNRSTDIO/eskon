import React, { useRef } from 'react'
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
import Table from '../components/Table'
import Seo from '../components/seo'
import * as styled from '../components/styled/DomyPodKlucz'

export const DomyPodKluczTemplate = ({
  title: page,
  landing,
  domySection01,
  image,
  alt,
  domySection02,
  domySection03: table
}) => {
  const ref = useRef()

  return (
    <Theme>
      <Seo page={page} />
      <Layout>
        <Landing
          scrollTo={ref}
          medium
          background={landing.image.childImageSharp.fluid}
          {...landing}
          image={null}
        />
        <styled.Section01 ref={ref}>
          <Container>
            <Row>
              <Col xs={4} sm={6} md={3} offset={{ sm: 1, md: 1 }}>
                <styled.Section01Text>
                  <Row>
                    <Col xs={4}>
                      <Heading dark regular as='h3'>{domySection01.heading}</Heading>
                    </Col>
                    <Col xs={4}>
                      <Paragraph dark>{domySection01.body}</Paragraph>
                    </Col>
                  </Row>
                </styled.Section01Text>
              </Col>
              <Col xs={4} sm={6} md={6} offset={{ sm: 1, md: 1 }}>
                <Accordions cols={2} accordions={domySection01.accordions} />
              </Col>
            </Row>
          </Container>
        </styled.Section01>
        <Container>
          <Row>
            <Col xs={4}>
              <Img fluid={image.childImageSharp.fluid} alt={alt} />
            </Col>
          </Row>
        </Container>
        <styled.Section02>
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
        </styled.Section02>
        <Section>
          <Container>
            <Row>
              <Col xs={4}>
                <Table {...table} />
              </Col>
            </Row>
          </Container>
        </Section>
      </Layout>
    </Theme>
  )
}

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
        title,
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
          alt
        }
        domySection01 {
          heading
          body
          accordions {
            heading
            body
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        domySection02 {
          heading
          body
        }
        domySection03 {
          header {
            lhs {
              image {
                publicURL
              }
              text
              small
            }
            rhs {
              image {
                publicURL
              }
              text
              small
            }
          }
          row {
            heading
            lhs {
              item {
                image {
                  publicURL
                }
                big
                text
              }
            }
            rhs {
              item {
                image {
                  publicURL
                }
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
