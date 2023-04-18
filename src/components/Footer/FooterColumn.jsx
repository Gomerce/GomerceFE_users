import React from 'react'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { ColumnWrapper, CustomListItems } from './styles'
import PropTypes from 'prop-types'

const FooterColumn = ({ title, links }) => {
  const navigate = useNavigate()
  return (
    <ColumnWrapper>
      <Typography
        variant="h6"
        color={'#F4F5EF'}
        fontWeight={700}
        fontSize={18}
        sx={{ marginTop: { mobile_0: '3%', tablet_840: '0' } }}
      >
        {title}
      </Typography>
      {links.map((link, index) => {
        const { label, url } = link
        return (
          <CustomListItems onClick={() => navigate(url)} key={index}>
            {label}
          </CustomListItems>
        )
      })}
    </ColumnWrapper>
  )
}

FooterColumn.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string
    })
  )
}

export default FooterColumn
