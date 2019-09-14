import React, { useState, useRef, useEffect, cloneElement } from 'react'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Tabs, useTabState, Panel } from './Tabs'
import Heading from './styled/Heading'
import { Link, graphql, StaticQuery } from 'gatsby'
import { motion } from 'framer-motion'
import * as styled from './styled/ShowcaseRoll'

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <styled.ShowcaseTab active={isActive} onClick={onClick}>
      {children}
    </styled.ShowcaseTab>
  )
}

const PanelList = ({ state, children }) => {
  const panelRef = useRef()
  const [height, set] = useState(0)
  const [activeIndex] = state

  useEffect(() => {
    set(panelRef.current.offsetHeight)
  }, [activeIndex, set])

  return (
    <motion.div animate={{ height }} style={{ overflow: 'hidden' }}>
      <Row ref={panelRef}>
        {cloneElement(children[activeIndex], { active: true })}
      </Row>
    </motion.div>
  )
}

const ShowcaseRoll = ({ data: {
  allMarkdownRemark: { edges: items },
  globalJson: { showcase: { front_limit } },
  markdownRemark: { frontmatter: { title }, fields: { slug } }
}, nested }) => {
  const state = useState(0)
  const [komercyjne, podKlucz] = items.reduce((arr, item) => {
    arr[item.node.frontmatter.category === 'Komercyjne' ? 0 : 1].push(item)

    return arr
  }, [[], []])

  return (
    <styled.ShowcaseRoll>
      <Container>
        <Row>
          <Col xs={4}>
            <styled.ShowcaseHeading>
              <Heading noline dark regular as='h3'>{title}</Heading>
            </styled.ShowcaseHeading>
          </Col>
        </Row>
      </Container>
      <Tabs state={state}>
        <Container>
          <Row>
            <Col xs={2} sm={3} offset={{ sm: 1, md: 4 }} md={2}>
              <Tab>Domy pod klucz</Tab>
            </Col>
            <Col xs={2} sm={3} offset={{ sm: 1, md: 0 }} md={2}>
              <Tab>Komercyjne</Tab>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={12}>
              <PanelList state={state}>
                <Panel>
                  {
                    podKlucz.slice(0, nested ? front_limit : undefined).map(({
                      node: { fields: { slug }, frontmatter: { title, image } }
                    }, index) => (
                      <Col key={index} xs={4} sm={8} md={4}>
                        <styled.ShowcaseLink to={slug}>
                          {image && (
                            <Img fluid={image.childImageSharp.fluid} />
                          )}
                          <styled.ShowcaseLinkBottom>
                            <styled.ShowcaseLinkText>{title}</styled.ShowcaseLinkText>
                          </styled.ShowcaseLinkBottom>
                        </styled.ShowcaseLink>
                      </Col>
                    ))
                  }
                </Panel>
                <Panel>
                  {
                    komercyjne.slice(0, nested ? front_limit : undefined).map(({
                      node: { fields: { slug }, frontmatter: { title, image } }
                    }, index) => (
                      <Col key={index} xs={4} sm={8} md={4}>
                        <styled.ShowcaseLink to={slug}>
                          {image && (
                            <Img fluid={image.childImageSharp.fluid} />
                          )}
                          <styled.ShowcaseLinkBottom>
                            <styled.ShowcaseLinkText>{title}</styled.ShowcaseLinkText>
                          </styled.ShowcaseLinkBottom>
                        </styled.ShowcaseLink>
                      </Col>
                    ))
                  }
                </Panel>
              </PanelList>
            </Col>
          </Row>
        </Container>
      </Tabs>
      <Container>
        <Row>
          <Col xs={4} sm={4} offset={{ sm: 2, md: 4 }} md={4}>
            <styled.ShowcaseAllLink to={slug}>Zobacz więcej</styled.ShowcaseAllLink>
          </Col>
        </Row>
      </Container>
    </styled.ShowcaseRoll>
  )
}

export default ({ nested }) => (
  <StaticQuery
    query={graphql`
      query ShowcaseRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "showcase" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                category
                image {
                  childImageSharp {
                    fluid(maxWidth: 356) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
        globalJson {
          showcase {
            front_limit
          }
        }
        markdownRemark(frontmatter: {templateKey: {eq: "realizacje"}}) {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      `}
    render={data => <ShowcaseRoll data={data} nested={nested} />}
  />
)
