import React, { useState, useRef, useEffect, cloneElement } from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Tabs, useTabState, Panel } from './Tabs'
import { Link, graphql, StaticQuery } from 'gatsby'
import { motion } from 'framer-motion'

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button onClick={onClick}>
      {children}
    </button>
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

const ShowcaseRoll = ({ data: { allMarkdownRemark: { edges: items }, globalJson: { showcase: { front_limit } } }, nested }) => {
  const state = useState(0)
  const [komercyjne, podKlucz] = items.reduce((arr, item) => {
    arr[item.node.frontmatter.category === 'Komercyjne' ? 0 : 1].push(item)

    return arr
  }, [[], []])

  return (
    <Tabs state={state}>
      <Container>
        <Row>
          <Col xs={2} sm={3} offset={{ sm: 1, md: 4 }} md={2}>
            <Tab>Tab1</Tab>
          </Col>
          <Col xs={2} sm={3} offset={{ sm: 1, md: 0 }} md={2}>
            <Tab>Tab2</Tab>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={4} sm={6} offset={{ sm: 1, md: 0 }} md={12}>
            <PanelList state={state}>
              <Panel>
                {
                  podKlucz.slice(0, nested ? front_limit : undefined).map(({ node: { fields: { slug }, frontmatter: { title } } }, index) => (
                    <Col key={index} xs={4} sm={8} md={4}>
                      <Link to={slug}>
                        {title}
                      </Link>
                    </Col>
                  ))
                }
              </Panel>
              <Panel>
                {
                  komercyjne.slice(0, nested ? front_limit : undefined).map(({ node: { fields: { slug }, frontmatter: { title } } }, index) => (
                    <Col key={index} xs={4} sm={8} md={4}>
                      <Link to={slug}>
                        {title}
                      </Link>
                    </Col>
                  ))
                }
              </Panel>
            </PanelList>
          </Col>
        </Row>
      </Container>
    </Tabs>
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
      }
      `}
    render={data => <ShowcaseRoll data={data} nested={nested} />}
  />
)
