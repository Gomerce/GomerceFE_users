import Index from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React from 'react'
import { Box, styled } from '@mui/material'
import { useLocation } from 'react-router-dom'
import './App.css'
import FloatingButton from './components/FloatingButton'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const App = (props) => {
  const location = useLocation()

  const AppContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column'
  }))

  const exceptPath = [
    '/login',
    '/signup',
    '/page-not-found',
    '/page-under-maintenance',
    '/internal-server-error'
  ]

  return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <AppContainer>
                {!exceptPath.includes(location.pathname) && <Navbar/>}
                <Index/>
                <FloatingButton/>
                {!exceptPath.includes(location.pathname) && <Footer/>}
            </AppContainer>
        </LocalizationProvider>
  )
}

export default App
