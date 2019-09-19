import styled from 'styled-components'

const Paragraph = styled.p`
  color: ${({ inherit, dark, theme: { white, grey4 } }) => inherit ? 'inherit' : dark ? grey4 : white};
  font-family: 'Roboto';
  font-size: .9375rem;
  font-weight: 400;
  margin: 0;
  white-space: pre-line;
`

export default Paragraph
