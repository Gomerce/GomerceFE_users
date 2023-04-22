import React from 'react'
import { Breadcrumbs, Button, Stack } from '@mui/material'
import CustomBreadcrumbDivider from './CustomBreadcrumbDivider'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { checkoutButtonStyle } from './styles'
import PropTypes from 'prop-types'

const CustomCheckoutBreadcrumb = ({ address, delivery, payment }) => {
  const breadcrumbs = [
    <Button
      key="1"
      size="small"
      startIcon={address ? <CheckCircleIcon /> : '1.'}
      sx={checkoutButtonStyle}
    >
      address details
    </Button>,
    <Button
      key="2"
      size="small"
      startIcon={delivery ? <CheckCircleIcon /> : '2.'}
      sx={checkoutButtonStyle}
    >
      delivery method
    </Button>,
    <Button
      key="3"
      size="small"
      startIcon={payment ? <CheckCircleIcon /> : '3.'}
      sx={checkoutButtonStyle}
    >
      payment method
    </Button>
  ]
  return (
    <Stack direction="row" mt={2.5} mb={2}>
      <Breadcrumbs separator={<CustomBreadcrumbDivider />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}

CustomCheckoutBreadcrumb.propTypes = {
  address: PropTypes.bool,
  delivery: PropTypes.bool,
  payment: PropTypes.bool
}

export default CustomCheckoutBreadcrumb
