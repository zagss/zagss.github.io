import { GitConfig } from '@/config/env'

const axios = require('axios').create({
  baseURL: GitConfig.BASEURL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  transformResponse: [function (data) {
    let json = {}
    try {
      json = JSON.parse(data)
    } catch (e) {
      json = {}
    }
    if (json.msg === 'session error') {
      console.log('session error')
    }
    return json
  }]
})

axios.interceptors.request.use(config => {
  config.url += `${config.url.includes('?') ? '&' : '?'}access_token=${GitConfig.ACCESS_TOKEN}`
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default (req) => {
  if (req.type === 'get') {
    return axios.get(req.url, {params: req.data})
  } else if (req.type === 'put') {
    return axios({ method: 'put', url: `${req.url}`, data: req.data })
  } else if (req.type === 'post') {
    return axios({ method: 'post', url: `${req.url}`, data: req.data })
  } else if (req.type === 'delete') {
    return axios({ method: 'delete', url: `${req.url}`, data: req.data })
  }
}
