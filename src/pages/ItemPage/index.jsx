import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import Wrapper from '../../components/Wrapper/Wrapper'
import DetailsMain from './DetailsMain'
import SpecificationsMain from './SpecificationsMain'
import ReviewsMain from './ReviewsMain'
import { Box, useMediaQuery } from '@mui/material'
import RecommendedItems from '../../components/RecommendedItems'
import { useTheme } from '@mui/material/styles'

const ItemPage = () => {
  const navigation = [
    { label: 'Home', link: '/' },
    { label: 'Collection', link: '/' },
    { label: 'Item Title', link: '/' }
  ]
  const theme = useTheme()
  const matchesLaptop1024 = useMediaQuery(theme.breakpoints.down('laptop_1024'))

  return (
    <Wrapper>
      <Box
        sx={{
          padding: '0 2%'
        }}
      >
        <BreadCrumbs navigation={navigation} max={matchesLaptop1024 ? 2 : 8} />
        <DetailsMain />
        <SpecificationsMain />
        <ReviewsMain />
        <RecommendedItems />
      </Box>
    </Wrapper>
  )
}

export default ItemPage
