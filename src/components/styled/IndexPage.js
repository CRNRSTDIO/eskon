import styled from 'styled-components'

export const BoxesContainer = styled.div`
  display: grid;
  grid-column: 2 / span 10;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 1rem;
  height: max-content;
`

export const Box = styled.div`
  background-color: ${({ alternate, theme: { white, blue2 } }) => alternate ? white : blue2};
  display: flex;
  flex-direction: column;
  grid-column: span 5;
  position: relative;

  ::after {
    background-color: ${({ theme: { blue2 } }) => blue2};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 12px;
  }
`

export const BoxHeading = styled.header`
  border-bottom: ${({ alternate, theme: { white, grey1 } }) => `1px solid ${alternate ? grey1 : white}`};
  flex-shrink: 0;
`

export const BoxBody = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  * + * {
    margin-top: 1rem;
  }
`

export const Column = styled.div`
  grid-column: ${({ offset }) => offset ? '2 / span 4' : 'span 4'};
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100vw;

  ::after {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 1rem;
  }
`

export const ImageWrapper = styled.div`
  grid-column: span 6;
  height: 20.625rem
`

export const Counters = styled.aside`
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  display: grid;
  grid-column: 9 / span 4;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 3.625rem;
`

export const CountersItem = styled.div`
  grid-column: 2 / span 2;
`

export const CounterItemValue = styled.span`
  display: block;
  font-size: 4.5rem;
`

export const CounterItemDesc = styled.span`
  display: block;
  font-family: 'Roboto';
  font-size: .9375rem;
`

export const Solutions = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 1rem;
  grid-column: 2 / span 8;
`

export const SolutionsItem = styled.div`
  font-family: 'Roboto';
  grid-column: span 2;
`

export const SolutionsItemHeading = styled.h4`
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: .6875rem;
  margin: 2rem 0 .75rem;
  text-transform: uppercase;
`

export const SolutionsItemDesc = styled.p`
  color: ${({ theme: { grey4 } }) => grey4};
  font-size: .875rem;
  margin: 0;
`
