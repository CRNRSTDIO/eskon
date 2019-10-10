import styled from 'styled-components'

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
