import React from 'react'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import Heading from './styled/Heading'
import * as styled from './styled/Cards'

const MAX_CARDS = 4

const Cards = ({ heading, cards }) => (
  <styled.Cards>
    <Container>
      <Row>
        <Col xs={4}>
          <styled.CardsHeading>
            <Heading noline regular dark as='h3'>{heading}</Heading>
          </styled.CardsHeading>
        </Col>
        {cards.slice(0, MAX_CARDS).map(({ image, alt, name, descr }, index) => (
          <Col xs={2} sm={2} md={3} key={index}>
            <styled.CardsItem>
              <Img fluid={image.childImageSharp.fluid} alt={alt} />
              <styled.CardsItemName>{name}</styled.CardsItemName>
              <styled.CardsItemDescr>{descr}</styled.CardsItemDescr>
            </styled.CardsItem>
          </Col>
        ))}
      </Row>
    </Container>
  </styled.Cards>
)

export default Cards
