import styled from 'styled-components'
import Link from '../Link'
import Heading from '../Heading'

export const Section01 = styled.div`
  margin: 0;
  padding: 0;
  position: relative;

  ::before {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    height: 4.375rem;
    left: 0;
    position: absolute;
    top: 0;
    width: calc(75% - .75rem);

    ${({ theme: { queries } }) => queries.sm`
      height: 4.625rem;
      width: calc(60% - .5rem);
    `}

    ${({ theme: { queries } }) => queries.md`
      height: 6.875rem;
      width: calc(65% - .5rem);
    `}
  }
`

export const Section01Image = styled.div`
  margin: 2.25rem 0 3.5rem 0;
  width: 16.25rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 4.625rem 0 0;
    width: 13.75rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 4.125rem 0 0;
    width: 25rem;
  `}
`

export const Section01Text = styled.div`
  margin-top: auto;

  ${Heading} {
    margin: 0;

    ${({ theme: { queries } }) => queries.md`
      margin-bottom: 6.25rem;
    `}
  }
`

export const Section02 = styled.div`
  margin: 3rem 0 3.25rem;
  position: relative;
  width: 100vw;

  ${({ theme: { queries } }) => queries.sm`
    margin: 7rem 0 7.875rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 4.375rem 0 4.625rem;
  `}

  ::after {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: .5rem;

    ${({ theme: { queries } }) => queries.sm`
      width: 1rem;
    `}
  }
`

export const Section02Image = styled.div`
  transform: translateX(-2.5rem);
  width: calc(100vw - 2rem);

  ${({ theme: { queries } }) => queries.sm`
    transform: none;
    width: 100%;
  `}
`

export const Section03 = styled.div`

`

export const Section03Text = styled.div`
  margin: 0 0 2.875rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 0 0 8.875rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 6rem 0 0;
  `}

  ${Heading} {
    margin: 0;
  }
`

export const Section04 = styled.div`

  ${({ theme: { queries } }) => queries.sm`
    margin: -5.25rem 0 0;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: -15rem 0 0;
  `}
`
