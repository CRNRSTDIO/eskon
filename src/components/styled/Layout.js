import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  height: 100vh;
  overflow: visible;
  position: fixed;
  right: 0;
  top: 0;
  transform-origin: center right 100px;
  width: 100vw;
`

export const Main = styled.main`
  background-color: ${({ theme: { white } }) => white};
  height: 100%;
  overflow-x: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

export const Footer = styled.footer`
  position: relative;
`
