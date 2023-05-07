import React from 'react'
import { ActionRow } from './styles'
import Phone from '../../assets/images/phone1.jfif'
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

const CartItem = () => {
  const [quantity, setQuantity] = React.useState('')

  const handleChange = (event) => {
    setQuantity(event.target.value)
  }
  const theme = useTheme()
  const matchesMobile550 = useMediaQuery(theme.breakpoints.down('mobile_550'))

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
            <img src={Phone} alt={Phone} />
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
                fontSize={'14px'}
                fontWeight={400}
                sx={{ display: 'block', marginBottom: '0.5em' }}
              >
                xiamo redmi 10A, 6.53&quot; 3GB+64GB, 13.0MP, 5000mAh
              </Typography>
              <Typography
                variant="p"
                fontSize={'14px'}
                fontWeight={400}
                sx={{ display: 'block', marginBottom: '0.5em' }}
              >
                4g LTE, Dual sim - graphite grey
              </Typography>
              <Typography
                variant="p"
                fontSize={'10px'}
                fontWeight={400}
                sx={{ display: 'block', marginBottom: '0.5em' }}
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
                  <Button variant="text">delete</Button>
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
                <b>$ 29.21</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <CustomDivider />
    </Box>
  )
}

export default CartItem
