import styled from 'styled-components'

export const Solutions = styled.section`
  margin: 4rem 0 2.125rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 2.875rem 0 1.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 6.625rem 0 9.5rem;
  `}
`

export const SolutionsItem = styled.div`
  font-family: 'Roboto';
  margin: 0 0 1.5rem;

  ${({ theme: { queries } }) => queries.md`
    margin: 0;
  `}

  img {
    max-height: 3.125rem;
    max-width: 4.25rem;

    ${({ theme: { queries } }) => queries.sm`
      max-width: 4.75rem;
    `}
  }
`

export const SolutionsItemHeading = styled.h4`
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: .6875rem;
  font-weight: 400;
  margin: 2rem 0 .75rem;
  text-transform: uppercase;
`

export const SolutionsItemDesc = styled.p`
  color: ${({ theme: { grey4 } }) => grey4};
  font-size: .875rem;
  margin: 0;
  white-space: pre-line;
`

export const SolutionsItemIcon = styled.div`
  align-items: center;
  display: flex;
  height: 3.125rem;
  max-width: 4.25rem;
`
