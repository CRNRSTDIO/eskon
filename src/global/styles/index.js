import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme: { blue1 } }) => blue1};
    font-family: 'Noway';
    margin: 0;
  }
`
