import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import Wrapper from '../../components/Wrapper/Wrapper'
import DetailsMain from './DetailsMain'
import SpecificationsMain from './SpecificationsMain'
import ReviewsMain from './ReviewsMain'
import { Alert, Box, CircularProgress, useMediaQuery } from '@mui/material'
import RecommendedItems from '../../components/RecommendedItems'
import { useTheme } from '@mui/material/styles'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '../../redux/actions/product'

const ItemPage = () => {
  const theme = useTheme()
  const matchesLaptop1024 = useMediaQuery(theme.breakpoints.down('laptop_1024'))
  const [showError, setShowError] = useState(false)
  const [navigation, setNavigation] = useState([])
  const { productId } = useParams()
  const dispatch = useDispatch()
  const {
    loading: productLoading,
    error: productError,
    product
  } = useSelector((state) => state.fetchProductReducer)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch])

  useEffect(() => {
    setShowError(Boolean(productError))
  }, [productError])

  useEffect(() => {
    const links = [{ label: 'Home', link: '/' }]
    links.push({ label: 'Category', link: `/category/${product?.category}` }, { label: product?.title, link: '/' })
    setNavigation(links)
  }, [product])

  return (
        <Wrapper>
            <Box
                sx={{
                  padding: '0 2%'
                }}
            >
                {productLoading && <CircularProgress/>}
                {showError && <Alert severity="error">{productError}</Alert>}
                <BreadCrumbs navigation={navigation} max={matchesLaptop1024 ? 2 : 8}/>
                <DetailsMain product={product} handleAddToCart={addToCart}/>
                <SpecificationsMain/>
                <ReviewsMain/>
                <RecommendedItems/>
            </Box>
        </Wrapper>
  )
}

export default ItemPage
