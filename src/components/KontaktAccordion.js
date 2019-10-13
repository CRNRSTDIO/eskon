import React, { useState } from 'react'
import { motion } from 'framer-motion'
import MarkdownContent from './MarkdownContent'
import * as styled from './styled/Kontakt'

const variants = {
  hidden: {
    height: 0
  },
  visible: {
    height: 'auto'
  }
}

const Panel = ({ isOpen, children }) => {
  return (
    <motion.div
      animate={isOpen ? 'visible' : 'hidden'}
      initial='hidden'
      variants={variants}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  )
}

const KontaktAccordion = ({ body }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <styled.Section02AccordionHeader onClick={onClick}>
        {`${isOpen ? 'Zwiń' : 'Rozwiń'} informację`}
      </styled.Section02AccordionHeader>
      <Panel isOpen={isOpen}>
        <MarkdownContent content={body} />
      </Panel>
    </>
  )
}

export default KontaktAccordion
