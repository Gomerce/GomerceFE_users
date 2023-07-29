import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// eslint-disable-next-line no-unused-vars
import ProductCard from '../ProductCard'
import { carouselSettings } from './settings'
import PropTypes from 'prop-types'

const ItemsCarousel = ({ products, addItem }) => {
  const slides = products
    ?.concat(products, products, products)
    ?.map((item) => <ProductCard sx={{}} key={`cart-item-${item.id}`} {...item} handleAddToCart={addItem}/>)

  return (
        <>
            <Slider {...carouselSettings} style={{ padding: '1% 0' }}>
                {slides}
            </Slider>
        </>
  )
}

ItemsCarousel.propTypes = {
  products: PropTypes.any,
  addItem: PropTypes.func
}

export default ItemsCarousel
