import React from 'react'
import App from './App'
import './App.css'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { getConfig } from './config'
import store from './redux/store'
import theme from './theme'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  )
}

const config = getConfig()

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null)
  }
}

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Auth0Provider
            {...providerConfig}
        >
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
)
