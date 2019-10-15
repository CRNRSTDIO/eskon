import styled from 'styled-components'
import Link from './Link'

export const Box = styled(Link)`
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  display: flex;
  flex-direction: column;
  margin: .625rem 0;
  position: relative;
  z-index: 1;

  ${({ theme: { queries } }) => queries.md`
    background-color: ${({ theme: { white } }) => white};
    color: ${({ theme: { grey6 } }) => grey6};
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
    transform: scaleX(.03);
    transform-origin: left;
    transition: transform .15s ease-in-out;
    width: 100%;
    z-index: -1;

    ${({ theme: { queries } }) => queries.md`
      display: block;
    `}
  }

  :hover,
  :focus {
    ${({ theme: { queries } }) => queries.md`
      color: ${({ theme: { white } }) => white};
      height: 100%;
      margin: 0;

      ::after {
        transform: scaleX(1);
        transition: transform .35s ease-in-out;
      }

      ${BoxHeading} {
        border-bottom: ${({ theme: { white } }) => `1px solid ${white}`};
        transition: border-bottom .35s ease-in-out;
      }

      ${BoxBody} {
        ${({ theme: { queries } }) => queries.md`
          color: ${({ theme: { white } }) => white};
          transition: color .35s ease-in-out;
        `}
      }

      ${BoxFakeLink} {
        ${({ theme: { queries } }) => queries.md`
          color: ${({ theme: { white } }) => white};
          transition: color .35s ease-in-out;
        `}
      }
    `}
  }
`

export const BoxHeading = styled.header`
  border-bottom: ${({ theme: { grey1 } }) => `1px solid ${grey1}`};
  flex-shrink: 0;
  padding: 2rem 1.375rem 0;
  transition: border-bottom .15s ease-in-out;

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
    color: ${({ theme: { grey4 } }) => grey4};
    padding: 1.125rem 3.375rem 2.375rem;
    transition: color .15s ease-in-out;
  `}
`

export const BoxFakeLink = styled.span`
  ${({ theme: { queries } }) => queries.md`
    color: ${({ theme: { blue2 } }) => blue2};
    transition: color .15s ease-in-out;
  `}
`
