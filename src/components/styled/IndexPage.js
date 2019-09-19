import styled from 'styled-components'
import Link from './Link'

export const Section = styled.section`
  margin: 0;
  padding: 0;
  position: relative;

  ::before {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    display: ${({ box }) => box ? 'block' : 'none'};
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

export const PullUp = styled.div`
  margin-bottom: auto;
`

export const PullDown = styled.div`
  margin-top: auto
`

export const Box = styled.div`
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  display: flex;
  flex-direction: column;
  margin: .625rem 0;
  position: relative;

  ${({ theme: { queries } }) => queries.md`
    background-color: ${({ alternate, theme: { white, blue2 } }) => alternate ? white : blue2};
    color: ${({ alternate, theme: { white, grey6} }) => alternate ? grey6 : white};
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

  ${Link} {
    ${({ theme: { queries } }) => queries.md`
      color: ${({ alternate, theme: { white, blue2 } }) => alternate ? blue2 : white};
    `}
  }
`

export const SectionImage = styled.div`
  margin: 2.25rem 0 3.5rem 0;
  width: 16.25rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 4.625rem 0 7rem;
    width: 13.75rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 4.125rem 0 4.375rem;
    width: 25rem;
  `}
`

export const SectionHeadingWrapper = styled.div`
  margin: auto 0 0;

  ${({ theme: { queries } }) => queries.md`
    margin: auto 0 9.875rem;
  `}
`

export const SectionParagraphWrapper = styled.div`
${({ theme: { queries } }) => queries.md`
  margin: auto 0 11.375rem;
`}
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100vw;

  ::after {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 1rem;
  }
`

export const Counters = styled.aside`
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  padding: 7.875rem 0 8.625rem;
  position: relative;
  z-index: 1;
`

export const LogoBox = styled.div`
  background-color: ${({ theme: { blue1 } }) => blue1};
  height: 21.875rem;
  position: absolute;
  right: 0;
  top: -11rem;
  width: 17.25rem;
  z-index: 0;
`

export const CounterLabel = styled.span`
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: .5625rem;
  font-weight: 700;
  left: 50%;
  position: absolute;
  text-orientation: mixed;
  text-transform: uppercase;
  top: calc(100% + 14.375rem);
  transform: translateX(-50%);
  writing-mode: vertical-rl;

  ::after {
    background-color: ${({ theme: { blue2 } }) => blue2};
    content: '';
    height: 11.25rem;
    left: 50%;
    position: absolute;
    top: -14.375rem;
    width: .25rem;
  }
`

export const CountersItem = styled.div`

`

export const CounterItemValue = styled.span`
  display: block;
  font-size: 4.5rem;
`

export const CounterItemDesc = styled.span`
  display: block;
  font-family: 'Roboto';
  font-size: .9375rem;
`

export const Solutions = styled.section`
  margin: 6.625rem 0 9.5rem;
`

export const SolutionsItem = styled.div`
  font-family: 'Roboto';

  img {
    max-height: 3.125rem;
    max-width: 6.25rem;
  }
`

export const SolutionsItemHeading = styled.h4`
  color: ${({ theme: { blue2 } }) => blue2};
  font-size: .6875rem;
  margin: 2rem 0 .75rem;
  text-transform: uppercase;
`

export const SolutionsItemDesc = styled.p`
  color: ${({ theme: { grey4 } }) => grey4};
  font-size: .875rem;
  margin: 0;
  white-space: pre-line;
`
