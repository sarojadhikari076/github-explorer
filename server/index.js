const express = require('express')
const githubRoutes = require('./routes/githubRoutes')

const PORT = process.env.PORT || 4000,
  app = express()

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from github-explorer server!!!' })
})

app.use('/api/github-repositories', githubRoutes)

app.use('*', (_, res) => {
  res.status(404).json({ status: 'error', message: 'Route not found!' })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
