import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import CountersItem from './CountersItem'
import * as styled from '../styled/IndexPageCounters'
import CircularText from '../CircularText'

const Counters = ({ counters }) => {
  return (
    <styled.Counters>
      <Container>
        <Row>
          {counters.map(({ desc, value, special }, index) => (
            <Col key={index} xs={3} offset={{ xs: 1, sm: index === 0 ? 1 : 0, md: 3 }} sm={2} md={6}>
              <styled.CountersItem>
                <styled.CountersItemValue>
                  <CountersItem countTo={value} suffix={special} />
                </styled.CountersItemValue>
                <styled.CountersItemDesc>
                  {desc}
                </styled.CountersItemDesc>
              </styled.CountersItem>
            </Col>
          ))}
        </Row>
      </Container>
      <styled.CountersLogo>
        <styled.CoutersLogoWrap>
          <CircularText />
        </styled.CoutersLogoWrap>
        <styled.CountersLabel />
      </styled.CountersLogo>
    </styled.Counters>
  )
}

export default Counters
