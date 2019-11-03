import styled, { css } from 'styled-components'

const Heading = styled.h1`
  color: ${({ inherit, dark, theme: { white, grey6 } }) => inherit ? 'inherit' : dark ? grey6 : white};
  font-family: 'Noway';
  margin: auto 0 1rem;
  position: relative;
  white-space: pre-line;
  z-index: 2;

  ${({ huge }) => huge && css`
    font-size: 2.125rem;
    line-height: 2.5rem;
    margin: 6.25rem 0 .75rem;

    ${({ theme: { queries } }) => queries.sm`
      font-size: 3.5rem;
      line-height: 3.75rem;
      margin: 0 0 5.125rem;
    `}
  `};
  ${({ big }) => big && css`
    font-size: 2.5rem;
    line-height: 3.375rem;

    ${({ theme: { queries } }) => queries.sm`
      font-size: 3.125rem;
      line-height: 3.375rem;
    `}
  `};
  ${({ medium }) => medium && css`
    font-size: 2.125rem;
    line-height: 2.5rem;

    ${({ theme: { queries } }) => queries.sm`
      font-size: 2.625rem;
      line-height: 3.375rem;
    `}
  `};
  ${({ regular }) => regular && css`
    font-size: 1.625rem;
    line-height: 1.875rem;
  `}
  ${({ small }) => small && css`
    font-size: 1.125rem;
    line-height: 1.375rem;

    ${({ theme: { queries } }) => queries.sm`
      font-size: 1.3125rem;
      line-height: 2.5rem;
    `}
  `}
  font-weight: ${({ regular, small }) => regular || small ? 400 : 300};

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
