import { Badge, Box, Typography } from '@mui/material/'
import React from 'react'
import CustomDivider from '../../components/CustomDivider'
import CartItem from './CartItem'
import { CustomCartMain } from './styles'
import PropTypes from 'prop-types'

const CartMain = (props) => {
  const { items, total, deleteItem } = props

  return (
        <CustomCartMain>
            <Typography
                variant="h6"
                fontWeight={{ mobile_0: '600', laptop_1024: '400' }}
                fontSize={{ mobile_0: '16px', tablet_600: '24px', laptop_1024: '32px' }}
                sx={{ textAlign: { mobile_0: 'center', tablet_600: 'inherit' } }}
            >
                Shopping Cart <Badge>{items?.length}</Badge>
            </Typography>
            <CustomDivider/>
            {items.map(i => <div key={`cart-item-${i.id}`}>
                    <CartItem item={i} handleDeleteItem={deleteItem}/>
                </div>
            )}
            <Box>
                <Typography variant="body1" align="right">
                    Subtotal ({items?.length} items): <b>$ {total}</b>
                </Typography>
            </Box>
        </CustomCartMain>
  )
}

CartMain.propTypes = {
  items: PropTypes.any,
  total: PropTypes.number,
  deleteItem: PropTypes.any
}

export default CartMain
