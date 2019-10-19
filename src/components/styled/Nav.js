import styled from 'styled-components'
import { Link } from 'gatsby'
import { rgba } from 'polished'
import { motion } from 'framer-motion'

export const NavBar = styled(motion.div)`
  align-items: stretch;
  background-color: ${({ theme: { blue2 } }) => blue2};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  width: 3.75rem;
  z-index: 2;

  ::before {
    background-color: ${({ theme: { blue2 } }) => blue2};
    content: '';
    height: 100%;
    position: absolute;
    right: 100%;
    top: 0;
    width: 3.75rem;
  }
`

export const NavBarText = styled.div`
  align-items: center;
  color: ${({ theme: { white } }) => white};
  display: flex;
  font-size: .5625rem;
  padding: 0 0 1.875rem 0;
  text-orientation: mixed;
  writing-mode: vertical-rl;
`

export const Nav = styled.div`
  background-color: ${({ theme: { blue1 } }) => blue1};
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
`

export const NavListWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  padding: 0 0 0 48px;
  position: absolute;
  right: 100%;
  top: 0;

  ${({ theme: { queries } }) => queries.sm`
    align-items: flex-start;
  `};
`

export const NavFootNote = styled.div`
  align-items: flex-end;
  color: ${({ theme: { white } }) => rgba(white, 0.4)};
  bottom: 0;
  display: flex;
  font-size: 1rem;
  left: 0;
  justify-content: flex-start;
  padding: 0 0 0 3rem;
  position: absolute;
  width: 100%;

  ${({ theme: { queries } }) => queries.sm`
    font-size: 1.3438rem;
  `};

  ::before {
    background-color: ${({ theme: { white } }) => rgba(white, 0.4)};
    content: '';
    height: .25rem;
    position: absolute;
    right: 0;
    top: -2rem;
    width: 100%;
  }
`

export const NavList = styled(motion.ul)`
  list-style: none;
  margin: 0 0 0 auto;
  padding: 0;
`

export const NavItem = styled(motion.li)`
  align-items: center;
  display: flex;
  height: 5.625rem;
  justify-content: flex-end;
  text-transform: uppercase;
`

export const NavLink = styled(Link)`
  align-items: center;
  color: ${({ theme: { white } }) => white};
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: flex-start;
  letter-spacing: 1px;
  padding: 0 28px 0 0;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  z-index: 1;

  ${({ theme: { queries } }) => queries.sm`
    font-size: 1.3438rem;
    padding: 0 94px 0 0;
  `};

  ::after {
    background-color: ${({ theme: { white } }) => white};
    content: '';
    height: .1875rem;
    left: -3rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
  }

  ::before {
    background-color: ${({ theme: { blue2 } }) => rgba(blue2, 0.25)};
    content: '';
    opacity: 0;
    position: absolute;
    right: 0;
    height: 100%;
    width: 100vw;
    z-index: 0;
  }

  &[aria-current]::before {
    opacity: 1;
  }
`
