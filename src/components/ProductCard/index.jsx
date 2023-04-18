import React from 'react'
import { CardBox, Details, Image } from './styles'
import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const ProductCard = ({ name, image, description, price }) => {
  return (
    <CardBox>
      <Image image={image} />
      <Details>
        <Typography variant="body2" fontWeight={400} textTransform="capitalize" mt={'5%'} mb={'5%'}>
          {description.substring(0, 17) + '...'}
        </Typography>
        <Typography variant="h6" fontWeight={600} fontSize="16px" mb={'3%'}>
          {`$ ${price}`}
        </Typography>
        <Button variant="outlined" fullWidth>
          Add to Cart
        </Button>
      </Details>
    </CardBox>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.string,
  price: PropTypes.number | PropTypes.string
}

export default ProductCard
