import React from 'react'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ItemImage from './ItemImage'
import Ratings from './Ratings'
import CustomDivider from '../../components/CustomDivider'
import { Details, DetailsWrap, IconsWrapper, ItemDetails, ShareSection } from './styles'
import PropTypes from 'prop-types'

const DetailsMain = (props) => {
  const { product } = props

  return (
        <Details>
            <Grid
                container
                direction={{ mobile_0: 'column', laptop_1024: 'row' }}
                mt={2}
                mb={3}
                justifyContent="space-between"
            >
                <Grid item mobile_0={12} laptop_1024={4}>
                    <ItemImage image={product?.image} thumbnail={product?.thumbnail}/>
                </Grid>
                <Grid item mobile_0={12} laptop_1024={8}>
                    <ItemDetails>
                        <Box
                            sx={{
                              width: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between'
                            }}
                        >
                            <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  // alignItems: "center",
                                  justifyContent: 'space-between'
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    display={'flex'}
                                    flexDirection={{ mobile_0: 'column', mobile_550: 'row' }}
                                >
                                    {product?.title}
                                </Typography>
                                <IconButton
                                    size="small"
                                    disableRipple
                                    sx={{ marginRight: { mobile_0: '5px', mobile_550: '0' } }}
                                >
                                    <FavoriteIcon fontSize="small"/>
                                </IconButton>
                            </Box>
                            <Typography variant="caption" sx={{ margin: '2% 0' }}>
                                {product?.short_desc}
                            </Typography>
                            <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  width: '100%'
                                }}
                            >
                                <Ratings readOnly={true} ratings={product?.rating || 0}/> &nbsp;&nbsp;
                                <Typography variant="caption" noWrap>
                                    from {'27'} verified viewers
                                </Typography>
                            </Box>
                            <CustomDivider/>
                        </Box>
                        <DetailsWrap>
                            <Typography variant="body2" sx={{ fontSize: '24px', fontWeight: '600' }}>
                                $ {product?.price}
                            </Typography>
                            <Typography variant="caption" sx={{ margin: '2% 0', fontSize: '12px' }}>
                                In Stock - {product?.quantity}
                            </Typography>
                            <Typography variant="caption">
                                + shipping from {'---'} to {'---'}
                            </Typography>
                            <Box mt={2} mb={1}>
                                <Button variant="contained" fullWidth={false} startIcon={<AddShoppingCartIcon/>}>
                                    Add to cart
                                </Button>
                            </Box>
                            <CustomDivider/>
                        </DetailsWrap>
                        <ShareSection>
                            <Typography variant="body2">Share this product</Typography>
                            <IconsWrapper>
                                <IconButton>
                                    <FacebookIcon/>
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon/>
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon/>
                                </IconButton>
                            </IconsWrapper>
                        </ShareSection>
                    </ItemDetails>
                </Grid>
            </Grid>
        </Details>
  )
}

DetailsMain.propTypes = {
  product: {
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
}

export default DetailsMain
