import React, { useRef, useState } from 'react'
import {
  Button,
  CircularProgress,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Wrapper from '../../components/Wrapper/Wrapper'
import OrderSummary from '../../components/OrderSummary'
import NeedHelp from '../../components/NeedHelp'
import CheckoutDelivery from './Delivery'
import CheckoutPayment from './Payment'
import CheckoutAddress from './Address'
import { Form, Formik } from 'formik'
import validationSchema from './validationSchema'
import checkoutFormModel from './checkoutModel'
import formInitialValues from './initialValues'

const { formId, formField } = checkoutFormModel

const steps = ['Shipping address', 'Payment details', 'Review your order']

function _renderStepContent (step) {
  switch (step) {
    case 0:
      return <CheckoutAddress key="checkout-address" formField={formField}/>
    case 1:
      return <CheckoutDelivery key="checkout-delivery" formField={formField}/>
    case 2:
      return <CheckoutPayment key="checkout-payment" formField={formField}/>
    default:
      return <div>Not Found</div>
  }
}

const Checkout = () => {
  const theme = useTheme()
  const matchesTablet600Down = useMediaQuery(theme.breakpoints.down('tablet_600'))
  const topRef = useRef()
  const [activeStep, setActiveStep] = useState(0)
  const currentValidationSchema = validationSchema[activeStep]
  const isLastStep = activeStep === steps.length - 1

  function _sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function _submitForm (values, actions) {
    await _sleep(1000)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)

    setActiveStep(activeStep + 1)
  }

  function _handleSubmit (values, actions) {
    if (isLastStep) {
      _submitForm(values, actions)
    } else {
      setActiveStep(activeStep + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  function _handleBack () {
    setActiveStep(activeStep - 1)
  }

  return (
        <Wrapper>
            <div ref={topRef}/>
            <Grid
                container
                direction={{ mobile_0: 'column', laptop_1024: 'row' }}
                spacing={5}
                mt={2}
                mb={3}
            >
                <Grid item mobile_0={12} tablet_650={8}>
                    <Typography
                        variant="h5"
                        fontWeight={400}
                        fontSize={'24px'}
                        align={matchesTablet600Down ? 'center' : 'inherit'}
                    >
                        Checkout
                    </Typography>

                    <Stepper activeStep={activeStep} style={{
                      padding: theme.spacing(3, 0, 5)
                    }}>
                        {steps.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <>
                        {activeStep === steps.length ? (
                            <>step completed</>
                        ) : (
                            <Formik
                                initialValues={formInitialValues}
                                validationSchema={currentValidationSchema}
                                onSubmit={_handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form id={formId}>
                                        {_renderStepContent(activeStep)}

                                        <div style={{
                                          display: 'flex',
                                          justifyContent: 'space-between',
                                          marginTop: theme.spacing(3),
                                          marginLeft: theme.spacing(1)
                                        }}>
                                            {activeStep !== 0 && (
                                                <Button onClick={_handleBack}>
                                                    Back
                                                </Button>
                                            )}
                                            <div style={{
                                              margin: theme.spacing(1),
                                              position: 'relative'
                                            }}>
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    {isLastStep ? 'Place order' : 'Next'}
                                                </Button>
                                                {isSubmitting && (
                                                    <CircularProgress
                                                        size={24}
                                                        style={{
                                                          position: 'absolute',
                                                          top: '50%',
                                                          left: '50%'
                                                        }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </>
                </Grid>

                <Grid item mobile_0={12} tablet_650={4} mt={{ mobile_0: '1em', tablet_600: '' }}>
                    <OrderSummary/>
                    <NeedHelp/>
                </Grid>
            </Grid>
        </Wrapper>
  )
}

export default Checkout
