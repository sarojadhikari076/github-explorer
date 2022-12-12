import { Container, Heading, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const baseUrl = 'https://api.github.com/repos'

export default function RepoDetail() {
  const { username, repoName } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [repoInfo, setRepoInfo] = useState({})
  const repoUrl = `${baseUrl}/${username}/${repoName}`

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'https://api.github.com/repos/greyli/helloflask'
        )
        const data = await response.json()

        setRepoInfo({
          ownerName: data.owner.login,
          ownerLink: data.owner.html_url,
          repoName: data.name,
          repoLink: data.html_url,
          openIssues: data.open_issues,
          defaultBranch: data.default_branch
        })
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [repoUrl])

  if (isLoading) return null
  return (
    <Container maxW="7xl" py={4} minH="85vh">
      <Link href={repoInfo.repoLink}>
        <Heading as="h2" size="md">
          Repository name: {repoInfo.repoName}
        </Heading>
      </Link>
      <Text>
        <Link href={repoInfo.ownerLink}>Owner: {repoInfo.ownerName}</Link>
      </Text>
      <Text>Number of open issues: {repoInfo.openIssues}</Text>
      <Text>Default branch: {repoInfo.defaultBranch}</Text>
      <Text>README.md contents:</Text>
      <pre>{repoInfo.readme}</pre>
    </Container>
  )
}
