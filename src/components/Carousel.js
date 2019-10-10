import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Col } from 'react-awesome-styled-grid'
import 'react-alice-carousel/lib/alice-carousel.css'
import * as styled from './styled/Carousel'

const Carousel = ({ carousel = [] }) => {
  const items = carousel.map(({
    body,
    name,
    link,
    linkText
  }, index) => (
    <Col key={index} xs={4}>
      <styled.CarouselItem>
        <styled.CarouselItemBody>
          {body}
        </styled.CarouselItemBody>
        <styled.CarouselItemName>
          {name}
        </styled.CarouselItemName>
        {link && (
          <styled.CarouselItemLink href={link}>
            {linkText}
          </styled.CarouselItemLink>
        )}
      </styled.CarouselItem>
    </Col>
  ))

  return (
    <AliceCarousel
      items={items}
      buttonsDisabled
      responsive={{
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }}
    />
  )
}

export default Carousel
