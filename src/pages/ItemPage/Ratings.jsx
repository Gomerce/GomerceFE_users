import React, { useState } from 'react'
import { Box, Rating } from '@mui/material'
import PropTypes from 'prop-types'

const Ratings = ({ margin, readOnly }) => {
  const [value, setValue] = useState(2)

  return (
    <Box sx={margin && { margin }}>
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        size={'small'}
        sx={{ color: '#1F2839' }}
        readOnly={readOnly}
      />
    </Box>
  )
}

Ratings.propTypes = {
  margin: PropTypes.any,
  readOnly: PropTypes.bool
}

export default Ratings
