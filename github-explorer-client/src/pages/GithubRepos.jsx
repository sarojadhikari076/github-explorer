import React, { useEffect, useState } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import GithubRepoCard from '../components/common/GithubRepoCard'
import Search from '../components/common/Search'
import Pagination from '../components/common/Pagination'
import Loading from '../components/common/Loading'
import Sort from '../components/common/Sort'
import { get } from '../services/http'
import { usePagination } from '../hooks/usePagination'

const PER_PAGE = 12

export default function GithubRepos() {
  const [repos, setRepos] = useState([]),
    [totalRepoPages, setTotalRepoPages] = useState('--'),
    { currentPage, handleNextPage, handlePrevPage } = usePagination(1),
    [isLoading, setIsLoading] = useState(false),
    [searchText, setSearchText] = useState('node')

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const { repos, totalRepoCount } = await get('/github-repositories', {
          params: {
            q: searchText,
            per_page: PER_PAGE,
            page: currentPage
          }
        })
        setRepos(repos)
        setTotalRepoPages(Math.floor(totalRepoCount / PER_PAGE))
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [currentPage, searchText])

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
        currentPage={currentPage}
        handleNext={handleNextPage}
        handlePrev={handlePrevPage}
        isLoading={isLoading}
        totalRepoPages={totalRepoPages}
      />
    </>
  )
}
