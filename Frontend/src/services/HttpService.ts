import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    return Promise.reject(error)
  }
)

export default instance
