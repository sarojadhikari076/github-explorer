import React from 'react'
import {
  Card,
  Icon,
  Flex,
  Text,
  Heading,
  Stack,
  Avatar,
  Box
} from '@chakra-ui/react'
import { FaStar, FaEye, FaCodeBranch, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function GithubRepoCard({
  name,
  author,
  avatarUrl,
  stars,
  watchers,
  forks,
  description,
  updatedAt
}) {
  return (
    <Card
      p={4}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      gap={5}
      bg="gray.50"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        gap={2}
      >
        <Stack isInline align="center" spacing={2}>
          <Avatar name={author} src={avatarUrl} />
          <Link to={`/${name}`}>
            <Heading
              as="span"
              size="md"
              noOfLines={1}
              maxW={60}
              color="teal.600"
              textDecor="underline"
            >
              {name}
            </Heading>
          </Link>
        </Stack>
        <Flex gap={1} align="center">
          <Icon as={FaUser} size="12px" color="crimson" />
          <Heading as="h3" size="sm">
            {author}
          </Heading>
        </Flex>
        <Flex align="center">
          <Icon as={FaStar} size="12px" color="yellow.400" />
          <Text ml={1} fontSize="sm">
            {stars}
          </Text>
          <Icon as={FaEye} size="12px" ml={4} color="blue.500" />
          <Text ml={1} fontSize="sm">
            {watchers}
          </Text>
          <Icon as={FaCodeBranch} size="12px" ml={4} color="green.500" />
          <Text ml={1} fontSize="sm">
            {forks}
          </Text>
        </Flex>
        <Text fontSize="sm">{description}</Text>
      </Box>
      <Text fontSize="sm" fontWeight="bold">
        Last updated at: {updatedAt}
      </Text>
    </Card>
  )
}
