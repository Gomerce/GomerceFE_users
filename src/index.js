import React from 'react'
import App from './App'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/Theme'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-g4gsowubo2qcoa42.us.auth0.com"
      clientId="WAqeFlB4tiFA5BRyNJmr2QzkZDvBMHPk"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
)
