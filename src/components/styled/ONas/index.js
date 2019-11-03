import styled from 'styled-components'

export const Section01 = styled.section`
  margin: 0 auto 200px;
  position: relative;

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
