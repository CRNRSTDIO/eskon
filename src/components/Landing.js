import React from 'react'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import * as styled from './styled/Landing'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Columns from './styled/Columns'
import IndexBox from './IndexBox'
import ImageAnimated from '../components/ImageAnimated'

const Landing = ({ heading, background, body, cta, box01, box02, image, ...rest }) => (
  <styled.Landing>
    <Container>
      <Row>
        <Col xs={image ? 3 : 4} sm={image ? 4 : 6} offset={{ sm: 1, md: image ? 1 : 0 }} md={image ? 6 : 12}>
          <Row>
            <Col xs={4} sm={8} md={image ? 12 : 10} offset={{ md: image ? 0 : 1 }}>
              <Heading {...rest} as='h1'>{heading}</Heading>
            </Col>
            <Col xs={4} sm={8}>
              <Row>
                {box01 && (
                  <Col xs={4} sm={8} md={5} offset={{ md: 1 }}>
                    <IndexBox {...box01} />
                  </Col>
                )}
                {box02 && (
                  <Col xs={4} sm={8} md={5}>
                    <IndexBox alternate {...box02} />
                  </Col>
                )}
                {body && (
                  <Col xs={4} md={image ? 12 : 6} offset={{ md: image ? 0 : 1 }}>
                    <Columns>
                      <Paragraph {...rest}>{body}</Paragraph>
                    </Columns>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        {image && (
          <Col xs={1} sm={2} offset={{ sm: 1, md: 1 }} md={4}>
            <ImageAnimated>
              <styled.LandingImageWrapper>
                <Img fluid={image.childImageSharp.fluid} />
              </styled.LandingImageWrapper>
            </ImageAnimated>
          </Col>
        )}
      </Row>
    </Container>
    {background && (
      <styled.Image
        fluid={background}
        style={{ position: 'absolute' }}
      />
    )}
    {box01.image && (
      <styled.Image
        fluid={box01.image.childImageSharp.fluid}
        style={{ position: 'absolute' }}
      />
    )}
    {box02.image && (
      <styled.Image
        fluid={box02.image.childImageSharp.fluid}
        style={{ position: 'absolute' }}
      />
    )}
  </styled.Landing>
)

export default Landing
