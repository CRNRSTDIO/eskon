import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const Link = styled(GatsbyLink)`
  color: ${({ blue, theme: { white, blue2 }}) => blue ? blue2 : white};
  display: block;
  font-family: 'Roboto';
  font-size: .9375rem;
  font-weight: 400;
  text-decoration: none;
`

export default Link
