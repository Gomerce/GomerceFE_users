import React from 'react'
import { Breadcrumbs, Button, Link, Stack } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import PropTypes from 'prop-types'

function handleClick (event) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const BreadCrumbs = (props) => {
  const { navigation, max } = props
  const breadcrumbs = [
    navigation.length > 0 &&
      navigation.map((item, index) => {
        const { label, link } = item
        return index === navigation.length - 1 ? (
          <Button variant="text">{label}</Button>
        ) : (
          <Button variant="outlined" size="medium" key={index}>
            <Link underline="hover" key="1" href={link} onClick={handleClick}>
              {label}
            </Link>
          </Button>
        )
      })
  ]

  return (
    <Stack spacing={2} mt={3} mb={3}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} maxItems={max}>
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}

BreadCrumbs.propTypes = {
  navigation: PropTypes.any,
  max: PropTypes.number
}
export default BreadCrumbs
