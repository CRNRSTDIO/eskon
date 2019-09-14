import styled from 'styled-components'

export const AccordionItem = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  position: relative;

  :hover,
  :focus {
    outline: 0;
  }
`

export const AccordionHeader = styled.div`
  border-bottom: ${({ theme: { grey1 } }) => `1px solid ${grey1}`};
  font-family: 'Roboto'
  font-size: .8125rem;
  padding: 1.125rem 0 1.125rem 1.75rem;
  position: relative;
  text-align: left;
  text-transform: uppercase;
`

export const AccordionIndicator = styled.div`
  align-items: center;
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  display: flex;
  font-size: .75rem;
  height: 1.25rem;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;

  ::before {
    background-color: ${({ theme: { white } }) => white};
    bottom: 3px;
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    width: 4px;
  }
`

export const AccordionState = styled.div`
  border-color: ${({ theme: { grey5 } }) => `${grey5} transparent transparent transparent`};
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: ${({ isActive }) => isActive ? `translateY(-50%) scale(-1, -1)` : `translateY(-50%)`};
  transition: transform .15s linear;
  width: 0;
`
