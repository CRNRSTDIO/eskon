import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  height: 100vh;
  overflow: visible;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  transform: translateX(0) scale(1);
  transform-origin: center right;
  transition: transform .15s ease-in-out;

  ${({ isOpen }) => isOpen && css`
    transform: translateX(50%) scale(.9);

    ${({ theme: { queries } }) => queries.sm`
      transform: translateX(124px) scale(.65);
    `};

    ${({ theme: { queries } }) => queries.md`
      transform: scale(.65);
    `}
  `};
`

export const Main = styled.main`
  background-color: ${({ theme: { white } }) => white};
  height: 100%;
  overflow-x: hidden;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  ${({ scrollLock }) => scrollLock && css`
    overflow: hidden;
    pointer-events: none;
  `}
`

export const Footer = styled.footer`
  position: relative;
`
