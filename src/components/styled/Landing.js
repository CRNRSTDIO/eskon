import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

export const Landing = styled.section`
  align-items: center;
  display: flex;
  min-height: 100vh;
  position: relative;
  width: 100vw;
  z-index: 1;
`

export const Image = styled(Img)`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;

  ::after {
    background-color: ${({ theme: { black } }) => `${rgba(black, 0.65)}`};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const LandingImageWrapper = styled.div`
  width: 16.25rem;

  ${({ theme: { queries } }) => queries.md`
    width: auto;
  `}
`

export const LandingButtonWrapper = styled.div`
  width: calc(50% - .5rem);
`

export const LandingButton = styled.button`
  align-items: center;
  background-color: ${({ theme: { blue2 } }) => blue2};
  border: 0;
  bottom: 0;
  color: ${({ theme: { white } }) => white};
  display: flex;
  font-family: 'Roboto';
  font-size: 15px;
  height: 55px;
  justify-content: center;
  left: 0;
  margin: 26px 0 0;
  outline: 0;
  padding: 0;
  position: absolute;
  width: 100%;

  ${({ theme: { queries } }) => queries.sm`
    bottom: auto;
    left: 0;
    position: relative;
  `}
`
