import styled from 'styled-components'

const Columns = styled.article`
  break-inside: avoid;
  column-count: 2;
  column-gap: 1rem;
  column-width: 9.375rem;
  padding: 1.625rem 0 0;
  position: relative;

  ::after {
    background: ${({ theme: { grey0 } }) => `linear-gradient(
      90deg, ${grey0} 0%, ${grey0} calc(50% - .5rem), transparent calc(50% - .5rem), transparent calc(50% + .5rem), ${grey0} calc(50% + .5rem), ${grey0} 100%)`
    };
    content: '';
    height: .125rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default Columns
