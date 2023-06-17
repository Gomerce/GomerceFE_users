import { ThemeProvider } from '@emotion/react'

import index from '../../theme'
import React from 'react'
import SignupComponent from '../../components/Signup/SignupComponent'

const Signup = () => {
  return (
    <ThemeProvider theme={index}>
      <SignupComponent />
    </ThemeProvider>
  )
}

export default Signup
