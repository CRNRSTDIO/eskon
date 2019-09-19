import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

export const TopNav = styled(motion.div)`
  left: 0;
  position: absolute;
  right: 0;
  top: 2.625rem;
  z-index: 10;
`

export const TopNavLogo = styled(motion.div)`
  color: ${({ theme: { white } }) => white};
`

export const TopNavPhone = styled(motion.div)`
  align-items: center;
  color: ${({ theme: { white } }) => white};
  display: flex;
  font-family: 'Roboto';
  font-size: .75rem;
  height: 100%;
  justify-content: flex-end;
  letter-spacing: 1px;
  text-align: right;
`

export const TopNavList = styled(motion.ul)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`

export const TopNavItem = styled(motion.li)`
  display: inline-flex;
  list-style: none;
`

export const TopNavLink = styled(Link)`
  color: ${({ theme: { white } }) => white};
  font-family: 'Roboto';
  font-size: .75rem;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
`
