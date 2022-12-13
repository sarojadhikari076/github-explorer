import React, { useEffect, useState } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import GithubRepoCard from '../components/common/GithubRepoCard'
import Search from '../components/common/Search'
import Pagination from '../components/common/Pagination'
import Loading from '../components/common/Loading'
import Sort from '../components/common/Sort'

const PER_PAGE = 12

export default function GithubRepos() {
  const [repos, setRepos] = useState([])
  const [totalRepos, setTotalRepos] = useState('--')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('node')

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://api.github.com/search/repositories?q=${searchText}&per_page=${PER_PAGE}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        let newRepos = []
        for (const repo of data.items) {
          const id = repo.id
          const name = repo.name
          const author = repo.owner.login
          const avatarUrl = repo.owner.avatar_url
          const stars = repo.stargazers_count
          const watchers = repo.watchers_count
          const forks = repo.forks_count
          const description = repo.description
          const updatedAt = repo.updated_at
          newRepos.push({
            id,
            name,
            author,
            avatarUrl,
            stars,
            watchers,
            forks,
            description,
            updatedAt
          })
        }
        setRepos(newRepos)
        setTotalRepos(Math.floor(data.total_count / PER_PAGE))
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [page, searchText])

  return (
    <>
      <Container maxW="7xl" py={4} minH="85vh">
        <Flex gap={4}>
          <Search value={searchText} handleChange={setSearchText} />
          <Sort />
        </Flex>
        {isLoading ? (
          <Loading />
        ) : (
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
            gap={4}
            my={10}
          >
            {repos.map((repo) => (
              <GithubRepoCard key={repo.id} {...repo} />
            ))}
          </Box>
        )}
      </Container>
      <Pagination
        page={page}
        setPage={setPage}
        isLoading={isLoading}
        totalRepos={totalRepos}
      />
    </>
  )
}
