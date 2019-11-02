import styled from 'styled-components'

export const CircularText = styled.div`
  height: 9rem;
  position: relative;
  width: 9rem;
`

export const CircularTextNode = styled.div`
  font-family: 'Noway';
  font-size: 12px;
  font-weight: 500;
  height: 100%;
  letter-spacing: 2px;
  position: absolute;
  right: 50%;
  top: 50%;
  text-transform: uppercase;
`

export const CircularTextImage = styled.div`

  img {
    display: block;
    height: 36px;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
  }
`
