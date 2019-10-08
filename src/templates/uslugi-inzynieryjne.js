import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import AliceCarousel from 'react-alice-carousel'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'
import 'react-alice-carousel/lib/alice-carousel.css'

export const UslugiInzynieryjneTemplate = ({
  landing,
  uslugiSection01,
  uslugiSection02
}) => {
  const items = uslugiSection02.carousel.map(({
    body,
    name,
    link,
    linkText
  }, index) => (
    <Col key={index} xs={4} sm={4} md={4}>
      {body}
    </Col>
  ))
  return (
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
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={9}>
                <Heading regular dark as='h3' noline>{uslugiSection01.heading}</Heading>
              </Col>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={9}>
                accordions
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row>
              <Col xs={4}>
                <AliceCarousel
                  items={items}
                  responsive={{
                    0: {
                      items: 1
                    },
                    1024: {
                      items: 2
                    }
                  }}
                />
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
        uslugiSection01 {
          heading
          accordions {
            heading
            body
            isOpen
          }
        }
        uslugiSection02 {
          carousel {
            body
            name
            link
            linkText
          }
        }
      }
    }
  }
`
