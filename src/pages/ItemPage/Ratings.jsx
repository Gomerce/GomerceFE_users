import React, { useState } from 'react'
import { Box, Rating } from '@mui/material'
import PropTypes from 'prop-types'

const Ratings = ({ margin, readOnly, ratings }) => {
  const [value, setValue] = useState(ratings)

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
  readOnly: PropTypes.bool,
  ratings: PropTypes.number | undefined
}

export default Ratings
