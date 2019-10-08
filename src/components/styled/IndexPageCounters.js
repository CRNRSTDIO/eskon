import styled from 'styled-components'

export const Counters = styled.div`
  background-color: ${({ theme: { blue2 } }) => blue2};
  color: ${({ theme: { white } }) => white};
  margin: 0 0 11rem;
  padding: 5.375rem 0 8.625rem;
  position: relative;
  z-index: 1;

  ${({ theme: { queries } }) => queries.sm`
    padding: 5.75rem 0;

    ::after {
      background-color: ${({ theme: { blue2 } }) => blue2};
      content: '';
      height: 100%;
      left: 50%;
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      width: 100vw;
      z-index: -1;
    }
  `}

  ${({ theme: { queries } }) => queries.md`
    padding: 7.875rem 0 8.625rem;

    ::after {
      display: none;
    }
  `}
`

export const CountersItem = styled.div`
  margin: 0 0 3.625rem;

  ${({ theme: { queries } }) => queries.sm`
    margin: 0;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 0 0 3.625rem;
  `}
`

export const CountersItemValue = styled.div`
  font-size: 4.5rem;
  font-weight: 300;
`

export const CountersItemDesc = styled.div`
  font-family: 'Roboto';
  font-size: .9375rem;
`

export const CountersLogo = styled.div`
  background-color: ${({ theme: { blue1 } }) => blue1};
  height: 14.125rem;
  left: 0;
  position: absolute;
  top: calc(100% - 7.0625rem);
  width: calc(75% - 1rem);

  ${({ theme: { queries } }) => queries.sm`
    height: 13.5rem;
    left: auto;
    right: 0;
    top: calc(100% - 6.75rem);
    transform: translateX(50%) translateX(-1.875rem);
    width: 13.75rem;
  `}

  ${({ theme: { queries } }) => queries.md`
    height: 21.875rem;
    left: calc(100% - 8.75rem);
    right: 0;
    top: calc(100% - 11rem);
    transform: none;
    width: 17.375rem;
  `}

  ::after {
    background-color: ${({ theme: { blue2 } }) => blue2};
    content: '';
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    ${({ theme: { queries } }) => queries.md`
      width: 50%;
    `}
  }
`

export const CountersLabel = styled.div`
  background-color: ${({ theme: { blue1 } }) => blue1};
  bottom: 0;
  height: 50%;
  position: absolute;
  right: -1rem;
  width: .1875rem;

  ${({ theme: { queries } }) => queries.sm`
    bottom: auto;
    right: 25%;
    top: 100%;
  `}

  ${({ theme: { queries } }) => queries.md`
    bottom: 0;
    left: -3.125rem;
    right: auto;
    top: auto;
  `}

  ::after {
    color: ${({ theme: { blue1 } }) => blue1};
    content: 'Usługi';
    font-family: 'Roboto';
    font-size: .5625rem;
    font-weight: 700;
    letter-spacing: .125rem;
    position: absolute;
    right: 50%;
    text-orientation: mixed;
    text-transform: uppercase;
    top: calc(100% + 1.625rem);
    transform: translateX(50%);
    writing-mode: vertical-rl;
  }
`
