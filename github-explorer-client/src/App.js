import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import GithubRepos from './pages/GithubRepos'
import RepoDetail from './pages/RepoDetail'

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<GithubRepos />} />
          <Route path="/repos/:ownerName/:repoName" element={<RepoDetail />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
