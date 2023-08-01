import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CartMain from './CartMain'
import { CustomSection } from './styles'
import Summary from './Summary'
import Wrapper from '../../components/Wrapper/Wrapper'
import RecommendedItems from '../../components/RecommendedItems'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'

const Cart = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [totalAmount, setTotalAmount] = useState(0)
  const { cartItems } = useSelector(state => state.cartReducer)
  const deleteFromCart = (product) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: product })
  }

  useEffect(() => {
    setLoading(true)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    let temp = 0
    cartItems.forEach(c => (temp += Number(c.price)))
    setTotalAmount(temp)
    setLoading(false)
  }, [cartItems])

  return (
        <Wrapper>
            <CustomSection mt={3}>
                {loading && <CircularProgress/>}
                {cartItems?.length
                  ? <Grid
                        container
                        direction={{ mobile_0: 'column', tablet_800: 'row' }}
                        mt={2}
                        mb={3}
                        justifyContent="space-between"
                    >
                        <Grid item mobile_0={12} tablet_800={8} alignItems={'center'}>
                            <CartMain items={cartItems} deleteItem={deleteFromCart} total={totalAmount}/>
                        </Grid>
                        <Grid item mobile_0={12} tablet_800={4}>
                            <Summary items={cartItems} total={totalAmount}/>
                        </Grid>
                    </Grid>
                  : <Box
                        sx={{
                          p: 4,
                          textAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '20px',
                          alignItems: 'center'
                        }}
                    >
                        <CheckBoxOutlineBlankIcon fontSize="large"/>
                        <Typography variant="h4">Empty Cart</Typography>
                        <Button component={Link} to="/" variant="contained">Go Shopping</Button>
                    </Box>
                }
            </CustomSection>
            <RecommendedItems/>
        </Wrapper>
  )
}

export default Cart
