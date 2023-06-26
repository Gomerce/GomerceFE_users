import React from 'react'
import { CardBox, Details, Image } from './styles'
import { Button, Typography } from '@mui/material'
import PropTypes from 'prop-types'

// eslint-disable-next-line camelcase
const ProductCard = ({ id, image, product_category, price, rating, title, thumbnail, quantity, short_desc }) => {
  return (
    <CardBox>
      <Image image={image || 'https://placehold.co/600x400'} />
      <Details>
        <Typography variant="body2" fontWeight={400} textTransform="capitalize" mt={'5%'} mb={'5%'}>
          {/* eslint-disable-next-line camelcase */}
          {short_desc?.substring(0, 17) + '...'}
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
  id: PropTypes.number,
  image: PropTypes.number | null,
  price: PropTypes.string,
  product_category: PropTypes.number,
  quantity: PropTypes.number,
  rating: PropTypes.number,
  sellers_id: PropTypes.number,
  short_desc: PropTypes.string,
  thumbnail: PropTypes.string | null,
  title: PropTypes.string
}

export default ProductCard
