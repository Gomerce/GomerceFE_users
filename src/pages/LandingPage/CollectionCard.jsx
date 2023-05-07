import React from 'react'
import { Card, Image } from './styles'
import { Button, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
const CollectionCard = ({ title, image, link }) => {
  const theme = useTheme()
  const matchesMobile450 = useMediaQuery(theme.breakpoints.up('mobile_450'))

  return (
    <Card>
      <Typography variant="h6" fontSize={matchesMobile450 ? '18.75' : '16px'}>
        {title}
      </Typography>
      <Image image={image} alt={title} />
      <Button
        variant="outlined"
        size={matchesMobile450 ? 'small' : 'medium'}
        fullWidth={!matchesMobile450}
        sx={{ margin: matchesMobile450 ? '0' : '4% 0 2%' }}
      >
        See More
      </Button>
    </Card>
  )
}

CollectionCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  link: PropTypes.string
}

export default CollectionCard
