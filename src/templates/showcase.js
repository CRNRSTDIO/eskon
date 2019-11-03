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
import Accordions from '../components/Accordions'
import Count from '../components/Count'
import ShowcaseRoll from '../components/ShowcaseRoll'
import Seo from '../components/seo'
import * as styled from '../components/styled/Showcase'

export const ShowcaseTemplate = ({
  id,
  title,
  tags,
  image,
  alt,
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
    <Seo page={title} />
    <Layout>
      <Section>
        <styled.Section00>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={6}>
                <Heading big noline>{title}</Heading>
              </Col>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={6}>
                <Row>
                  {tags.map(({ tag }, index) => (
                    <Col key={index} xs={4} sm={4} md={6}>
                      <styled.Section00Tag>
                        <Paragraph>{tag}</Paragraph>
                      </styled.Section00Tag>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <styled.Section00Image
              fluid={image.childImageSharp.fluid}
              style={{ position: 'absolute' }}
              alt={alt}
            />
          </Container>
        </styled.Section00>
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
            <Img fluid={showcaseSection02.image.childImageSharp.fluid} alt={showcaseSection02.alt} />
          </styled.Section02Image>
        </styled.Section02>
      </Section>
      <Section>
        <styled.Section03>
          <Container>
            <Row>
              {showcaseSection03.map(({ heading, body }, index) => (
                <Col key={index} xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>
                  <styled.Section03Item>
                    <Heading small dark as='h4'>
                      {heading}
                    </Heading>
                    <Paragraph dark>
                      {body}
                    </Paragraph>
                  </styled.Section03Item>
                </Col>
              ))}
            </Row>
          </Container>
        </styled.Section03>
      </Section>
      <Section>
        <styled.Section04>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>
                <styled.Section04Text>
                  <Row>
                    <Col xs={4}>
                      <Heading regular dark as='h3'>
                        {showcaseSection04.heading}
                      </Heading>
                    </Col>
                    <Col xs={4}>
                      <Paragraph dark>
                        {showcaseSection04.body}
                      </Paragraph>
                    </Col>
                  </Row>
                </styled.Section04Text>
              </Col>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={6}>
                <styled.Section04Image>
                  <Img fluid={showcaseSection04.image.childImageSharp.fluid} alt={showcaseSection04.alt} />
                </styled.Section04Image>
              </Col>
            </Row>
          </Container>
        </styled.Section04>
      </Section>
      <Section>
        <styled.Section05>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={3}>
                <styled.Section05Text>
                  <Row>
                    <Col xs={4}>
                      <Heading regular dark as='h3'>
                        {showcaseSection05.heading}
                      </Heading>
                    </Col>
                    <Col xs={4}>
                      <Paragraph dark>
                        {showcaseSection05.body}
                      </Paragraph>
                    </Col>
                  </Row>
                </styled.Section05Text>
              </Col>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 2 }} md={6}>
                <Accordions accordions={showcaseSection05.accordions} />
              </Col>
            </Row>
          </Container>
        </styled.Section05>
      </Section>
      <Section>
        <styled.Section06>
          {showcaseSection06.map(({ image, alt }, index) => (
            <styled.Section06Div key={index}>
              <Img
                fluid={image.childImageSharp.fluid}
                style={{
                  height: '100%',
                  minWidth: '100%'
                }}
                alt={alt}
              />
            </styled.Section06Div>
          ))}
        </styled.Section06>
      </Section>
      <Section>
        <styled.Section07>
          <Container>
            <Row>
              {showcaseSection07.map(({ value, addition, description }, index) => (
                <Col key={index} xs={4} sm={8} md={3} offset={{ md: 1 }}>
                  <Row>
                    <Col xs={4} sm={3} offset={{ sm: 1, md: 0 }} md={12}>
                      <styled.Section07Item>
                        <Count countTo={Number(value)} suffix={addition} />
                        <Paragraph dark>{description}</Paragraph>
                      </styled.Section07Item>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Container>
        </styled.Section07>
      </Section>
      <Section>
        <styled.Section08>
          <Container>
            <Row>
              <Col xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={10}>
                <styled.Section08Heading>
                  <Heading dark noline regular as='h3'>{showcaseSection08.heading}</Heading>
                </styled.Section08Heading>
              </Col>
              {showcaseSection08.items.map(({ icon, heading, descr }, index) => (
                <Col key={index} xs={4} sm={6} offset={{ sm: 1, md: 1 }} md={5}>
                  <styled.Section08Item>
                    <styled.Section08ItemImage>
                      <img src={icon.publicURL} alt='' />
                    </styled.Section08ItemImage>
                    <styled.Section08ItemHeading>{heading}</styled.Section08ItemHeading>
                    <Paragraph dark>{descr}</Paragraph>
                  </styled.Section08Item>
                </Col>
              ))}
            </Row>
          </Container>
        </styled.Section08>
      </Section>
      <Section>
        <styled.Section09>
          {showcaseSection09.map(({ image, alt }, index) => (
            <styled.Section09Div key={index}>
              <Img
                fluid={image.childImageSharp.fluid}
                style={{
                  height: '100%',
                  minWidth: '100%'
                }}
                alt={alt}
              />
            </styled.Section09Div>
          ))}
        </styled.Section09>
      </Section>
      <ShowcaseRoll exclude={id} nested />
    </Layout>
  </Theme>
)

export default ({ data }) => {
  const { markdownRemark } = data

  return (
    <ShowcaseTemplate id={markdownRemark.id} {...markdownRemark.frontmatter} />
  )
}

export const showcaseQuery = graphql`
  query ShowcaseById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags {
          tag
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
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
          alt
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
          alt
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
          alt
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
          alt
        }
      }
    }
  }
`
