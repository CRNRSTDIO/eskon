import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

const slides = [
  {
    title: 'asd'
  },
  {
    title: 'dsa'
  },
  {
    title: 'sda'
  }
]

const variants = {
  enter: direction => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, slides.length, page)
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  console.log(page, direction, imageIndex)

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          {slides[imageIndex].title}
        </motion.div>
      </AnimatePresence>
      <ul>
        {slides.map((_, index) => (
          <li key={index}>
            <button style={{ background: index === imageIndex ? 'black' : 'white' }} />
          </li>
        ))}
      </ul>
    </>
  )
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}
