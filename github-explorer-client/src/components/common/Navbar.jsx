import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box
      shadow="md"
      py={6}
      px={12}
      position="sticky"
      top={0}
      bg="gray.100"
      zIndex={50}
    >
      <Heading size="md" color="teal.500">
        🚀 Github Explorer
      </Heading>
    </Box>
  )
}
