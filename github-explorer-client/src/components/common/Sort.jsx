import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSortAscending } from 'react-icons/ai'

function Sort() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<AiOutlineSortAscending />}
        color="teal.600"
      >
        Sort By
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Sort
