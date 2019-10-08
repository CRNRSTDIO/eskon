import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'
import Columns from '../Columns'
import Heading from '../Heading'

export const Section00 = styled.section`
  align-items: flex-end;
  display: flex;
  min-height: calc(100vh - 4.375rem);
  padding: 0 0 4.375rem;
  position: relative;
  width: auto00vw;
  z-index: 1;

  ${({ theme: { queries } }) => queries.sm`
    min-height: calc(100vh - 10.875rem);
    padding: 0 0 10.875rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    min-height: calc(100vh - 6.75rem);
    padding: 0 0 6.75rem;
  `}
`

export const Section00Image = styled(Img)`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;

  ::after {
    background-color: ${({ theme: { black } }) => `${rgba(black, 0.65)}`};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const Section00Tag = styled.div`
  padding: 0 0 0 2rem;
  position: relative;

  ::before {
    border: .125rem solid ${({ theme: { white } }) => white};
    border-radius: 50%;
    content: '';
    height: 1.0625rem;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.0625rem;
  }
`

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

  ${({ theme: { queries } }) => queries.md`
    align-items: center;
    display: flex;
    height: 100vh;
  `}
`

export const Section02Text = styled.div`
  padding: 4.75rem 0 4.75rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 15.375rem 0 18.25rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 0;
  `}
`

export const Section02Image = styled.div`
  overflow: hidden;

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

  ${({ theme: { queries } }) => queries.md`
    padding: 7.125rem 0 0;
  `}
`

export const Section03Item = styled.div`
  border-bottom: ${({ theme: { grey1 } }) => `1px solid ${grey1}`};
  height: 100%;
  margin: 3.125rem 0 0;
  padding: 0 0 1.75rem;

  ${({ theme: { queries } }) => queries.md`
    margin: 0;
  `}
`

export const Section04 = styled.div`

  ${({ theme: { queries } }) => queries.md`
    align-items: center;
    display: flex;
    padding: 9.375rem 0;
  `}
`

export const Section04Text = styled.div`
  padding: 3.75rem 0 3.375rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 6.75rem 0 2.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 0;
  `}
`

export const Section04Image = styled.div`

`

export const Section05 = styled.div`
  padding: 5.25rem 0 4.75rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 6.75rem 0 7.125rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    align-items: center;
    display: flex;
    padding: 3.125rem 0 10.625rem;
  `}
`

export const Section05Text = styled.div`
  padding: 0 0 2.625rem;

  ${({ theme: { queries } }) => queries.md`
    padding: 0;
  `}
`

export const Section06 = styled.div`

  ${({ theme: { queries } }) => queries.sm`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
  `}
`

export const Section06Div = styled.div`

  ${({ theme: { queries } }) => queries.sm`
    flex: 1 0 50%;
    height: 50vw;
    position: relative;
  `}
`

export const Section06Image = styled.div`

  ${({ theme: { queries } }) => queries.sm`
    height: 100%;
    position: absolute;
    right: 50%;
    top: 50%;
  `}
`

export const Section07 = styled.div`
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: 3.75rem;
  font-weight: 300;
  padding: 3.125rem 0 .875rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 5.75rem 0 3.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 7rem 0 6.25rem
  `}
`

export const Section07Item = styled.div`
  margin: 1.75rem 0;

  ${({ theme: { queries } }) => queries.sm`
    margin: 2.125rem 0;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 0;
  `}
`

export const Section08 = styled.div`
  background-color: ${({ theme: { grey0 } }) => grey0};
  padding: 5rem 0 4.5rem;

  ${({ theme: { queries } }) => queries.sm`
    padding: 5rem 0 7rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 5rem 0 4rem;
  `}
`

export const Section08Heading = styled.div`
  margin: 0 0 4.75rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 0 0 3.5rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 0 0 4.75rem;
  `}

  ${Heading} {
    margin: 0;
  }
`

export const Section08Item = styled.div`
  margin: 0 0 1.625rem;
  padding: 0 0 2rem 5rem;
  position: relative;

  ::after {
    background-color: ${({ theme: { grey1 } }) => grey1};
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    width: calc(100% - 5rem);
  }

  ${({ theme: { queries } }) => queries.md`
    height: 100%;
    margin: 0 0 3.625rem;
  `}
`

export const Section08ItemImage = styled.div`
  left: 0;
  position: absolute;
  width: 4rem;
`

export const Section08ItemHeading = styled.h4`
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 1rem;
`

export const Section09 = Section06

export const Section09Div = Section06Div
