import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global/styles'
import { setConfiguration } from 'react-grid-system'
import theme from '../global/theme'

const Theme = ({ children }) => {
  setConfiguration({ gutterWidth: 16 })

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
