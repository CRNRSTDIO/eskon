import styled from 'styled-components'

export const Section01 = styled.section`
  margin: 0 auto 4.25rem;
  position: relative;

  ${({ theme: { queries } }) => queries.md`
    margin-bottom: 12.5rem;
  `}

  ::after {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    height: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;

    ${({ theme: { queries } }) => queries.sm`
      top: 0;
      transform: none;
    `}

    ${({ theme: { queries } }) => queries.md`
      height: 100%;
    `}
  }
`

export const Section01Text = styled.div`
  margin-top: auto;
`

export const Section01Image = styled.div`
  margin-bottom: 4.625rem;
  margin-left: -2.5rem;

  ${({ theme: { queries } }) => queries.sm`
    margin-left: 0;
  `}

  ${({ theme: { queries } }) => queries.md`
    margin: 0;
  `}
`

export const Section01CircularText = styled.div`
  color: ${({ theme: { blue2 } }) => blue2};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(50%) translateX(-1rem);
  z-index: 10;

  ${({ theme: { queries } }) => queries.sm`
    right: 10%;
    top: 25%;
    transform: none;
  `}

  ${({ theme: { queries } }) => queries.md`
    top: 5%;
  `}

  ::after {
    background-color: ${({ theme: { grey0 } }) => grey0};
    content: '';
    height: 74px;
    position: absolute;
    left: 50%;
    top: 290px;
    transform: translateX(-50%);
    width: 74px;
  }
`
