import styled, { css } from 'styled-components'

const Heading = styled.h1`
  color: ${({ dark, theme: { white, grey6 } }) => dark ? grey6 : white};
  font-family: 'Noway';
  ${({ huge }) => huge && css`
    font-size: 3.5rem;
    line-height: 3.75rem
  `};
  ${({ big }) => big && css`
    font-size: 3.125rem;
    line-height: 3.375rem;
  `};
  ${({ medium }) => medium && css`
    font-size: 2.625rem;
    line-height: 3.375rem;
  `};
  ${({ regular }) => regular && css`
    font-size: 1.625rem;
    line-height: 1.875rem;
  `}
  ${({ small }) => small && css`
    font-size: 1.3125rem;
    line-height: 2.5rem;
  `}
  font-weight: ${({ regular, small }) => regular || small ? 400 : 300};
  margin: 1rem 0;
  position: relative;

  ::after {
    background-color: ${({ theme: { grey1 } }) => grey1};
    content: '';
    display: ${({ regular }) => regular ? 'block' : 'none'};
    height: 1px;
    margin: 1.5rem 0;
    width: 75%;
  }

  ${({ noline }) => noline && css`
    ::after {
      display: none;
    }
  `}
`

export default Heading
