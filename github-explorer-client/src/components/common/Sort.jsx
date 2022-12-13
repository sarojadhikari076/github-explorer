import {
  Box,
  Button,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuList
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'

function Sort({ setSortParams }) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<AiOutlineSortAscending />}
        color="teal.600"
      >
        Sort By
      </MenuButton>
      <MenuList p={4} minW="sm">
        <Heading size="xs" color="teal.500" mb={4}>
          Sort results
        </Heading>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
          <Button
            rightIcon={<AiOutlineSortAscending />}
            onClick={() => setSortParams({ sort: 'stars', order: 'asc' })}
          >
            Stars
          </Button>
          <Button
            rightIcon={<AiOutlineSortDescending />}
            onClick={() => setSortParams({ sort: 'stars', order: 'desc' })}
          >
            Stars
          </Button>

          <Button
            rightIcon={<AiOutlineSortAscending />}
            onClick={() => setSortParams({ sort: 'updated', order: 'asc' })}
          >
            Updated date
          </Button>
          <Button
            rightIcon={<AiOutlineSortDescending />}
            onClick={() => setSortParams({ sort: 'updated', order: 'desc' })}
          >
            Updated date
          </Button>

          <Button
            rightIcon={<AiOutlineSortAscending />}
            onClick={() => setSortParams({ sort: 'forks', order: 'asc' })}
          >
            Forks
          </Button>
          <Button
            rightIcon={<AiOutlineSortDescending />}
            onClick={() => setSortParams({ sort: 'stars', order: 'desc' })}
          >
            Forks
          </Button>
        </Box>
      </MenuList>
    </Menu>
  )
}

export default Sort
