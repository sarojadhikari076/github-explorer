import {
  Card,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text
} from '@chakra-ui/react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiGitBranch } from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import Loading from '../components/common/Loading'
import remarkGfm from 'remark-gfm'

const baseUrl = 'https://api.github.com/repos'

export default function RepoDetail() {
  const { ownerName, repoName } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [repoInfo, setRepoInfo] = useState({})
  const repoUrl = `${baseUrl}/${ownerName}/${repoName}`
  const readmeUrl = `${baseUrl}/${ownerName}/${repoName}/readme`

  console.log({ ownerName, repoName })

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const data = await axios(repoUrl)
        const readmeResponse = await axios(readmeUrl, {
          headers: {
            accept: 'application/vnd.github.raw'
          }
        })

        setRepoInfo({
          ownerName: data.data.owner.login,
          ownerLink: data.data.owner.html_url,
          repoName: data.data.name,
          repoLink: data.data.html_url,
          openIssues: data.data.open_issues,
          defaultBranch: data.data.default_branch,
          readmeContent: readmeResponse.data
        })
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [readmeUrl, repoUrl])

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
