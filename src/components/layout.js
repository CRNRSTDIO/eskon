import React, { useState, useRef, useLayoutEffect } from 'react'
import * as styled from './styled/Layout'
import { motion, useCycle } from 'framer-motion'
import NavList, { Nav, NavBar } from '../components/Nav'
import TopNav from '../components/TopNav'
import FooterCta from '../components/FooterCta'
import FooterNav from '../components/FooterNav'

function getScrollPosition({ element, useWindow }) {
  const target = element ? document.querySelector('section') : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    document.querySelector('main').addEventListener('scroll', handleScroll)

    return () => document.querySelector('main').removeEventListener('scroll', handleScroll)
  }, deps)
}

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
}

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
  const [showOnScroll, setShowOnScroll] = useState(false)
  const mainRef = useRef()

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y < 0

      if (isShow !== showOnScroll) setShowOnScroll(isShow)
    },
    [showOnScroll],
    mainRef
  )

  return (
  <motion.div
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
  >
    <NavBar show={showOnScroll} toggleOpen={toggleOpen} />
    <styled.Wrapper
      variants={mainVariants}
    >
      <NavList />
      <styled.Main ref={mainRef} scrollLock={isOpen}>
        <motion.div
          animate={showOnScroll ? 'hide' : 'show'}
        >
          <TopNav/>
        </motion.div>
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
