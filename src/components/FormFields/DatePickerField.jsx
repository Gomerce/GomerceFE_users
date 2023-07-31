import React, { useEffect, useState } from 'react'
import { useField } from 'formik'
import { Grid } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

export default function DatePickerField (props) {
  const [field, meta, helper] = useField(props)
  const { touched, error } = meta
  const { setValue } = helper
  const isError = touched && error && true
  const { value } = field
  const [selectedDate, setSelectedDate] = useState(null)

  useEffect(() => {
    if (value) {
      const date = new Date(value)
      setSelectedDate(date)
    }
  }, [value])

  function _onChange (date) {
    if (date) {
      setSelectedDate(date)
      try {
        const ISODateString = date.toISOString()
        setValue(ISODateString)
      } catch (error) {
        setValue(date)
      }
    } else {
      setValue(date)
    }
  }

  return (
        <Grid container>
            <DatePicker
                {...field}
                {...props}
                value={selectedDate}
                onChange={_onChange}
                error={isError}
                invalidDateMessage={isError && error}
                helperText={isError && error}
            />
        </Grid>
  )
}
