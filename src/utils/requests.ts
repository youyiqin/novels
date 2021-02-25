import axios from 'axios'

const baseURL = 'https://www.qidian.com/'
const service = axios.create({
  baseURL,
  timeout: 7000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 如果需要token
    const token = window.localStorage.getItem('token')
    if (token) {
      config.headers.common.Authorization = token
    }
    console.log('发起请求,请求头是:', config.headers);
    return config
  },
  error => Promise.reject(error)
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Network Error, Bad Response"))
    }
    return res
  },
  error => Promise.reject(error)
)

export default service