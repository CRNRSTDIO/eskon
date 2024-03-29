import styled from 'styled-components'
import { Link } from 'gatsby'

export const TopNav = styled.div`
  background-color: ${({ isOpen, dark, theme: { blue2, white } }) => !dark ? isOpen ? 'transparent' : blue2 : isOpen ? 'transparent' : white};
  left: 0;
  padding: .75rem 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity .15s linear, transform .15s linear, background-color .15s linear;
  z-index: 10;

  ${({ theme: { queries } }) => queries.sm`
    background-color: transparent;
    opacity: ${({ show, isOpen }) => isOpen ? '1' : show ? '1' : '0'};
    padding: 0;
    top: 2.625rem;
    transform: ${({ show, isOpen }) => isOpen ? 'translateY(0)' : show ? 'translateY(0)' : 'translateY(-100%)'};
  `};
`
export const TopNavHamburgerWrapper = styled.div`
  height: 2rem;
  position: relative;
  width: 2rem;

  ${({ theme: { queries } }) => queries.sm`
    display: none;
  `};
`

export const TopNavHamburger = styled.div`
  left: 0;
  padding: 1rem;
  position: absolute;
  pointer-events: all;
  top: 0;

  span {
    background-color: ${({ dark, isOpen, theme: { blue2, white } }) => dark
      ? isOpen ? 'transparent' : blue2
      : isOpen ? 'transparent' : white
    };
    height: .125rem;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateX(50%);
    transition: background-color .15s linear;
    width: 1.75rem;

    ::after,
    ::before {
      background-color: ${({ dark, isOpen, theme: { blue2, white } }) => dark
        ? isOpen ? white : blue2
        : white
      };
      content: '';
      height: .125rem;
      left: 0;
      position: absolute;
      top: 0;
      transform: ${({ isOpen }) => isOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(-.4375rem)'};
      transform-origin: center;
      transition: transform .15s ease-in-out;
      width: ${({ isOpen }) => isOpen ? '100%' : '1rem'};
    }

    ::after {
      transform: ${({ isOpen }) => isOpen ? 'translateY(0) rotate(45deg)' : 'translateY(.4375rem)'};
      width: ${({ isOpen }) => isOpen ? '100%' : '1.4375rem'};
    }
  }
`

export const TopNavLogotype = styled.div`
  align-items: center;
  color: ${({ theme: { white } }) => white};
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;

  img {
    height: 1rem;
  }
`

export const TopNavLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: 100%;

  ${({ theme: { queries } }) => queries.md`
    display: none;
  `};

  img {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    height: 26px;
    transition: opacity .15s linear;
  }
`

export const TopNavLogoSecondary = styled.div`
  text-align: right;
`

export const TopNavLogoLink = styled(Link)`
  pointer-events: all;
`

export const TopNavPhone = styled.a`
  align-items: center;
  color: ${({ dark, theme: { dark1, white } }) => dark ? dark1 : white};
  display: none;
  font-family: 'Roboto';
  font-size: .75rem;
  height: 100%;
  justify-content: flex-end;
  letter-spacing: 1px;
  pointer-events: all;
  text-align: right;
  text-decoration: none;

  ${({ theme: { queries } }) => queries.md`
    display: ${({ isOpen }) => isOpen ? 'none' : 'flex'};
  `};

  img {
    fill: ${({ dark, theme: { blue1, white } }) => dark ? blue1 : white};
    height: .875rem;
    margin: 0 .375rem 0 0;
    width: .875rem;
  }
`

export const TopNavList = styled.ul`
  align-items: center;
  display: none;
  height: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  ${({ theme: { queries } }) => queries.md`
    display: ${({ isOpen }) => isOpen ? 'none' : 'flex'};
  `};
`

export const TopNavItem = styled.li`
  display: inline-flex;
  list-style: none;
`

export const TopNavLink = styled(Link)`
  color: ${({ dark, theme: { dark1, white } }) => dark ? dark1 : white};
  font-family: 'Roboto';
  font-size: .75rem;
  letter-spacing: 1px;
  pointer-events: all;
  text-decoration: none;
  text-transform: uppercase;
`
