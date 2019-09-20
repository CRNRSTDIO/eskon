import styled from 'styled-components'
import Columns from '../Columns'

export const Section01 = styled.div`
  padding: 4.125rem 0 2.875rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 6.25rem 0 8.25rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 8.125rem 0 8.75rem
  `}

  ${Columns} {
    padding: 0;

    ::after {
      display: none;
    }
  }
`

export const Section02 = styled.div`
  background-color: ${({ theme: { dark1 } }) => dark1};
  position: relative;
`

export const Section02Text = styled.div`
  padding: 4.75rem 0 4.75rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 15.375rem 0 292;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 12.25rem 0 12.5rem;
  `}
`

export const Section02Image = styled.div`


  ${({ theme: { queries } }) => queries.md`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
  `}
`

export const Section03 = styled.div`
  padding: 4.5rem 0 0;

  ${({ theme: { queries } }) => queries.sm`
    padding: 6.375rem 0 0;
  `}

  ${({ theme: { queries } }) => queries.sm`
    padding: 7.125rem 0 0;
  `}
`
