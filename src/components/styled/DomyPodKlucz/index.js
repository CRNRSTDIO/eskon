import styled from 'styled-components'
import Paragraph from '../Paragraph'
import Heading from '../Heading'

export const Section01 = styled.section`
  padding: 3.625rem 0 3.25rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 5.125rem 0 4.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 6.875rem 0 7.5rem;
  `}

  ${Paragraph} {
    margin-bottom: 1.25rem;
  }
`

export const Section01Text = styled.div``

export const Section02 = styled.section`
  padding: 3.75rem 0 0;

  ${({ theme: { queries } }) => queries.sm`
    padding: 5.125rem 0 8.75rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 7.875rem 0 5.625rem;

    ${Heading} {
      margin: 0;

      ::after {
        margin-bottom: 0;
      }
    }
  `}
`
