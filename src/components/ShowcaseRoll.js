import React, { useState, useRef, useEffect, cloneElement } from 'react'
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
      <div ref={panelRef}>
        {cloneElement(children[activeIndex], { active: true })}
      </div>
    </motion.div>
  )
}

const ShowcaseRoll = ({ data: { allMarkdownRemark: { edges: items } } }) => {
  const state = useState(0)

  return (
    <Tabs state={state}>
      <Tab>Tab1</Tab>
      <Tab>Tab2</Tab>
      <PanelList state={state}>
        <Panel>Panel1</Panel>
        <Panel><div style={{ height: '250px', width: '250px', background: 'black' }} /></Panel>
      </PanelList>
    </Tabs>
  )
}

export default () => (
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
              }
            }
          }
        }
      }
      `}
    render={(data, count) => <ShowcaseRoll data={data} count={count} />}
  />
)
