import { Input } from '@chakra-ui/react'
import React from 'react'

function Search({ value, handleChange }) {
  return (
    <Input
      type="search"
      placeholder="Search github repositories..."
      value={value}
      onChange={({ target: { value } }) => handleChange(value)}
    />
  )
}

export default Search
