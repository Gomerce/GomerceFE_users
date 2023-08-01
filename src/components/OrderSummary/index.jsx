import React, { useEffect, useState } from 'react'
import { Wrapper } from './styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import OrderItemDetails from './OrderItemDetails'
import CustomDivider from '../CustomDivider'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const OrderSummary = (props) => {
  const theme = useTheme()
  const matchesLaptop1024Down = useMediaQuery(theme.breakpoints.down('laptop_1024'))
  const { cartItems } = useSelector(state => state.cartReducer)
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    if (cartItems && cartItems?.length) {
      const sum = cartItems?.reduce((acc, obj) => {
        return acc + Number(obj.price)
      }, 0)

      setSubTotal(sum)
    }
  }, [cartItems])

  return (
        <Box sx={{ width: '100%' }}>
            <Typography
                variant="h3"
                fontWeight={400}
                fontSize={'24px'}
                align={matchesLaptop1024Down ? 'center' : 'inherit'}
            >
                Order summary
            </Typography>
            <Wrapper>
                <Typography variant="subtitle2">Your Order (2 items)</Typography>
                {cartItems?.map(c => <OrderItemDetails item={c} key={`cart-item-${c.id}`}/>)}
                <Grid container direction="row" spacing={3} justifyContent="space-between">
                    <Grid item mobile_0={6}>
                        <Box>
                            <Typography variant="subtitle2" mt={1.5} mb={1.5} align={'left'}>
                                Subtotal
                            </Typography>
                            <Typography variant="subtitle2" mt={1.5} mb={1.5} align={'left'}>
                                VAT
                            </Typography>
                            <Typography variant="subtitle2" mt={1.5} mb={1.5} align={'left'}>
                                Total
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item mobile_0={6}>
                        <Box>
                            <Typography variant="subtitle2" mt={1.5} mb={1.5} align={'right'}>
                                ${subTotal}
                            </Typography>
                            <Typography variant="subtitle2" mt={1.5} mb={1.5} align={'right'}>
                                $$$$$$
                            </Typography>
                            <Typography variant="subtitle2" mt={1.5} mb={1.5} align={'right'}>
                                ${subTotal}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <CustomDivider/>
                <Button variant="outlined" disableElevation fullWidth size="large" component={Link} to="/cart">
                    Modify cart
                </Button>
            </Wrapper>
        </Box>
  )
}

export default OrderSummary
