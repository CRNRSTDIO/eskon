import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Heading from './styled/Heading'
import Paragraph from './styled/Paragraph'
import Link from './styled/Link'
import Icon from './Icons'
import * as styled from './styled/Footer'

const FooterCta = ({ data: { globalJson: { footer_cta: { heading, body, cta } } } }) => (
  <Container>
    <Row>
      <Col>
        <styled.FooterCta>
          <Row>
            <Col sm={6} offset={{ sm: 1, md: 2 }} md={8}>
              <Row>
                <Col xs={4} sm={4} md={6}>
                  <styled.FooterBox>
                    <Heading noline regular as='h3'>{heading}</Heading>
                    <Paragraph>{body}</Paragraph>
                  </styled.FooterBox>
                </Col>
                <Col xs={4} sm={4} md={6}>
                  <styled.FooterBox alternate>
                    <styled.FooterBoxLogo>
                      <Icon name='logo' height='20px' />
                    </styled.FooterBoxLogo>
                    <Link to='/'>{cta}</Link>
                  </styled.FooterBox>
                </Col>
              </Row>
            </Col>
          </Row>
        </styled.FooterCta>
      </Col>
    </Row>
  </Container>
)

export default () => (
  <StaticQuery
    query={graphql`
      query FooterCtaQuery {
        globalJson {
          footer_cta {
            heading
            body
            cta
          }
        }
      }
    `}
    render={data => <FooterCta data={data} />}
  />
)
