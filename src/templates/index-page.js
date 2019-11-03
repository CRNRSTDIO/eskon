import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Theme from '../components/Theme'
import Layout from '../components/Layout'
import Heading from '../components/styled/Heading'
import Paragraph from '../components/styled/Paragraph'
import * as styled1 from '../components/styled/IndexPage/index'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Counters from '../components/Counters'
import Solutions from '../components/IndexSolutions'
import Landing from '../components/Landing'
import ShowcaseRoll from '../components/ShowcaseRoll'
import ImageAnimated from '../components/ImageAnimated'
import Seo from '../components/seo'

export const IndexTemplate = ({
  title: page,
  landing,
  indexSection01,
  image,
  alt,
  indexSection02,
  indexSection03,
  indexSection04
}) => (
  <Theme>
    <Seo page={page} />
    <Layout>
      <Landing
        huge
        {...landing}
        image={null}
      />
      <styled1.Section01 box>
        <Container className='container'>
          <Row className='row' reverse={['sm', 'md', 'lg', 'xl']}>
            <Col xs={3} offset={{ xs: 1, sm: 1, md: 1 }} sm={2} md={3} className='col'>
              <styled1.Section01Image>
                <ImageAnimated>
                  <Img fluid={indexSection01.image.childImageSharp.fluid} alt={indexSection01.alt} />
                </ImageAnimated>
              </styled1.Section01Image>
            </Col>
            <Col xs={4} sm={4} md={7} offset={{ md: 1 }}>
              <styled1.Section01Text>
                <Row>
                  <Col xs={4} className='col'>
                    <Row>
                      <Col xs={4} md={6}>
                        <Heading dark regular as='h3'>{indexSection01.heading}</Heading>
                      </Col>
                      <Col xs={4} md={6}>
                        <Paragraph dark>{indexSection01.body}</Paragraph>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </styled1.Section01Text>
            </Col>
          </Row>
        </Container>
      </styled1.Section01>
      <styled1.Section02>
        <Container>
          <Row>
            <Col xs={4} sm={6} md={6}>
              <styled1.Section02Image>
                <ImageAnimated>
                  <Img fluid={image.childImageSharp.fluid} alt={alt} />
                </ImageAnimated>
              </styled1.Section02Image>
            </Col>
          </Row>
        </Container>
      </styled1.Section02>
      <styled1.Section03>
        <Container>
          <Row>
            <Col xs={4} sm={4} offset={{ sm: 1, md: 1 }} md={3}>
              <styled1.Section03Text>
                <Row>
                  <Col xs={4}>
                    <Heading dark regular as='h3'>{indexSection02.heading}</Heading>
                  </Col>
                  <Col xs={4}>
                    <Paragraph dark>{indexSection02.body}</Paragraph>
                  </Col>
                </Row>
              </styled1.Section03Text>
            </Col>
            <Col xs={4} sm={8} md={4} offset={{ md: 3 }}>
              <Counters counters={indexSection03} />
            </Col>
          </Row>
        </Container>
      </styled1.Section03>
      <styled1.Section04>
        <Container>
          <Row>
            <Col xs={4} sm={5} offset={{ sm: 1, md: 1 }} md={4}>
              <Row>
                <Col xs={4}>
                  <Heading dark regular noline as='h3'>{indexSection04.heading}</Heading>
                </Col>
                <Col xs={4}>
                  <Paragraph dark>{indexSection04.body}</Paragraph>
                </Col>
              </Row>
            </Col>
            <Col xs={4} sm={8} offset={{ sm: 0, md: 1 }} md={10}>
              <Solutions {...indexSection04} />
            </Col>
          </Row>
        </Container>
      </styled1.Section04>
      <ShowcaseRoll nested />
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <IndexTemplate {...markdownRemark.frontmatter} />
  )
}

export const indexPageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title,
        landing {
          heading
          box01 {
            heading
            body
            cta
            image {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          box02 {
            heading
            body
            cta
            image {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 538) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        indexSection01 {
          heading
          body
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        indexSection02 {
          heading
          body
        }
        indexSection03 {
          desc
          value
          special
        }
        indexSection04 {
          heading
          body
          items {
            heading
            body
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`
