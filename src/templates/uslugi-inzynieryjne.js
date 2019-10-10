import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Section from '../components/styled/Section'
import Landing from '../components/Landing'
import Carousel from '../components/Carousel'
import ShowcaseRoll from '../components/ShowcaseRoll'
import * as styled from '../components/styled/UslugiInzynieryjne'

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
    <Col key={index} xs={4}>
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
        <styled.Section02>
          <styled.Section02BackgroundImage>
            <svg height='100%' viewBox='0 0 13 17' xmlns='http://www.w3.org/2000/svg'>
              <path fill='#fff' d='M4.62206 0.509995L0 3.17548V12.0652L7.69871 16.51L12.3208 13.8445V4.95483L4.62206 0.509995ZM7.69871 14.7377L1.53833 11.1932V4.10415L7.69871 7.64867V14.7377ZM10.7825 12.9584L9.21577 13.8445V6.75545L3.05538 3.21093L4.62206 2.27517L10.7825 5.8197V12.9584Z" fill="black' />
            </svg>
          </styled.Section02BackgroundImage>
          <Container>
            <Row>
              <Col xs={4} sm={7} offset={{ sm: 1, md: 1 }} md={9}>
                <Row>
                  <Col xs={4}>
                    <Heading regular noline as='h3'>{uslugiSection02.heading}</Heading>
                  </Col>
                  <Carousel {...uslugiSection02} />
                </Row>
              </Col>
            </Row>
          </Container>
        </styled.Section02>
        <ShowcaseRoll nested />
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
          heading
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
