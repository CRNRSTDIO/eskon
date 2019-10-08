import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useCountUp } from 'react-countup'

const CountersItem = ({ countTo, suffix }) => {
  const [ref, inView] = useInView()
  const { countUp, start, reset } = useCountUp({
    end: countTo
  })

  useEffect(() => {
    inView ? start() : reset()
  }, [inView])

  return (
    <div ref={ref}>
      {`${countUp}${suffix}`}
    </div>
  )
}

export default CountersItem
