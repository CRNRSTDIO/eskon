import styled from 'styled-components'

const Grid = styled.div`
  align-content: ${({ center }) => center ? 'center' : 'start'};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 1rem;
  height: ${({ center }) => center ? '100%' : 'auto'};
`

export default Grid
