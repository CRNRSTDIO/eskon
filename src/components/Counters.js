import React from 'react'
import * as styled from './styled/IndexPage'

const Counters = ({ counters }) => (
  <styled.Counters>
    {counters.map(({ desc, value, special }) => (
      <styled.CountersItem key={value}>
        <styled.CounterItemValue>
          {`${value}${special}`}
        </styled.CounterItemValue>
        <styled.CounterItemDesc>
          {desc}
        </styled.CounterItemDesc>
      </styled.CountersItem>
    ))}
    <styled.CounterLabel>Usługi</styled.CounterLabel>
  </styled.Counters>
)

export default Counters
