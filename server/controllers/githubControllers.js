const { get } = require('../services/http')

const getGithubRepositories = async (req, res) => {
  try {
    const response = await get('/search/repositories', {
      params: { ...req.query }
    })

    res.status(200).json({
      status: 'success',
      totalRepoCount: response.total_count,
      repos: response.items.map((item) => ({
        id: item.id,
        name: item.name,
        author: item.owner.login,
        avatarUrl: item.owner.avatar_url,
        stars: item.stargazers_count,
        watchers: item.watchers_count,
        forks: item.forks_count,
        description: item.description,
        updatedAt: item.updated_at
      }))
    })
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Something went wrong!' })
  }
}

const getGithubRepository = async (req, res) => {
  const repoUrl = `/repos/facebook/react`,
    readmeUrl = `${repoUrl}/readme`

  try {
    const response = await get(repoUrl)

    const readmeResponse = await get(readmeUrl, {
      headers: {
        accept: 'application/vnd.github.raw'
      }
    })

    res.status(200).json({
      status: 'success',
      repo: {
        ownerName: response.owner.login,
        ownerLink: response.owner.html_url,
        repoName: response.name,
        repoLink: response.html_url,
        openIssues: response.open_issues,
        defaultBranch: response.default_branch,
        readmeContent: readmeResponse
      }
    })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: 'Something went wrong!', error })
  }
}

module.exports = { getGithubRepositories, getGithubRepository }
