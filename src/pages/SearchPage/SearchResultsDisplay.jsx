import React from 'react'
import { ResultContainer, Title, Label } from './styles'
import CustomSelect from '../../components/CustomSelect'
import Grid from '@mui/material/Grid'
import ProductCard from '../../components/ProductCard'
import AppPagination from '../../components/Pagination'
import PropTypes from 'prop-types'

const options = ['color', 'size', 'brand']

const SearchResultsDisplay = ({ products }) => {
  // const page = query.get("page") || 1;

  console.log(products)
  return (
    <ResultContainer>
      <Title>
        <Label>Displaying {'8'} out 100 results</Label>
        <CustomSelect
          background={'true'}
          border={'false'}
          width={'111px'}
          label="sort by"
          items={options}
        />
      </Title>
      <Grid container spacing={5} mt={2} mb={5} justifyContent="space-evenly" alignItems={'center'}>
        {products?.map((item, index) => (
          <Grid item key={index} sx={{ alignItems: 'center' }}>
            <ProductCard
              key={index}
              {...item}
            />
          </Grid>
        ))}
      </Grid>
      <AppPagination count={10} page={1} mt={3} />
    </ResultContainer>
  )
}

SearchResultsDisplay.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
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
  }))
}

export default SearchResultsDisplay
