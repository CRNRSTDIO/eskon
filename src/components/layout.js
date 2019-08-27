import React from 'react'
import * as styled from './styled/Layout'
import { motion, useCycle } from 'framer-motion'
import NavList, { Nav, NavBar } from '../components/Nav'
import FooterCta from '../components/FooterCta'
import FooterNav from '../components/FooterNav'

const mainVariants = {
  open: {
    scale: 0.65
  },
  closed: {
    scale: 1
  }
}

const Layout = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
  <motion.div
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
  >
    <NavBar toggleOpen={toggleOpen} />
    <Nav />
    <styled.Wrapper
      variants={mainVariants}
    >
      <NavList />
      <styled.Main>
        {children}
        <styled.Footer>
          <FooterCta />
          <FooterNav />
        </styled.Footer>
      </styled.Main>
    </styled.Wrapper>
  </motion.div>
)}

export default Layout
