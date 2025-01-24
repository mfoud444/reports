import axios, { type AxiosResponse } from 'axios'
import applyCaseMiddleware from 'axios-case-converter';
// export const baseURL = "import.meta.env.VITE_GLOB_API_URL"; 
export const baseURL = "http://localhost/report_php/public/api/"

const service = applyCaseMiddleware(axios.create({
  baseURL:baseURL,
}))

service.interceptors.request.use(
  (config) => {
    const token = ""
    if (token)
      config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200 || response.status === 201 || response.status === 204)
      return response


    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
