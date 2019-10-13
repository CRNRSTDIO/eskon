import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as styled from '../styled/ImageAnimated'

const ImageAnimated = ({ children }) => {
  const [ref, inView] = useInView()
  const [count, setCount] = useState(0)

  useEffect(() => {
    inView && setCount(count + 1)
  }, [inView])

  return (
    <styled.ImageAnimatedWrapper>
      <styled.ImageAnimatedOverlap key={count} transition={{ delay: 0.5, type: 'tween', ease: 'easeInOut' }} animate={{ scaleX: [1, 0] }} style={{ originX: 0 }} />
      <motion.div ref={ref} key={count} animate={{ scale: [1.3, 1] }} transition={{ delay: 0.75 }}>
        {children}
      </motion.div>
    </styled.ImageAnimatedWrapper>
  )
}

export default ImageAnimated
