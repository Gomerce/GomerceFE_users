import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// eslint-disable-next-line no-unused-vars
import items from '../../data/itemsCarousel'
import ProductCard from '../ProductCard'
import { carouselSettings } from './settings'
import PropTypes from 'prop-types'

const ItemsCarousel = ({ products }) => {
  const slides = products?.concat(products, products, products)?.map((item, index) =>
        <ProductCard
            sx={{}}
            key={index}
            {...item}
        />
  )

  return (
        <>
            <Slider {...carouselSettings} style={{ padding: '1% 0' }}>
                {slides}
            </Slider>
        </>
  )
}

ItemsCarousel.propTypes = {
  products: PropTypes.any
}

export default ItemsCarousel
