import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { Tabs, useTabState, usePanelState } from './Tabs'
import { motion } from 'framer-motion'
import MarkdownContent from './MarkdownContent'
import * as styled from './styled/Accordion'

const variants = {
  hidden: { height: 0 },
  visible: { height: 'auto' }
}

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <styled.AccordionItem onClick={onClick}>
      {children}
      <styled.AccordionState isActive={isActive} />
    </styled.AccordionItem>
  )
}
 const Panel = ({ children }) => {
   const isActive = usePanelState()

   return (
     <motion.div
      animate={isActive ? 'visible' : 'hidden'}
      initial={'hidden'}
      variants={variants}
      style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
   )
 }

const Accordions = ({ cols = 2, accordions }) => (
  <Tabs>
    <Row>
      {[...Array(cols).keys()]
        .map(c => accordions
          .filter((_, i) => i %  cols === c)
        ).map((column, cIndex) => (
          <Col xs={4} sm={8} md={ 12 / cols}>
            <Row style={{ alignContent: 'flex-start' }}>
              {column.map(({ heading, body }, index) => (
                <Col xs={4}>
                  <Tab>
                    <styled.AccordionHeader>
                      <styled.AccordionIndicator>{`${index * cols + cIndex + 1}`.padStart(2, 0)}</styled.AccordionIndicator>
                      {heading}
                    </styled.AccordionHeader>
                  </Tab>
                  <Panel>
                    <MarkdownContent content={body} />
                  </Panel>
                </Col>
              ))}
            </Row>
          </Col>
        ))
      }
    </Row>
  </Tabs>
)

export default Accordions
