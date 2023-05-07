import React from 'react'
import { Box, Stepper, Step, StepLabel } from '@mui/material'
import PropTypes from 'prop-types'

const CustomStepper = ({ activeStep, titles }) => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '1em 0 0.5em'
      }}
    >
      <Stepper activeStep={activeStep}>
        {titles.map((label) => {
          const stepProps = {}
          const labelProps = {}

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} sx={{ fontWeight: 600, fontSize: '14px' }}>
                {label}
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Box>
  )
}

CustomStepper.propTypes = {
  activeStep: PropTypes.any,
  titles: PropTypes.any
}

export default CustomStepper
