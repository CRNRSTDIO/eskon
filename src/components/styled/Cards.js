import styled from 'styled-components'

export const Cards = styled.section`
  background-color: ${({ theme: { grey0 } }) => grey0};
  padding: 0 0 3.25rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 0 0 3.875rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 0 0 5.75rem
  `}
`

export const CardsHeading = styled.span`
  display: flex;
  justify-content: center;
  padding: 3.125rem 0 .875rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 4.25rem 0 2.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 5.125rem 0 4rem;
  `}
`

export const CardsItem = styled.div`
  color: ${({ theme: { grey4 } }) => grey4};
  margin: 0 0 1.75rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 0;
  `}
`

export const CardsItemName = styled.p`
  font-size: .875rem;
  margin: .875rem 0 1.25rem;

  ${({ theme: { queries } }) => queries.md`
    font-size: .9375rem;
  `}
`

export const CardsItemDescr = styled.p`
  font-size: .625rem;
  letter-spacing: 1px;
  line-height: 1.8;
  margin: 1.25rem 0 0;
  text-transform: uppercase;
  white-space: pre-line;

  ${({ theme: { queries } }) => queries.md`
    font-size: .75rem;
  `}
`
