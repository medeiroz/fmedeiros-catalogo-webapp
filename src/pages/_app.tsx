import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import store from '../store/store'
import { Provider } from 'react-redux'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
