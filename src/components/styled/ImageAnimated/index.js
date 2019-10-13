import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ImageAnimatedWrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  z-index: 1;
`

export const ImageAnimatedOverlap = styled(motion.div)`
  background-color: ${({ theme: { grey0 } }) => grey0};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`
