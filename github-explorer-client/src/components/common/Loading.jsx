import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

function Loading() {
  return (
    <Flex align="center" justify="center" minH="70vh">
      <Spinner size="xl" thickness="5px" color="teal.500" />
    </Flex>
  )
}

export default Loading
