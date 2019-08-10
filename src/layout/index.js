import React from 'react'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => (
  <ThemeProvider key={1} theme={{
    white: '#FFFFFF',
    pink1: '#FFF9F9',
    grey0: '#F2F2F2',
    grey1: '#E1E1E1',
    grey2: '#D6D6D6',
    grey3: '#A4A4A4',
    grey4: '#707070',
    grey5: '#444444',
    grey6: '#2E2E2E',
    grey7: '#242424',
    dark1: '#010C1D',
    dark2: '#101010',
    dark3: '#1A1818',
    black: '#000000',
    blue1: '#022358',
    blue2: '#12479D',
  }}>
    {'ad'}
  </ThemeProvider>
)

export default Layout
