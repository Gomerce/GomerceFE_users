import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Search, SearchIconWrapper, StyledInputBase, customSearchIcon } from './styles'

const SearchInput = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const [searchTerm, setSearchTerm] = useState('')

  /**
   * on enter pressed
   * @param event
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate({ pathname: '/search', search: `?q=${searchTerm}` })
    }
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={customSearchIcon} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="search"
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={handleKeyDown}
        onChange={(event) => setSearchTerm(event.currentTarget.value)}
        defaultValue={query ? String(query) : searchTerm}
      />
    </Search>
  )
}

export default SearchInput
