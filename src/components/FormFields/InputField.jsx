import React from 'react'
import { at } from 'lodash'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

function InputField (props) {
  const { errorText, ...rest } = props
  const [field, meta] = useField(props)

  function _renderHelperText () {
    const [touched, error] = at(meta, 'touched', 'error')
    if (touched && error) {
      return error
    }
  }

  return (
            <TextField
                label={rest.label}
                variant="outlined"
                type="text"
                error={meta.touched && meta.error && true}
                helperText={_renderHelperText()}
                {...field}
                {...rest}
            />
  )
}

InputField.propTypes = {
  errorText: PropTypes.any,
  name: PropTypes.string
}

export default InputField
