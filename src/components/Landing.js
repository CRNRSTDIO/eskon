import React from 'react'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import * as styled from './styled/Landing'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Columns from './styled/Columns'
import IndexBox from './IndexBox'

const Landing = ({ heading, body, cta, background, box01, box02, ...size }) => (
  <styled.Landing>
    <Container>
      <Row>
        <Col xs={4} sm={6} md={6} offset={{ sm: 1, md: 1 }}>
          <Heading {...size} as='h1'>{heading}</Heading>
        </Col>
        <Col xs={4} sm={6} md={10} offset={{ sm: 1, md: 1 }}>
          <Row>
            {box01 && (
              <Col xs={4} sm={4} md={6}>
                <IndexBox {...box01} />
              </Col>
            )}
            {box02 && (
              <Col xs={4} sm={4} md={6}>
                <IndexBox alternate {...box02} />
              </Col>
            )}
            {body && (
              <Col xs={4} sm={8} md={6}>
                <Columns>
                  <Paragraph>{body}</Paragraph>
                </Columns>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
    {background && <styled.Image
      fluid={background}
      style={{ position: 'absolute' }}
    />}
  </styled.Landing>
)

export default Landing
