import React from 'react'
import { FormLabel, FormControl, FormControlLabel, FormGroup, Checkbox, Box } from '@mui/material'
import { FilterCover } from './styles'
import PropTypes from 'prop-types'

const Filters = ({ heading, items }) => {
  const obj = Object.assign({}, ...items.map((elem) => ({ [elem.item]: elem.isChecked })))
  const [state, setState] = React.useState(obj)
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <Box sx={FilterCover}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">{heading}</FormLabel>
        <FormGroup>
          {Object.entries(state).map((obj) => {
            const key = obj[0]
            const value = obj[1]
            return (
              <FormControlLabel
                key={key}
                control={<Checkbox checked={value} onChange={handleChange} name={key} />}
                label={key}
              />
            )
          })}
        </FormGroup>
      </FormControl>
    </Box>
  )
}

Filters.propTypes = {
  heading: PropTypes.any,
  items: PropTypes.any
}

export default Filters
