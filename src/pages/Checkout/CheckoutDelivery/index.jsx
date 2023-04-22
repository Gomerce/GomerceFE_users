import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material'
import CustomDivider from '../../../components/CustomDivider'
import ShipmentSection from './ShipmentSection'

const CheckoutDelivery = () => {
  const [pickupStation, setPickUpStation] = useState('')

  const handleChange = (event) => {
    setPickUpStation(event.target.value)
  }
  return (
    <>
      <FormControl fullWidth>
        <FormLabel>
          <Typography variant="subtitle2">How do you want your order delivered?</Typography>
        </FormLabel>
        <RadioGroup defaultValue={'pickup station'}>
          <FormControlLabel value="pickup station" control={<Radio />} label="Pickup Station" />
          <Typography variant="subtitle2" mt={1} mb={1}>
            Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep with cheaper shipping fees?
          </Typography>
          <Box mt={1} mb={1} sx={{ width: '260px' }}>
            <TextField
              select
              onChange={handleChange}
              value={pickupStation}
              fullWidth
              margin="dense"
              size="small"
              variant="outlined"
            >
              <MenuItem value={'london'}>London</MenuItem>
              <MenuItem value={'abuja'}>Abuja</MenuItem>
              <MenuItem value={'ghana'}>Ghana</MenuItem>
            </TextField>
          </Box>
          <CustomDivider />
          <FormControlLabel
            value="home or office"
            control={<Radio />}
            label="Deliver to your home or office"
          />
        </RadioGroup>
      </FormControl>
      <ShipmentSection />
      {/* <Button variant="contained" disableElevation>
        save and continue
      </Button> */}
    </>
  )
}

export default CheckoutDelivery
