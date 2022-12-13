import { axiosInstance } from '../lib/axios'

export const get = (url, config) =>
  axiosInstance.get(url, config).then((response) => response.data)
