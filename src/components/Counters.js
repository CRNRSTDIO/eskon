import React from 'react'
import * as styled from './styled/IndexPage'

const Counters = ({ counters }) => (
  <styled.Counters>
    {counters.map(({ desc, value }) => (
      <styled.CountersItem key={value}>
        <styled.CounterItemValue>
          {value}
        </styled.CounterItemValue>
        <styled.CounterItemDesc>
          {desc}
        </styled.CounterItemDesc>
      </styled.CountersItem>
    ))}
  </styled.Counters>
)

export default Counters
