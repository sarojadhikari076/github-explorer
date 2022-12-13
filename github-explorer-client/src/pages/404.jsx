import { Button, Center, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { TbError404 } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Center minH="90vh" flexDir="column" gap={2}>
      <Icon as={TbError404} width="10rem" height="10rem" color="teal.400" />
      <Heading color="teal.500">This Page Isn't Available</Heading>
      <Text maxW="sm" textAlign="center" color="gray.600" mb={5}>
        The link may be broken, or the page may have been removed. Check to see
        if the link you're trying to open is correct.
      </Text>
      <Button size="lg" colorScheme="teal">
        <Link to="/">Go to home</Link>
      </Button>
    </Center>
  )
}

export default NotFound
