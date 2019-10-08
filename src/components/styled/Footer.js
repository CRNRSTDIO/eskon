import styled from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'gatsby'

export const FooterCta = styled.div`
  background-color: ${({ theme: { blue2 } }) => blue2};
  position: relative;

  ${({ theme: { queries } }) => queries.sm`
    padding: 4.875rem 0;
  `}

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

export const FooterBox = styled.div`
  align-items: ${({ alternate }) => alternate && 'flex-end'};
  background-color: ${({ alternate, theme: { blue1 } }) => alternate ? blue1 : 'transparent'};
  display: ${({ alternate }) => alternate && 'flex'};
  padding: ${({ alternate }) => alternate ? '100px 0 58px' : '58px 0'};
  position: relative;
  z-index: 1;

  ${({ theme: { queries } }) => queries.sm`
    height: 100%;
    padding: ${({ alternate }) => alternate ? '1.4375rem 1.8125rem 2.375rem 2.375rem' : '.4375rem 2rem 2.375rem 0'};

    ::before {
      display: none;
    }
  `}

  ::before {
    background-color: ${({ alternate, theme: { blue1, blue2 } }) => alternate ? blue1 : blue2};
    content: '';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 150vw;
    z-index: -1;
  }

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

export const FooterBoxLogo = styled.div`
  color: ${({ theme: { white } }) => white};
  display: none;
  position: absolute;
  right: 1.875rem;
  top: 1.5rem;

  ${({ theme: { queries } }) => queries.sm`
    display: block;
  `}
`

export const FooterWrapper = styled.div`
  background-color: ${({ theme: { dark1 } }) => dark1};
`

export const FooterHr = styled.hr`
  background-color: ${({ theme: { white } }) => `${rgba(white, .11)}`};
  border: 0;
  height: 1px;
  margin: 0;
  width: 100%;
`

export const FooterLink = styled(Link)`
  color: ${({ theme: { grey2 } }) => grey2};
  display: inline-block;
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

export const FooterColumnInside = styled.div`
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
