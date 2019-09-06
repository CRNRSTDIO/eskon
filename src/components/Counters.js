import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import * as styled from './styled/IndexPage'

const Counters = ({ counters }) => (
  <styled.Counters>
    <Container>
      <Row>
        {counters.map(({ desc, value, special }, index) => (
          <Col key={value} xs={3} offset={{ xs: 1, sm: index === 0 ? 1 : 0, md: 3 }} sm={2} md={6}>
            <styled.CountersItem>
              <styled.CounterItemValue>
                {`${value}${special}`}
              </styled.CounterItemValue>
              <styled.CounterItemDesc>
                {desc}
              </styled.CounterItemDesc>
            </styled.CountersItem>
          </Col>
        ))}
      </Row>
    </Container>
  </styled.Counters>
)

export default Counters
