import { Flex, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Pagination({ setPage, isLoading, page, totalRepos }) {
  return (
    <Flex
      gap={4}
      justify="center"
      align="center"
      position="sticky"
      bottom={0}
      bg="gray.100"
      borderTop="1px solid #DDD"
      p={2}
    >
      <IconButton
        aria-label="Previous"
        icon={<FaArrowLeft />}
        isRound
        disabled={page === 1 || isLoading}
        onClick={() => setPage((prev) => prev - 1)}
        colorScheme="teal"
        size="xs"
      />
      <Heading size="xs">
        Page {page} of {totalRepos}
      </Heading>
      <IconButton
        aria-label="Next"
        icon={<FaArrowRight />}
        isRound
        onClick={() => setPage((prev) => prev + 1)}
        disabled={isLoading}
        colorScheme="teal"
        size="xs"
      />
    </Flex>
  )
}
