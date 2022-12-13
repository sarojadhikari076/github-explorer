import { Flex, Heading, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Pagination({
  handleNext,
  handlePrev,
  isLoading,
  currentPage,
  totalRepoPages
}) {
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
        disabled={currentPage === 1 || isLoading}
        onClick={handlePrev}
        colorScheme="teal"
        size="xs"
      />
      <Heading size="xs">
        Page {currentPage} of {totalRepoPages}
      </Heading>
      <IconButton
        aria-label="Next"
        icon={<FaArrowRight />}
        isRound
        onClick={handleNext}
        disabled={isLoading || currentPage === totalRepoPages}
        colorScheme="teal"
        size="xs"
      />
    </Flex>
  )
}
