import {
  Card,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiGitBranch } from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import Loading from '../components/common/Loading'
import remarkGfm from 'remark-gfm'
import { get } from '../services/http'

export default function RepoDetail() {
  const { ownerName, repoName } = useParams(),
    [isLoading, setIsLoading] = useState(false),
    [repoInfo, setRepoInfo] = useState({}),
    repoUrl = `/github-repositories/${ownerName}/${repoName}`

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const { repo } = await get(repoUrl)

        setRepoInfo(repo)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [repoUrl])

  if (isLoading) return <Loading isLoading={isLoading} />
  return (
    <Container
      maxW="7xl"
      py={4}
      minH="85vh"
      display="flex"
      flexDir="column"
      gap={2}
    >
      <Heading as="h2" size="md" color="teal.600">
        <Link href={repoInfo.ownerLink}>{repoInfo.ownerName}</Link>
        &nbsp;/&nbsp;
        <Link href={repoInfo.repoLink}>{repoInfo.repoName}</Link>
      </Heading>
      <Flex gap={2} align="center">
        <Icon as={BiGitBranch} size="12px" />
        <Text fontSize="lg">{repoInfo.defaultBranch}</Text>
        <Icon as={VscIssues} size="12px" ml={5} />
        <Text fontSize="lg">{repoInfo.openIssues}</Text>
      </Flex>
      <Heading as="h6" size="sm" color="teal.400" mt={5}>
        README.md contents:
      </Heading>
      <Card px={10} py={6} shadow="lg" border="1px solid #eee">
        <ReactMarkdown
          children={repoInfo.readmeContent}
          remarkPlugins={[remarkGfm]}
        />
      </Card>
    </Container>
  )
}
