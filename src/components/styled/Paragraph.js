import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${({ dark, theme: { white, grey4 } }) => dark ? grey4 : white};
  font-family: 'Roboto';
  font-size: .9375rem;
  font-weight: 400;
  margin: 0;
`

export default Paragraph
