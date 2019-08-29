import styled from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'gatsby'

export const FooterCta = styled.div`
  background-color: ${({ theme: { blue2 } }) => blue2};
  padding: 4.875rem 0;
  grid-column: 1 / span 12;
  position: relative;

  ::after,
  ::before {
    background-image: ${({ theme: { grey0, dark1 } }) => `linear-gradient(180deg, ${grey0} 0%, ${grey0} 50%, ${dark1} 50%, ${dark1} 100%)`};
    bottom: 0;
    content: '';
    height: 100%;
    left: 100%;
    position: absolute;
    width: 100%;
  }

  ::after {
    left: auto;
    right: 100%;
  }
`

export const FooterBoxesContainer = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 1rem;
  height: max-content;
`

export const FooterBox = styled.div`
  align-items: ${({ alternate }) => alternate && `flex-end`};
  background-color: ${({ alternate, theme: { blue1 } }) => alternate ? blue1 : 'transparent'};
  display: ${({ alternate }) => alternate && `flex`};
  grid-column: span 4;
  padding: ${({ alternate }) => alternate ? `1.4375rem 1.8125rem 2.375rem 2.375rem` : `.4375rem 2rem 2.375rem 0`};

  *:last-child {

    ::after {
      background-color: ${({ theme: { white } }) => white};
      content: '';
      display: block;
      height: 1px;
      margin: 1.5rem 0 0;
      width: ${({ alternate }) => alternate ? `100%` : `75%`};
    }
  }
`

export const FooterNav = styled.div`
  display: flex;
  grid-column: 2 / span 10;
  justify-content: flex-start;
`

export const FooterWrapper = styled.div`
  background-color: ${({ theme: { dark1 } }) => dark1};
`

export const FooterHr = styled.hr`
  background-color: ${({ theme: { white } }) => `${rgba(white, .11)}`};
  border: 0;
  grid-column: 1 / span 12;
  height: 1px;
  margin: 0;
  width: 100%;
`

export const FooterLink = styled(Link)`
  color: ${({ theme: { grey2 } }) => grey2};
  font-size: .75rem;
  text-decoration: none;
  text-transform: uppercase;

  & + & {
    margin: 0 0 0 4.125rem;
  }

  &[aria-current] {
    color: ${({ theme: { white } }) => white};
    text-decoration: underline;
  }
`

export const FooterColumn = styled.div`
  display: grid;
  grid-column: span 3;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
`

export const FooterColumnInside = styled.div`
  grid-column: 2 / 4;
  white-space: pre;
`

export const FooterColumnLine = styled.p`
  color: ${({ theme: { grey2 } }) => grey2};
  font-size: .8125rem;
  line-height: 1.375rem;
  margin: 0;

  :first-child {
    color: ${({ theme: { grey0 } }) => grey0};
  }
`
