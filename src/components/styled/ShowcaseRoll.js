import styled from 'styled-components'
import { Link } from 'gatsby'

export const ShowcaseRoll = styled.section`
  background-color: ${({ theme: { grey0 } }) => grey0};
  padding: 4.125rem 0 5.125rem;

  ${({ theme: { queries } }) => queries.md`
    padding: 6.5rem 0 8rem;
  `}
`

export const ShowcaseHeading = styled.div`
  text-align: center;
`

export const ShowcaseTab = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ active, theme: { dark2, grey4 } }) => active ? dark2 : grey4};
  font-family: 'Roboto';
  font-size: .75rem;
  letter-spacing: 1px;
  margin: 0 0 2.5rem;;
  padding: 1.375rem 0;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  :hover,
  :focus {
    outline: 0;
  }

  ::after {
    background-color: ${({ theme: { blue2 } }) => blue2};
    bottom: 0;
    content: '';
    height: .3125rem;
    left: 0;
    opacity: ${({ active }) => active ? 1 : 0};
    position: absolute;
    width: 100%;
  }
`

export const ShowcaseLinkText = styled.span`
  flex-shrink: 0;
`

export const ShowcaseLinkBottom = styled.div`
  align-items: center;
  display: flex;
  margin-top: 1.875rem;

  ::after {
    background-color: ${({ theme: { grey1 } }) => grey1};
    content: '';
    flex-shrink: 1;
    height: 1px;
    margin: auto 1.5rem auto .75rem;
    transform: scale(.5, 1);
    transform-origin: left;
    transition: transform .15s linear, background-color .15s linear;
    width: 100%;
  }
`

export const ShowcaseLink = styled(Link)`
  color: ${({ theme: { grey7 } }) => grey7};
  display: block;
  margin: 0 0 2.375rem;
  text-decoration: none;

  :hover,
  :focus {
    color: ${({ theme: { blue2 } }) => blue2};

    ${ShowcaseLinkBottom}::after {
      background-color: ${({ theme: { blue2 } }) => blue2};
      transform: scale(1, 1);
    }
  }
`

export const ShowcaseAllLink = styled(Link)`
  align-items: center;
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  display: flex;
  font-family: 'Roboto';
  font-size: .9375rem;
  height: 3.4375rem;
  justify-content: center;
  text-align: center;
  text-decoration: none;
`
