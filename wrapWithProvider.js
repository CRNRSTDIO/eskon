import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/theme'

export default ({ element }) =>
<ThemeProvider theme={theme}>
  {element}
</ThemeProvider>
