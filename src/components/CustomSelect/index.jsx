import React, { useState } from 'react'
import { StyledSelect } from './CustomSelect'
import { Box, FormControl, MenuItem } from '@mui/material'
import PropTypes from 'prop-types'

const CustomSelect = (props) => {
  const { background, border, width, label, margin, items } = props
  const [sort, setSort] = useState('')

  const handleChange = (event) => {
    setSort(event.target.getAttribute('data-value'))
    // console.log(event.target.getAttribute("data-value"));
  }

  return (
    <Box sx={{ width, margin: margin || '' }}>
      <FormControl fullWidth>
        <StyledSelect
          select
          label={label}
          fullWidth
          margin="dense"
          size="small"
          background={background}
          border={border}
          value={sort}
        >
          {items.map((item, index) => {
            return (
              <MenuItem value={item} key={index} onClick={handleChange}>
                {item}
              </MenuItem>
            )
          })}
        </StyledSelect>
      </FormControl>
    </Box>
  )
}

CustomSelect.propTypes = {
  background: PropTypes.any,
  border: PropTypes.any,
  width: PropTypes.number,
  label: PropTypes.string,
  margin: PropTypes.any,
  items: PropTypes.any
}

export default CustomSelect
