import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://3.16.135.85/api'
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
)

export default axiosInstance
