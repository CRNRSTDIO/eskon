import styled from 'styled-components'

export const FooterCta = styled.div`
  background-color: ${({ theme: { blue2 } }) => blue2};
  padding: 4.875rem 0;
  grid-column: 1 / span 12;
`

export const FooterBoxesContainer = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 1rem;
  height: max-content;
`

export const FooterBox = styled.div`
  align-items: ${({ alternate }) => alternate && `flex-end`};
  background-color: ${({ alternate, theme: { blue1 } }) => alternate ? blue1 : 'transparent'};
  display: ${({ alternate }) => alternate && `flex`};
  grid-column: span 4;
  padding: ${({ alternate }) => alternate ? `1.4375rem 1.8125rem 2.375rem 2.375rem` : `.4375rem 2rem 2.375rem 0`};

  *:last-child {

    ::after {
      background-color: ${({ theme: { white } }) => white};
      content: '';
      display: block;
      height: 1px;
      margin: 1.5rem 0 0;
      width: ${({ alternate }) => alternate ? `100%` : `75%`};
    }
  }
`
