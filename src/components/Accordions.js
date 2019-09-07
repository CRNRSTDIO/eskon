import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Tabs, useTabState, usePanelState } from './Tabs'
import { motion } from 'framer-motion'

const variants = {
  hidden: { height: 0 },
  visible: { height: 'auto' }
}

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button onClick={onClick}>{children}</button>
  )
}
 const Panel = ({ children }) => {
   const isActive = usePanelState()

   return (
     <motion.div
      animate={isActive ? 'visible' : 'hidden'}
      initial={'hidden'}
      variants={variants}
      >
        {children}
      </motion.div>
   )
 }

const Accordions = ({ cols = 2, accordions }) => (
  <Tabs>
    {accordions.reduce((result, _, index, array) => {
      if (index % cols === 0) {
        result.push(array.slice(index, index + cols))
      }
      return result
    }, []).map(item => item.map(({ heading, body }) => (
        <Col xs={4} sm={8} md={12 / col}>
          <Tab>{heading}</Tab>
          <Panel>{body}</Panel>
        </Col>
      )
    ))}
  </Tabs>
)
