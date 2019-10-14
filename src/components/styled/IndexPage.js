import styled from 'styled-components'
import Link from './Link'

export const Box = styled(Link)`
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  display: flex;
  flex-direction: column;
  margin: .625rem 0;
  position: relative;

  ${({ theme: { queries } }) => queries.md`
    background-color: ${({ alternate, theme: { white, blue2 } }) => alternate ? white : blue2};
    color: ${({ alternate, theme: { white, grey6 } }) => alternate ? grey6 : white};
    height: 100%;
    margin: 0;
  `}

  ::after {
    background-color: ${({ theme: { blue2 } }) => blue2};
    content: '';
    display: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: .75rem;

    ${({ theme: { queries } }) => queries.md`
      display: ${({ alternate }) => alternate ? 'block' : 'none'};
    `}
  }
`

export const BoxHeading = styled.header`
  border-bottom: ${({ alternate, theme: { white, grey1 } }) => `1px solid ${alternate ? grey1 : white}`};
  flex-shrink: 0;
  padding: 2rem 1.375rem 0;

  ${({ theme: { queries } }) => queries.md`
    padding: 2rem 3.375rem 0;
  `}
`

export const BoxBody = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.125rem 1.375rem 1.625rem;
  * + * {
    margin-top: 1rem;
  }

  ${({ theme: { queries } }) => queries.md`
    color: ${({ alternate, theme: { white, grey4 } }) => alternate ? grey4 : white};
    padding: 1.125rem 3.375rem 2.375rem;
  `}
`

export const BoxFakeLink = styled.span`
  color: inherit;
  ${({ theme: { queries } }) => queries.md`
    color: ${({ alternate, theme: { white, blue2 } }) => alternate ? blue2 : white};
  `}
`
