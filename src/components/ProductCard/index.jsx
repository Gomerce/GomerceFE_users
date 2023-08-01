import React from 'react'
import { CardBox, Details, Image } from './styles'
import { Button, Paper, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  const { id, image, category, price, thumbnail, short_desc, title, handleAddToCart } = props

  return (
        <CardBox>
            <Paper component={Link} to={`/product/${id}`}>
                <Image image={image || 'https://placehold.co/600x400'}/>
            </Paper>
            <Details>
                <Typography variant="body2" fontWeight={400} textTransform="capitalize" mt={'5%'} mb={'5%'}>
                    {/* eslint-disable-next-line camelcase */}
                    {short_desc?.substring(0, 17) + '...'}
                </Typography>
                <Typography variant="h6" fontWeight={600} fontSize="16px" mb={'3%'}>
                    {`$ ${price}`}
                </Typography>
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleAddToCart({ id, image, price, category, title, short_desc, thumbnail })}>
                    Add to Cart
                </Button>
            </Details>
        </CardBox>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.any,
  price: PropTypes.string,
  category: PropTypes.number,
  quantity: PropTypes.number,
  rating: PropTypes.number,
  sellers_id: PropTypes.number,
  short_desc: PropTypes.string,
  thumbnail: PropTypes.any,
  title: PropTypes.string,
  handleAddToCart: PropTypes.func
}

export default ProductCard
