import SideNav from './SideNav'
import AsideMain from './AsideMain'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/Wrapper/Wrapper'
import { Alert, CircularProgress, Grid, Snackbar, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/actions/product'

const LandingPage = () => {
  const theme = useTheme()
  const matchesLaptop = useMediaQuery(theme.breakpoints.down('laptop_1152'))
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()
  const {
    loading: productsLoading,
    error: productsError,
    products
  } = useSelector((state) => state.fetchAllProductsReducer)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  useEffect(() => {
    setShowError(Boolean(productsError))
  }, [productsError])

  return (
    <Wrapper>
      <Grid container direction={{ laptop_1024: 'row' }} spacing={1}>
        {!matchesLaptop && (
          <Grid item tablet_650={3}>
            <SideNav />
          </Grid>
        )}
        {showError && (
          <Snackbar open={showError} autoHideDuration={6000} onClose={() => setShowError(false)}>
            <Alert onClose={() => setShowError(false)} severity="error">
              {productsError}
            </Alert>
          </Snackbar>
        )}
        <Grid item mobile_0={matchesLaptop ? 12 : 9}>
          {productsLoading && <CircularProgress />}
          <AsideMain products={products} />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default LandingPage
