import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import CustomDivider from '../../components/CustomDivider'
import PropTypes from 'prop-types'

import { CustomSummary, Row } from './styles'
import { Link } from 'react-router-dom'

const Summary = (props) => {
  const { items, total } = props

  return (
    <CustomSummary>
      <Typography
        variant="h6"
        fontWeight={400}
        fontSize={'24px'}
        sx={{ textAlign: { mobile_0: 'center', tablet_600: 'inherit' } }}
      >
        Cart Summary
      </Typography>
      <CustomDivider />
      <Row mt={2} mb={1}>
        <Box>
          <Typography variant="body2">Subtotal ({items?.length} items)</Typography>
        </Box>
        <Box>
          <Typography variant="body2" fontSize={'24px'} fontWeight={700}>
            <b>$ {total}</b>
          </Typography>
        </Box>
      </Row>
      <Button variant="contained" fullWidth={'true'} component={Link} to="/checkout">
        proceed to checkOut
      </Button>
    </CustomSummary>
  )
}

Summary.propTypes = {
  total: PropTypes.number,
  items: PropTypes.any
}

export default Summary
