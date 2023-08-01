import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CustomDivider from '../CustomDivider'
import { ListItem } from './styles'
import PropTypes from 'prop-types'

const OrderItemDetails = (props) => {
  const { item } = props

  return (
        <>
            <Grid container direction="row" justifyContent={'space-between'}>
                <Grid item mobile_0={2}>
                    <Box>
                        <img src={item?.image || 'https://placehold.co/400'} alt={item?.title} height={48} width={48}/>
                    </Box>
                </Grid>
                <Grid item mobile_0={10} mobile_375={8} tablet_600={10}>
                    <ListItem>
                        <Typography variant="p" fontSize={'14px'} fontWeight={400}>
                            {item?.title}
                        </Typography>
                        <Typography variant="p" fontSize={'14px'} fontWeight={400}>
                            {item?.short_desc}
                        </Typography>
                        <Typography variant="p" fontSize={'14px'} fontWeight={400}>
                            ${item?.price}
                        </Typography>
                        <Typography variant="p" fontSize={'14px'} fontWeight={400}>
                            Qty - 1
                        </Typography>
                    </ListItem>
                </Grid>
            </Grid>
            <CustomDivider/>
        </>
  )
}

OrderItemDetails.propTypes = {
  item: {
    id: PropTypes.number,
    image: PropTypes.any,
    price: PropTypes.string,
    short_desc: PropTypes.string,
    thumbnail: PropTypes.any,
    title: PropTypes.string
  }
}

export default OrderItemDetails
