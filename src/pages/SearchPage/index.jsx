import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Filters from './Filters'
import { SideFilters } from './styles'
import BreadCrumbs from '../../components/BreadCrumbs'
import SearchResultsDisplay from './SearchResultsDisplay'
import Wrapper from '../../components/Wrapper/Wrapper'
import filters from '../../data/filter'
import { useTheme } from '@mui/material/styles'
import { Alert, CircularProgress, Snackbar, useMediaQuery } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsBySearch } from '../../redux/actions/product'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const dispatch = useDispatch()
  const {
    loading: productsLoading,
    error: productsError,
    products
  } = useSelector((state) => state.fetchProductsBySearchReducer)
  const [showError, setShowError] = useState(false)
  const theme = useTheme()
  const matchesLaptop1024 = useMediaQuery(theme.breakpoints.down('laptop_1024'))
  const matchesTablet = useMediaQuery(theme.breakpoints.down('tablet_840'))

  const navigation = [
    { label: 'Home', link: '/' },
    { label: 'Collection', link: '/' },
    { label: 'Item Title', link: '/' }
  ]

  useEffect(() => {
    if (query !== null) {
      dispatch(fetchProductsBySearch(query))
    }
  }, [dispatch, query])

  useEffect(() => {
    setShowError(Boolean(productsError))
  }, [productsError])

  return (
    <Wrapper>
      <BreadCrumbs navigation={navigation} max={matchesLaptop1024 ? 2 : 8} />
      <Grid container direction="row" spacing={4} justifyContent="space-between">
        {matchesTablet ? null : (
          <Grid item tablet_650={3}>
            <Box sx={SideFilters}>
              {filters.map((element, index) => {
                return <Filters {...element} key={index} />
              })}
            </Box>
          </Grid>
        )}

        <Grid item mobile_0={12} tablet_840={9}>
          {productsLoading && <CircularProgress />}
          <SearchResultsDisplay products={products}/>
        </Grid>
      </Grid>
      {showError && (
          <Snackbar open={showError} autoHideDuration={6000} onClose={() => setShowError(false)}>
            <Alert onClose={() => setShowError(false)} severity="error">
              {productsError}
            </Alert>
          </Snackbar>
      )}
    </Wrapper>
  )
}

export default SearchPage
