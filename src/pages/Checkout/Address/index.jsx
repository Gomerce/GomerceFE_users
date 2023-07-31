import React from 'react'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { InputField, SelectField } from '../../../components/FormFields'

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'New York'
  },
  {
    value: '2',
    label: 'Chicago'
  },
  {
    value: '3',
    label: 'Saigon'
  }
]

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
]

function AddressForm (props) {
  const {
    formField: {
      firstName,
      lastName,
      mobile,
      deliveryAddress,
      city,
      state,
      additionalInfo
    }
  } = props

  return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <InputField name={firstName.name} label={firstName.label} fullWidth/>
                    <InputField name={lastName.name} label={lastName.label} fullWidth/>
                </Box>
                <InputField name={mobile.name} label={mobile.label} fullWidth/>
                <InputField name={deliveryAddress.name} label={deliveryAddress.label} fullWidth multiline rows={3}/>
                <InputField name={additionalInfo.name} label={additionalInfo.label} fullWidth multiline rows={3}/>
                <SelectField
                    name={state.name}
                    label={state.label}
                    data={states}
                    fullWidth
                />
                <SelectField
                    name={city.name}
                    label={city.label}
                    data={cities}
                    fullWidth
                />
            </Box>
        </Box>
  )
}

AddressForm.propTypes = {
  formField: PropTypes.any
}

export default AddressForm
