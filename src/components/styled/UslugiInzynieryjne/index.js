import styled from 'styled-components'
import Heading from '../Heading'

export const Section01 = styled.section`
  padding: 3.25rem 0 3.875rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 5.25rem 0 7.625rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 4.875rem 0 8.75rem;
  `}

  ${Heading} {
    margin-bottom: 2.5rem;
  }
`

export const Section02 = styled.section`
  background-color: ${({ theme: { dark1 } }) => dark1};
  font-family: 'Roboto';
  padding: 7rem 0 6.375rem;
  position: relative;
`

export const Section02BackgroundImage = styled.div`
  height: 33.75rem;
  opacity: .05;
  position: absolute;
  right: -10.5rem;
  top: -5.75rem;

  ${({ theme: { queries } }) => queries.sm`
    right: -8.5rem;
    top: -3.625rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    right: -2.75rem;
    top: -3.625rem;
  `}
`
