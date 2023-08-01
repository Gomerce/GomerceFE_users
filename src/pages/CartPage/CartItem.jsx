import React from 'react'
import { ActionRow } from './styles'
import CustomDivider from '../../components/CustomDivider'
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import PropTypes from 'prop-types'

const CartItem = (props) => {
  const { item, handleDeleteItem } = props
  const [quantity, setQuantity] = React.useState('1')
  const theme = useTheme()
  const matchesMobile550 = useMediaQuery(theme.breakpoints.down('mobile_550'))

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <Box>
      <Grid
        container
        direction={{ mobile_0: 'column', mobile_320: 'row' }}
        justifyContent={'space-between'}
        sx={{ padding: '2%' }}
      >
        <Grid item mobile_0={3}>
          <Box>
            <img src={item?.image || 'https://placehold.co/600x400'} alt={item?.title} width="100%"/>
          </Box>
        </Grid>
        <Grid
          item
          mobile_0={7}
          mobile_375={8}
          container
          direction="row"
          justifyContent={'space-between'}
        >
          <Grid item mobile_0={12}>
            <Box>
              <Typography
                variant="p"
                fontSize={'18px'}
                fontWeight={400}
                sx={{ display: 'block', marginBottom: '0.5em' }}
              >
                {item?.title}
              </Typography>
              <Typography
                variant="p"
                fontSize={'16px'}
                fontWeight={400}
                sx={{ display: 'block', marginBottom: '1em' }}
              >
                {item?.short_desc}
              </Typography>
              <Typography
                variant="p"
                fontSize={'14px'}
                fontWeight={400}
                sx={{ display: 'block', marginBottom: '0.75em' }}
              >
                In stock
              </Typography>
              <ActionRow>
                <FormControl
                  sx={{
                    width: '86px',
                    marginRight: { mobile_0: '0%', tablet_600: '2%' }
                  }}
                  size="small"
                >
                  <InputLabel>Qty:</InputLabel>
                  <Select
                    size="small"
                    value={quantity}
                    label="Qty:"
                    defaultValue={1}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
                <Divider orientation="vertical" variant="middle" flexItem />
                {matchesMobile550 ? (
                  <DeleteOutlineOutlinedIcon />
                ) : (
                  <Button variant="text" onClick={() => handleDeleteItem(item)}>delete</Button>
                )}
                <Divider orientation="vertical" variant="middle" flexItem />
                {matchesMobile550 ? (
                  <BookmarkBorderOutlinedIcon />
                ) : (
                  <Button variant="text">save for later</Button>
                )}
              </ActionRow>
            </Box>
          </Grid>
          <Grid item mobile_0={12}>
            <Box>
              <Typography
                variant="p"
                fontSize={{
                  mobile_0: '16px',
                  tablet_600: '20px',
                  laptop_1024: '24px'
                }}
                fontWeight={{
                  mobile_0: '600',
                  laptop_1024: '700'
                }}
              >
                <b>$ {Number(item?.price) * Number(quantity)}</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
    </Box>
  )
}

CartItem.propTypes = {
  item: {
    id: PropTypes.number,
    image: PropTypes.any,
    price: PropTypes.string,
    short_desc: PropTypes.string,
    thumbnail: PropTypes.any,
    title: PropTypes.string
  },
  handleDeleteItem: PropTypes.func
}

export default CartItem
