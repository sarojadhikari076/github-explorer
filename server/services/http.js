const { axiosInstance } = require('../lib/axios')

const get = (url, config) =>
  axiosInstance.get(url, config).then((response) => response.data)

module.exports = { get }
