import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Arrow } from './styles'
import PropTypes from 'prop-types'

const PrevArrow = (props) => {
  const { onClick } = props

  return (
    <Arrow sx={{ left: '1.5px' }} onClick={onClick}>
      <ArrowBackIosNewIcon />
    </Arrow>
  )
}
const NextArrow = (props) => {
  const { onClick } = props
  return (
    <Arrow sx={{ right: '1.5px' }} onClick={onClick}>
      <ArrowForwardIosIcon />
    </Arrow>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

PrevArrow.propTypes = {
  onClick: PropTypes.func
}

NextArrow.propTypes = {
  onClick: PropTypes.func
}

export default settings
