import React from 'react'
import ItemsCarousel from '../../components/ItemsCarousel'
import Collections from './Collections'
import BigSlider from '../../components/BigSlider'
import { Typography } from '@mui/material'
import { BestSellers } from './styles'
import PropTypes from 'prop-types'

const AsideMain = ({ products, addItem }) => {
  return (
        <>
            <BigSlider/>
            <BestSellers>
                <Typography variant="h6" fontSize={'18.75px'} fontWeight={'600'} color={'#8E8E8E'}>
                    Best sellers
                </Typography>
                <ItemsCarousel products={products} addItem={addItem}/>
            </BestSellers>
            <Collections/>
        </>
  )
}

AsideMain.propTypes = {
  products: PropTypes.any,
  addItem: PropTypes.func
}

export default AsideMain
