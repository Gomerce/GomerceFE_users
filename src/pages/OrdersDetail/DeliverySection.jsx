import Typography from '@mui/material/Typography'
import React from 'react'
import { Delivery, Frame } from './styles'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import MobileTrackingDisplay from './MobileTrackingDisplay'
import DesktopTrackingDisplay from './DesktopTrackingDisplay'
import PropTypes from 'prop-types'

const DeliverySection = ({ isMobile }) => {
  const theme = useTheme()
  const matchesTablet600Down = useMediaQuery(theme.breakpoints.down('tablet_600'))
  return (
    <Delivery>
      <Typography
        variant="body2"
        textTransform={'uppercase'}
        fontWeight={{ mobile_0: '700', laptop_1024: '400' }}
        align={'center'}
      >
        tracking order no: {'28vv178145'}
      </Typography>
      <Frame>
        <Typography variant="body2" fontSize={'14px'} fontWeight={700}>
          <b>Shipped via:</b>
          {' lorem ipsum '}
        </Typography>
        <Typography
          fontSize={'14px'}
          variant="body2"
          fontWeight={700}
          sx={{ margin: { mobile_0: '1.2em 0', laptop_1024: '0 2%' } }}
        >
          <b>Status:</b>
          {' Packaging '}
        </Typography>
        <Typography variant="body2" fontSize={'14px'} fontWeight={700}>
          <b>Expected delivery date:</b> 01/01/2023
        </Typography>
      </Frame>
      {matchesTablet600Down ? <MobileTrackingDisplay /> : <DesktopTrackingDisplay />}
    </Delivery>
  )
}

DeliverySection.propTypes = {
  isMobile: PropTypes.bool
}

export default DeliverySection
