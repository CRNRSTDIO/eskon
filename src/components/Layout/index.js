import React, { useState, useRef, useEffect } from 'react'
import * as styled from '../styled/Layout'
import { motion, useCycle } from 'framer-motion'
import { useScroll } from 'react-use'
import NavList, { NavBar } from '../Nav'
import TopNav from '../TopNav'
import FooterCta from '../FooterCta'
import FooterNav from '../FooterNav'

const Layout = ({ nocta, darktop, children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [showOnScroll, setShowOnScroll] = useState(false)
  const ref = useRef(null)
  const { x, y } = useScroll(ref)

  useEffect(() => {
    setShowOnScroll(y > 0)
  }, [x, y])

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <NavBar isOpen={isOpen} show={showOnScroll} toggleOpen={toggleOpen} />
      <TopNav isOpen={isOpen} show={!showOnScroll} toggleOpen={toggleOpen} dark={darktop} />
      <styled.Wrapper isOpen={isOpen}>
        <NavList />
        <styled.Main ref={ref} scrollLock={isOpen}>
          {children}
          <styled.Footer>
            {nocta ? '' : (<FooterCta />)}
            <FooterNav />
          </styled.Footer>
        </styled.Main>
      </styled.Wrapper>
    </motion.div>
  )
}

export default Layout
