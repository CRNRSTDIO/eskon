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

  ${({ theme: { queries } }) => queries.sm`
    width: auto;
  `}
`
