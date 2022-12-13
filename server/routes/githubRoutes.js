const express = require('express')
const {
  getGithubRepositories,
  getGithubRepository
} = require('../controllers/githubControllers')

const router = express.Router({ mergeParams: true })

router
  .get('/', getGithubRepositories)
  .get('/:ownerName/:repoName', getGithubRepository)

module.exports = router
