const axios = require('axios')

const baseURL = 'https://api.github.com'

const axiosInstance = axios.create({
  baseURL
})

module.exports = { axiosInstance }
