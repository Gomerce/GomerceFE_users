import React, { useCallback, useEffect, useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllShippingAddresses } from '../../../redux/actions/shipping'
import { useAuth0 } from '@auth0/auth0-react'
import { SelectField } from '../../../components/FormFields'
import PropTypes from 'prop-types'

const shipAddresses = [
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

const CheckoutDelivery = (props) => {
  const {
    formField: {
      shippingAddress
    }
  } = props
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const {
    shippingAddresses
  } = useSelector((state) => state.fetchAllShippingAddressesReducer)
  const [userToken, setUserToken] = useState()

  const fetchToken = useCallback(
    async () => {
      try {
        const token = await getAccessTokenSilently()

        setUserToken(token)
      } catch (e) {
        console.log(e)
      }
    },
    [getAccessTokenSilently]
  )

  useEffect(() => {
    fetchToken()
  }, [fetchToken])

  useEffect(() => {
    dispatch(fetchAllShippingAddresses(userToken))
  }, [userToken, dispatch])

  console.log(shippingAddresses)
  return (
        <>
            <FormControl fullWidth>
                <FormLabel>
                    <Typography variant="h6" gutterBottom>How do you want your order delivered?</Typography>
                </FormLabel>
                <RadioGroup defaultValue={'pickup station'}>
                    <FormControlLabel value="pickup station" control={<Radio/>} label="Pickup Station"/>
                    <Typography variant="subtitle2" mt={1} mb={1}>
                        Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep with cheaper shipping fees?
                    </Typography>
                    <Box mt={1} mb={1} sx={{ width: '260px' }}>
                        <Typography
                            component="label"
                            for={shippingAddress.name}
                            gutterBottom
                        >
                            {shippingAddress.label}
                        </Typography>
                        <SelectField
                            name={shippingAddress.name}
                            data={shipAddresses}
                            fullWidth
                            id={shippingAddress.name}
                        />
                    </Box>
                    {/* <CustomDivider/>
                    <FormControlLabel
                        value="home or office"
                        control={<Radio/>}
                        label="Deliver to your home or office"
                    /> */}
                </RadioGroup>
            </FormControl>
            {/* <ShipmentSection/> */}
            {/* <Button variant="contained" disableElevation>
        save and continue
      </Button> */}
        </>
  )
}

CheckoutDelivery.propTypes = {
  formField: PropTypes.any
}

export default CheckoutDelivery
