import * as React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PropTypes from 'prop-types'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))

function StyledCartBadge ({ cartCount }) {
  return (
        <StyledBadge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon/>
        </StyledBadge>
  )
}

StyledCartBadge.propTypes = {
  cartCount: PropTypes.number
}

export default StyledCartBadge
