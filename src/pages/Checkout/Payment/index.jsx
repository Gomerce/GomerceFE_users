import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import summary from '../../../data/summaryData'
import CustomDivider from '../../../components/CustomDivider'
import { Row, Summary } from './styles'
import { useFetchPayments } from '../../../hooks'
import PropTypes from 'prop-types'
import { InputField, SelectField } from '../../../components/FormFields'

const paymentList = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'mastercard',
    label: 'Master Card'
  },
  {
    value: 'visa',
    label: 'Visa'
  },
  {
    value: 'paypal',
    label: 'PayPal'
  }
]

const CheckoutPayment = (props) => {
  const { loading: paymentLoading, response: payments, error: paymentError } = useFetchPayments()
  const {
    formField: {
      paymentMethod,
      voucher
    }
  } = props

  console.log(paymentLoading, payments, paymentError)

  return (
        <>
            <Typography variant="h6" gutterBottom>How do you want to pay your order?</Typography>
            <Typography variant="body1" gutterBottom>Select payment option</Typography>
            <Box mt={1} mb={1} sx={{ width: '260px' }}>
                <Typography
                    component="label"
                    for={paymentMethod.name}
                    gutterBottom
                >
                    {paymentMethod.label}
                </Typography>
                <SelectField
                    name={paymentMethod.name}
                    data={paymentList}
                    fullWidth
                    id={paymentMethod.name}
                />
            </Box>
            <CustomDivider/>
            <Typography variant="body1" mt={2} gutterBottom>
                Do you have a voucher?
            </Typography>
            <Box
                sx={{
                  width: { mobile_0: '100%', tablet_600: '410px' },
                  display: 'flex',
                  flexDirection: { mobile_0: 'column', tablet_600: 'row' },
                  alignItems: { mobile_0: 'flex-start', tablet_600: 'center' },

                  justifyContent: 'space-between'
                }}
            >
                <Box sx={{ width: '272px' }}>
                    <InputField name={voucher.name} fullWidth/>
                </Box>
                <Button
                    size="medium"
                    variant="outlined"
                    sx={{ marginTop: { mobile_0: '1.2em', tablet_600: '0' } }}
                >
                    add voucher
                </Button>
            </Box>
            <CustomDivider/>
            <Summary>
                {summary.map((row, index) => {
                  const { label, value } = row
                  return index === 4 ? (
                        <Box key={index}>
                            <CustomDivider/>
                            <Row key={index}>
                                <Box>
                                    <Typography fontWeight={400} fontSize={'14px'}>
                                        {label}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography fontWeight={400} fontSize={'14px'}>{`$ ${value}`}</Typography>
                                </Box>
                            </Row>
                        </Box>
                  ) : (
                        <Row key={index}>
                            <Box>
                                <Typography fontWeight={400} fontSize={'14px'}>
                                    {label}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontWeight={400} fontSize={'14px'}>{`$ ${value}`}</Typography>
                            </Box>
                        </Row>
                  )
                })}
            </Summary>
        </>
  )
}

CheckoutPayment.propTypes = {
  formField: PropTypes.any
}

export default CheckoutPayment
