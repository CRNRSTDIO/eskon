import styled from 'styled-components'

export const CarouselItem = styled.div`
  color: ${({ theme: { white } }) => white};
  font-family: 'Roboto';
  margin: 44px 0 42px;
`

export const CarouselItemBody = styled.p`
  font-size: .9375rem;
  margin: 0;
`

export const CarouselItemName = styled.p`
  font-size: .9375rem;
  margin: 2.875rem 0 0;
`

export const CarouselItemLink = styled.a`
  color: ${({ theme: { grey1 } }) => grey1};
  display: block;
  font-size: 13px;
`
