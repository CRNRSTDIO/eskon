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
import CircularText from '../components/CircularText'
import Seo from '../components/seo'
import * as styled from '../components/styled/ONas'

export const ONasTemplate = ({
  title: page,
  oSection01,
  oSection02,
  oSection03
}) => (
  <Theme>
    <Seo page={page} />
    <Layout darktop>
      <Landing
        medium
        dark
        {...oSection01}
      />
      <styled.Section01>
        <Container>
          <Row>
            <Col xs={3} sm={4} offset={{ sm: 1, md: 1 }} md={4}>
              <styled.Section01Image>
                <ImageAnimated>
                  <Img fluid={oSection02.image.childImageSharp.fluid} alt={oSection02.alt} />
                </ImageAnimated>
              </styled.Section01Image>
            </Col>
            <Col xs={4} sm={4} offset={{ sm: 1, md: 1 }} md={3}>
              <styled.Section01Text>
                <Row>
                  <Col xs={4}>
                    <Heading dark regular as='h3'>{oSection02.heading}</Heading>
                  </Col>
                  <Col xs={4}>
                    <Paragraph dark>{oSection02.body}</Paragraph>
                  </Col>
                </Row>
              </styled.Section01Text>
            </Col>
          </Row>
        </Container>
        <styled.Section01CircularText>
          <CircularText blue />
        </styled.Section01CircularText>
      </styled.Section01>
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
        title,
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
          alt
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
          alt
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
            alt
            name
            descr
          }
        }
      }
    }
  }
`
